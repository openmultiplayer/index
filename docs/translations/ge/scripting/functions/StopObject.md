---
title: StopObject
description: Stop a moving object after MoveObject has been used.
tags: []
---

## Description

Stop a moving object after MoveObject has been used.

| Name     | Description                          |
| -------- | ------------------------------------ |
| objectid | The ID of the object to stop moving. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new obj;
    obj = CreateObject(...);
    return 1;
}
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmd, "/stopobject", true) == 0)
    {
        StopObject(obj);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [CreateObject](CreateObject): Create an object.
- [DestroyObject](DestroyObject): Destroy an object.
- [IsValidObject](IsValidObject): Checks if a certain object is vaild.
- [MoveObject](MoveObject): Move an object.
- [SetObjectPos](SetObjectPos): Set the position of an object.
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
- [OnObjectMoved](../callbacks/OnObjectMoved): Called when an object stops moving.
