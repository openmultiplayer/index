---
title: GetPlayerObjectPos
description: Get the position of a player object (CreatePlayerObject).
tags: ["player"]
---

## Description

Get the position of a player object (CreatePlayerObject).

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player whose player object to get the position of.          |
| objectid | The object's id of which you want the current location.                   |
| &Float:X | A float variable in which to store the X coordinate, passed by reference. |
| &Float:Y | A float variable in which to store the Y coordinate, passed by reference. |
| &Float:Z | A float variable in which to store the Z coordinate, passed by reference. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The player and/or the object don't exist.

The object's position is stored in the specified variables.

## Examples

```c
new Float:x, Float:y, Float:z;
GetPlayerObjectPos(playerid, objectid, x, y, z);
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
