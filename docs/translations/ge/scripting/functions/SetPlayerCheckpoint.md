---
title: SetPlayerCheckpoint
description: Sets a checkpoint (red cylinder) for a player.
tags: ["player", "checkpoint"]
---

## Description

Sets a checkpoint (red cylinder) for a player. Also shows a red blip on the radar. When players enter a checkpoint, OnPlayerEnterCheckpoint is called and actions can be performed.

| Name       | Description                                        |
| ---------- | -------------------------------------------------- |
| playerid   | The ID of the player for whom to set a checkpoint. |
| Float:x    | The X coordinate to set the checkpoint at.         |
| Float:y    | The Y coordinate to set the checkpoint at.         |
| Float:z    | The Z coordinate to set the checkpoint at.         |
| Float:size | The size of the checkpoint.                        |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## Examples

```c
// In this example the player's checkpoint will be set when they spawn.
// On entering the checkpoint they will receive $1000 and the checkpoint will be disabled.

new bool: gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // if it's true
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## Notes

:::warning

Checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' checkpoints (only show them when players are close enough), use a checkpoint streamer.

:::

## Related Functions

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
