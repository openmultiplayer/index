---
title: ApplyActorAnimation
description: Apply an animation to an actor.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Apply an animation to an actor.

| Name       | Description                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actorid    | The ID of the actor to apply the animation to.                                                                                                                                                  |
| animlib[]  | The animation library from which to apply an animation.                                                                                                                                         |
| animname[] | The name of the animation to apply, within the specified library.                                                                                                                               |
| fDelta     | The speed to play the animation (use 4.1).                                                                                                                                                      |
| loop       | If set to 1, the animation will loop. If set to 0, the animation will play once.                                                                                                                |
| lockx      | If set to 0, the actor is returned to their old X coordinate once the animation is complete (for animations that move the actor such as walking). 1 will not return them to their old position. |
| locky      | Same as above but for the Y axis. Should be kept the same as the previous parameter.                                                                                                            |
| freeze     | Setting this to 1 will freeze an actor at the end of the animation. 0 will not.                                                                                                                 |
| time       | Timer in milliseconds. For a never-ending loop it should be 0.                                                                                                                                  |

## Returns

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, 0, 0, 0, 0, 0); // Pay anim
    return 1;
}
```

## Notes

:::tip

You must preload the animation library for the player the actor will be applying the animation for, and not for the actor. Otherwise, the animation won't be applied to the actor until the function is executed again.

:::

## Related Functions

- [ClearActorAnimations](ClearActorAnimations): Clear any animations that are applied to an actor.
