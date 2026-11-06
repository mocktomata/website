## Install

Most of the time you will use [mocktomata] for testing.

Therefore, you should install it as a dev dependency:

```sh
# npm
npm install -D mocktomata

# yarn
yarn add -D mocktomata

# pnpm
pnpm add -D mocktomata

# rush
rush add -p mocktomata --dev
```

There will be cases that you can use [mocktomata] for more than testing,
but we will save that for later.

## Repository Setup

[mocktomata] will save the `SpecRecord` under the `.mocktomata` folder at the root of the package.

Commit the `.mocktomata` folder to source control.
Do not add it to your `.gitignore` file.
Without the records, tests in CI or on another machine cannot simulate and make real calls instead.

## Configuration

In most cases, [mocktomata] works out of the box without any configuration.
But there are ways you can customize it too.

You can head over to [configuration] to learn more,
but I would suggest to do that later,
and first take a look at what [I][mockto] can do.

[configuration]: ./configuration.md
[mockto]: ./mockto.md
[mocktomata]: https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata
