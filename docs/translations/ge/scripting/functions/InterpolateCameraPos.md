---
title: InterpolateCameraPos
description: Move a player's camera from one position to another, within the set time.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Move a player's camera from one position to another, within the set time. Useful for scripted cut scenes

| Name        | Description                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| playerid    | The ID of the player the camera should be moved for                                                                     |
| Float:FromX | The X position the camera should start to move from                                                                     |
| Float:FromY | The Y position the camera should start to move from                                                                     |
| Float:FromZ | The Z position the camera should start to move from                                                                     |
| Float:ToX   | The X position the camera should move to                                                                                |
| Float:ToY   | The Y position the camera should move to                                                                                |
| Float:ToZ   | The Z position the camera should move to                                                                                |
| time        | Time in milliseconds                                                                                                    |
| cut         | The [jumpcut](../resources/cameracutstyles) to use. Defaults to CAMERA_CUT. Set to CAMERA_MOVE for a smooth movement |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, 1);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        //Move the player's camera from point A to B in 10000 milliseconds (10 seconds).
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Use TogglePlayerSpectating to make objects stream in for the player while the camera is moving and remove the HUD. The player's camera can be reset to behind the player with SetCameraBehindPlayer.

:::

## Related Functions

- [InterpolateCameraLookAt](InterpolateCameraLookAt): Move a player's camera view from one location to another.
- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
