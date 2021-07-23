---
title: DisableMenuRow
description: Disable a specific row in a menu for all players.
tags: ["menu"]
---

## Description

Disable a specific row in a menu for all players. It will be greyed-out and can't be selected by players.

| Name        | Description                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | The ID of the menu to disable a row of. Ensure this is valid, as an invalid menu ID will crash the entire server. |
| row         | The ID of the row to disable (rows start at 0).                                                                   |

## Returns

This function always returns 1, even if the function fails. If an invalid row is specified, nothing will happen. If an invalid menu ID is specified, the server will crash.

## Examples

```c
new Menu:WeaponMenu;

WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);
AddMenuItem(WeaponMenu, 0, "Rocket Launcher");
AddMenuItem(WeaponMenu, 0, "Flamethrower");
AddMenuItem(WeaponMenu, 0, "Minigun");
AddMenuItem(WeaponMenu, 0, "Grenades");
if (!strcmp(cmdtext, "/disablemenu", true))
{
    DisableMenuRow(WeaponMenu, 2); //Disable the "Minigun" row
    return 1;
}
```

## Notes

:::tip

Crashes when passed an invalid menu ID. This function disabled the specified menu row for all players. There is no function to disable a menu row for a specific player. You'd have to create two menus - one with a row disabled, and one without. Or one per player.

:::

## Related Functions

- [CreateMenu](CreateMenu): Create a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [AddMenuItem](AddMenuItem): Add an item to a menu.
