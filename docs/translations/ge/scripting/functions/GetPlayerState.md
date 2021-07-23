---
title: GetPlayerState
description: Get a player's current state.
tags: ["player"]
---

## Description

Get a player's current state.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player to get the current state of. |

## Returns

The player's current state as an integer (see: [Player States](../resources/playerstates)).

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    new playerState = GetPlayerState(killerid); // Get the killer's state

    if (playerState == PLAYER_STATE_DRIVER) // If the killer was in a vehicle
    {
        //It's a driver drive-by, take some money
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Get a player's current special action.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Set a player's special action.
- [OnPlayerStateChange](../callbacks/OnPlayerStateChange): Called when a player changes state.
