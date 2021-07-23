---
title: SetPlayerObjectPos
description: Sets the position of a player-object to the specified coordinates.
tags: ["player"]
---

## Description

Sets the position of a player-object to the specified coordinates.

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to set the position of.                    |
| objectid | The ID of the player-object to set the position of. Returned by CreatePlayerObject. |
| Float:X  | The X coordinate to put the object at.                                              |
| Float:Y  | The Y coordinate to put the object at.                                              |
| Float:Z  | The Z coordinate to put the object at.                                              |

## Returns

1: The function executed successfully.

0: The function failed to execute. Player and/or object do not exist.

## Examples

```c
new obj = CreatePlayerObject(...);

// Later on

SetPlayerObjectPos(playerid, obj, 2001.195679, 1547.113892, 14.283400);
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
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
