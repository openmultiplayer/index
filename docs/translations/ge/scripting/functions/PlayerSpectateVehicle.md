---
title: PlayerSpectateVehicle
description: Sets a player to spectate another vehicle.
tags: ["player", "vehicle"]
---

## Description

Sets a player to spectate another vehicle. Their camera will be attached to the vehicle as if they are driving it.

| Name            | Description                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| playerid        | The ID of the player who should spectate a vehicle.                                                         |
| targetvehicleid | The ID of the vehicle the player should spectate.                                                           |
| mode            | The spectate [mode](../resources/spectatemodes). Can generally be left blank as it defaults to 'normal'. |

## Returns

1: The function was executed successfully. Note that success is reported if the player is not in spectator mode (TogglePlayerSpectating), but nothing will happen. TogglePlayerSpectating MUST be used first.

0: The function failed to execute. The player, vehicle, or both don't exist.

## Examples

```c
TogglePlayerSpectating(playerid, 1);
PlayerSpectateVehicle(playerid, vehicleid);
```

## Notes

:::warning

Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectateVehicle. The playerid and vehicleid have to be in the same interior and virtual world for this function to work properly.

:::

## Related Functions

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Spectate a player.
- [TogglePlayerSpectating](TogglePlayerSpectating): Start or stop spectating.
