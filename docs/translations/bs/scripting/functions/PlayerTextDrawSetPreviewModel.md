---
title: PlayerTextDrawSetPreviewModel
description: Postavlja player-textdrawu 3D pregled određenog ID-a modela.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja player-textdrawu 3D pregled određenog ID-a modela.

| Ime        | Deskripcija                                |
| ---------- | ------------------------------------------ |
| playerid   | ID igrača PlayerTextDraw-a.                |
| text       | ID textdraw-a koji će prikazati 3D prikaz. |
| modelindex | GTA SA ili SA:MP model ID za prikazati.    |

## Returns

1: Funkcija uspješno izvršena. Ako je proslijeđen nevažeći ID modela 'success' (uspješno) je poslano, ali Model će se prikazati kao crno-žuti upitnik.

0: Funkcija neuspješno izvršena. Igrač i/ili textdraw ne postoje.

## Primjeri

```c
new PlayerText: gTextDraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gTextDraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gTextDraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gTextDraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gTextDraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gTextDraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 411); // Prikaži Infernus (model 411)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 0); //Prikaži model 0 (CJ Skin)
    //PlayerTextDrawSetPreviewModel(playerid, gTextDraw[playerid], 18646); //Prikaži model 18646 (police light object)
    PlayerTextDrawShow(playerid, gTextDraw[playerid]);
    return 1;
}
```

## Zabilješke

:::warning

Textdraw MORA koristiti tip fonta TEXT_DRAW_FONT_MODEL_PREVIEW kako bi ova funkcija imala efekta.

:::

## Srodne Funkcije

- [PlayerTextDrawSetPreviewRot](PlayerTextDrawSetPreviewRot): Postavlja rotaciju 3D prikaza u player-textdrawu.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Postavlja boju vozila 3D prikazu u player-textdrawu.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Pozvano kada igrač klikne na player-textdraw.
