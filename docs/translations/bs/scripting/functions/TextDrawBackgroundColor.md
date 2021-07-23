---
title: TextDrawBackgroundColor
description: Prilagođava boju pozadine područja za textdraw (obris / sjena - NE okvir).
tags: ["textdraw"]
---

## Deskripcija

Prilagođava boju pozadine područja za textdraw (obris / sjena - NE box. Za boju boxa, pogledajte TextDrawBoxColor).

| Ime   | Deskripcija                              |
| ----- | ---------------------------------------- |
| text  | ID textdrawa za postaviti boju pozadine. |
| color | Boja koja će biti postavljena.           |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "Ovo je primjer textdrawa");
    TextDrawUseBox(gMyTextdraw, 1);
    TextDrawBackgroundColor(gMyTextdraw, 0xFFFFFFFF); // Postavlja pozadinu MyTextdraw-a u bijelu
    return 1;
}
```

## Zabilješke

:::tip

Ako je TextDrawSetOutline korišten sa veličinom > 0, boja outline-a će se uklopiti sa bojom korištenom u TextDrawBackgroundColor. Mijenjanjem vrijednosti boje se čini kao da mijenja boju korištenu u TextDrawColor.

:::

:::tip

Ukoliko želite promijeniti boju pozadine textdrawa koji je već prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon uređivanja i promjena će biti vidljiva.

:::

## Srodne Funkcije

- [TextDrawCreate](TextDrawCreate): Kreiraj textdraw.
- [TextDrawDestroy](TextDrawDestroy): Uništi textdraw.
- [TextDrawColor](TextDrawColor): Postavi boju teksta u textdrawu.
- [TextDrawBoxColor](TextDrawBoxColor): Postavi boju boxa u textdrawu.
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
