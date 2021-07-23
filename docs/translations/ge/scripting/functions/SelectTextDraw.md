---
title: SelectTextDraw
description: Display the cursor and allow the player to select a textdraw.
tags: ["textdraw"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Display the cursor and allow the player to select a textdraw

| Name       | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| playerid   | The ID of the player that should be able to select a textdraw  |
| hovercolor | The color of the textdraw when hovering over with mouse (RGBA) |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // Highlight green when hovering over
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select a textdraw!");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

It is the TEXT which will be highlighted when hovered over, NOT the box (if one is shown).

:::

## Related Functions

- [CancelSelectTextDraw](CancelSelectTextDraw): Cancel textdraw selection with the mouse
- [TextDrawSetSelectable](TextDrawSetSelectable): Sets whether a textdraw is selectable through SelectTextDraw
- [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable): Sets whether a player-textdraw is selectable through SelectTextDraw
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Called when a player clicks on a player-textdraw.
