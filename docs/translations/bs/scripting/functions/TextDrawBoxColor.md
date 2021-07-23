---
title: TextDrawBoxColor
description: Prilagođava boju okvira za tekst (koristi se samo ako je parametar 'use' TextDrawUseBox 1).
tags: ["textdraw"]
---

## Deskripcija

Prilagođava boju okvira za tekst (koristi se samo ako je parametar 'use' TextDrawUseBox 1).

| Ime   | Deskripcija                                                                                                                                      |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| text  | Textdraw za izmijeniti.                                                                                                                          |
| color | Boja. Neprozirnost se postavlja alfa intenzitetom boje (npr. Boja 0x000000FF ima neproziran crni box, dok 0x000000AA ima poluproziran crni box). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0,"Primjer");
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBoxColor(gMyTextdraw, 0xFFFFFFFF);
    return 1;
}
```

## Zabilješke

:::tip

Ukoliko želite promijeniti boju boxa textdrawa koji je već prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon uređivanja i promjena će biti vidljiva.

:::

## Srodne Funkcije

- [TextDrawCreate](TextDrawCreate): Kreiraj textdraw.
- [TextDrawDestroy](TextDrawDestroy): Uništi textdraw.
- [TextDrawColor](TextDrawColor): Postavi boju teksta u textdrawu.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Postavi boju pozadine textdrawa.
- [TextDrawAlignment](TextDrawAlignment): Postavi poravnanje textdrawa.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
- [TextDrawLetterSize](TextDrawLetterSize): Postavi veličinu znakova teksta u textdrawu.
- [TextDrawTextSize](TextDrawTextSize): Postavi veličinu boxa u textdrawu.
- [TextDrawSetOutline](TextDrawSetOutline): Odluči da li da tekst ima outline.
- [TextDrawSetShadow](TextDrawSetShadow): Uključi/isključi sjene (shadows) na textdrawu.
- [TextDrawSetProportional](TextDrawSetProportional): Razmjestite razmak između teksta u texstdrawu na proporcionalni omjer.
- [TextDrawUseBox](TextDrawUseBox): Uključite ili isključite da li textdraw koristi box ili ne.
- [TextDrawSetString](TextDrawSetString): Postavi tekst u već postojećem textdrawu.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
