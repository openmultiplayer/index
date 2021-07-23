---
title: SetPlayerCameraPos
description: Sets the camera to a specific position for a player.
tags: ["player"]
---

## Description

Sets the camera to a specific position for a player.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | ID of the player                         |
| Float:x  | The X coordinate to place the camera at. |
| Float:y  | The Y coordinate to place the camera at. |
| Float:z  | The Z coordinate to place the camera at. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The player specified doesn't exist.

## Examples

```c
SetPlayerCameraPos(playerid, 652.23, 457.21, 10.84);
```

## Notes

:::tip

You may also have to use SetPlayerCameraLookAt with this function in order to work properly. Use SetCameraBehindPlayer to reset the camera to behind the player.

:::

:::warning

Using the camera functions directly after enabling spectator mode doesn't work.

:::

## Related Functions

- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Set a player's camera behind them.
