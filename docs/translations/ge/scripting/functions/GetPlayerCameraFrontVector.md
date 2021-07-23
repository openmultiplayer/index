---
title: GetPlayerCameraFrontVector
description: This function will return the current direction of player's aiming in 3-D space, the coords are relative to the camera position, see GetPlayerCameraPos.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

This function will return the current direction of player's aiming in 3-D space, the coords are relative to the camera position, see GetPlayerCameraPos.

| Name     | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| playerid | The ID of the player you want to obtain the camera front vector of |
| Float:x  | A float to store the X coordinate, passed by reference.            |
| Float:y  | A float to store the Y coordinate, passed by reference.            |
| Float:z  | A float to store the Z coordinate, passed by reference.            |

## Returns

The position is stored in the specified variables.

## Examples

```c
// A simple command to manipulate this vector using the
// positions from GetPlayerCameraPos. This command will create
// a hydra missile in the direction of where the player is looking.
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/test camera vector"))
    {
        new
            Float:fPX, Float:fPY, Float:fPZ,
            Float:fVX, Float:fVY, Float:fVZ,
            Float:object_x, Float:object_y, Float:object_z;

        // Change me to change the scale you want. A larger scale increases the distance from the camera.
        // A negative scale will inverse the vectors and make them face in the opposite direction.
        const
            Float:fScale = 5.0;

        GetPlayerCameraPos(playerid, fPX, fPY, fPZ);
        GetPlayerCameraFrontVector(playerid, fVX, fVY, fVZ);

        object_x = fPX + floatmul(fVX, fScale);
        object_y = fPY + floatmul(fVY, fScale);
        object_z = fPZ + floatmul(fVZ, fScale);

        CreateObject(345, object_x, object_y, object_z, 0.0, 0.0, 0.0);

        return 1;
    }

    return 0;
}
```

## Notes

:::tip

In 0.3a the camera front vector is only obtainable when player is inside a rhino, S.W.A.T tank, fire truck, or on foot. Since 0.3b the camera data can be obtained when the player is in any vehicle or on foot.

:::

## Related Functions

- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
