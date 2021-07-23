---
title: atan
description: Get the inversed value of a tangent in degrees.
tags: ["math"]
---

<LowercaseNote />

## คำอธิบาย

Get the inversed value of a tangent in degrees. In trigonometrics, arc tangent is the inverse operation of tangent. Notice that because of the sign ambiguity, the function cannot determine with certainty in which quadrant the angle falls only by its tangent value. See [atan2](atan2) for an alternative that takes a fractional argument instead.

| Name        | Description                          |
| ----------- | ------------------------------------ |
| Float:value | value whose arc tangent is computed. |

## ส่งคืน

The angle in degrees, in the interval [-90.0,+90.0].

## ตัวอย่าง

```c
//The arc tangent of 1.000000 is 45.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 1.0;
    result = atan(param);
    printf("The arc tangent of %f is %f degrees.", param, result);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [floatsin](floatsin): Get the sine from a specific angle.
- [floatcos](floatcos): Get the cosine from a specific angle.
- [floattan](floattan): Get the tangent from a specific angle.
- [asin](asin): Get the inversed value of a sine in degrees.
- [acos](acos): Get the inversed value of a cosine in degrees.
- [atan2](atan2): Get the multi-valued inversed value of a tangent in degrees.
