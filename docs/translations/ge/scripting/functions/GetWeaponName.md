---
title: GetWeaponName
description: Get the name of a weapon.
tags: []
---

## Description

Get the name of a weapon.

| Name           | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| weaponid       | The ID of the weapon to get the name of.                                |
| const weapon[] | An array to store the weapon's name in, passed by reference.            |
| len            | The maximum length of the weapon name to store. Should be sizeof(name). |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The weapon specified does not exist.

The weapon's name is stored in the specified array.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Variable declarations, with killerName having the default value of "World".
    new
        weaponName[32],
        string[64],
        playerName[MAX_PLAYER_NAME + 1],
        killerName[MAX_PLAYER_NAME + 1] = "World";

    // Get the weapon/ reason and player name
    GetWeaponName(reason, weaponName, sizeof(weaponName));
    GetPlayerName(playerid, playerName, sizeof(playerName));

    // Check if the player was killed by another player or was it because of environment
    if (killerid != INVALID_PLAYER_ID)
    {
        // We empty the killerName string by setting the first index to EOS (End of String)
        killerName[0] = EOS;
        // Get the killer's name
        GetPlayerName(killerid, killerName, sizeof(killerName));
    }

    // Send a message to the public chat that the X has caused death of Y with Z as the reason
    format(string, sizeof(string), "%s (%i) has wasted %s (%i) using a %s.", killerName, killerid, playerName, playerid, weaponName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Related Functions

- [GetPlayerWeapon](GetPlayerWeapon): Check what weapon a player is currently holding.
- [AllowInteriorWeapons](AllowInteriorWeapons): Determine if weapons can be used in interiors.
- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.
