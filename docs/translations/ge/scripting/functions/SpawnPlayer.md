---
title: SpawnPlayer
description: (Re)Spawns a player.
tags: ["player"]
---

## Description

(Re)Spawns a player.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to spawn. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
if (strcmp(cmdtext, "/spawn", true) == 0)
{
    SpawnPlayer(playerid);
    return 1;
}
```

## Notes

:::tip

Kills the player if they are in a vehicle and then they spawn with a bottle in their hand.

:::

## Related Functions

- [SetSpawnInfo](SetSpawnInfo): Set the spawn setting for a player.
- [AddPlayerClass](AddPlayerClass): Add a class.
- [OnPlayerSpawn](../callbacks/OnPlayerSpawn): Called when a player spawns.
