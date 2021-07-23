---
title: GetPlayerFacingAngle
description: Gets the angle a player is facing.
tags: ["player"]
---

## Description

Gets the angle a player is facing.

| Name       | Description                                           |
| ---------- | ----------------------------------------------------- |
| playerid   | The player you want to get the angle of.              |
| &Float:ang | The Float to store the angle in, passed by reference. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player does not exist.

The player's angle is stored in the specified variable.

## Examples

```c
new Float:Angle, string[26];
GetPlayerFacingAngle(playerid, Angle);
format(string, sizeof(string), "Your facing angle: %0.2f", Angle);
SendClientMessage(playerid, 0xFFFFFFFF, string);
```

## Notes

:::tip

Angles returned when inside a vehicle is rarely correct. To get the correct facing angle while inside a vehicle, use GetVehicleZAngle.

:::

:::warning

Angles are reversed in GTA:SA; 90 degrees would be East in the real world, but in GTA:SA 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle.

:::

## Related Functions

- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [SetPlayerFacingAngle](SetPlayerFacingAngle): Set a player's facing angle.
