---
title: float
description: Converts an integer into a float.
tags: ["floating-point"]
---

<LowercaseNote />

## Description

Converts an integer into a float.

| Name  | Description                         |
| ----- | ----------------------------------- |
| value | Integer value to convert to a float |

## Returns

The given integer as a float

## Examples

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // Converts Value(52) into a float and stores it in 'FloatValue' (52.0)
```

## Related Functions

- [floatround](floatround): Convert a float to an integer (rounding).
- [floatstr](floatstr): Convert an string to a float.
