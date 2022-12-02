---
hide_title: true
---
## Configuration

Hi, it's [`mockto`](./mockto.md) here again.

Remember that in [introduction](./introduction.md), I mentioned that:

> We can isolate your code from the changes and uncertainty of the outside world.
And we can connect your code back by a flip of a switch.

The "flip of a switch" part is where configuration comes in.

Also, you might know from [`incubator`](./incubator.md) that [mocktomata] supports [plugins](./plugin.md).
You can add [plugins](./plugin.md) to help [mocktomata] to handle some specific use cases.

That is also configured in the configuration.

There are 3 ways to configure [mocktomata]:

- [Config file](#configuration-file)
- [Environment variables](#environment-variables)
- [Runtime `config()` call][config]

Each of them can configure different settings.
And when there are conflicts,

> `config()` > Environment variables > Config file

## Configuration File

[mocktomata] will look for configuration in the file `mocktomata.json` at the root of the project,
or a `mocktomata` section inside your `package.json`.

Only one of them can be used at a time.
If more than one configuration are found,
we will throw a `AmbiguousConfig` error.

Using `mocktomata.json` as an example,
here is what can be configured and their default values:

```js
{
  // Overrides the calls with `auto` mode to a specific mode.
  "overrideMode": "<live | save | simulate>",
  // Filter the calls to override using file path.
  "filePathFilter": "<regex>",
  // Filter the calls to override using spec name.
  "specNameFilter": "<regex>",
  // A list of plugins to use.
  "plugins": ["plugin-a"],
  // log level inside `mocktomata`. Default: "info"
  "logLevel": "error" | "warn" | "info" | "debug" | "trace" | "all",
  // should the log emit to console. Default: false
  "emitLog": boolean
}
```

## Environment Variables

Specific configuration can be overridden using environment variables.
This allows different CI jobs to run [mocktomata] with different configuration.

- `MOCKTOMATA_MODE`: `overrideMode`
- `MOCKTOMATA_FILE_PATH_FILTER`: `filePathFilter`
- `MOCKTOMATA_SPEC_NAME_FILTER`: `specNameFilter`
- `MOCKTOMATA_LOG_LEVEL`: `logLevel`

## Using `config()`

Configuration can also be overridden in the runtime using the [`config()`][config] function.

This is useful when the configuration is stored in different means (e.g. database or remote service),
or used during test startup or test runner plugins (e.g. jest watch plugins) so that the test process do not need to be restarted and do not need to manually change the configuration files.

```js
import { config } from 'mocktomata'

config({
  overrideMode: "<live | save | simulate>",
  filePathFilter: "<regex>",
  specNameFilter: "<regex>",
  plugins: ["plugin-a"],
  // currently only debug level is available
  logLevel: 'debug',
  emitLog: true
})
```

Note the [`incubator`](./incubator.md) has its own [`incubator.config()`](./incubator.md#config) to add plugins for testing.

## Tips and Tricks

Each configuration mechanism provided is designed for a specific purpose.
By using these mechanisms with their intended usage,
it would be easier for you to configure `mocktomata` to your specific needs.

### Define plugins in configuration file

This is kind of a no-brainer.
If you need a plugin, add it to `mocktomata.json`.

### Change mode using `config()` function

While you can do the same with environment variable,
calling [`config()`][config] in a test setup file is much easier and faster.

Especially when you try to flip tests quickly.

### Use Environment Variables in CI

Environment variable based configuration is designed for CI usage.

### Acceptance Tests

Turn your tests into acceptance tests by running tests with `overrideMode = 'live'`.

### Refresh Records

You can easily refresh all records by running tests with `overrideMode = 'save'`.

[mocktomata]: https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata
[config]: #using-config
