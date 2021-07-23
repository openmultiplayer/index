---
title: TextDrawSetShadow
description: Postavlja veličinu sjene teksta u textdrawu.
tags: ["textdraw"]
---

## Deskripcija

Postavlja veličinu sjene teksta u textdrawu.

| Ime  | Deskripcija                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------- |
| text | ID textdrawa za postaviti veličinu sjene teksta.                                                    |
| size | Veličina sjene. 1 se najčešće koristi za normalnu veličinu sjene. 0 onemogućava sjenu u potpunosti. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Textdraw ne postoji.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Primjer Textdrawa");
    TextDrawSetShadow(gMyTextdraw, 1);
    return 1;
}
```

## Zabilješke

:::tip

Sjena može biti presječena/odrezana od strane područja boxa ako je postavljena veličina previše velika za područje.

:::

:::tip

Ako želite promijeniti sjenu textdrawa koji je već prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon uređivanja i promjena će biti vidljiva.

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
- [TextDrawSetProportional](TextDrawSetProportional): Razmjestite razmak između teksta u texstdrawu na proporcionalni omjer.
- [TextDrawUseBox](TextDrawUseBox): Uključite ili isključite da li textdraw koristi box ili ne.
- [TextDrawSetString](TextDrawSetString): Postavi tekst u već postojećem textdrawu.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
