---
title: PlayerPlaySound
description: Plays the specified sound for a player.
tags: ["player"]
---

## Description

Plays the specified sound for a player.

For a library that lists all sounds, check out [this](https://github.com/WoutProvost/samp-sound-array).

| Name     | Description                                                  |
| -------- | ------------------------------------------------------------ |
| playerid | The ID of the player for whom to play the sound.             |
| soundid  | The [sound](../resources/sound-ids) to play.                 |
| Float:x  | X coordinate for the sound to play at. (0.0 for no position) |
| Float:y  | Y coordinate for the sound to play at. (0.0 for no position) |
| Float:z  | Z coordinate for the sound to play at. (0.0 for no position) |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
// player punching sound (fits for commands such as /slap well). The sound will be quiet, as the source is actually 10 meters above the player.
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```

## Notes

:::tip

Only use the coordinates if you want the sound to be played at a certain position. Set coordinates all to 0.0 to just play the sound.

:::

## Related Functions

- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): Play a crime report for a player.
- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): Plays a audio stream for a player.
- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Stops the current audio stream for a player.
