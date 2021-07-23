---
title: TextDrawSetPreviewVehCol
description: Ako je model vozila korišten u 3D textdraw pregledu (3D preview textdraw), ovo postavlja dvije vrijednosti boja za to vozilo.
tags: ["textdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Ako je model vozila korišten u 3D textdraw pregledu (3D preview textdraw), ovo postavlja dvije vrijednosti boja za to vozilo.

| Ime    | Deskripcija                                                                |
| ------ | -------------------------------------------------------------------------- |
| text   | ID textdrawa koji je postavljen za prikazivanje pregleda 3D modela vozila. |
| color1 | ID Primarne boje za postaviti vozilu.                                      |
| color2 | ID Sekundarne boje za postaviti vozilu.                                    |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 240.0, "_");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_MODEL_PREVIEW);
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0x000000FF);
    TextDrawTextSize(gMyTextdraw, 40.0, 40.0);
    TextDrawSetPreviewModel(gMyTextdraw, 411); // Prikaži model 411 (Infernus)
    TextDrawSetPreviewVehCol(gMyTextdraw, 6, 6); // Postavi infernusu boju 6 (Žuta)

    // Još uvijek moraš da koristiš TextDrawShowForAll/TextDrawShowForPlayer kako bi textdraw bio vidljiv.
    return 1;
}
```

## Zabilješke

:::warning

Textdraw MORA korisiti tip fonta TEXT_DRAW_FONT_MODEL_PREVIEW kako bi ova funkcija imala efekta.

:::

## Srodne Funkcije

- [TextDrawSetPreviewModel](TextDrawSetPreviewModel): Postavi 3D pregled modela textdrawa.
- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Postavlja rotaciju 3D prikaza u textdraw-u.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Pozvano kada igrač klikne na textdraw.
