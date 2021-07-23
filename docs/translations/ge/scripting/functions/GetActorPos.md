---
title: GetActorPos
description: Get the position of an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the position of an actor.

| Name    | Description                                                                             |
| ------- | --------------------------------------------------------------------------------------- |
| actorid | The ID of the actor to get the position of. Returned by CreateActor.                    |
| X       | A float variable, passed by reference, in which to store the X coordinate of the actor. |
| Y       | A float variable, passed by reference, in which to store the Y coordinate of the actor. |
| Z       | A float variable, passed by reference, in which to store the Z coordinate of the actor. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

The actor's position is stored in the specified variables.

## Examples

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

## Related Functions

- [SetActorPos](SetActorPos): Set the position of an actor.
