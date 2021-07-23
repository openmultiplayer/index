---
title: SetActorHealth
description: Set the health of an actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Set the health of an actor.

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| actorid      | The ID of the actor to set the health of. |
| Float:health | The value to set the actors's health to.  |

## Returns

1 - success

0 - failure (i.e. actor is not created).

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    SetActorHealth(gMyActor, 100);
    return 1;
}
```

## Related Functions
