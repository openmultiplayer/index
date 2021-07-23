---
title: EnableStuntBonusForAll
description: Enables or disables stunt bonuses for all players.
tags: []
---

## Description

Enables or disables stunt bonuses for all players. If enabled, players will receive monetary rewards when performing a stunt in a vehicle (e.g. a wheelie).

| Name   | Description                                     |
| ------ | ----------------------------------------------- |
| enable | 1 to enable stunt bonuses or 0 to disable them. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(0);
    return 1;
}
```

## Related Functions

- [EnableStuntBonusForPlayer](EnableStuntBonusForPlayer): Toggle stunt bonuses for a player.
