---
title: SetPlayerCameraLookAt
description: Set the direction a player's camera looks at.
tags: ["player"]
---

## Description

Set the direction a player's camera looks at. Generally meant to be used in combination with SetPlayerCameraPos.

| Name     | Description                                                                                                                                                                                          |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | The ID of the player whose camera to set.                                                                                                                                                            |
| Float:x  | The X coordinate for the player's camera to look at.                                                                                                                                                 |
| Float:y  | The Y coordinate for the player's camera to look at.                                                                                                                                                 |
| Float:z  | The Z coordinate for the player's camera to look at.                                                                                                                                                 |
| cut      | The [style](../resources/cameracutstyles) of the change. Can be used to interpolate (change slowly) from old pos to new pos using CAMERA_MOVE. NOTE: Added in 0.3e. Leave out for older versions. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The player specified does not exist.

## Examples

```c
SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);
SetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);
```

## Notes

:::warning

Using the camera functions directly after enabling spectator mode doesn't work.

:::

## Related Functions

- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Set a player's camera behind them.
- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
