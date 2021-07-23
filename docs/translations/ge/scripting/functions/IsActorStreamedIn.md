---
title: IsActorStreamedIn
description: Checks if an actor is streamed in for a player.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Checks if an actor is streamed in for a player.

| Name        | Description           |
| ----------- | --------------------- |
| actorid     | The ID of the actor.  |
| forplayerid | The ID of the player. |

## Returns

This function returns 1 if the actor is streamed in for the player, or 0 if it is not.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(gMyActor, playerid))
    {
        // Do something
    }
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
- [IsPlayerStreamedIn](IsPlayerStreamedIn): Checks if a player is streamed in for another player.
