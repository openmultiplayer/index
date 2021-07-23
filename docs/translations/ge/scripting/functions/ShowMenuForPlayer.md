---
title: ShowMenuForPlayer
description: Shows a previously created menu for a player.
tags: ["player", "menu"]
---

## Description

Shows a previously created menu for a player.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| menuid   | The ID of the menu to show. Returned by CreateMenu.  |
| playerid | The ID of the player to whom the menu will be shown. |

## Returns

1: The function executed successfully.

0: The function failed to execute. Menu and/or player doesn't exist.

## Examples

```c
new Menu:gPlayerTeleport;

public OnGameModeInit()
{
    gPlayerTeleport = CreateMenu(...);
    return 1;
}

if (strcmp(cmdtext, "/tele", true) == 0)
{
    ShowMenuForPlayer(gPlayerTeleport, playerid);
    return 1;
}
```

## Notes

:::tip

Crashes the both server and player if an invalid menu ID given.

:::

## Related Functions

- [CreateMenu](CreateMenu): Create a menu.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
