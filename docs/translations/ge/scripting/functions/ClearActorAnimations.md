---
title: ClearActorAnimations
description: Clear any animations applied to an actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Clear any animations applied to an actor.

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | The ID of the actor (returned by CreateActor) to clear the animations for. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
}

// Somewhere else
ApplyActorAnimation(gMyActor, ...);

// Somewhere else
ClearActorAnimations(gMyActor);
```

## Related Functions

- [ApplyActorAnimation](ApplyActorAnimation): Apply an animation to an actor.
