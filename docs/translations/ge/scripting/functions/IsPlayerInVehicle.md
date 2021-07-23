---
title: IsPlayerInVehicle
description: Checks if a player is in a specific vehicle.
tags: ["player", "vehicle"]
---

## Description

Checks if a player is in a specific vehicle.

| Name      | Description                               |
| --------- | ----------------------------------------- |
| playerid  | ID of the player.                         |
| vehicleid | ID of the vehicle. Note: NOT the modelid! |

## Returns

1 - Player IS in the vehicle.

0 - Player is NOT in the vehicle.

## Examples

```c
new gSpecialCar;

public OnGameModeInit()
{
    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, gSpecialCar))
        {
            SendClientMessage(playerid, -1, "You're in the special car!");
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): Check if a player is in any vehicle.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
