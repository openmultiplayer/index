---
title: TextDrawSetPreviewRot
description: Postavlja rotaciju i zumiranje 3D pregleda modela (3D model preview) textdrawa.
tags: ["textdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja rotaciju i zumiranje 3D pregleda modela (3D model preview) textdrawa.

| Ime         | Deskripcija                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Float:fRotX | X vrijednost rotacije.                                                                                                             |
| Float:fRotY | Y vrijednost rotacije.                                                                                                             |
| Float:fRotZ | Z vrijednost rotacije.                                                                                                             |
| Float:fZoom | Vrijednost zumiranja, zadana vrijednost 1.0, manje vrijednosti će činiti kameru bližom a veće vrijednosti će činiti kameru daljom. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411);
    TextDrawSetPreviewRot(gMyTextdraw, -10.0, 0.0, -20.0, 1.0);
    //Još uvijek moraš da koristiš TextDrawShowForAll/TextDrawShowForPlayer kako bi textdraw bio vidljiv.
    return 1;
}
```

## Zabilješke

:::warning

Textdraw MORA koristiti tip fonta TEXT_DRAW_FONT_MODEL_PREVIEW kako bi ova funkcija imala efekta.

:::

## Srodne Funkcije

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Postavlja rotaciju 3D prikaza u player-textdrawu.
- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Postavi 3D pregled modela textdrawa.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Postavi boju vozila u 3D pregledu modela textdrawa.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Pozvano kada igrač klikne na textdraw.
