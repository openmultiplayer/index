---
title: StopAudioStreamForPlayer
description: Stops the current audio stream for a player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3d' />

## Description

Stops the current audio stream for a player.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The player you want to stop the audio stream for. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    // If the player exits a vehicle
    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)
    {
        StopAudioStreamForPlayer(playerid); // Stop the audio stream
    }
    return 1;
}
```

## Related Functions

- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Plays a audio stream for a player.
- [PlayerPlaySound](PlayerPlaySound): Play a sound for a player.
