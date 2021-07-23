---
title: GetPlayerFightingStyle
description: Get the fighting style the player currently using.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Get the fighting style the player currently using.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the fighting style of. |

## Returns

The ID of the [fighting style](../resources/fightingstyles) of the player.

## Examples

```c
if (GetPlayerFightingStyle(playerid) == FIGHT_STYLE_NORMAL)
{
    SendClientMessage(playerid,0xFFFFFFAA,"You are using normal fighting style!");
}
```

## Related Functions

- [SetPlayerFightingStyle](SetPlayerFightingStyle): Set a player's fighting style.
