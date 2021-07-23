---
title: ApplyAnimation
description: Apply an animation to a player.
tags: []
---

## Description

Apply an animation to a player.

| Name       | Description                                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid   | The ID of the player to apply the animation to.                                                                                                                                                                                                                                                               |
| animlib[]  | The animation library from which to apply an animation.                                                                                                                                                                                                                                                       |
| animname[] | The name of the animation to apply, within the specified library.                                                                                                                                                                                                                                             |
| fDelta     | The speed to play the animation (use 4.1).                                                                                                                                                                                                                                                                    |
| loop       | If set to 1, the animation will loop. If set to 0, the animation will play once.                                                                                                                                                                                                                              |
| lockx      | If set to 0, the player is returned to their old X coordinate once the animation is complete (for animations that move the player such as walking). 1 will not return them to their old position.                                                                                                             |
| locky      | Same as above but for the Y axis. Should be kept the same as the previous parameter.                                                                                                                                                                                                                          |
| freeze     | Setting this to 1 will freeze the player at the end of the animation. 0 will not.                                                                                                                                                                                                                             |
| time       | Timer in milliseconds. For a never-ending loop it should be 0.                                                                                                                                                                                                                                                |
| forcesync  | Set to 1 to make server sync the animation with all other players in streaming radius (optional). 2 works same as 1, but will ONLY apply the animation to streamed-in players, but NOT the actual player being animated (useful for npc animations and persistent animations when players are being streamed) |

## Returns

This function always returns 1, even if the player specified does not exist, or any of the parameters are invalid (e.g. invalid library).

## Examples

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Notes

:::tip

The 'forcesync' optional parameter, which defaults to 0, in most cases is not needed since players sync animations themselves. The 'forcesync' parameter can force all players who can see 'playerid' to play the animation regardless of whether the player is performing that animation. This is useful in circumstances where the player can't sync the animation themselves. For example, they may be paused.

:::

:::warning

An invalid animation library will crash the player's game.

:::

## Related Functions

- [ClearAnimations](ClearAnimations): Clear any animations a player is performing.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Set a player's special action.
