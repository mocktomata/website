---
hide_title: true
---

## Plugin

[mocktomata] tries to handle most use cases out of the box.

But there could be cases that the code you use has certain semantics that [mocktomata] could not handle.

In those cases, you can either create an adapter,
or write a plugin to handle those cases.

Inside [mocktomata], all JavaScript syntax are handled by internal plugins.

## Package, Module, and Plugins

The word "plugin" typically refers to a plugin package (e.g. a `eslint-plugin-harmony` is a plugin package),
and the plugin itself.
To make sure we are clear about what are we referring to, consider this:

> A plugin package exports a plugin module which register one or more plugins.

For example,
you need to write a plugin for `node-fetch` (you don't have to, but we use it as an example).

You will create package like `mocktomata-plugin-node-fetch`,
which expose a [`PluginModule`](#pluginmodule),
which register a `node-fetch` plugin:

```ts
// `mocktomata-plugin-node-fetch/ts/index.ts`
import nodeFetchPlugin from './nodeFetchPlugin'

export default {
  activate(context) {
    context.register(nodeFetchPlugin)
  }
}
```

And you use it by adding it to your [configuration](./configuration.md):

```jsonc
// mocktomata.json
{
  "plugins": ["mocktomata-plugin-node-fetch"]
}
```

To make your plugin more discoverable, you can add the keyword `mocktomata-plugin` in your `package.json`:

```jsonc
// package.json
{
  "keywords": [
    "mocktomata-plugin"
  ]
}
```

## `PluginModule`

Your plugin should expose a [`PluginModule`](#pluginmodule) as its default export.

The [`PluginModule`](#pluginmodule) contains a single method: [`activate()`](#activate):

```ts
import type { Mocktomata } from 'mocktomata'

export default {
  activate(context: Mocktomata.ActivationContext): void { }
}
```

## `activate()`

The [`activate()`](#activate) method will be called when the plugin is loaded.

The `Mocktomata.ActivationContext` it receives contain a `register()` function,
which you can use to register one or more [`SpecPlugin`](#specplugin):

```ts
import type { Mocktomata, SpecPlugin } from 'mocktomata'
import { pluginA, pluginB } from './plugins'

export default {
  activate({ register }: Mocktomata.ActivationContext) {
    register(pluginA)
    register(pluginB)
  }
}
```

## `SpecPlugin`

The [`SpecPlugin`](#specplugin) is the type of a plugin:

```ts
export type SpecPlugin<S = any, M = any> = {
  /**
   * Name of the plugin. This is needed only if there are multiple plugins in a package.
   */
  name?: string,
  /**
   * Indicates if the plugin can handle the specified subject.
   */
  support(subject: unknown): boolean,
  /**
   * Creates a spy that captures the interactions with the specified subject.
   * @param context Provides tools needed to record the subject's behavior.
   * @param subject The subject to spy.
   */
  createSpy(context: SpecPlugin.SpyContext<M>, subject: S): S,
  /**
   * Creates a stub in place of the specified subject.
   * @param context Provides tools needed to reproduce the subject's behavior.
   * @param meta Meta data of the subject.
   * This is created in `createSpy() -> record.declare()` and is used to make the stub looks like the subject.
   */
  createStub(context: SpecPlugin.StubContext, subject: S, meta: M): S,
}
```

The `name` property is optional, if your plugin package only has one plugin.
In that case, the package name will be used as the name of the plugin.

If you have more than one plugins in your plugin package,
specify the `name` and each plugin will be named as `packageName/name`.

The `support()` function is where you tell [mocktomata] that your plugin can handle the specific [spec subject](../docs/spec.md#what-can-be-a-spec-subject).

`createSpy()` should return a spy that captures the behavior.

The `SpecPlugin.SpyContext` contains a few functions for you to capture various behaviors.

The `createStub()` should return a stub that simulate the behavior.

Like `SpecPlugin.SpyContext`, `SpecPlugin.StubContext` contains a few functions for you to simulate various behaviors.

## Example: `objectPlugin`

Now, let's take a look at the implementation of `objectPlugin` to understand how it works:

```ts
export const objectPlugin: SpecPlugin<Record<string | number, any>, string> = {
  name: 'object',
  support: subject => subject !== null && typeof subject === 'object',
  createSpy: ({ getProperty, setProperty, setMeta }, subject) => {
    setMeta(metarize(subject))
    return new Proxy(subject, {
      get(_: any, key: string) {
        return hasProperty(subject, key)
          ? getProperty({ key }, () => subject[key])
          : undefined
      },
      set(_, key: string, value: any) {
        return setProperty({ key, value }, value => subject[key] = value)
      }
    })
  },
  createStub: ({ getProperty, setProperty }, _, meta) => {
    return new Proxy(demetarize(meta), {
      get(_: any, key: string) {
        return getProperty({ key })
      },
      set(_, key: string, value: any) {
        return setProperty({ key, value })
      }
    })
  }
}
```

For `objectPlugin`, the `name` is needed because it is an internal plugin.
You can ignore that.

The `support()` shows that it work with `object` type except `null`.

In `createSpy()`, it set the metadata of the `subject` using `setMeta()`.

The `metarize()` and `demetarize()` are just some internal serialization function.
You can set the metadata to whatever you want,
as long as it is JSON compatible.

Then it returns a `Proxy` and handles the `get()` and `set()` requests.
It returns `undefined` if the `subject` does not have that property,
so that it won't record some noise not related to the `subject`.

In `createStub()`, it recreate the base of the `Proxy` by deserializing the metadata,
and replay the `get()` and `set()` calls as they happens.

So you can see that it is not very complicated to write a plugin.

Of course, there are cases it will be more complicated than `objectPlugin`,
say for example you need to deal with some asynchronous calls as in `promisePlugin`.

If you have any questions, feel free to ask in the [discussions]


[discussions]: https://github.com/mocktomata/mocktomata/discussions
[mocktomata]: https://github.com/mocktomata/mocktomata
