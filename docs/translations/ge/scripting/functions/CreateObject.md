---
title: CreateObject
description: Creates an object at specified coordinates in the game world.
tags: []
---

## Description

Creates an object at specified coordinates in the game world.

| Name               | Description                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid            | The model to create.                                                                                                                                                       |
| Float:X            | The X coordinate to create the object at.                                                                                                                                  |
| Float:Y            | The Y coordinate to create the object at.                                                                                                                                  |
| Float:Z            | The Z coordinate to create the object at.                                                                                                                                  |
| Float:rX           | The X rotation of the object.                                                                                                                                              |
| Float:rY           | The Y rotation of the object.                                                                                                                                              |
| Float:rZ           | The Z rotation of the object.                                                                                                                                              |
| Float:DrawDistance | (optional) The distance that San Andreas renders objects at. 0.0 will cause objects to render at their default distances. Usable since 0.3b. Limited to 300 prior to 0.3x. |

## Examples

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // Object will render at its default distance.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // Object will render at 300.0 units.
    return 1;
}
```

## Notes

:::tip

There is a limit of 1000 objects (MAX_OBJECTS). To circumvent this limit, you can use a streamer.

:::

## Related Functions

- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [SetObjectPos](SetObjectPos): Set the position of an object.
- [SetObjectRot](SetObjectRot): Set the rotation of an object.
- [GetObjectPos](GetObjectPos): Locate an object.
- [GetObjectRot](GetObjectRot): Check the rotation of an object.
- [AttachObjectToPlayer](AttachObjectToPlayer): Attach an object to a player.
- [SetObjectMaterialText](SetObjectMaterialText): Replace the texture of an object with text.
- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
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
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Replace the texture of a player object with text.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): Replace the texture of a player object with the texture from another model in the game.
