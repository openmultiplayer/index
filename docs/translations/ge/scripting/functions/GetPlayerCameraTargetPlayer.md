---
title: GetPlayerCameraTargetPlayer
description: Allows you to retrieve the ID of the player the playerid is looking at.
tags: ["player", "camera"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Allows you to retrieve the ID of the player the playerid is looking at.

| Name     | Description                   |
| -------- | ----------------------------- |
| playerid | The ID of the player to check |

## Returns

The ID of the player the playerid is looking at

## Examples

```c
new playerTarget = GetPlayerCameraTargetPlayer(playerid);

if (IsPlayerAdmin(playerTarget))
{
    GameTextForPlayer(playerid, "Looking at an admin", 3000, 3);
}
```

## Notes

:::warning

Do not confuse this function with GetPlayerTargetPlayer. GetPlayerTargetPlayer returns the ID of the player playerid is aming at (with a weapon). GetPlayerCameraTargetPlayer returns the ID of the player playerid is looking at (reference point is the center of the screen).

:::

## Related Functions

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Get the ID of the actor (if any) a player is looking at.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
- [GetPlayerCameraTargetObject](GetplayerCameraTargetObject): Get the ID of the object a player is looking at.
- [GetPlayerCameraFrontVector](GetPlayercameraFrontVector): Get the player's camera front vector
