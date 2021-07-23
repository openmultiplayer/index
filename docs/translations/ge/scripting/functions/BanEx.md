---
title: BanEx
description: Ban a player with a reason.
tags: ["administration"]
---

## Description

Ban a player with a reason.

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | The ID of the player to ban. |
| reason   | The reason for the ban.      |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Bans the player who executed this command and includes a reason ("Request")
        BanEx(playerid, "Request");
        return 1;
    }
}
/*In order to display a message (eg. reason) for the player before the connection is closed
you have to use a timer to create a delay. This delay needs only to be a few milliseconds long,
but this example uses a full second just to be on the safe side.*/

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    //reason - The ban reason to be used for BanEx.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //Bans the player who executed this command.
        BanExWithMessage(playerid, 0xFF0000FF, "You have been banned!", "Request");
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

As of SA-MP 0.3x, any action taken directly before BanEx() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the ban.

:::

## Related Functions

- [Ban](Ban): Ban a player from playing on the server.
- [Kick](Kick): Kick a player from the server.
