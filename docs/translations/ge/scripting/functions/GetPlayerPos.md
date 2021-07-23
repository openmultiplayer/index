---
title: GetPlayerPos
description: Get the position of a player, represented by X, Y and Z coordinates.
tags: ["player"]
---

## Description

Get the position of a player, represented by X, Y and Z coordinates.

| Name     | Description                                                                  |
| -------- | ---------------------------------------------------------------------------- |
| playerid | The ID of the player to get the position of.                                 |
| &Float:x | A float variable in which to store the X coordinate in, passed by reference. |
| &Float:y | A float variable in which to store the Y coordinate in, passed by reference. |
| &Float:z | A float variable in which to store the Z coordinate in, passed by reference. |

## Returns

true on success.

false on failure (i.e. player not connected).

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Declare 3 float variables to store the X, Y and Z coordinates in
    new Float:x, Float:y, Float:z;

    // Use GetPlayerPos, passing the 3 float variables we just created
    GetPlayerPos(playerid, x, y, z);

    // Create a cash pickup at the player's position
    CreatePickup(1212, 4, x, y, z, -1);
   return 1;
}
```

## Notes

:::warning

This function is known to return unreliable values when used in OnPlayerDisconnect and OnPlayerRequestClass. This is because the player is not spawned.

:::

## Related Functions

- [SetPlayerPos](SetPlayerPos): Set a player's position.
- [GetVehiclePos](GetVehiclePos): Get the position of a vehicle.
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): Check whether a player is in range of a point.
- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Get the distance between a player and a point.
