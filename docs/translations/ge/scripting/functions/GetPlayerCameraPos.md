---
title: GetPlayerCameraPos
description: Get the position of the player's camera.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Get the position of the player's camera.

| Name     | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| playerid | The ID of the player to get the camera position of.                 |
| Float:x  | A float variable to store the X coordinate in, passed by reference. |
| Float:y  | A float variable to store the Y coordinate in, passed by reference. |
| Float:z  | A float variable to store the Z coordinate in, passed by reference. |

## Returns

The player's position is stored in the specified variables.

## Examples

```c
public OnPlayerDisconnect(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerCameraPos(playerid, x, y, z);

    printf("The player left when they had their camera at %f,%f,%f.", x, y, z);
    // You could write this to a userfile.

    return 1;
}
```

## Notes

:::warning

Player's camera positions are only updated once a second, unless aiming.It is recommended to set a 1 second timer if you wish to take action that relies on a player's camera position.

:::

## Related Functions

- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [GetPlayerCameraZoom](GetPlayerCameraZoom): Get the zoom level of a player's camera.
- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): Get the aspect ratio of a player's camera.
- [GetPlayerCameraMode](GetplayerCameraMode): Get a player's camera mode.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
