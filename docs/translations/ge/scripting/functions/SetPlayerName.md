---
title: SetPlayerName
description: Sets the name of a player.
tags: ["player"]
---

## Description

Sets the name of a player.

| Name         | Description                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| playerid     | The ID of the player to set the name of.                                                                                       |
| const name[] | The name to set. Must be 1-24 characters long and only contain valid characters (0-9, a-z, A-Z, [], (), \$ @ . \_ and = only). |

## Returns

1 The name was changed successfully

0 The player already has that name

-1 The name can not be changed (it's already in use, too long or has invalid characters)

## Examples

```c
// Command simply sets the player's name to to "Superman" if possible, with no error checking or messages.
if (strcmp(cmdtext, "/superman", true) == 0)
{
    SetPlayerName(playerid, "Superman");
    return 1;
}

// Command sets the players name to "Superman" if possible, informs the player of
// any errors using a "switch" statement.
if (strcmp(cmdtext, "/superman", true) == 0)
{
    switch (SetPlayerName(playerid, "Superman"))
    {
        case -1:
        {
            SendClientMessage(playerid, 0xFF0000FF, "Unable to change your name, someone else is known as 'Superman' already.");
        }
        case 0:
        {
            SendClientMessage(playerid, 0xFF0000FF, "You are already known as 'Superman'");
        }
        case 1:
        {
            SendClientMessage(playerid, 0x00FF00FF, "You are now known as 'Superman'");
        }
    }
    return 1;
}
```

## Notes

:::warning

Changing the players' name to the same name but with different character cases (e.g. "John" to "JOHN") will not work. If used in OnPlayerConnect, the new name will not be shown for the connecting player. Passing a null string as the new name will crash the server. Player names can be up to 24 characters when using this function, but when joining the server from the SA-MP server browser, players' names must be no more than 20 and less than 3 characters (the server will deny entry). This allows for 4 characters extra when using SetPlayerName.

:::

## Related Functions

- [GetPlayerName](GetPlayerName): Get a player's name.
