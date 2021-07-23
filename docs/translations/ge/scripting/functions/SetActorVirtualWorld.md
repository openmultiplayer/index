---
title: SetActorVirtualWorld
description: Set the virtual world of an actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Set the virtual world of an actor. Only players in the same world will see the actor.

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | The ID of the actor (returned by CreateActor) to set the virtual world of. |
| vworld  | The virtual world to put the actor ID.                                     |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    // Create the actor
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // Set their virtual world
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```

## Related Functions

- [GetActorVirtualWorld](GetActorVirtualWorld): Get the virtual world of an actor.
- [CreateActor](CreateActor): Create an actor (static NPC).
