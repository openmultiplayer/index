---
title: GetPlayerTargetActor
description: Gets id of an actor which is aimed by certain player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Gets id of an actor which is aimed by certain player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the target of. |

## Returns

The ID of the targeted actor, or INVALID_ACTOR_ID if none.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    new
        targetActorId = GetPlayerTargetActor(playerid),
        string[32];

    format(string, sizeof(string), "You are aiming at actor id %d", targetActorId);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## Notes

:::warning

Does not work for joypads/controllers, and after a certain distance. Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player.

:::

## Related Functions

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Get the ID of the actor (if any) a player is looking at.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): This callback is called when a player gives damage to an actor.
