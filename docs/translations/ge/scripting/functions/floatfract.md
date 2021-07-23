---
title: floatfract
description: Get the fractional part of a float.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Get the fractional part of a float. This means the value of the numbers after the decimal point.

| Name  | Description                              |
| ----- | ---------------------------------------- |
| value | The float to get the fractional part of. |

## Returns

The fractional part of the float, as a float value.

## Examples

```c
new Float:fFract = floatfract(3.14159); // returns 0.14159
```

## Related Functions

- [floatround](floatround): Convert a float to an integer (rounding).
