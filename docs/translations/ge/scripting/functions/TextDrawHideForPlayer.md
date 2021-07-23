---
title: TextDrawHideForPlayer
description: Hides a textdraw for a specific player.
tags: ["player", "textdraw"]
---

## Description

Hides a textdraw for a specific player.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player that the textdraw should be hidden for |
| text     | The ID of the textdraw to hide                              |

## Returns

This function does not return any specific values.

## Examples

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate( ... );
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Related Functions

- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
