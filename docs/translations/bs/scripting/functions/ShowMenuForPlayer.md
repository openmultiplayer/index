---
title: ShowMenuForPlayer
description: Prikazuje prethodno kreirani meni za igrača.
tags: ["player", "menu"]
---

## Deskripcija

Prikazuje prethodno kreirani meni za igrača.

| Ime      | Deskripcija                                              |
| -------- | -------------------------------------------------------- |
| menuid   | ID menija za prikazati. Returnovan/vraćen od CreateMenu. |
| playerid | ID igrača kojem će meni biti prikazan.                   |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Menu i/ili igrač ne postoje.

## Primjeri

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

## Zabilješke

:::tip

Crashuje (ruši) i server i igrača ako se proslijedi nevažeći ID menija.

:::

## Srodne Funkcije

- [CreateMenu](CreateMenu): Kreiraj meni.
- [AddMenuItem](AddMenuItem): Dodaje artikal u određeni meni.
- [SetMenuColumnHeader](SetMenuColumnHeader): Postavi zaglavlje za jednu kolonu u meniju.
- [DestroyMenu](DestroyMenu): Uništi meni.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Pozvano kada igrač odabere red u meniju.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Pozvano kada igrač napusti meni.
