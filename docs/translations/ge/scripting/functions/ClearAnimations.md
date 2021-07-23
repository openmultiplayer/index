---
title: ClearAnimations
description: Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting,entering vehicles, driving (removes player out of vehicle), swimming, etc.
tags: []
---

## Description

Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting,entering vehicles, driving (removes player out of vehicle), swimming, etc.. ).

| Name      | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| playerid  | The ID of the player to clear the animations of.                                                   |
| forcesync | Set to 1 to force playerid to sync the animation with other players in streaming radius (optional) |

## Returns

This function always returns 1, even when the player specified is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/animclear", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

ClearAnimations doesn't do anything when the animation ends if we pass 1 for the freeze parameter in ApplyAnimation.

:::

:::tip

Unlike some other ways to remove player from a vehicle, this will also reset the vehicle's velocity to zero, instantly stopping the car. Player will appear on top of the vehicle with the same location as he was in his car seat.

:::

## Related Functions

- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.
