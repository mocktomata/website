---
hide_title: true
---
## `mockto`

Now it's time to show you everything I can do.

Let me introduce myself one more time.

I am one of the four mocktomata in the [mocktomata] family.

I specialize in writing tests.

In [introduction],
I showed you this example:

```ts
import axios from 'axios'
import { mockto } from 'mocktomata'

mockto('get friends', (specName, spec) => {
  test(specName, async () => {
    const s = await spec(axios)

    const friends = await getFriends(s, 'miku')
    expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])

    await spec.done()
  })
})
```

You call me first and write your test inside the `handler`.
By doing that, you can describe the test only once (`"get friends"` in the example).
That value is passed to the `handler` as `specName`,
so you can use it in your test description (`test(specName, ...)`).

Beside that, I am very similar to [komondor].

In fact, while every mocktomaton do things a bit differently,
and are good at specific use cases,
under the hood we provide almost the same functionality and functions.

So when each mocktomaton introduce ourselves,
we will focus on how we differ and provide the functionality to you.

Here are the things that we share.
We will just describe what they are,
and you can find out more about them following the links:

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

Let's take a look at my main API in detail:

> `mockto(specName, specOptions?, handler: (specName, spec, reporter) => void)`

This is the common way to utilize me.

[`specName`][specname] must be unique within one test file,
and `specOptions` is a [`Spec.options`][spec].

The `handler` is where you use the [`spec()`][spec] to write your test.

The [`spec()`][spec] is a function as well as an object holder other functions and properties:

- [`spec.mode`][specmode]
- [`spec.done()`][done]
- [`spec.maskValue()`][maskvalue]
- [`spec.ignoreMismatch()`][ignoremismatch]

[`reporter`](./spec.md#reporter) is a [`MemoryLogReporter`][memoryLogReporter].

I will run the [Spec] in [auto mode][specmode].

This behavior can be changed through [configuration].

There are 3 variants of this call:

> `mockto.live(...)`
> `mockto.save(...)`
> `mockto.simulate(...)`

They run the [Spec] in those [mode][specmode] respectively.
The [configuration] will not change the behavior if I am called this way.

> `mockto.cleanup()`

This is the [`cleanup()`][cleanup] function.

> alias as `mt`

Besides calling me as `mockto`, you can also call me as `mt`:

```ts
import { mt } from 'mocktomata'

mt(...)
```

[`komondor`][komondor] said that people think his name is too long to type so he wants to be alias as `kd`.
And as he does that, he also give me this `mt` alias.

Oh well.

## Tips and Tricks

Here are some tips and tricks to help you become more productive when using me.

### TDD Workflow

If you are writing code TDD style,
use `mockto.live()` throughout your red-green-refactor process.
After you are done, change it to `mockto()` and run the test again.

### Lazy TDD Workflow

Instead of using `mockto.live()`, you can use `mockto.save()`.
This will save you from running the test again after updating to `mockto()`.

### Streamlined Workflow

Instead of using `mockto.live()` or `mockto.save()`,
you can use `mockto()` directly but do not add the [`done()`][done] call until you are done refactoring.
Your test runner will complain until you call [`done()`][done],
but you can safely ignore that as you know what you are doing.

### Update One Test Record

Change `mockto()` to `mockto.save()`, run the test, and switch it back.

### Preserving Passed Tests

If the external dependency is not stable or no longer available (for the time being or require specific condition or permission),
you can consider changing some tests from `mockto()` to `mockto.simulate()` so that the test behavior is preserved.

When using `mockto.simulate()`, configuration will not change it behavior thus will not accidentally overwrite the record.
However, this should be done with care, because you are essentially changing the test to a simple mocked unit test.

### Use Configuration To Update Record

Refer to [`configuration tips and tricks`](./configuration.md#tips-and-tricks) session for ways to update multiple records.

[cleanup]: ./spec.md#cleanup
[configuration]: ./configuration.md
[done]: ./spec.md#done
[ignoremismatch]: ./spec.md#ignoremismatch
[introduction]: ./introduction.md
[komondor]: ./komondor.md
[maskvalue]: ./spec.md#maskvalue
[memoryLogReporter]: https://github.com/unional/standard-log/blob/main/packages/log/ts/memory.ts#L7
[mocktomata]: https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata
[reporter]: ./spec.md#reporter
[spec-subject]: ./spec.md#what-can-be-a-spec-subject
[spec]: ./spec.md#spec
[Spec]: ./spec.md#what-is-spec
[specmode]: ./spec.md#specmode
[specrecord]: ./spec.md#specrecord
[standard-log]: https://github.com/unional/standard-log
[standard-log]: https://github.com/unional/standard-log
[zucchini]: ./zucchini.md
[specname]: ./spec.md#uniqueness-of-specname
[spec]: ./spec.md#spec
