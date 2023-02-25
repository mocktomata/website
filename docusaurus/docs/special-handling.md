# Special handling

While we work out-of-the-box most of the time,
there are scenarios that we need your help a little bit.

Here, we detail the specific cases you should be aware of,
and how to handle them.

## `instanceof`

If your code or your test involves `instanceof` check,
you will find that the test will fail during simulation.

This is because during simulation,
the instances and classes are restored from the spec record and we do not have access to the actual class.

This can be fixed by specing the class at the beginning:

```ts
class Class {}
class SubClass extends Class {}

function create() {
  return new SubClass
}

mockto('your test', (specName, spec) => {
  it(specName, async () =>  {
    await spec(SubClass) // <-- add this
    const s = await spec(create)
    const r = s()
    expect(r).toBeInstanceOf(SubClass) // <-- and this will work
    await spec.done()
  })
})
```
