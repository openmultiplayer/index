---
title: GetActorFacingAngle
description: Get the facing angle of an actor.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Get the facing angle of an actor.

| Name       | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| actorid    | The ID of the actor to get the facing angle of. Returned by CreateActor.                    |
| &Float:ang | A float variable, passed by reference, in to which the actor's facing angle will be stored. |

## Returns

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

The actor's facing angle is stored in the specified variable.

## Examples

```c
new Float:facingAngle;
GetActorFacingAngle(actorid, facingAngle);
```

## Related Functions

- [SetActorFacingAngle](SetActorFacingAngle): Set the facing angle of an actor.
- [GetActorPos](GetActorPos): Get the position of an actor.
