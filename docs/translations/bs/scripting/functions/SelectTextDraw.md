---
title: SelectTextDraw
description: Prikaži miš i dozvoli igraču da selektuje textdraw.
tags: ["textdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Prikaži miš i dozvoli igraču da selektuje textdraw.

| Ime        | Deskripcija                                                   |
| ---------- | ------------------------------------------------------------- |
| playerid   | ID igrača koji može selektovati textdraw.                     |
| hovercolor | Boja textdrawa prilikom prelaska preko njega sa mišem (RGBA). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/tdselect", true))
    {
        SelectTextDraw(playerid, 0x00FF00FF); // Označite zeleno kada zadržite pokazivač iznad
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Molimo selektujte textdraw!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

TEKST će biti istaknut kada zadržite pokazivač, a NE okvir (ako je jedan prikazan).

:::

## Srodne Funkcije

- [CancelSelectTextDraw](CancelSelectTextDraw): Prekida selekciju textdrawa sa mišem.
- [TextDrawSetSelectable](TextDrawSetSelectable): Postavlja da li je textdraw klikljiv prilikom SelectTextDraw.
- [PlayerTextDrawSetSelectable](PlayerTextDrawSetSelectable): Postavlja da li je player-textdraw klikljiv prilikom SelectTextDraw.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Pozvano kada igrač klikne na textdraw.
- [OnPlayerClickPlayerTextDraw](../callbacks/OnPlayerClickPlayerTextDraw): Pozvano kada igrač klikne na player-textdraw.
