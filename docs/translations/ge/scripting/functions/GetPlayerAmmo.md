---
title: GetPlayerAmmo
description: Gets the amount of ammo in a player's current weapon.
tags: ["player"]
---

## Description

Gets the amount of ammo in a player's current weapon.

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player whose ammo to get. |

## Returns

The amount of ammo in the player's current weapon.

## Examples

```c
ShowPlayerAmmo(playerid)
{
    new
        plyAmmo = GetPlayerAmmo(playerid),
        infoString[16];

    format(infoString, sizeof(infoString), "Ammo: %i", plyAmmo);
    SendClientMessage(playerid, -1, infoString);
}
```

## Notes

:::warning

The ammo can hold 16-bit values, therefore values over 32767 will return erroneous values.

:::

## Related Functions

- [SetPlayerAmmo](SetPlayerAmmo): Set the ammo of a specific player's weapon.
- [GetPlayerWeaponData](GetPlayerWeaponData): Find out information about weapons a player has.
