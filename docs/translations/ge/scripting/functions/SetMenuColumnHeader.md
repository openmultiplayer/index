---
title: SetMenuColumnHeader
description: Sets the caption of a column in a menu.
tags: ["menu"]
---

## Description

Sets the caption of a column in a menu.

| Name   | Description                               |
| ------ | ----------------------------------------- |
| menuid | ID of the menu to change.                 |
| column | The column (0 or 1) to set the header of. |
| text[] | The caption text for the column.          |

## Returns

This function does not return any specific values.

## Examples

```c
new Menu: gTestMenu;

// There are two rows in this menu
gTestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);
SetMenuColumnHeader(gTestMenu, 0, "Row 1");
SetMenuColumnHeader(gTestMenu, 1, "Row 2");

// Add menu items to it.
AddMenuItem(gTestMenu, 0, "Row1 Item1");
AddMenuItem(gTestMenu, 1, "Row2 Item1");
```

## Notes

:::tip

Crashes when passed an invalid menu ID.

:::

:::warning

Note that you can add only 12 items with AddMenuItem. The 13th object of a menu would replace the header of the column which is correctly set with this function.

:::

## Related Functions

- [AddMenuItem](AddMenuItem): Add an item to a menu.
- [CreateMenu](CreateMenu): Create a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
