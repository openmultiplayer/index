---
title: PlayerTextDrawSetPreviewVehCol
description: Postavlja boju vozila prikaza modela u player-textdrawu (ako je prikazano vozilo).
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja boju vozila prikaza modela u player-textdrawu (ako je prikazano vozilo).

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača čiji player-textdraw treba izmijeniti. |
| text     | ID igračevog player-textdrawaza izmijeniti.      |
| color1   | Boja za postaviti primarnu boju vozila.          |
| color2   | Boja za postaviti sekundarnu boju vozila.        |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Zabilješke

:::warning

Textdraw MORA koristiti font TEXT_DRAW_FONT_MODEL_PREVIEW i prikazivati ​​vozilo kako bi ova funkcija imala efekta.

:::

## Srodne Funkcije

- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Postavlja ID modela 3D prikaza u player-textdrawu.
- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Postavlja rotaciju 3D prikaza u player-textdrawu.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Pozvano kada igrač klikne na player-textdraw.
