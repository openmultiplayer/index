---
title: GetPlayerCameraUpVector
description: This function returns the vector, that points to the upside of the camera's view, or, in other words, to the middle top of your screen.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

This function returns the vector, that points to the upside of the camera's view, or, in other words, to the middle top of your screen.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player you want to obtain the camera upvector of |
| Float:x  | A float to store the X coordinate, passed by reference.        |
| Float:y  | A float to store the Y coordinate, passed by reference.        |
| Float:z  | A float to store the Z coordinate, passed by reference.        |

## Returns

The position is stored in the specified variables.

## Notes

:::warning

This function was removed in SA-MP version 0.3b

:::

## Related Functions

- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
