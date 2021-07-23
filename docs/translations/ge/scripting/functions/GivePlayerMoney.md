---
title: GivePlayerMoney
description: Give money to or take money from a player.
tags: ["player"]
---

## Description

Give money to or take money from a player.

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| playerid | The ID of the player to give money to or take money from.                |
| money    | The amount of money to give the player. Use a minus value to take money. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
       // Award $1000 to the killer
       GivePlayerMoney(killerid, 1000);
       SendClientMessage(killerid, -1, "You have been awarded $1000 for the kill.");
    }

    // Take $500 from the player who died.
    GivePlayerMoney(playerid, -500);
}
```

## Related Functions

- [ResetPlayerMoney](ResetPlayerMoney): Set the money of a player to \$0.
- [GetPlayerMoney](GetPlayerMoney): Check how much money a player has.
