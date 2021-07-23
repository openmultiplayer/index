---
title: Bullet Hit Types
---

:::info

To be used with [OnPlayerWeaponShot](../callbacks/OnPlayerWeaponShot).

:::

---

| Name                          | Value |
| ----------------------------- | ----- |
| BULLET_HIT_TYPE_NONE          | 0     |
| BULLET_HIT_TYPE_PLAYER        | 1     |
| BULLET_HIT_TYPE_VEHICLE       | 2     |
| BULLET_HIT_TYPE_OBJECT        | 3     |
| BULLET_HIT_TYPE_PLAYER_OBJECT | 4     |

---

:::caution

BULLET_HIT_TYPE_PLAYER is also called for NPCs. Actors are ignored by this callback and detects as BULLET_HIT_TYPE_NONE.

:::
