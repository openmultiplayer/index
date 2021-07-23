---
title: TextDrawAlignment
description: Postavite poravnanje teksta u textdrawu.
tags: ["textdraw"]
---

## Deskripcija

Postavite poravnanje teksta u textdrawu.

| Ime       | Deskripcija                           |
| --------- | ------------------------------------- |
| Text:text | ID textdrawa za postaviti poravnanje. |
| alignment | 1-lijevo 2-centrirano 3-desno.        |

## Returns

Note

Za poravnanje 2 (centrirano) x i y vrijednosti TextSize-a treba zamijeniti, pogledaj zabilješke na TextDrawTextSize, zakođer pozicija kordinata postaje pozicija centra textdrawa a ne lijevi/gornji rubovi.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "Ovo je primjer textdrawa");
    TextDrawAlignment(gMyTextdraw, 2); // Poravnajte tekst za textdraw u sredinu (centar)
    return 1;
}
```

## Zabilješke

:::tip

Ako je textdraw već prikazan, on mora biti ponovno prikazan (TextDrawShowForAll/TextDrawShowForPlayer) kako bi se prikazale promjene ove funkcije.

:::

## Srodne Funkcije

- [TextDrawCreate](TextDrawCreate): Kreiraj textdraw.
- [TextDrawDestroy](TextDrawDestroy): Uništi textdraw.
- [TextDrawColor](TextDrawColor): Postavi boju teksta u textdrawu.
- [TextDrawBoxColor](TextDrawBoxColor): Postavi boju boxa u textdrawu.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Postavi boju pozadine textdrawa.
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
