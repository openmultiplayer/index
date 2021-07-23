---
title: Ban
description: Ban a player who is currently in the server.
tags: ["administration"]
---

## Description

Ban a player who is currently in the server. They will be unable to join the server ever again. The ban will be IP-based, and be saved in the samp.ban file in the server's root directory. BanEx can be used to give a reason for the ban. IP bans can be added/removed using the RCON banip and unbanip commands (SendRconCommand).

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | The ID of the player to ban. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Ban the player that types this command.
        Ban(playerid);
        return 1;
    }
}
// In order to display a message (eg. reason) for the player before the connection is closed
// you have to use a timer to create a delay. This delay needs only to be a few milliseconds long,
// but this example uses a full second just to be on the safe side.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Bans the player who executed this command.

        // First, send them a message.
        SendClientMessage(playerid, 0xFF0000FF, "You have been banned!");

        // Actually ban them a second later on a timer.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

As of SA-MP 0.3x, any action taken directly before Ban() (such as sending a message with SendClientMessage) will not reach the player. A timer must be used to delay the ban.

:::

## Related Functions

- [BanEx](BanEx): Ban a player with a custom reason.
- [Kick](Kick): Kick a player from the server.
