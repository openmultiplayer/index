---
title: SetMenuColumnHeader
description: Postavlja naslov stupca u meniju.
tags: ["menu"]
---

## Deskripcija

Postavlja naslov stupca u meniju.

| Ime    | Deskripcija                           |
| ------ | ------------------------------------- |
| menuid | ID menija za izmijeniti.              |
| column | Stupac (0 ili 1) za postaviti naslov. |
| text[] | Tekst opisa za stupac.                |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Menu: gTestMenu;

// U ovom su meniju dva reda
gTestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);
SetMenuColumnHeader(gTestMenu, 0, "Row 1");
SetMenuColumnHeader(gTestMenu, 1, "Row 2");

// Dodajte mu stavke u meniju.
AddMenuItem(gTestMenu, 0, "Row1 Item1");
AddMenuItem(gTestMenu, 1, "Row2 Item1");
```

## Zabilješke

:::tip

Crashuje kada se proslijedi nevažeći ID menija.

:::

:::warning

Imajte na umu da pomoću AddMenuItem možete dodati samo 12 predmeta/stavki. 13. objekt menija zamijenio bi zaglavlje stupca koje je pravilno postavljeno ovom funkcijom.

:::

## Srodne Funkcije

- [AddMenuItem](AddMenuItem): Dodaj artikal u meni.
- [CreateMenu](CreateMenu): Kreiraj meni.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Pozvano kada igrač odabere red u meniju.
