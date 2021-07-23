---
title: floatcmp
description: floatcmp can be used to compare float values to each other, to validate the comparison.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

floatcmp can be used to compare float values to each other, to validate the comparison.

| Name  | Description                        |
| ----- | ---------------------------------- |
| oper1 | The first float value to compare.  |
| oper2 | The second float value to compare. |

## Returns

0 if value does match, 1 if the first value is bigger and -1 if the 2nd value is bigger.

## Examples

```c
floatcmp(2.0, 2.0); // Returns 0 because they match.
floatcmp(1.0, 2.0) // Returns -1 because the second value is bigger.
floatcmp(2.0, 1.0) // Returns 1 because the first value is bigger.
```

## Related Functions
