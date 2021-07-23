---
title: OnPlayerDeath
description: This callback is called when a player dies, either by suicide or by being killed by another player.
tags: ["player"]
---

## Description

This callback is called when a player dies, either by suicide or by being killed by another player.

| Name     | Description                                                                                   |
| -------- | --------------------------------------------------------------------------------------------- |
| playerid | The ID of the player that died.                                                               |
| killerid | The ID of the player that killed the player who died, or INVALID_PLAYER_ID if there was none. |
| reason   | The ID of the reason ([weapon id](../resources/weaponids)) for the player's death.            |

## Returns

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, reason)
{
    SendDeathMessage(killerid, playerid, reason); // Shows the kill in the killfeed

    // Check that the killerid is valid before doing anything with it
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Outside the check, handle stuff for playerid (it's always valid)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Notes

:::tip

The reason will return 37 (flame thrower) from any fire sources (e.g. molotov, 18) The reason will return 51 from any weapon that creates an explosion (e.g. RPG, grenade) You do not need to check whether killerid is valid before using it in [SendDeathMessage](SendDeathMessage). INVALID_PLAYER_ID is a valid killerid ID parameter in that function. playerid is the only one who can call the callback. (good to know for anti fake death)

:::

:::warning

You MUST check whether 'killerid' is valid (not INVALID_PLAYER_ID) before using it in an array (or really anywhere), as it will cause the OnPlayerDeath script to crash (not the entire script). This is because INVALID_PLAYER_ID is defined as 65535, and if an array only has 'MAX_PLAYERS' elements, e.g. 500, you're trying to access an index that is above 499, which is out of bounds.

:::

## Related Functions

- [SendDeathMessage](../functions/SendDeathMessage): Add a kill to the death list.
- [SetPlayerHealth](../functions/SetPlayerHealth): Set a player's health.
