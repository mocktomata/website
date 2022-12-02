---
hide_title: true
---

## `incubator`

Greetings, this is `incubator`.

In normal cases, you won't be utilizing myself.

You will be using either [`mockto`](./mockto.md), [`komondor`](./komondor.md), or [zucchini](./zucchini.md).

However, you may need me if you encounter a situation where [mocktomata] is unable to work with your code.

Because, I am specialized in developing [plugins](./plugin.md).

[mocktomata] supports plugins to extends its capability.
In fact, its ability to handle JavaScript types such as `string`, `array`, `function`, `object`, `promise` etc.,
are all implemented by plugins.

While [mocktomata] tries to handle most of the cases out of the box,
there are limits to that because what it tries to solve is really a NP problem.

So when you encounter a case that [mocktomata] doesn't work,
you will need to find a plugin, or create one.

To understand how to create a plugin, you can refer to the [plugin documentation](./plugin.md).
Here, I'm going to show you how to utilize me to implement and test your plugin.

## `config()`

The first thing you need to do is to ask me to load your plugin by calling `config()`:

```ts
import { incubator } from 'mocktomata'
import { activate } from '.'

incubator.config({
  plugins: [
    ['your-plugin', activate], // or 'your-plugin'
    'other-plugin'
  ]
})
```

The signature of `config()` is:

> `config({ plugins: Array<name: string | [name: string, activate: (context) => void]> })`

The `plugins` property is an array accepting either `name` or `[name, activate]`.
Which one to use depends on where are you writing your tests.

If you pass in just `name`, it will try to load the plugin package.

Given that you are likely writing your plugin and writing your tests together,
most likely you will use the second one and pass in your plugin's [`activate()`](./plugin.md#activate) function directly.

As shown in the example above, you can load other plugins to create a specific test environment.

Note that the general configuration mechanism does not affect me.

Once you have your plugin loaded, you can start writing tests.

## `incubator()`

The primary way I work is quite similar to [`mockto`](./mockto.md):

```ts
import { incubator } from 'mocktomata'

incubator('...', (specName, spec, reporter) => {
  test(specName, async () => {
    const s = await spec({ a: 1 })
    // ...
    await spec.done()
  })
})
```

The difference is, instead of running the test in [`auto`][specmode] mode and save the [`SpecRecord`][specrecord] as needed,
I run the test twice: once in [`save`][specmode] mode, and once in [`simulate`][specmode] mode.

The [`SpecRecord`][specrecord] is also not saved to a file, but is kept in memory.

The signature is:

> `incubator(specName, specOptions?, handler: (specName, spec, reporter) => void)`

Where [`specName`][specname] must be unique within one test file,
and `specOptions` is a [`Spec.options`][spec].

The [`spec()`][spec] is a function as well as an object holder other functions and properties:

- [`spec.mode`][specmode]
- [`spec.done()`][done]
- [`spec.maskValue()`][maskvalue]
- [`spec.ignoreMismatch()`][ignoremismatch]

[`reporter`](./spec.md#reporter) is a [`MemoryLogReporter`][memoryLogReporter].

So what I do is running the test twice so that it goes through the whole life cycle of your plugin,
to make sure it is working as expected.

I also support `incubator.save()` and `incubator.simulate()` to run the test only in [`save`][specmode] or in [`simulate`][specmode] mode.

They are useful when you want to focus on one part of the lifecycle.

(You use `incubator.simulate()` for testing error cases, as there won't be any [`SpecRecord`][specrecord] to simulate against).

## `incubator.sequence()`

Beside [`incubator()`](#incubator),
I support this [`incubator.sequence()`](#incubatorsequence) call which allows you to run the [Spec] in [`save`][specmode] and in [`simulate`][specmode] mode,
in the way you want it to:

```ts
import { incubator } from 'mocktomata'

incubator.sequence('...', (specName, { save, simulate }, reporter) => {
  test(specName, async () => {
    {
      const s = await save(subject)
      // ...
      await save.done()
    }
    {
      const s = await simulate(subject)
      // ...
      await simulate.done()
    }
  })
})
```

You can use this to test some corner cases, such as error cases, or [masking][maskvalue].

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
[specname]: ./spec.md#uniqueness-of-specname
[specrecord]: ./spec.md#specrecord
[standard-log]: https://github.com/unional/standard-log
[zucchini]: ./zucchini.md
