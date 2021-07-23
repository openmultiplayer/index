---
title: SetActorPos
description: Set the position of an actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Set the position of an actor.

| Name    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| actorid | The ID of the actor to set the position of. Returned by CreateActor. |
| X       | The X coordinate to position the actor at.                           |
| Y       | The Y coordinate to position the actor at.                           |
| Z       | The Z coordinate to position the actor at.                           |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(...);
    return 1;
}

// Somewhere else
SetActorPos(gMyActor, 1.0, 2.0, 3.0);
```

## Notes

:::tip

When creating an actor with CreateActor, you specify it's position. You do not need to use this function unless you want to change its position later.

:::

## Related Functions

- [GetActorPos](GetActorPos): Get the position of an actor.
- [CreateActor](CreateActor): Create an actor (static NPC).
