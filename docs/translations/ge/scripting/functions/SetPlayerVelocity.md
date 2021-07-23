---
title: SetPlayerVelocity
description: Set a player's velocity on the X, Y and Z axes.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Set a player's velocity on the X, Y and Z axes.

| Name     | Description                         |
| -------- | ----------------------------------- |
| playerid | The player to apply the speed to.   |
| Float:X  | The velocity (speed) on the X axis. |
| Float:Y  | The velocity (speed) on the Y axis. |
| Float:Z  | The velocity (speed) on the Z axis. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
    SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Forces the player to jump (Z velocity + 0.2)
    return 1;
    }
    return 0;
}
```

## Related Functions

- [GetPlayerVelocity](GetPlayerVelocity): Get a player's velocity.
- [SetVehicleVelocity](SetVehicleVelocity): Set a vehicle's velocity.
- [GetVehicleVelocity](GetVehicleVelocity): Get a vehicle's velocity.
