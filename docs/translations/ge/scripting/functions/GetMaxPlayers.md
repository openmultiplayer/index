---
title: GetMaxPlayers
description: Returns the maximum number of players that can join the server, as set by the server variable 'maxplayers' in server.
tags: ["player"]
---

## Description

Returns the maximum number of players that can join the server, as set by the server variable 'maxplayers' in server.cfg.

## Examples

```c
new str[128];
format(str, sizeof(str), "There are %i slots on this server!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, str);
```

## Notes

:::warning

This function can not be used in place of MAX_PLAYERS. It can not be used at compile time (e.g. for array sizes). MAX_PLAYERS should always be re-defined to what the 'maxplayers' var will be, or higher. See MAX_PLAYERS for more info.

:::

## Related Functions

- [GetPlayerPoolSize](GetPlayerPoolSize): Gets the highest playerid connected to the server.
- [IsPlayerConnected](IsPlayerConnected): Check if a player is connected to the server.
