---
title: AttachObjectToObject
description: You can use this function to attach objects to other objects.
tags: []
---

<VersionWarn version='SA-MP 0.3d' />

## Description

You can use this function to attach objects to other objects. The objects will folow the main object.

| Name          | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| objectid      | The object to attach to another object.                                 |
| attachtoid    | The object to attach the object to.                                     |
| Float:OffsetX | The distance between the main object and the object in the X direction. |
| Float:OffsetY | The distance between the main object and the object in the Y direction. |
| Float:OffsetZ | The distance between the main object and the object in the Z direction. |
| Float:RotX    | The X rotation between the object and the main object.                  |
| Float:RotY    | The Y rotation between the object and the main object.                  |
| Float:RotZ    | The Z rotation between the object and the main object.                  |
| SyncRotation  | If set to 0, objectid's rotation will not change with attachtoid's.     |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the first object (objectid) does not exist. There are no internal checks to verify that the second object (attachtoid) exists.

## Examples

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Notes

:::tip

Both objects need to be created before attempting to attach them. There is no player-object version of this function (AttachPlayerObjectToObject), meaning it will not be supported by streamers.

:::

## Related Functions

- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
- [AttachObjectToVehicle](AttachObjectToVehicle): Attach an object to a vehicle.
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
- [CreatePlayerObject](CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Checks if a certain player object is vaild.
- [MovePlayerObject](MovePlayerObject): Move a player object.
- [StopPlayerObject](StopPlayerObject): Stop a player object from moving.
- [SetPlayerObjectPos](SetPlayerObjectPos): Set the position of a player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): Set the rotation of a player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): Locate a player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): Check the rotation of a player object.
