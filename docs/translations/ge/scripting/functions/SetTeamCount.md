---
title: SetTeamCount
description: This function is used to change the amount of teams used in the gamemode.
tags: []
---

## Description

This function is used to change the amount of teams used in the gamemode. It has no obvious way of being used, but can help to indicate the number of teams used for better (more effective) internal handling. This function should only be used in the OnGameModeInit callback. Important: You can pass 2 billion here if you like, this function has no effect at all.

| Name  | Description                         |
| ----- | ----------------------------------- |
| teams | Number of teams the gamemode knows. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit( )
{
    // We use 18 teams in this use Team-Deathmatch mode, define it;
    SetTeamCount(18);
    return 1;
}
```

## Related Functions

- [GetPlayerTeam](GetPlayerTeam): Check what team a player is on.
- [SetPlayerTeam](SetPlayerTeam): Set a player's team.
