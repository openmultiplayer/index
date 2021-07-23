---
title: OnPlayerClickPlayer
description: Called when a player double-clicks on a player on the scoreboard.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Description

Called when a player double-clicks on a player on the scoreboard.

| Name            | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| playerid        | The ID of the player that clicked on a player on the scoreboard. |
| clickedplayerid | The ID of the player that was clicked on.                        |
| source          | The [source](../resources/clicksources) of the player's click.   |

## Returns

1 - Will prevent other filterscripts from receiving this callback.

0 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, source)
{
    new message[32];
    format(message, sizeof(message), "You clicked on player %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Notes

:::tip

There is currently only one 'source' (0 - CLICK_SOURCE_SCOREBOARD). The existence of this argument suggests that more sources may be supported in the future.

:::

## Related Functions

- [OnPlayerClickTextDraw](OnPlayerClickTextDraw): Called when a player clicks on a textdraw.
