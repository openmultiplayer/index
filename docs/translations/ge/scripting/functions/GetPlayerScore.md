---
title: GetPlayerScore
description: This function returns a player's score as it was set using SetPlayerScore.
tags: ["player"]
---

## Description

This function returns a player's score as it was set using SetPlayerScore

| Name     | Description                     |
| -------- | ------------------------------- |
| playerid | The player to get the score of. |

## Returns

The player's score.

## Examples

```c
public OnPlayerCommandText(playerid,text[])
{
    if (!strcmp(cmdtext,"/score",true))
    {
        new string[128];
        format(string, sizeof(string), "Score: %i", GetPlayerScore(playerid));
        SendClientMessage(playerid, COLOR_ORANGE, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SetPlayerScore](SetPlayerScore): Set the score of a player.
- [GetPlayerPing](GetPlayerPing): Get the ping of a player.
