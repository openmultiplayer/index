---
title: SetPlayerSkillLevel
description: Set the skill level of a certain weapon type for a player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Set the skill level of a certain weapon type for a player.

| Name     | Description                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player to set the weapon skill of.                                                     |
| skill    | The [weapon](../resources/weaponskills) to set the skill of.                                      |
| level    | The skill level to set for that weapon, ranging from 0 to 999. A level out of range will max it out. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);
    // This will make the player use single-handed sawn-off shotguns.
    return 1;
}
```

## Notes

:::warning

The skill parameter is NOT the weapon ID, it is the skill type. Click here for a list of skill types.

:::

## Related Functions

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Set a player's armed weapon.
- [GivePlayerWeapon](GivePlayerWeapon): Give a player a weapon.

## Related Information

- [Weapon Skills](../resources/weaponskills#skill-levels): List of weapon skills that are used to set player's skill level.
