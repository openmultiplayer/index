---
title: GetActorVirtualWorld
description: Get the virtual world of an actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the virtual world of an actor.

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| actorid | The ID of the actor to get the virtual world of. |

## Returns

The virtual world of the actor. By default this is 0. Also returns 0 if actor specified does not exist.

## Examples

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    SetActorVirtualWorld(MyActor, 69);
    return 1;
}

// Somewhere else
if (GetActorVirtualWorld(MyActor) == 69)
{
    // Do something
}
```

## Related Functions

- [SetActorVirtualWorld](SetActorVirtualWorld): Set the virtual world of an actor.
