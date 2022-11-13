---
hide_title: true
---

## `komondor`

Hi, This is [`komondor`][komondor].

I used to be a guard dog. <img src="/website/img/komondor.jpg" alt="komondor" width="20"/>

But nowadays, I'm one of the four automata in the [mocktomata] family.

If you find my name is too long, you can also call me `kd`.

While [`mockto`][mockto] specialized for testing,
I'm more general purposed and versatile.

Here is how to write the same test from [introduction]:

```ts
import axios from 'axios'
import { komondor } from 'mocktomata'

test('get friends', async () => {
  const spec = komondor('get friends')
  const s = await spec(axios)

  const friends = await getFriends(s, 'miku')
  expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])

  await spec.done()
})

afterAll(komondor.cleanup)
```

You can see [`mockto`][mockto] and me are pretty similar.

The main difference is that you call me within the test,
and you have to repeat the [`specName`][specname] (if it is the same as your test description,
which is the case most of the time).

All mocktomata provides similar functionalities.

Here are the things we share, for reference:

- [Spec][Spec]: specification of behavior we record and replay.
- [spec subject][spec-subject] : the subject to record the behavior from (`axios` in the example).
- [`SpecRecord`][specrecord]: The record we saved for a [Spec][Spec].
- [`spec()`][spec]: the function to create a [spec subject][spec-subject] .
- [`reporter`][reporter]: a [`MemoryLogReporter`][memoryLogReporter] from [standard-log].
- [`mode`][specmode]: the [`SpecMode`][specmode] the code is currently running in.
- [`done()`][done]: the function to indicate the [Spec][Spec] is done.
- [`cleanup()`][cleanup]: a overall clean up function.
- [`maskValue()`][maskvalue]: the function to mask sensitive value from logs and [`SpecRecord`][specrecord].
- [`ignoreMismatch()`][ignoremismatch]: the function to tell us to ignore specific changes.

My API look like this:

> `komondor(specName, specOptions?): spec`

[`specName`][specname] must be unique within one test file,
and `specOptions` is a [`Spec.options`][spec].

I returns a [`spec()`][spec] function,
which is also an object holding the other functions and properties:

- [`spec.reporter`][reporter] (note that this is different than [`mockto`][mockto])
- [`spec.mode`][specmode]
- [`spec.done()`][done]
- [`spec.maskValue()`][maskvalue]
- [`spec.ignoreMismatch()`][ignoremismatch]

I will run the [Spec] in [auto mode][specmode].

This behavior can be changed through [configuration].

There are 3 variants of this call:

> `komondor.live(...)`
> `komondor.save(...)`
> `komondor.simulate(...)`

They run the [Spec] in those [mode][specmode] respectively.
The [configuration] will not change the behavior if I am called this way.

> `mockto.cleanup()`

This is the [`cleanup()`][cleanup] function.

> alias as `kd`

In my past live, people say my name is too long.
So this time, I have an alias `kd`:

```ts
import { kd } from 'mocktomata'

test('...', async () => {
  const spec = kd(...)
})
```

## Tips and Tricks

[`komondor`][komondor] shares the same tips and tricks as [`mockto`](./mockto.md#tips-and-tricks).

But it also has its own when it is used in production.

### Recorded Demo

Using [`komondor`][komondor] can record all interactions to any external system.
That means you can create a record, and replay it in a live demo.

**Note that the browser side support is not yet available in 7.0.**

### Live Debug Recording

If your customer reports a problem,
you can get into a live debug session with your customer and turn on [`komondor`][komondor] recording.
Then you can record the complete behavior and reproduce it later on.

**Note that the browser side support is not yet available in 7.0.**
## Architecture Consideration

To use [`komondor`][komondor] in production code,
there are some architecture best practice you can follow to make it easier.

### Clean Architecture

#### Dependency Injection

Design your application with dependency injection in mind will make it very easy to use [`komondor`][komondor] in production.

All you need to do as passing in the spec'd instance of your dependency, and it will work as is.
When the time is right, call [`spec.done()`][done] to save the record.

[cleanup]: ./spec.md#cleanup
[configuration]: ./configuration.md
[done]: ./spec.md#done
[ignoremismatch]: ./spec.md#ignoremismatch
[introduction]: ./introduction.md
[komondor]: ./komondor.md
[maskvalue]: ./spec.md#maskvalue
[memoryLogReporter]: https://github.com/unional/standard-log/blob/main/packages/log/ts/memory.ts#L7
[mockto]: ./mockto.md
[mocktomata]: https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata
[reporter]: ./spec.md#reporter
[spec-subject]: ./spec.md#what-can-be-a-spec-subject
[spec]: ./spec.md#spec
[Spec]: ./spec.md#what-is-spec
[specmode]: ./spec.md#specmode
[specname]: ./spec.md#uniqueness-of-specname
[specrecord]: ./spec.md#specrecord
[standard-log]: https://github.com/unional/standard-log
[zucchini]: ./zucchini.md
