---
title: AddPlayerClass
description: Adds a class to class selection.
tags: ["player"]
---

## Description

Adds a class to class selection. Classes are used so players may spawn with a skin of their choice.

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| modelid       | The skin which the player will spawn with.                    |
| Float:spawn_x | The X coordinate of the spawnpoint of this class.             |
| Float:spawn_y | The Y coordinate of the spawnpoint of this class.             |
| Float:spawn_z | The Z coordinate of the spawnpoint of this class.             |
| Float:z_angle | The direction in which the player should face after spawning. |
| weapon1       | The first spawn-weapon for the player.                        |
| weapon1_ammo  | The amount of ammunition for the primary spawn weapon.        |
| weapon2       | The second spawn-weapon for the player.                       |
| weapon2_ammo  | The amount of ammunition for the second spawn weapon.         |
| weapon3       | The third spawn-weapon for the player.                        |
| weapon3_ammo  | The amount of ammunition for the third spawn weapon.          |

## Returns

The ID of the class which was just added.

319 if the class limit (320) was reached. The highest possible class ID is 319.

## Examples

```c
public OnGameModeInit()
{
    // Players can spawn with either the CJ skin (0) or The Truth skin (1).
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Notes

:::tip

The maximum class ID is 319 (starting from 0, so a total of 320 classes). When this limit is reached, any more classes that are added will replace ID 319.

:::

## Related Functions

- [AddPlayerClassEx](AddPlayerClassEx): Add a class with a default team.
- [SetSpawnInfo](SetSpawnInfo): Set the spawn setting for a player.
- [SetPlayerSkin](SetPlayerSkin): Set a player's skin.
