---
title: TextDrawShowForPlayer
description: Shows a textdraw for a specific player.
tags: ["player", "textdraw"]
---

## Description

Shows a textdraw for a specific player.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player to show the textdraw for.              |
| text     | The ID of the textdraw to show. Returned by TextDrawCreate. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means either the player and/or textdraw specified does not exist.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new Text: textId = TextDrawCreate(100.0, 100.0, "Welcome!");
    TextDrawShowForPlayer(playerid, textId);
}
```

## Notes

:::tip

If only a single player will see a textdraw, it might be wise to use player-textdraws instead. This is also useful for textdraws that need to show information specific for an individual player.

:::

## Related Functions

- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
