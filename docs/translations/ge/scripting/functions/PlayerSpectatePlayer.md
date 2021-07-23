---
title: PlayerSpectatePlayer
description: Makes a player spectate (watch) another player.
tags: ["player"]
---

## Description

Makes a player spectate (watch) another player.

| Name           | Description                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
| playerid       | The ID of the player that will spectate.                                                     |
| targetplayerid | The ID of the player that should be spectated.                                               |
| mode           | The [mode](../resources/spectatemodes) to spectate with (optional; defaults to 'normal'). |

## Returns

1: The function was executed successfully.

0: The function failed to execute. One of the players specified does not exist.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## Notes

:::warning

Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectatePlayer. playerid and targetplayerid's virtual world and interior must be the same for this function to work properly.

:::

## Related Functions

- [PlayerSpectateVehicle](PlayerSpectateVehicle): Spectate a vehicle.
- [TogglePlayerSpectating](TogglePlayerSpectating): Start or stop spectating.
