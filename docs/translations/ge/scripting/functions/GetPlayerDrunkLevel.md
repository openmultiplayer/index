---
title: GetPlayerDrunkLevel
description: Checks the player's level of drunkenness.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Checks the player's level of drunkenness. If the level is less than 2000, the player is sober. The player's level of drunkness goes down slowly automatically (26 levels per second) but will always reach 2000 at the end (in 0.3b it will stop at zero). The higher drunkenness levels affect the player's camera, and the car driving handling. The level of drunkenness increases when the player drinks from a bottle (You can use SetPlayerSpecialAction to give them bottles).

| Name     | Description                                            |
| -------- | ------------------------------------------------------ |
| playerid | The player you want to check the drunkenness level of. |

## Returns

An integer with the level of drunkenness of the player.

## Examples

```c
public OnPlayerStateChange(playerid, oldstate, newstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerDrunkLevel(playerid) > 1999)
    {
        SendClientMessage(playerid,0xFFFFFFFF,"Don't drink and drive!");
        RemovePlayerFromVehicle(playerid);
    }
}
```

## Related Functions

- [SetPlayerDrunkLevel](SetPlayerDrunkLevel): Set a player's drunk level.
