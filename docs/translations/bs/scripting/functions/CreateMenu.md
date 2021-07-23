---
title: CreateMenu
description: Kreiraj meni.
tags: ["menu"]
---

## Deskripcija

Kreiraj meni.

| Ime             | Deskripcija                                                            |
| --------------- | ---------------------------------------------------------------------- |
| title[]         | Naslov novog menija.                                                   |
| columns         | Koliko kolona će novi meni imati.                                      |
| Float:x         | X pozicija menija (640x460 sučelje - 0 stavio bi meni krajnje lijevo). |
| Float:y         | Y pozicija menija (640x460 sučelje - 0 stavio bi meni krajnje gore).   |
| Float:col1width | Širina za prvu kolonu.                                                 |
| Float:col2width | Širina za drugu kolonu.                                                |

## Returns

ID novog menija ili -1 ako je greška.

## Primjeri

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Tvoj meni", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija samo STVARA meni - ShowMenuForPlayer mora se koristiti za prikaz. Možete stvoriti i pristupiti samo dvije kolone (0 i 1). Ako je dužina naslova jednaka ili veća od 32 znaka, naslov je skraćen na 30 znakova.

:::

:::warning

Postoji ograničenje od 12 stavki po meniju i ukupno 128 menija.

:::

## Srodne Funkcije

- [AddMenuItem](AddMenuItem): Dodaje artikal u određeni meni.
- [SetMenuColumnHeader](SetMenuColumnHeader): Postavi zaglavlje za jednu kolonu u meniju.
- [DestroyMenu](DestroyMenu): Uništi meni.
- [ShowMenuForPlayer](ShowMenuForPlayer): Prikaži meni za igrača.
- [HideMenuForPlayer](HideMenuForPlayer): Sakrij meni za igrača.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Pozvano kada igrač odabere red u meniju.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Pozvano kada igrač napusti meni.
