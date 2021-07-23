---
title: PlayerTextDrawSetSelectable
description: Toggles whether a player-textdraw can be selected or not.
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Toggles whether a player-textdraw can be selected or not.

| Name            | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| playerid        | The ID of the player whose player-textdraw to set the selectability of.             |
| PlayerText:text | The ID of the player-textdraw to set the selectability of.                          |
| set             | Set the player-textdraw selectable (1) or non-selectable (0). By default this is 0. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select_ptd", true))
    {
        for(new i = 0; i < MAX_PLAYER_TEXT_DRAWS; i++) PlayerTextDrawSetSelectable(playerid, PlayerText:i, 1);
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: All player-textdraws can be selected now!");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Use PlayerTextDrawTextSize to define the clickable area.

:::

:::warning

PlayerTextDrawSetSelectable MUST be used BEFORE the textdraw is shown to the player.
`SelectTextDraw(playerid, hovercolor);` _must_ be used _before_ the textdraw is shown to the player.
:::

## Related Functions

- [SelectTextDraw](SelectTextDraw): Enables the mouse, so the player can select a textdraw
- [CancelSelectTextDraw](CancelSelectTextDraw): Cancel textdraw selection with the mouse
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
