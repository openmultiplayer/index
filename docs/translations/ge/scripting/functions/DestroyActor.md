---
title: DestroyActor
description: Destroy an actor which was created with CreateActor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Destroy an actor which was created with CreateActor.

| Name    | Description                                              |
| ------- | -------------------------------------------------------- |
| actorid | The ID of the actor to destroy. Returned by CreateActor. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The actor with the ID specified does not exist.

## Examples

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(...);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## Related Functions

- [CreateActor](CreateActor): Create an actor (static NPC).
