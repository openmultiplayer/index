---
title: TextDrawSetString
description: Mijenja tekst na textdrawu.
tags: ["textdraw"]
---

## Deskripcija

Mijenja tekst na textdrawu.

| Ime      | Deskripcija              |
| -------- | ------------------------ |
| text     | textdraw za izmijeniti.  |
| string[] | Novi string za textdraw. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(1.0, 5.6, "Cao, kako si?");
    return 1;
}

public OnPlayerConnect(playerid)
{
    new
        message[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, sizeof playerName);
    format(message, sizeof(message), "Dobrodosao %s!", playerName);
    TextDrawSetString(gMyTextdraw, message);
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Zabilješke

:::warning

Postoje ograničenja za dužinu textdraw stringova - pogledaj ovdje za više informacija.

:::

## Srodne Funkcije

- [TextDrawCreate](TextDrawCreate): Kreiraj textdraw.
- [TextDrawDestroy](TextDrawDestroy): Uništi textdraw.
- [TextDrawColor](TextDrawColor): Postavi boju teksta u textdrawu.
- [TextDrawBoxColor](TextDrawBoxColor): Postavi boju boxa u textdrawu.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Postavi boju pozadine textdrawa.
- [TextDrawAlignment](TextDrawAlignment): Postavi poravnanje textdrawa.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
- [TextDrawLetterSize](TextDrawLetterSize): Postavi veličinu znakova teksta u textdrawu.
- [TextDrawTextSize](TextDrawTextSize): Postavi veličinu boxa u textdrawu.
- [TextDrawSetOutline](TextDrawSetOutline): Odluči da li da tekst ima outline.
- [TextDrawSetShadow](TextDrawSetShadow): Uključi/isključi sjene (shadows) na textdrawu.
- [TextDrawSetProportional](TextDrawSetProportional): Razmjestite razmak između teksta u texstdrawu na proporcionalni omjer.
- [TextDrawUseBox](TextDrawUseBox): Uključite ili isključite da li textdraw koristi box ili ne.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
