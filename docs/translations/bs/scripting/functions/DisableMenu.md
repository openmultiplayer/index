---
title: DisableMenu
description: Onemogući meni.
tags: ["menu"]
---

## Deskripcija

Onemogući meni.

| Ime         | Deskripcija                   |
| ----------- | ----------------------------- |
| Menu:menuid | ID meni-a koji se onemogućava |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new WeaponMenu;

WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);
AddMenuItem(WeaponMenu, 0, "Rocket Launcher");
AddMenuItem(WeaponMenu, 0, "Flamethrower");
AddMenuItem(WeaponMenu, 0, "Minigun");
AddMenuItem(WeaponMenu, 0, "Grenades");

// Ispod OnPlayerCommandText
if (!strcmp(cmdtext, "/disableguns", true))
{
    DisableMenu(WeaponMenu); //onemogućava oružje meni
    return 1;
}
```

## Zabilješke

:::tip

Ruši se kada se proslijedi nevažeći ID meni-a.

:::

## Srodne Funkcije

- [CreateMenu](CreateMenu): Kreiraj meni.
- [DestroyMenu](DestroyMenu): Uništi meni.
- [AddMenuItem](AddMenuItem): Dodaj artikal u meni.
