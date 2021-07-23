---
title: GetPlayerCameraZoom
description: Retrieves the game camera zoom level for a given player.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3z' />

## Description

Retrieves the game camera zoom level for a given player.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player to get the camera zoom level of. |

## Returns

The player's camera zoom level (camera, sniper etc.), a float.

## Examples

```c
new szString[144];
format(szString, sizeof(szString), "Your camera zoom level: %f", GetPlayerCameraZoom(playerid));
SendClientMessage(playerid, -1, szString);
```

## Notes

:::tip

This retrieves the zoom level of the GAME Camera (including Sniper scope), not the camera WEAPON.

:::

## Related Functions

- [GetPlayerCameraAspectRatio](GetPlayerCameraAspectRation): Get the aspect ratio of a player's camera.
- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
