---
title: PlayAudioStreamForPlayer
description: Play an 'audio stream' for a player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3d' />

## Description

Play an 'audio stream' for a player. Normal audio files also work (e.g. MP3).

| Name           | Description                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------- |
| playerid       | The ID of the player to play the audio for.                                                                      |
| url[]          | The url to play. Valid formats are mp3 and ogg/vorbis. A link to a .pls (playlist) file will play that playlist. |
| Float:PosX     | The X position at which to play the audio. Default 0.0. Has no effect unless usepos is set to 1.                 |
| Float:PosY     | The Y position at which to play the audio. Default 0.0. Has no effect unless usepos is set to 1.                 |
| Float:PosZ     | The Z position at which to play the audio. Default 0.0. Has no effect unless usepos is set to 1.                 |
| Float:distance | The distance over which the audio will be heard. Has no effect unless usepos is set to 1.                        |
| usepos         | Use the positions and distance specified. Default disabled (0).                                                  |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/radio", cmdtext, true) == 0)
    {
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls");
        return 1;
    }
    if (strcmp("/radiopos", cmdtext, true) == 0)
    {
        new Float:X, Float:Y, Float:Z, Float:Distance = 5.0;
        GetPlayerPos(playerid, X, Y, Z);
        PlayAudioStreamForPlayer(playerid, "http://somafm.com/tags.pls", X, Y, Z, Distance, 1);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): Stops the current audio stream for a player.
- [PlayerPlaySound](PlayerPlaySound): Play a sound for a player.
