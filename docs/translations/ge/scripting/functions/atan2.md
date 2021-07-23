---
title: atan
description: Get the multi-valued inversed value of a tangent in degrees.
tags: ["math"]
---

<LowercaseNote />

:::warning

Notice that the y-value is the first parameter and the x-value is the second parameter. This is because the mathematical notation is y/x (i.e. y divided by x) and the convention is to write the operands in the order of the operation that is performed on them.

:::

## Description

Get the multi-valued inversed value of a tangent in degrees. In trigonometrics, arc tangent is the inverse operation of tangent. To compute the value, the function takes into account the sign of both arguments in order to determine the quadrant.

| Name    | Description                                            |
| ------- | ------------------------------------------------------ |
| Float:y | value representing the proportion of the y-coordinate. |
| Float:x | value representing the proportion of the x-coordinate. |

## Returns

The angle in degrees, in the interval [-180.0,+180.0].

## Examples

```c
//The arc tangent for (x=-10.000000, y=10.000000) is 135.000000 degrees.

public OnGameModeInit()
{
    new Float:x, Float:y, Float:result;
    x = -10.0;
    y = 10.0;
    result = atan2(y, x);
    printf("The arc tangent for (x=%f, y=%f) is %f degrees.", x, y, result);
    return 1;
}
```

## Related Functions

- [floatsin](floatsin): Get the sine from a specific angle.
- [floatcos](floatcos): Get the cosine from a specific angle.
- [floattan](floattan): Get the tangent from a specific angle.
- [asin](asin): Get the inversed value of a sine in degrees.
- [acos](acos): Get the inversed value of a cosine in degrees.
- [atan](atan): Get the inversed value of a tangent in degrees.
