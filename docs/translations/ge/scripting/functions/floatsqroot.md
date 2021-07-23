---
title: floatsqroot
description: Calculates the square root of given value.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Calculates the square root of given value.

| Name  | Description                                |
| ----- | ------------------------------------------ |
| value | The value to calculate the square root of. |

## Returns

The square root of the input value, as a float.

## Examples

```c
floatsqroot(25.0); // Returns 5, because 5x5 = 25
```

## Notes

:::tip

This function raises a “domain” error if the input value is negative. You may use floatabs to get the absolute (positive) value.

:::

## Related Functions

- [floatpower](floatpower): Raises given value to a power of exponent.
- [floatlog](floatlog): Get the logarithm of the float value.
