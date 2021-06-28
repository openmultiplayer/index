---
title: OnPlayerConnect
description: This callback is called when a player connects to the server.
tags: ["player"]
---

## Description

This callback is called when a player connects to the server.

| Name     | Description                          |
| -------- | ------------------------------------ |
| playerid | The ID of the player that connected. |

## Returns

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s has joined the server. Welcome!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

- [OnPlayerDisconnect](OnPlayerDisconnect): Called when a player leaves the server. 
- [OnIncomingConnection](OnIncomingConnection): Called when a player is attempting to connect to the server. 
- [OnPlayerFinishedDownloading](OnPlayerFinishedDownloading): Called when a player finishes downloading custom models. 
