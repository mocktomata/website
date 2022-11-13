---
hide_title: true
---

## zucchini

Hi there, here is [zucchini](#zucchini).
I'm the mocktomata specializing in [BDD].

I don't know why my name is [zucchini](#zucchini).
I heard that it's because I'm similar to [cucumber].
But I don't really understand what that means.

Anyway, I'm a lot more powerful than [`mockto`](./mockto.md) and [`komondor`][komondor] combined.

I can help you to write hundreds of thousands of tests with ease.

You won't see my name directly, but I'm the one who provide these three functions:

- [zucchini](#zucchini)
- [`scenario()`](#scenario)
- [`defineStep()`](#definestep)
- [`defineParameterType()`](#defineparametertype)

Anyway, here is how I do the same test from [introduction]:

```ts
import axios from 'axios'
import { scenario } from 'mocktomata'

test('get friends', async () => {
  const { spec, done } = scenario('get friends')
  const s = await spec(axios)

  const friends = await getFriends(s, 'miku')
  expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])

  await done()
})

afterAll(scenario.cleanup)
```

While that makes me looks like [`komondor`][komondor],
but people with sharp eye as you probably notice that this example doesn't use the other functions I provide.

And that's a huge miss-out!

Here is a much better version of the same test:

```ts
import axios from 'axios'
import { defineStep, scenario } from 'mocktomata'

defineStep('get friends of {word}', ({ spec }, name) => {
  const s = await spec(axios)
  return await getFriends(s, name)
})

defineStep('clear friends of {word}', ...)
defineStep('add {word} as a friend of {word}', ...)

test('get friends', async () => {
  const { ensure, setup, run, teardown, done } = scenario('get friends')
  await ensure('clear friends of miku')

  await setup('add luka as a friend of miku')
  await setup('add ren as a friend of miku')

  const friends = await run('get friends of miku')
  expect(friends.map(f => f.name)).toEqual(['luka', 'ren'])

  await teardown('clear friends of miku')

  await done()
})

afterAll(scenario.cleanup)
```

If you understand how powerful this is,
I would like to be your friend!

Let me show you the details of [`scenario()`](#scenario) and you will understand what I mean.

## `scenario()`

[`scenario()`](#scenario) is the main function you use to write your test.

Its signature is:

> `scenario(specName, specOptions): { ... }`

[`specName`][specname] must be unique within one test file,
and `specOptions` is a [`Spec.options`][spec], just like in [`mockto`](./mockto.md) and [`komondor`](./komondor.md).

The value it returns is what make it special:

- `ensure()`: this runs a step to ensure the test environment is clean.
- `setup()`: this runs a step to setup the test environment (the `given` step)
- `run()`: this runs a step as the test
- `teardown()`: this runs a step to clean up the test environment.
- [`spec()`][spec]
- [`reporter`][reporter]: a [`MemoryLogReporter`][memoryLogReporter] from [standard-log].
- [`mode`][specmode]: the [`SpecMode`][specmode] the code is currently running in.
- [`done()`][done]: the function to indicate the [Spec][Spec] is done.
- [`maskValue()`][maskvalue]: the function to mask sensitive value from logs and [`SpecRecord`][specrecord].
- [`ignoreMismatch()`][ignoremismatch]: the function to tell us to ignore specific changes.

Some of them like [`spec()`][spec], [`done()`][done] etc are the same as others.

The `ensure()`, `setup()`, `run()`, `teardown()` are the star of the show.

What they do is to run a `Step` defined by [`defineStep()`](#definestep).

They all have the same signature (using `run()` as an example):

> `run(clause: string, ...args): Promise<any>`

You can pass parameters to the step by filling them in the `clause`,
and you can also pass "hidden" parameters using `args`.

The differences between these functions is how they handle errors.

`ensure()` and `teardown()` completely ignores any error,
and `setup()` also ignores any error, but will emit a warning if one occurs.

The reason is that `ensure()` and `teardown()` are used to clean up the test environment.
The test environment may not be in the state that needs clean up to begin with,
and your step executed in them may fail.
But since they are just clean up functions, you don't care about those errors.

As for `setup()`, it is used to prepare the environment for a specific test.
Most of the time they shouldn't fail,
as you should use `ensure()` to make sure the test environment is in a state that your `setup()` step should work correctly.

But sometimes things can still go wrong.
In those cases, they may be false positive and instead of failing the test there,
it emits a warning to let you know about it,
but still let you focus on the actual test case (the `run()` step(s) or the `spec()` call).

With these functions, you can break down your test code into small steps,
and combine them in different test cases to write many test quickly.

## `defineStep()`

`defineStep()` defines reuseable steps that you can use in `scenario()` or in other steps.

Here is the signature of [`defineStep()`](#definestep):

> `defineStep(clause: string | RegExp, handler: (context, ...args) => Promise<any>)`

The `clause` can be a `string` or `RegExp`.
When it is a string, I support most of the [Cucumber Expression][cucumber-expression] parameters.

If you want to add your own parameter, you can use the [`defineParameterType`](#defineparametertype) to do that.

Inside the `handler`, you get the `context` and `args`.

The `context` has 6 properties:

```ts
defineStep('some step', ({ clause, mode, runSubStep, spec, maskValue, ignoreMismatch }) => { ... })
```

`clause` in the input clause in string:

```ts
const { run } = scenario('some scenario')
run('some clause') // <-- this
```

This is used for reference and debugging,
so that you know what is the actual clause this step is being called with.

`mode` is the [`SpecMode`][specmode] the code is currently running in.

`runSubStep()` allows you to run another step just like the `run()` function from [`scenario()`](#scenario).
It will use the same step type as the current step:

```ts
const { ensure, setup } = scenario('...')
await ensure('a step with sub steps') // `runSubStep()` will run as `ensure`
await setup('a step with sub steps') // `runSubStep()` will run as `setup`
```

[`spec()`][spec] is the function to create a [spec subject][spec-subject].

[`maskValue()`][maskvalue] masks sensitive values from logs and [`SpecRecord`][specrecord].

[`ignoreMismatch()`][ignoremismatch] ignores specific changes.

The `args` is also very interesting.
If your `clause` is a `RegExp` and it contains capture group, the value will be in the `args`.
The same if the `clause` is a string and you specify some parameters in it.

Beside that, you can also pass in some "hidden" arguments.
If you run a step with additional arguments, they are passed to `args`:

```ts
const { run } = scenario('some scenario')
run('do something secretive', 1, 2, 3)
```

If you have both expression params (or capture groups) and these additional arguments,
the additional arguments will come after the expression params/capture groups:

```ts
defineStep('set SSN for {word}', (_, name, ssn) => { /* name: miku, ssn: 123-123-1234 */ })
run('set SSN for miku', '123-123-1234')
```

## `defineParameterType()`

[`defineParameterType()`](#defineparametertype) is the way you can define addition parameter type to be used in [`defineStep()`](#definestep).

Its signature is:

> `defineParameterType({ name, regex, transformer })`

For more details, you can take a look at [cucumber parameter type][cucumber-parameter-type]

[cucumber-expression]: https://github.com/cucumber/cucumber-expressions
[spec]: ./spec.md
[cucumber-parameter-type]: https://github.com/cucumber/cucumber-expressions#custom-parameter-types
[BDD]: https://cucumber.io/docs/bdd/
[cucumber]: https://cucumber.io/
[introduction]: ./introduction.md
[komondor]: ./komondor.md
[specmode]: ./spec.md#specmode
[spec-subject]: ./spec.md#what-can-be-a-spec-subject
[specrecord]: ./spec.md#specrecord
[maskvalue]: ./spec.md#maskvalue
[ignoremismatch]: ./spec.md#ignoremismatch
[done]: ./spec.md#done
