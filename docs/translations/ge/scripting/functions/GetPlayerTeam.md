---
title: GetPlayerTeam
description: Get the ID of the team the player is on.
tags: ["player"]
---

## Description

Get the ID of the team the player is on.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player to get the team of. |

## Returns

0-254: The player's team. (0 is a valid team)

255: Defined as NO_TEAM. The player is not on any team.

-1: The function failed to execute. Player is not connected.

## Examples

```c
enum
{
    TEAM_ONE = 1,
    TEAM_TWO
};

public OnPlayerSpawn(playerid)
{
    // Players who are in team 1 should spawn at Las Venturas airport.

    if (GetPlayerTeam(playerid) == TEAM_ONE)
    {
        SetPlayerPos(playerid, 1667.8909, 1405.5618, 10.7801);
    }
    return 1;
}
```

## Related Functions

- [SetPlayerTeam](SetPlayerTeam): Set a player's team.
- [SetTeamCount](SetTeamCount): Set the number of teams available.
