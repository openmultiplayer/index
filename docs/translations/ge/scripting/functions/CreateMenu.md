---
title: CreateMenu
description: Creates a menu.
tags: ["menu"]
---

## Description

Creates a menu.

| Name            | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| title[]         | The title for the new menu.                                                         |
| columns         | How many colums shall the new menu have.                                            |
| Float:x         | The X position of the menu (640x460 canvas - 0 would put the menu at the far left). |
| Float:y         | The Y position of the menu (640x460 canvas - 0 would put the menu at the far top).  |
| Float:col1width | The width for the first column.                                                     |
| Float:col2width | The width for the second column.                                                    |

## Returns

The ID of the new menu or -1 on failure.

## Examples

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## Notes

:::tip

This function merely CREATES the menu - ShowMenuForPlayer must be used to show it. You can only create and access 2 columns (0 & 1). If the title's length is equal to or greater than 32 chars the title is truncated to 30 characters.

:::

:::warning

There is a limit of 12 items per menu, and a limit of 128 menus in total.

:::

## Related Functions

- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [ShowMenuForPlayer](ShowMenuForPlayer): Show a menu for a player.
- [HideMenuForPlayer](HideMenuForPlayer): Hide a menu for a player.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
