---
title: acos
description: Get the inversed value of a cosine in degrees.
tags: ["math"]
---

<LowercaseNote />

## Description

Get the inversed value of a cosine in degrees. In trigonometrics, arc cosine is the inverse operation of cosine.

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Float:value | value whose arc cosine is computed, in the interval [-1,+1]. |

## Returns

The angle in degrees, in the interval [0.0,180.0].

## Examples

```c
//The arc cosine of 0.500000 is 60.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("The arc cosine of %f is %f degrees.", param, result);
    return 1;
}
```

## Related Functions

- [floatsin](floatsin): Get the sine from a specific angle.
- [floatcos](floatcos): Get the cosine from a specific angle.
- [floattan](floattan): Get the tangent from a specific angle.
- [asin](asin): Get the inversed value of a sine in degrees.
- [atan](atan): Get the inversed value of a tangent in degrees.
- [atan2](atan2): Get the multi-valued inversed value of a tangent in degrees.
