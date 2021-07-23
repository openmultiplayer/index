---
title: SetPlayerObjectRot
description: Set the rotation of an object on the X, Y and Z axis.
tags: ["player"]
---

## Description

Set the rotation of an object on the X, Y and Z axis.

| Name       | Description                                         |
| ---------- | --------------------------------------------------- |
| playerid   | The ID of the player whose player-object to rotate. |
| objectid   | The ID of the player-object to rotate.              |
| Float:RotX | The X rotation to set.                              |
| Float:RotY | The Y rotation to set.                              |
| Float:RotZ | The Z rotation to set.                              |

## Returns

1: The function executed successfully.

0: The function failed to execute.

## Examples

```c
SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## Notes

:::tip

To smoothly rotate an object, see [MovePlayerObject](MovePlayerObject).

:::

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
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
