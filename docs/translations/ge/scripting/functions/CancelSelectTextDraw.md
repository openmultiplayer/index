---
title: CancelSelectTextDraw
description: Cancel textdraw selection with the mouse.
tags: ["textdraw"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Cancel textdraw selection with the mouse

| Name     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| playerid | The ID of the player that should be the textdraw selection disabled |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/cancelselect", true))
    {
        CancelSelectTextDraw(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw selection disabled!");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

\*This function calls OnPlayerClickTextDraw with INVALID_TEXT_DRAW (65535). Using this function inside OnPlayerClickTextDraw without catching this case will cause clients to go into an infinite loop.

:::

## Related Functions

- [SelectTextDraw](SelectTextDraw): Enables the mouse, so the player can select a textdraw
- [TextDrawSetSelectable](TextDrawSetSelectable): Sets whether a textdraw is selectable through SelectTextDraw
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
