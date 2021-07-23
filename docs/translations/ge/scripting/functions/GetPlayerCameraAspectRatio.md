---
title: GetPlayerCameraAspectRatio
description: Retrieves the aspect ratio of a player's camera.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3z' />

## Description

Retrieves the aspect ratio of a player's camera.

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| playerid | The ID of the player to get the camera aspect ratio of. |

## Returns

The aspect ratio of the player's camera, as a float. The aspect ratio can be one of three values: 4:3 (1.3333334, Float:0x3FAAAAAB) when widescreen is turned off, 5:4 (1.2470589, Float:0x3F9F9FA0) when letterbox mode is turned on, and 16:9 (1.7764707, Float:0x3FE36364) when widescreen is turned on regardless of the letterbox mode.

## Examples

```c
new szString[144];
format(szString, sizeof(szString), "Your aspect ratio: %f", GetPlayerCameraAspectRatio(playerid));
SendClientMessage(playerid, -1, szString);
```

## Notes

:::tip

The return value of this function represents the value of the "widescreen" option in the game's display settings, not the actual aspect ratio of the player's display.

:::

## Related Functions

- [GetPlayerCameraZoom](GetPlayerCameraZoom): Get the zoom level of a player's camera.
- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](GetPlayerVameraFrontVector): Get the player's camera front vector
