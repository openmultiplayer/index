---
title: DisableMenuRow
description: Onemogućite određeni red u meniju za sve igrače.
tags: ["menu"]
---

## Deskripcija

Onemogućite određeni red u meniju za sve igrače. Bit će zasjenjeno i igrači ga neće moći odabrati.

| Ime         | Deskripcija                                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | ID menija za onemogućavanje reda. Uvjerite se da je ovo valjano, jer će nevažeći ID izbornika srušiti cijeli server. |
| row         | ID reda za onemogućavanje (redovi počinju sa 0).                                                                     |

## Returns

Ova funkcija uvijek returna (vraća) 1, bilo i da funkcija ne uspije. Ako je naveden nevaljani redak, ništa se neće dogoditi. Ako je naveden nevažeći ID menija, server će crashovati.

## Primjeri

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

## Zabilješke

:::tip

Ruši se kada se proslijedi nevažeći ID menija. Ova je funkcija onemogućila navedeni red menija za sve igrače. Ne postoji funkcija za onemogućavanje reda menija za određenog igrača. Morali biste stvoriti dva menija - jedan s onemogućenim redom i jedan bez. Ili po jedan po igraču.

:::

## Srodne Funkcije

- [CreateMenu](CreateMenu): Kreiraj meni.
- [DestroyMenu](DestroyMenu): Uništi meni.
- [AddMenuItem](AddMenuItem): Dodaj artikal u meni.
