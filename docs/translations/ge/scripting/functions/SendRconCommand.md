---
title: SendRconCommand
description: Sends an RCON (Remote Console) command.
tags: ["administration"]
---

## Description

Sends an RCON (Remote Console) command.

| Name      | Description                      |
| --------- | -------------------------------- |
| command[] | The RCON command to be executed. |

## Returns

This function always returns 1.

## Notes

:::warning

- Does not support login, due to the lack of a 'playerid' parameter.
- 'password 0' will remove the server's password if one is set.
- This function will result in OnRconCommand being called.

:::

## Examples

```c
SendRconCommand("gmx");
// This is a scripted version of typing "/rcon gmx" in-game.
// GMX restarts the game mode.

// Example using format()
new szMapName[] = "Los Santos";
new szCmd[64];
format(szCmd, sizeof(szCmd), "mapname %s", szMapName);
SendRconCommand(szCmd);
```

## Related Functions

- [IsPlayerAdmin](IsPlayerAdmin): Checks if a player is logged into RCON.

## Related Callbacks

- [OnRconCommand](../callbacks/OnRconCommand): Called when an RCON command is sent.
- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Called when an attempt to login to RCON is made.
