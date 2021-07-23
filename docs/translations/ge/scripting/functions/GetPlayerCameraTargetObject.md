---
title: GetPlayerCameraTargetObject
description: Allows you to retrieve the ID of the object the player is looking at.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Allows you to retrieve the ID of the object the player is looking at.

| Name     | Description                   |
| -------- | ----------------------------- |
| playerid | The ID of the player to check |

## Returns

The ID of the object playerid is looking at. If INVALID_OBJECT_ID (65535) is returned, playerid isn't looking at any object.

## Examples

```c
new globalObjectID;
public OnGameModeInit()
{
    globalObjectID = CreateObject(1337, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetObject(playerid);
        if (objectid == globalObjectID)
        {
             SendClientMessage(playerid, -1, "You're looking at your object.");
        }
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
             SendClientMessage(playerid, -1, "You're not looking at any object.");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.

:::

## Related Functions

- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): Get the ID of the player a player is looking at.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
