---
title: SetPlayerDrunkLevel
description: Sets the drunk level of a player which makes the player's camera sway and vehicles hard to control.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Sets the drunk level of a player which makes the player's camera sway and vehicles hard to control.

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| playerid | The ID of the player to set the drunkenness of. |
| level    | The level of drunkenness to set.                |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
if (strcmp(cmdtext, "/drunk", true) == 0)
{
    SetPlayerDrunkLevel (playerid, 4000);
    SendClientMessage(playerid, 0xFFFFFFAA, "You are now drunk; don't drink and drive!");
    return 1;
}
```

## Notes

:::tip

Players' drunk level will automatically decrease over time, based on their FPS (players with 50 FPS will lose 50 'levels' per second. This is useful for determining a player's FPS!). In 0.3a the drunk level will decrement and stop at 2000. In 0.3b+ the drunk level decrements to zero.) Levels over 2000 make the player drunk (camera swaying and vehicles difficult to control). Max drunk level is 50000. While the drunk level is above 5000, the player's HUD (radar etc.) will be hidden.

:::

## Related Functions

- [GetPlayerDrunkLevel](GetPlayerDrunkLevel): Returns the current drunk level of a player.
