---
title: GetPlayerWantedLevel
description: Gets the wanted level of a player.
tags: ["player"]
---

## Description

Gets the wanted level of a player.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player that you want to get the wanted level of. |

## Returns

The player's wanted level.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)
     {
          // Gets the current wanted level, saves it in the variable wantedlevel
          //and then tells the player his wanted in a client message.

          new
               wantedLevel = GetPlayerWantedLevel(playerid),
               message[64];

          format(message, sizeof(message), "Your current wanted level is: %i", wantedlevel);
          SendClientMessage(playerid, 0xFF0000FF, message);

          return 1;
     }
    return 0;
}
```

## Related Functions

- [SetPlayerWantedLevel](SetPlayerWantedLevel): Set a player's wanted level.
- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Play a crime report for a player.
