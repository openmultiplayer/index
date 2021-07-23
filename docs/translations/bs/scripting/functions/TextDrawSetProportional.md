---
title: TextDrawSetProportional
description: Prilagođava razmak između teksta proporcionalnom omjeru.
tags: ["textdraw"]
---

## Deskripcija

Prilagođava razmak između teksta proporcionalnom omjeru. Korisno kada se koristi TextDrawLetterSize kako bi se osiguralo da tekst ima ravnomjeran razmak između znakova.

| Ime  | Deskripcija                                        |
| ---- | -------------------------------------------------- |
| text | ID textdrawa za postaviti proporcionalnost.        |
| set  | 1 za omogućiti proporcionalnost, 0 za onemogućiti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Primjer Textdrawa");
    TextDrawSetProportional(gMyTextdraw, 1);
    return 1;
}
```

## Zabilješke

:::tip

Proporcionalnost je po zadanim postavkama postavljena na 1, mogli biste preskočiti ovu funkciju ako ne želite da je onemogućite. Ukoliko želite promijeniti proporcionalnost textdrawa koji je već prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon uređivanja i promjena će biti vidljiva.

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
- [TextDrawUseBox](TextDrawUseBox): Uključite ili isključite da li textdraw koristi box ili ne.
- [TextDrawSetString](TextDrawSetString): Postavi tekst u već postojećem textdrawu.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
