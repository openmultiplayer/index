---
title: SetPlayerTeam
description: Set the team of a player.
tags: ["player"]
---

## Description

Set the team of a player.

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| playerid | The ID of the player you want to set the team of.                              |
| teamid   | The team to put the player in. Use NO_TEAM to remove the player from any team. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Set a player's team to 4 when they spawn
    SetPlayerTeam(playerid, 4);
    return 1;
}
```

## Notes

:::tip

Players can not damage/kill players on the same team unless they use a knife to slit their throat. As of SA-MP 0.3x, players are also unable to damage vehicles driven by a player from the same team. This can be enabled with EnableVehicleFriendlyFire. 255 (or NO_TEAM) is the default team to be able to shoot other players, not 0.

:::

## Related Functions

- [GetPlayerTeam](GetPlayerTeam): Check what team a player is on.
- [SetTeamCount](SetTeamCount): Set the number of teams available.
- [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire): Enable friendly fire for team vehicles.
