---
title: SetCameraBehindPlayer
description: Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos.
tags: ["player", "camera"]
---

## Description

Restore the camera to a place behind the player, after using a function like SetPlayerCameraPos.

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| playerid | The player you want to restore the camera for. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## Examples

```c
SetCameraBehindPlayer(playerid);
```

## Related Functions

- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
