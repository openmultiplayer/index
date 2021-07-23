---
title: DestroyPlayerObject
description: Destroy a player-object created using CreatePlayerObject.
tags: ["player"]
---

## Description

Destroy a player-object created using CreatePlayerObject.

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to destroy.                    |
| objectid | The ID of the player-object to destroy. Returned by CreatePlayerObject. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## Related Functions

- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
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
