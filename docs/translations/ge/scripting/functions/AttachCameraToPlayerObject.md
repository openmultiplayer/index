---
title: AttachCameraToPlayerObject
description: Attaches a player's camera to a player-object.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Attaches a player's camera to a player-object. The player is able to move their camera while it is attached to an object. Can be used with MovePlayerObject and AttachPlayerObjectToVehicle.

| Name           | Description                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| playerid       | The ID of the player which will have their camera attached to a player-object. |
| playerobjectid | The ID of the player-object to which the player's camera will be attached.     |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

The player-object must be created before attempting to attach the player's camera to it.

:::

## Related Functions

- [AttachCameraToObject](AttachCameraToObject): Attachs the player's camera on an global object.
- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
