---
title: StartRecordingPlayerData
description: Starts recording a player's movements to a file, which can then be reproduced by an NPC.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Starts recording a player's movements to a file, which can then be reproduced by an NPC.

| Name         | Description                                                                                                                                                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | The ID of the player to record.                                                                                                                                                                                               |
| recordtype   | The [type](../resources/recordtypes) of recording.                                                                                                                                                                         |
| recordname[] | The name of the file which will hold the recorded data. It will be saved in the scriptfiles directory, with an automatically added .rec extension, you will need to move the file to npcmodes/recordings to use for playback. |

## Returns

This function does not return any specific values.

## Examples

```c
if (!strcmp("/recordme", cmdtext))
{
    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");
    }
    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");
    return 1;
}
```

## Related Functions

- [StopRecordingPlayerData](StopRecordingPlayerData): Stops recording player data.
