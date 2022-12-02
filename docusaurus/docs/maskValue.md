When using `mocktomata`, it produces two kinds of artifacts: logs and `SpecRecord`.

If your code contain values that are sensitive in nature,
e.g. authentication token, customer ID, etc.
It's not a good idea to keep them in the those artifacts.

That's when the `markValue()` function can help.
