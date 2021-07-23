---
title: GetPlayerTargetPlayer
description: Check who a player is aiming at.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3d' />

## Description

Check who a player is aiming at.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the target of. |

## Returns

The ID of the target player, or INVALID_PLAYER_ID if none.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    // Store the ID
    new playerTargetId = GetPlayerTargetPlayer(playerid);
    if (playerTargetId != INVALID_PLAYER_ID && GetPlayerTeam(playerTargetId) == GetPlayerTeam(playerid))
    {
        GameTextForPlayer(playerid, "~R~do not shoot at team-mates!", 5000, 3);
    }
}
```

## Notes

:::warning

Does not work for joypads/controllers, and after a certain distance. Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player.

:::

## Related Functions

- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
- [OnPlayerGiveDamage](../callbacks/OnPlayerGiveDamage): This callback is called when a player gives damage.
- [OnPlayerTakeDamage](../callbacks/OnPlayerTakeDamage): This callback is called when a player takes damage.
