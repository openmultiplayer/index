---
title: IsValidActor
description: Checks if an actor ID is valid.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Checks if an actor ID is valid.

| Name    | Description                   |
| ------- | ----------------------------- |
| actorid | The ID of the actor to check. |

## Returns

1 - The actor is valid.

0 - The actor is not valid.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100);
    }
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor.
- [GetActorPoolSize](GetActorPoolSize): Gets the highest actorid created on the server.
- [SetActorHealth](SetActorHealth): Set the health of an actor.
