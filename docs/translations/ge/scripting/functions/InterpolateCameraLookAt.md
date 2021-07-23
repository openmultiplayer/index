---
title: InterpolateCameraLookAt
description: Interpolate a player's camera's 'look at' point between two coordinates with a set speed.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Interpolate a player's camera's 'look at' point between two coordinates with a set speed. Can be be used with InterpolateCameraPos.

| Name        | Description                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| playerid    | The ID of the player the camera should be moved for                                                                                |
| Float:FromX | The X position the camera should start to move from                                                                                |
| Float:FromY | The Y position the camera should start to move from                                                                                |
| Float:FromZ | The Z position the camera should start to move from                                                                                |
| Float:ToX   | The X position the camera should move to                                                                                           |
| Float:ToY   | The Y position the camera should move to                                                                                           |
| Float:ToZ   | The Z position the camera should move to                                                                                           |
| time        | Time in milliseconds to complete interpolation                                                                                     |
| cut         | The ['jumpcut'](../resources/cameracutstyles) to use. Defaults to CAMERA_CUT (pointless). Set to CAMERA_MOVE for interpolation. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, 1);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // The camera starts off looking at (x1, y1, z1). It will then rotate and after
        // 10000 milliseconds (10 seconds) it will be looking at (x2, y2, z2).
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Use TogglePlayerSpectating to make objects stream in for the player while the camera is moving. You can reset the camera behind the player with SetCameraBehindPlayer.

:::

## Related Functions

- [InterpolateCameraPos](InterpolateCameraPos): Move a player's camera from one location to another.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
