---
title: PlayerTextDrawSetPreviewRot
description: Postavlja rotaciju i zumiranje prikaza 3D modela u player-textdrawu.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3x i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja rotaciju i zumiranje prikaza 3D modela u player-textdrawu.

| Ime             | Deskripcija                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| playerid        | ID igrača čiji player-textdraw treba izmijeniti.                                                                         |
| PlayerText:text | ID player-textdrawa za izmijeniti.                                                                                       |
| Float:fRotX     | X vrijednost rotacije.                                                                                                   |
| Float:fRotY     | Y vrijednost rotacije.                                                                                                   |
| Float:fRotZ     | Z vrijednost rotacije.                                                                                                   |
| Float:fZoom     | Vrijednost zumiranja, zadana vrijednost 1.0, manje vrijednosti čine kameru bližom i veće vrijednosti čine kameru daljom. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new PlayerText: gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "_");
    PlayerTextDrawFont(playerid, gMyTextdraw[playerid], TEXT_DRAW_FONT_MODEL_PREVIEW);
    PlayerTextDrawUseBox(playerid, gMyTextdraw[playerid], 1);
    PlayerTextDrawBoxColor(playerid, gMyTextdraw[playerid], 0x000000FF);
    PlayerTextDrawTextSize(playerid, gMyTextdraw[playerid], 40.0, 40.0);
    PlayerTextDrawSetPreviewModel(playerid, gMyTextdraw[playerid], 411);
    PlayerTextDrawSetPreviewRot(playerid, gMyTextdraw[playerid], -10.0, 0.0, -20.0, 1.0);
    PlayerTextDrawShow(playerid, gMyTextdraw[playerid]);
    return 1;
}
```

## Zabilješke

:::warning

Textdraw MORA koristiti tip fonta TEXT_DRAW_FONT_MODEL_PREVIEW kako bi ova funkcija imala efekta.

:::

## Srodne Funkcije

- [TextDrawSetPreviewRot](TextDrawSetPreviewRot): Postavlja rotaciju 3D prikaza u textdraw-u.
- [PlayerTextDrawSetPreviewModel](PlayerTextDrawSetPreviewModel): Postavlja ID modela 3D prikaza u player-textdrawu.
- [PlayerTextDrawSetPreviewVehCol](PlayerTextDrawSetPreviewVehCol): Postavlja boju vozila 3D prikazu u player-textdrawu.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Pozvano kada igrač klikne na player-textdraw.
