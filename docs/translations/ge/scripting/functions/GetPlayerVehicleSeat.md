---
title: GetPlayerVehicleSeat
description: Find out which seat a player is in.
tags: ["player", "vehicle"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Find out which seat a player is in.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player you want to get the seat of. |

## Returns

The ID of the seat the player is in. -1 is not in vehicle, 0 is the driver, 1 is the front passenger, and 2 & 3 are the rear passengers.

## Examples

```c
if (strcmp(cmdtext, "/myseat", true) == 0)
{
    new
        playerSeat = GetPlayerVehicleSeat(playerid);

    // How you can discard of your information.
    if (playerSeat == 128)
    {
        return SendClientMessage(playerid, 0xFFFFFFFF, "An error has prevented us from returning the seat ID.");
    }

    new
        message[14];

    format(message, sizeof(message), "Your seat: %i", playerSeat);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Related Functions

- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [PutPlayerInVehicle](PutPlayerInVehicle): Put a player in a vehicle.
