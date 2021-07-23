---
title: IsPlayerAdmin
description: Check if a player is logged in as an RCON admin.
tags: ["administration"]
---

## Description

Check if a player is logged in as an RCON admin.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

1: Player is an RCON admin. 0: Player is NOT an RCON admin.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "An admin spawned.");
    }
    return 1;
}
```

## Related Functions

- [SendRconCommand](SendRconCommand): Sends an RCON command via the script.

## Related Callbacks

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Called when an attempt to login to RCON is made.
