---
title: GetPlayerVelocity
description: Get the velocity (speed) of a player on the X, Y and Z axes.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Get the velocity (speed) of a player on the X, Y and Z axes.

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | The player to get the speed from.                                                   |
| &Float:x | A float variable in which to store the velocity on the X axis, passed by reference. |
| &Float:y | A float variable in which to store the velocity on the Y axis, passed by reference. |
| &Float:z | A float variable in which to store the velocity on the Z axis, passed by reference. |

## Returns

The function itself doesn't return a specific value. The X, Y and Z velocities are stored in the specified variables.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/velocity", cmdtext))
    {
        new
            Float: playerVelocity[3],
            message[80];

        GetPlayerVelocity(playerid, playerVelocity[0], playerVelocity[1], playerVelocity[2]);
        format(message, sizeof(message), "You are going at a velocity of X: %f, Y: %f, Z: %f", playerVelocity[0], playerVelocity[1], playerVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, message);
        return 1;
    }
}
```

## Related Functions

- [SetPlayerVelocity](SetPlayerVelocity): Set a player's velocity.
- [SetVehicleVelocity](SetVehicleVelocity): Set a vehicle's velocity.
- [GetVehicleVelocity](GetVehicleVelocity): Get a vehicle's velocity.
