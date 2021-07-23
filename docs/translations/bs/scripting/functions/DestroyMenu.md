---
title: DestroyMenu
description: Uništava navedeni meni.
tags: ["menu"]
---

## Deskripcija

Uništava navedeni meni.

| Ime    | Deskripcija            |
| ------ | ---------------------- |
| menuid | ID meni-a za uništiti  |

## Returns

Tačno ukoliko je uspješno uništen, u protivnom netačno

## Primjeri

```c
new Menu:examplemenu;
examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// ...
DestroyMenu(examplemenu);
```

## Srodne Funkcije

- [CreateMenu](CreateMenu): Kreiraj meni.
- [SetMenuColumnHeader](SetMenuColumnHeader): Postavi zaglavlje za jednu kolonu u meniju.
- [AddMenuItem](AddMenuItem): Dodaj artikal u meni.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Pozvano kada igrač odabere red u meniju.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Pozvano kada igrač napusti meni.
