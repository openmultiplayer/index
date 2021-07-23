---
title: StopRecordingPlayerData
description: Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | The player you want to stop the recordings of. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/stoprecording", cmdtext))
    {
        StopRecordingPlayerData(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Your recorded file has been saved to the scriptfiles folder!");
        return 1;
    }
}
```

## Related Functions

- [StartRecordingPlayerData](StartRecordingPlayerData): Start recording player data.
