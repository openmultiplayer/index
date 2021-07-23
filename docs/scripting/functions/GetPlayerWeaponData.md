---
title: GetPlayerWeaponData
description: Get the weapon and ammo in a specific player's weapon slot (e.
tags: ["player"]
---

## Description

Get the weapon and ammo in a specific player's weapon slot (e.g. the weapon in the 'SMG' slot).

| Name     | Description                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| playerid | The ID of the player whose weapon data to retrieve.                                        |
| slot     | The weapon slot to get data for (0-12).                                                    |
| &weapons | A variable in which to store the [weapon ID](../resources/weaponids), passed by reference. |
| &ammo    | A variable in which to store the ammo, passed by reference.                                |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The player isn't connected and/or the weapon slot specified is invalid (valid is 0-12).

## Examples

```c
// Common use: get all weapons and store info in an array containing 13 slots
// The first value is the weapon ID, and second is the ammo

new weapons[13][2];

for (new i = 0; i <= 12; i++)
{
    GetPlayerWeaponData(playerid, i, weapons[i][0], weapons[i][1]);
}
```

## Notes

:::tip

Old weapons with no ammo left are still returned.

:::

## Related Functions

- [GetPlayerWeapon](GetPlayerWeapon): Check what weapon a player is currently holding.
- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.
