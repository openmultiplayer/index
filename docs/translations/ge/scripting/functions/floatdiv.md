---
title: floatdiv
description: Divide one float by another one.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Divide one float by another one. Redundant as the division operator (/) does the same thing.

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| Float:dividend | First float.                              |
| Float:divisor  | Second float (dividates the first float.) |

## Returns

The quotient of the two given floats.

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 8.05, Float:Number2 = 3.5; //Declares two floats, Number1 (8.05) and Number2 (3.5)
    new Float:Quotient;
    Quotient = floatdiv(Number1, Number2);       //Saves the quotient(=8.05/3.5 = 2.3) of Number1 and Number2 in the float "Quotient"
    return 1;
}
```

## Related Functions

- [floatadd](floatadd): Adds two floats together.
- [floatsub](floatsub): Subtract a float from another float.
- [floatmul](floatmul): Multiply two floats.
