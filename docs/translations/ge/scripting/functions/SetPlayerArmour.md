---
title: SetPlayerArmour
description: Set a player's armor level.
tags: ["player"]
---

## Description

Set a player's armor level.

| Name         | Description                                                                                                                             |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | The ID of the player to set the armour of.                                                                                              |
| Float:armour | The amount of armour to set, as a percentage (float). Values larger than 100 are valid, but won't be displayed in the HUD's armour bar. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    // Give players full armour (100%) when they spawn.
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```

## Notes

:::tip

The function's name is armour, not armor (Americanized). This is inconsistent with the rest of SA-MP, so remember that.

:::

:::warning

Armour is obtained rounded to integers: set 50.15, but get 50.0

:::

## Related Functions

- [GetPlayerArmour](GetPlayerArmour): Find out how much armour a player has.
- [SetPlayerHealth](SetPlayerHealth): Set a player's health.
- [GetPlayerHealth](GetPlayerHealth): Find out how much health a player has.
