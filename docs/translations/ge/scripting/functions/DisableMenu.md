---
title: DisableMenu
description: Disable a menu.
tags: ["menu"]
---

## Description

Disable a menu.

| Name        | Description                    |
| ----------- | ------------------------------ |
| Menu:menuid | The ID of the menu to disable. |

## Returns

This function does not return any specific values.

## Examples

```c
new WeaponMenu;

WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);
AddMenuItem(WeaponMenu, 0, "Rocket Launcher");
AddMenuItem(WeaponMenu, 0, "Flamethrower");
AddMenuItem(WeaponMenu, 0, "Minigun");
AddMenuItem(WeaponMenu, 0, "Grenades");

// Under OnPlayerCommandText
if (!strcmp(cmdtext, "/disableguns", true))
{
    DisableMenu(WeaponMenu); //Disable the weapon menu
    return 1;
}
```

## Notes

:::tip

Crashes when passed an invalid menu ID.

:::

## Related Functions

- [CreateMenu](CreateMenu): Create a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [AddMenuItem](AddMenuItem): Add an item to a menu.
