---
title: HideMenuForPlayer
description: Sakriva meni za igrača.
tags: ["player", "menu"]
---

## Deskripcija

Sakriva meni za igrača.

| Ime      | Deskripcija                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| menuid   | ID menija za sakriti. Vraćen od CreateMenu i proslijeđen do OnPlayerSelectedMenuRow. |
| playerid | ID igrača za kojeg će meni biti sakriven.                                            |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Primjeri

```c
if (strcmp(cmdtext, "/menuhide", true) == 0)
{
    new Menu: myMenu = GetPlayerMenu(playerid);
    HideMenuForPlayer(myMenu, playerid);
    return 1;
}
```

## Zabilješke

:::tip

Ruši/crasha i server i igrača ako je dat nevažeći ID menija.

:::

## Srodne Funkcije

- [CreateMenu](CreateMenu): Kreiraj meni.
- [AddMenuItem](AddMenuItem): Dodaje artikal u određeni meni.
- [SetMenuColumnHeader](SetMenuColumnHeader): Postavi zaglavlje za jednu kolonu u meniju.
- [ShowMenuForPlayer](ShowMenuForPlayer): Prikaži meni za igrača.
