---
title: TextDrawSetPreviewModel
description: Postavi Model za textdraw prikaz modela.
tags: ["textdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi Model za textdraw prikaz modela. Klikni ovdje da vidiš efekat ove funkcije.

| Ime        | Deskripcija                                |
| ---------- | ------------------------------------------ |
| text       | ID textdrawa koji će prikazati 3D pregled. |
| modelindex | GTA SA ili SA:MP model ID za prikazati.    |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text:textdraw;

public OnGameModeInit()
{
    textdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(textdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(textdraw, 1);
    TextDrawBoxColor(textdraw, 0x000000FF);
    TextDrawTextSize(textdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(textdraw, 411); //Prikaži model 411 (Infernus)
        //TextDrawSetPreviewModel(textdraw, 1); //Prikaži model 1 (CJ Skin)
        //TextDrawSetPreviewModel(textdraw, 18646); //Prikaži model 18646 (Police light objekat)

    //Još uvijek moraš da koristiš TextDrawShowForAll/TextDrawShowForPlayer kako bi textdraw bio vidljiv.
    return 1;
}
```

## Zabilješke

:::tip

Koristi TextDrawBackgroundColor da postaviš boju pozadine iza Modela.

:::

:::warning

Textdraw MORA korisiti tip fonta TEXT_DRAW_FONT_MODEL_PREVIEW kako bi ova funkcija imala efekta.

:::

## Srodne Funkcije

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Postavlja rotaciju 3D prikaza u textdraw-u.
- [TextDrawSetPreviewVehCol](TextDrawSetPreviewVehCol): Postavi boju vozila u 3D pregledu modela textdrawa.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Postavlja ID modela 3D prikaza u player-textdrawu.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Pozvano kada igrač klikne na textdraw.
