---
title: SetPlayerAmmo
description: Set the ammo of a player's weapon.
tags: ["player"]
---

## Description

Set the ammo of a player's weapon.

| Name     | Description                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| playerid | The ID of the player to set the weapon ammo of.                                  |
| weaponid | The ID of the weapon to set the ammo of. (not the weaponslot as in samp include) |
| ammo     | The amount of ammo to set.                                                       |

## Returns

1: The function was executed successfully. Success is also returned when the weapon slot specified is invalid (not 0-12).

0: The function failed to execute. The player isn't connected.

## Examples

```c
SetPlayerAmmo(playerid, WEAPON_SHOTGUN, 100); // Set ammo of Shotgun to 100 bullets
```

## Notes

:::tip

The param 'weaponslot' is a typo in the sa-mp include. You must use the weapon ID and not the weapon slot of the weapon you would like to set the ammo of.

:::

:::tip

Set the ammo to 0 to remove a weapon from a player's inventory. Note that the weapon will still show up in GetPlayerWeaponData, albeit with 0 ammo.

:::

## Related Functions

- [GetPlayerAmmo](GetPlayerAmmo): Check how much ammo a player has in the specified slot.
- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Set a player's armed weapon.
