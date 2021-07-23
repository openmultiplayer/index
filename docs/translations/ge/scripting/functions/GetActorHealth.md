---
title: GetActorHealth
description: Get the health of an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the health of an actor.

| Name          | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| actorid       | The ID of the actor to get the health of.                                       |
| &Float:health | A float variable, passed by reference, in to which to store the actor's health. |

## Returns

1 - success

0 - failure (i.e. actor is not created).

NOTE: The actor's health is stored in the specified variable, not in the return value.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    SetActorHealth(gMyActor, 100);

    new Float:actorHealth;
    GetActorHealth(gMyActor, actorHealth);
    printf("Actor ID %d has %.2f health.", gMyActor, actorHealth);
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
- [SetActorHealth](SetActorHealth): Set the health of an actor.
- [SetActorInvulnerable](SetActorInvulnerable): Set actor invulnerable.
- [IsActorInvulnerable](IsActorInvulnerable): Check if actor is invulnerable.
