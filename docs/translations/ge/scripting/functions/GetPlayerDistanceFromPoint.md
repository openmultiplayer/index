---
title: GetPlayerDistanceFromPoint
description: Calculate the distance between a player and a map coordinate.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3c R3' />

## Description

Calculate the distance between a player and a map coordinate.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | The ID of the player to calculate the distance from. |
| Float:X  | The X map coordinate.                                |
| Float:Y  | The Y map coordinate.                                |
| Float:Z  | The Z map coordinate.                                |

## Returns

The distance between the player and the point as a float.

## Examples

```c
/* when the player types '/vend' into the chat box, they'll see this.*/
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/vend", true) == 0)
    {
        new
            Float: fDistance = GetPlayerDistanceFromPoint(playerid, 237.9, 115.6, 1010.2),
            szMessage[44];

        format(szMessage, sizeof(szMessage), "You're %0.2f meters away from the vending machine.", fDistance);
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);

        return 1;
    }

    return 0;
}
```

## Related Functions

- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): Check whether a player is in range of a point.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Get the distance between a vehicle and a point.
- [GetPlayerPos](GetPlayerPos): Get a player's position.
