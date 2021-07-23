---
title: CreateExplosion
description: Create an explosion at the specified coordinates.
tags: []
---

## Description

Create an explosion at the specified coordinates.

| Name         | Description                                              |
| ------------ | -------------------------------------------------------- |
| Float:X      | The X coordinate of the explosion.                       |
| Float:Y      | The Y coordinate of the explosion.                       |
| Float:Z      | The Z coordinate of the explosion.                       |
| type         | The [type](../resources/explosionlist) of the explosion. |
| Float:radius | The radius of the explosion.                             |

## Returns

This function always returns 1, even when the explosion type and/or radius values are invalid.

## Examples

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // Get the player's position
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // Create an explosion at the player's position
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## Notes

:::tip

There is a limit as to how many explosions can be seen at once by a player. This is roughly 10.

:::

## Related Functions

- [CreateExplosionForPlayer](CreateExplosionForPlayer): Create an explosion which is visible for only a single player.

## See Also

- [Explosion Types](../resources/explosionlist): A list of all the explosion types.

