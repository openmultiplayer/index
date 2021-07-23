---
title: Weapon States
description: Weapon State Constants
---

| ID  | Definition               | Description                          |
| --- | ------------------------ | ------------------------------------ |
| -1  | WEAPONSTATE_UNKNOWN      | Unknown (Set when in a vehicle)      |
| 0   | WEAPONSTATE_NO_BULLETS   | The weapon has no remaining ammo     |
| 1   | WEAPONSTATE_LAST_BULLET  | The weapon has one remaining bullet  |
| 2   | WEAPONSTATE_MORE_BULLETS | The weapon has multiple bullets      |
| 3   | WEAPONSTATE_RELOADING    | The player is reloading their weapon |

## Related Functions

- [GetPlayerWeaponState](../functions/GetPlayerWeaponState): Check the state of a player's weapon.
