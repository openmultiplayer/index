---
title: floatmul
description: Multiplies two floats with each other.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Multiplies two floats with each other.

| Name  | Description                                       |
| ----- | ------------------------------------------------- |
| oper1 | First Float.                                      |
| oper2 | Second Float, the first one gets multiplied with. |

## Returns

The product of the two given floats

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 2.3, Float:Number2 = 3.5; //Declares two floats, Number1 (2.3) and Number2 (3.5)
    new Float:Product;
    Product = floatmul(Number1, Number2);       //Saves the product(=2.3*3.5 = 8.05) of Number1 and Number2 in the float "Product"
    return 1;
}
```

## Notes

:::tip

This function is rather redundant, for it is no different than the conventional multiplication operator (\*).

:::

## Related Functions

- [Floatadd](Floatadd): Adds two floats.
- [Floatsub](Floatsub): Subtracts two floats.
- [Floatdiv](Floatdiv): Divides a float by another.
