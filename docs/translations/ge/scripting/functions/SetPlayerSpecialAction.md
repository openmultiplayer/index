---
title: SetPlayerSpecialAction
description: This function allows to set players special action.
tags: ["player"]
---

## Description

This function allows to set players special action.

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | The player that should perform the action                              |
| actionid | The [action](../resources/specialactions) that should be performed. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
if (strcmp(cmd, "/handsup", true) == 0)
{
    SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
    return 1;
}
```

## Notes

:::tip

Removing jetpacks from players by setting their special action to 0 causes the sound to stay until death.

:::

## Related Functions

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Get a player's current special action.
- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.
