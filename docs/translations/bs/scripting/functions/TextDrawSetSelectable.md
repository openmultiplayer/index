---
title: TextDrawSetSelectable
description: Postavlja da li se textdraw može selektovati (kliknuti) ili ne.
tags: ["textdraw"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Postavlja da li se textdraw može selektovati (kliknuti) ili ne.

| Ime  | Deskripcija                                          |
| ---- | ---------------------------------------------------- |
| text | ID textdrawa za postaviti da li se može selektovati. |
| set  | 1 može se selektovati, ili 0 da se ne može.          |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/selectd", true))
    {
        for(new i = 0; i < MAX_TEXT_DRAWS; i++) TextDrawSetSelectable(Text:i, 1);
        SendClientMessage(playerid, 0xFFFFFFAA, "SERVER: Svi textdraw-ovi se sada mogu selektovati!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Koristi TextDrawTextSize da definirate klikljivo područje.

:::

:::warning

TextDrawSetSelectable se mora koristiti PRIJE nego je textdraw prikazan igračima kako bi bio klikljiv (selektabilan).

:::

## Srodne Funkcije

- [SelectTextDraw](SelectTextDraw): Omogućava miš kako bi igrač mogao da selektuje textdraw.
- [CancelSelectTextDraw](CancelSelectTextDraw): Prekida selekciju textdrawa sa mišem.
- [OnPlayerClickTextDraw](../callbacks/OnPlayerClickTextDraw): Pozvano kada igrač klikne na textdraw.
