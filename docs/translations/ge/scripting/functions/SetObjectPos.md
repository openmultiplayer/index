---
title: SetObjectPos
description: Change the position of an object.
tags: []
---

## Description

Change the position of an object.

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| objectid | The ID of the object to set the position of. Returned by CreateObject. |
| Float:X  | The X coordinate to position the object at.                            |
| Float:Y  | The Y coordinate to position the object at.                            |
| Float:Z  | The Z coordinate to position the object at.                            |

## Returns

This function always returns 1, even if the object specified does not exist.

## Examples

```c
SetObjectPos(objectid, 2001.195679, 1547.113892, 14.283400);
```

## Related Functions

- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Attach a player object to a player.
