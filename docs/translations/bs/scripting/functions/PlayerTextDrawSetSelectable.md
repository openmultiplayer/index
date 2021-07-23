---
title: PlayerTextDrawSetSelectable
description: Omogućuje/onemogućuje da li player-textdraw može biti selektovan ili ne.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućuje/onemogućuje da li player-textdraw može biti selektovan ili ne.

| Ime             | Deskripcija                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| playerid        | ID igrača čiji player-textdraw se (ne)može selektovati.                                    |
| PlayerText:text | ID player-textdrawa za postaviti selektabilnost.                                           |
| set             | Postavi da je player-textdraw selektabilan (1) ili ne (0). Po zadanim postavkama ovo je 0. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select_ptd", true))
    {
        for(new i = 0; i < MAX_PLAYER_TEXT_DRAWS; i++) PlayerTextDrawSetSelectable(playerid, PlayerText:i, 1);
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: Svi player-textdraws se sada mogu selektovati!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Upotrijebite PlayerTextDrawTextSize da definirate područje na koje je moguće kliknuti.

:::

:::warning

PlayerTextDrawSetSelectable MORA SE koristiti PRIJE nego što se textdraw prikaže igraču.

:::

## Srodne Funkcije

- [SelectTextDraw](SelectTextDraw): Omogućava miš kako bi igrač mogao da selektuje textdraw.
- [CancelSelectTextDraw](CancelSelectTextDraw): Prekida selekciju textdrawa sa mišem.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Pozvano kada igrač klikne na player-textdraw.
