---
sidebar_label: Spec
hide_title: true
---

## What is `Spec`?

[Spec] is a specification of behavior that we record and replay.
It is identified by the [`specName`][specName], which you defined when using the mocktomata:

```ts
mockto('<specName>', ...)

komondor('<specName>')

scenario('<specName>') // zucchini
```

## Uniqueness of `specName`

Because [`specName`][specName] is the identifier of [Spec],
the [`specName`][specName] must be unique for each test in the same file.

For example, if you use `"get friends"` as the [`specName`][specName] in two test of a test file,
one of them will fail.
This holds true even if you use some grouping mechanism such as `describe()` to put tests in different group.

However, it will be fine if the same [`specName`][specName] is used in two different test files.

So what you can do is either making sure you use a different [`specName`][specName] in the same file across `describe()` groups,
or you can separate each group into different files. For example:

```sh
- someCode.group-1.spec.ts
- someCode.group-2.spec.ts
```

This is also the way `tap` family of test runners (e.g. `ava`) organize the tests.

## What can be a `spec subject`?

[spec subject][spec-subject] is the code you want to record the behavior from.
The most common use case is a `gateway` function or library,
such as `axios` or `fetch`.

But it can be any other things, such as `gateway` to your database,
file system, another thread,
or even libraries or code from another team that might not be stable.

In essence, it can be anything that is external, suspect to chanages,
or anything unstable.

## Keeping a dependency live

You do not have to pass every dependency of a test to [`spec()`](#spec).
A test can mix [spec subjects][spec-subject] with plain dependencies.
A dependency that is not passed to [`spec()`](#spec) is not recorded,
so it runs for real in every [SpecMode](#specmode).

This fits a dependency that is local and deterministic,
such as a pure function or an in-memory database,
next to a remote one that you want to record and replay.

```ts
import { mockto } from 'mocktomata'
import { cartTotal } from './cart' // local and deterministic: kept live
import { paymentApi } from './paymentApi' // remote: recorded and replayed

mockto('charge the cart total', (specName, spec) => {
  test(specName, async () => {
    const api = await spec(paymentApi)

    const total = cartTotal([
      { price: 3, quantity: 2 },
      { price: 5, quantity: 1 },
    ])
    const receipt = await api.charge('order-1', total)

    expect(receipt.amount).toBe(11)
    await spec.done()
  })
})
```

`cartTotal()` runs in every mode, and `paymentApi` is recorded once and then simulated.
The result of `cartTotal()` reaches `api.charge()` as an ordinary argument.
During simulation, it is compared with the [SpecRecord] under the usual rules,
the same as any value you pass in yourself.
The [`argumentMatching`](#argumentmatching) option and [`ignoreMismatch()`](#ignoremismatch) apply to it.

So if a change to `cartTotal()` makes it return a different number,
the simulation throws `ActionMismatch`.
Save the [Spec] again when the new value is intended.

Keep these in mind:

- If the live dependency produces a value that changes between runs,
  such as a random number, a timestamp, or a generated id,
  and that value is passed to a spec'd call,
  the simulation can throw `ActionMismatch`.
  Pass the value to [`ignoreMismatch()`](#ignoremismatch),
  or pass that dependency to [`spec()`](#spec) as well.
- If the live dependency needs the network,
  the test needs the network in every mode, including in CI.

## `SpecRecord`

[SpecRecord](#specrecord) is the record of a [Spec] that we saved.
It is saved in the `.mocktomata` folder under the root of your project.
In the future, they can also be saved remotely too.

The [`done()`](#done) method returns the [SpecRecord],
so you can inspect it if you wanted to.

## `spec()`

[`spec()`](#spec) function is the function to specify the [spec subject][spec-subject].

```ts
function spec(subject, options?): Promise<subject>
```

Where the return promise contains the "speced" subject which you can use in place of `subject`.

You can specify a `mock` using the `options`:

```ts
spec(subject, { mock: mockSubject })
```

When running in `mock` mode (e.g. `mockto.mock(...)`),
the `mockSubject` will be used instead of the `subject`.
In other modes, the `mockSubject` will be ignored.

This is useful to write a test with a mock subject,
while the actual subject/remote system is not ready yet.

## `Spec.Options`

`Spec.Options` is used by the `mocktomata` to configure the spec. Its properties include:

- `timeout`: How long will the spec wait before consider the subject failed to return. (default to `3000` ms)
- `logLevel`: Log level for logging the behavior (default to `logLevels.info`)
- `emitLog`: When true, emit logs to console (default `false`)
- `argumentMatching`: Which arguments are compared with the record during simulation (default `'behavior'`). See [`argumentMatching`](#argumentmatching).

Here is how do specify the `options` for other mocktomata:

```ts
mockto(specName, options?, handler)
komondor(specName, options?)
scenario(specName, options?) // zucchini
incubator(specName, options?, handler)
```

## `reporter`

[`reporter`](#reporter) is a [MemoryLogReporter][memoryLogReporter] from [standard-log][standard-log].
It contains the logs generated by [mocktomata] so that you can inspect them.

A common use case is to inspect the logs make sure it does not contain any sensitive information.

## `SpecMode`

Each [Spec] runs in a specific mode depends on the condition.
There are 4 different [`SpecMode`](#specmode):

- `auto`: the default mode which will resolve to either `save` or `simulate` mode.
- `save`: actual calls will be made and the behavior are saved (i.e. recording).
- `simulate`: actual calls are not made and the behavior are simulated (i.e. replay).
- `live`: actual calls are made but the behavior are not saved.

## `done()`

[`done()`](#done) should be called at the end of each [Spec].
It is how the [Spec] knows it should save the [SpecRecord] or make sure the simulation are complete fully.

It is an async function returning the [SpecRecord] (`done(): Promise<SpecRecord>`).

You can inspec the [SpecRecord] if you want to,
but typically you will just `await` or return it:

```ts

it('...', async () => {
  // ...

  await done()

  // or return, if your test-runner support that.
  return done()
}
```

## `cleanup()`

[`cleanup()`](#cleanup) function is used to clean up the test environment.

You should call it at `afterAll()` or similar function:

```ts
afterall(mockto.cleanup)
afterall(komondor.cleanup)
afterall(scenario.cleanup) // zucchini
afterall(incubator.cleanup)
```

What happens is when the [`done()`](#done) is not called,
either you forget to do so or the test fails,
the [Spec] does not know that and keep waiting for the [`done()`](#done) call.

In that case you will see a warning like this (in `jest`):

```sh
A worker process has failed to exit gracefully and has been force exited.
This is likely caused by tests leaking due to improper teardown.
Try running with --detectOpenHandles to find leaks.
Active timers can also cause this, ensure that `.unref()` was called on them.
```

calling [`cleanup()`](#cleanup) tells [mocktomata] that all [Spec] are done so it can clean things up properly.

## `maskValue()`

When interacting with external system,
the calls may contain sensitive information such as username, password, auth token, etc.

Since [mocktomata] will save the [SpecRecord],
it is important to make sure these sensitive information will not be saved in your repository.
The same goes for logs, as you may send the logs else where or save it in some files.

[`maskValue()`](#maskvalue) allows you to indicate what values are considered sensitive,
and mask them in the logs and in [SpecRecord].

It support `string` and `RegExp`, and its signature is:

```ts
function maskValue(value: string | RegExp, replaceWith?: string)
```

The `RegExp` will be `.exec()` against the values,
so if the sensitive information can occurs multiple times in the same string,
use the `/g` global flag to make sure all occurrences are masked:

Note that the value is checked against each log message and each metadata within the record.
So you should avoid using start and end anchor (`^` and `$`) as there will be extra text around subject.

```ts
maskValue(/some-secret/g)
maskValue(/Bearer \.*/g)
```

The `replaceWith` defaults to `"[masked]"`.
You can change that if you want,
and you can change it different values for each [`maskValue()`](#maskvalue) call if you find that beneficial.

You must call [`maskValue()`](#maskvalue) before calling [`spec()`](#spec),
because calling [`spec()`](#spec) will starting emitting/saving logs.

Depends on how the sensitive information is created, who created it,
and what [SpecMode](#specmode) the [Spec] is running in,
the value flow through your code could be the actual sensitive value,
or the masked value.

so in your test, you should avoid checking the value explicitly.
Your code will probably work as-is.
If you absolutely need to,
you can use the `replaceWith` to set the masked value to something your code understand,
and yet the value is safe to be saved in your source control.

## `ignoreMismatch()`

Sometimes the input you provide to the test changes between runs.
For example, a random number, the current time, or a hostname.

[`ignoreMismatch()`](#ignoremismatch) tells the [Spec] to accept such a value:

```ts
function ignoreMismatch(value: unknown): void
```

It accepts numbers, booleans, bigints, and strings.
It does nothing with other values, such as objects, arrays, and `Date`.

Call it before calling [`spec()`](#spec).
When the [Spec] is saved, the value is recorded as inert.
During simulation, the value in its place is not compared,
and the call returns the recorded result.
The value is matched with `===`.

Because the value is marked when the [Spec] is saved,
adding [`ignoreMismatch()`](#ignoremismatch) to an existing test takes effect after you save the [Spec] again.

For example:

```ts
import { mockto } from 'mocktomata'

mockto('get events since now', (specName, spec) => {
  test(specName, async () => {
    const since = Date.now()
    spec.ignoreMismatch(since)

    const s = await spec(getEvents)
    const events = await s(since)

    expect(events.length).toBeGreaterThan(0)
    await spec.done()
  })
})
```

During simulation, `since` has a new value,
but `s(since)` returns the events that were recorded.
Without [`ignoreMismatch()`](#ignoremismatch),
the new number does not match the record and the simulation throws `ActionMismatch`.

Which values need [`ignoreMismatch()`](#ignoremismatch) depends on [`argumentMatching`](#argumentmatching).
By default, string arguments are not compared,
so a string passed to it only matters when `argumentMatching` is `'strings'`,
or when the string is assigned to a property.

## `argumentMatching`

:::note

`argumentMatching` is available from `mocktomata` 10.2.0.

:::

During simulation, [mocktomata] compares each call with the [SpecRecord].
`argumentMatching` sets which arguments of function calls and `new` are compared with the recorded ones.

There are 2 levels:

- `'behavior'` (default): numbers, booleans, and bigints are compared.
  Strings are not compared, so values such as paths, timestamps, and ids can change between runs.
  This is because we track the behavior, not an exact call, whenever possible.
- `'strings'`: string arguments at the top level of function calls and `new` are also compared.
  Strings inside objects and arrays are not compared.

For example, say the [SpecRecord] has the call `axios.get('/users/1')`,
and the test now calls `axios.get('/users/2')`:

- With `'behavior'`, the simulation passes and returns user 1 from the record.
- With `'strings'`, the simulation throws `ActionMismatch`.

With `'strings'`, a call such as `fn({ path: '/users/2' })` or `fn(['/users/2'])` still matches a record of `fn({ path: '/users/1' })` or `fn(['/users/1'])`,
because the strings are inside an object or an array.

`argumentMatching` covers the arguments of function calls and `new`.
A string assigned to a property (e.g. `subject.url = '/users/2'`) is always compared, whatever the level.

### Setting `argumentMatching`

Set it for one [Spec] in its [`Spec.Options`](#specoptions):

```ts
mockto('get user', { argumentMatching: 'strings' }, (specName, spec) => {
  // ...
})
```

Set it for the whole project in `mocktomata.json`:

```json
{
  "argumentMatching": "strings"
}
```

It can also be set in the `mocktomata` section of your `package.json`, or with `config()`.
See [Configuration](./configuration.md).

When both are set, the value in [`Spec.Options`](#specoptions) wins.

### Masked strings

Before comparing, [mocktomata] masks both the new string and the recorded string with the [`maskValue()`](#maskvalue) criteria of the current run.
Masked strings are compared in their masked form.

So a secret that differs between runs, such as a CI token,
still matches when the test calls [`maskValue()`](#maskvalue) with it:

```ts
mockto('get user', { argumentMatching: 'strings' }, (specName, spec) => {
  test(specName, async () => {
    const token = process.env.API_TOKEN as string
    spec.maskValue(token)

    const s = await spec(getUser)
    const user = await s('/users/1', token)

    expect(user.name).toBe('miku')
    await spec.done()
  })
})
```

When the [Spec] is saved, the token is recorded as `[masked]`.
During simulation, the token of that run is also masked to `[masked]`,
so the two match even when the tokens differ.

This also applies to a [`maskValue()`](#maskvalue) added after the [Spec] was saved.

### `ActionMismatch`

When an argument does not match, the simulation throws `ActionMismatch`.
Its message names the `argumentMatching` level and the index of the argument.
For strings, it also shows the expected and received values, in masked form,
so secrets do not leak into logs:

```sh
Argument 0 does not match the record (argumentMatching: 'strings').
  expected: "/users/1"
  received: "/users/2"
To accept a value that changes between runs, pass it to spec.ignoreMismatch() and save the spec again.
A string can also be masked with spec.maskValue().
```

The same details are available in the `argument` property of the error:

```ts
{
  argumentMatching: 'strings',
  index: 0,
  strings: { expected: '/users/1', received: '/users/2' }
}
```

If the string is expected to change between runs,
pass it to [`ignoreMismatch()`](#ignoremismatch),
or mask it with [`maskValue()`](#maskvalue).

[Spec]: #what-is-spec
[specName]: #uniqueness-of-specName
[spec-subject]: #what-can-be-a-spec-subject
[SpecRecord]: #specrecord
[memoryLogReporter]: https://github.com/unional/standard-log/blob/main/packages/log/ts/memory.ts#L7
[standard-log]: https://github.com/unional/standard-log
[mocktomata]: https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata
