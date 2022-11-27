---
title: Introduction
slug: /
---

<img src="/website/img/mocktomata.png" height="200px" align="right"/>

Welcome to [mocktomata], a behavior simulation system.

My name is [mockto].

I will be your guide around here.

In a nutshell, [mocktomata] saves the behavior of your code,
and simulate it at a later time.

We can isolate your code from the changes and uncertainty of the outside world.
And we can connect your code back by a flip of a switch.

That means, instead of manually writing mocks, you can write end-to-end (e2e) tests,
and run them as e2e or unit tests.

Let's get started with an example.

Let's say you have a function `getFriends()`:

```ts
export function getFriends(axios, name) { ... }
```

It calls a remote service to get a list of friends based on the input.

The `axios` instance is passed in for easy mocking,
a common practice for functional styled programming.

When you are not using [mocktomata], typically you will mock `axiso` in your test.
Here is an example using `jest.fn()`:

```ts
import axios from 'axios'

test('get friends', async () => {
  const axios = jest.fn(() => ...)

  const friends = await getFriends(axios, 'miku')
  expect(friends.map(f => f.name)).toEqual(['luka', 'rumi', 'len', 'ren'])
})

```

In [mocktomata], there are 4 mocktomaton you can use:

- [mockto]: myself, good at simple testing
- [komondor]: a general, more versatile mocktomaton that can do more than testing
- [zucchini]: specialize in BDD, great for writing thousands and thousands of tests
- [incubator]: specialize in plugin development

Here, I'll use myself as an example:

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

afterall(mockto.cleanup)
```

When you run this test for the first time,
I will make the actual call to the remote service to validate the behavior.
When the test is completed,
I will save the behavior into a `SpecRecord`.

The next time you run the test again,
I will use the saved `SpecRecord` to replay the behavior.
So the test is running just like a unit test.

These are all done automatically.
So you can write a test, make it pass, and continue on the next one.

Of course, there are many other things we can do.
But before get into them, let me first show you how to setup [mocktomata].

[incubator]: ./incubator.md
[komondor]: ./komondor.md
[mockto]: ./mockto.md
[mocktomata]: https://github.com/mocktomata/mocktomata/blob/master/packages/mocktomata
[zucchini]: ./zucchini.md
