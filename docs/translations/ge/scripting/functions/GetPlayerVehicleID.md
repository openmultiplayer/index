---
title: GetPlayerVehicleID
description: This function gets the ID of the vehicle the player is currently in.
tags: ["player", "vehicle"]
---

## Description

This function gets the ID of the vehicle the player is currently in. Note: NOT the model id of the vehicle. See GetVehicleModel for that.

| Name     | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| playerid | The ID of the player in the vehicle that you want to get the ID of |

## Returns

ID of the vehicle or 0 if not in a vehicle

## Examples

```c
// Add 10x Nitro if the player is in a car. Might be called on a command.
new vehicleId;
vehicleId = GetPlayerVehicleID(playerid);
if (vehicleId != 0)
{
    AddVehicleComponent(vehicleId, 1010);
}
```

## Related Functions

- [IsPlayerInVehicle](IsPlayerInVehicle): Check if a player is in a certain vehicle.
- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): Check if a player is in any vehicle.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
- [GetVehicleModel](GetVehicleModel): Get the model id of a vehicle.
