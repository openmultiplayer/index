---
title: SendDeathMessage
description: Adds a death to the 'killfeed' on the right-hand side of the screen for all players.
tags: []
---

## Description

Adds a death to the 'killfeed' on the right-hand side of the screen for all players.

| Name     | Description                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| killer   | The ID of the killer (can be INVALID_PLAYER_ID).                                                                            |
| playerid | The ID of the player that died.                                                                                             |
| weapon   | The reason (not always a weapon) for the victim's death. Special icons can also be used (ICON_CONNECT and ICON_DISCONNECT). |

## Returns

This function always returns 1, even if the function fails to execute. The function fails to execute (no death message shown) if 'playerid' is invalid. If 'reason' is invalid, a generic skull-and-crossbones icon is shown. 'killerid' being invalid (INVALID_PLAYER_ID) is valid.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    SendDeathMessage(killerid, playerid, reason);
    return 1;
}
```

## Notes

:::tip

Death messages can be cleared by using a valid player ID for 'playerid' that is not connected. To show a death message for just a single player, use SendDeathMessageToPlayer. You can use NPCs to create your own custom death reasons.

:::

## Related Functions

- [SendDeathMessageToPlayer](SendDeathMessageToPlayer): Add a kill to the death list for a player.
- [OnPlayerDeath](../callbacks/OnPlayerDeath): Called when a player dies.
