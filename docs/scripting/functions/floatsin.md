---
title: floatsin
description: Get the sine from a given angle.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Get the sine from a given angle. The input angle may be in radians, degrees or grades.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| Float:value | The angle from which to get the sine.                  |
| anglemode   | The [angle mode](../resources/anglemodes) to use, depending on the value entered. |

## Returns

The sine of the value entered.

## Examples

```c
GetPosInFrontOfPlayer(playerid, Float:distance, &Float:x, &Float:y, &Float:z)
{
    if (GetPlayerPos(playerid, x, y, z)) // this functions returns 0 if the player is not connected
    {
        new Float:z_angle;
        GetPlayerFacingAngle(playerid, z_angle);

        x += distance * floatsin(-z_angle, degrees); // angles in GTA go counter-clockwise, so we need to reverse the retrieved angle
        y += distance * floatcos(-z_angle, degrees);

        return 1; // return 1 on success, the actual coordinates are returned by reference
    }
    return 0; // return 0 if the player isn't connected
}
```

## Notes

:::warning

GTA/SA-MP use degrees for angles in most circumstances, for example [GetPlayerFacingAngle](GetPlayerFacingAngle). Therefore, it is most likely you'll want to use the 'degrees' angle mode, not radians. Also note that angles in GTA are counterclockwise; 270° is East and 90° is West. South is still 180° and North still 0°/360°.

:::

## Related Functions

- [floattan](floattan): Get the tangent from a specific angle.
- [floatcos](floatcos): Get the cosine from a specific angle.
