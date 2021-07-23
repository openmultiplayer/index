---
title: GetPlayerMenu
description: Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Description

Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to get the current menu of. |

## Returns

The ID of the player's currently shown menu, or INVALID_MENU (255) if no menu shown. Value returned is tagged with Menu:.

## Examples

```c
new Menu:currentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'
```

## Notes

:::tip

Returns previous menu when none is displayed.

:::

## Related Functions

- [ShowMenuForPlayer](ShowMenuForPlayer): Show a menu for a player.
- [HideMenuForPlayer](HideMenuForPlayer): Hide a menu for a player.
- [CreateMenu](CreateMenu): Create a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [AddMenuItem](AddMenuItem): Add an item to a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
