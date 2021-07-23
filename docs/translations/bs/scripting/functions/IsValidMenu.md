---
title: IsValidMenu
description: Provjerava da li je ID menija važeći.
tags: []
---

## Deskripcija

Provjerava da li je ID menija važeći.

| Ime    | Deskripcija              |
| ------ | ------------------------ |
| menuid | ID menija ta provjeriti. |

## Returns

1 - Meni je važeći.

0 - Meni je nevažeći.

## Srodne Funkcije

- [CreateMenu](CreateMenu): Kreiraj meni
- [DestroyMenu](DestroyMenu): Uništava postojeći meni.
- [DisableMenu](DisableMenu): Onemogući meni.
- [DisableMenuRow](DisableMenuRow): Onemogućite određeni red u meniju za sve igrače.
- [AddMenuItem](AddMenuItem): Dodaje artikal u određeni meni.
- [SetMenuColumnHeader](SetMenuColumnHeader): Postavi zaglavlje za jednu kolonu u meniju.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Pozvano kada igrač odabere red u meniju.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Pozvano kada igrač napusti meni.
