---
title: GetPlayerCameraTargetVehicle
description: Get the ID of the vehicle the player is looking at.
tags: ["player", "vehicle", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the ID of the vehicle the player is looking at.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

The vehicle ID of the vehicle the player is looking at. INVALID_VEHICLE_ID if none.

## Examples

```c
new globalVehicleID;
public OnGameModeInit()
{
    globalVehicleID = CreateVehicle(596, 0, 0, 3, 0, 0, 0, -1, -1, -1);
    return 1;
}

public OnPlayerConnect(playerid)
{
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new vehicleid = GetPlayerCameraTargetVehicle(playerid);
        if (vehicleid == globalVehicleID)
        {
             SendClientMessage(playerid, -1, "You're looking at your vehicle!");
        }
        else
        {
            SendClientMessage(playerid, -1, "You're not looking at your vehicle.");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

This function can (obviously) only return one vehicle ID at a time, while the player may be looking at multiple. It generally seems to detect the closest vehicle first.

:::

:::warning

This function is disabled by default to save bandwidth. Use EnablePlayerCameraTarget to enable it for each player.

:::

## Related Functions

- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Get the ID of the player a player is looking at.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): Get the ID of the object a player is looking at.
- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): Enable player camera targetting functions.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): Get the player's camera fron
