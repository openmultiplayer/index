---
title: GetPlayerMoney
description: Retrieves the amount of money a player has.
tags: ["player"]
---

## Description

Retrieves the amount of money a player has.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player to get the money of. |

## Returns

The amount of money the player has.

## Examples

```c
public OnPlayerSpawn(playerid)
{
   new string[32];
   format(string, sizeof(string), "Your money: $%i.", GetPlayerMoney(playerid));
   SendClientMessage(playerid, 0xFFFFFFAA, string);
}
```

## Related Functions

- [GivePlayerMoney](GivePlayerMoney): Give a player money.
- [ResetPlayerMoney](ResetPlayerMoney): Set the money of a player to \$0.
