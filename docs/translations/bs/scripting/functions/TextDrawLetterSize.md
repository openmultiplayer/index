---
title: TextDrawLetterSize
description: Postavlja širinu i visinu slova.
tags: ["textdraw"]
---

## Deskripcija

Postavlja širinu i visinu slova.

| Ime     | Deskripcija             |
| ------- | ----------------------- |
| text    | TextDraw za izmijeniti. |
| Float:x | Širina karaktera.       |
| Float:y | Visina karaktera.       |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Primjer Textdrawa");
    TextDrawLetterSize(gMyTextdraw, 3.2 ,5.1);
    return 1;
}
```

## Zabilješke

:::tip

Kada ovu funkciju koristite čisto da biste utjecali na box TextDrawa, pomnožite 'Y' s 0,135 da biste pretvorili u mjerenja nalik TextDrawTextSize. Savjet: Lakše je i izuzetno precizno koristiti LD_SPAC:white sprit za samo crtanje boxa, TextDrawTextSize će imati redovite pomake.

:::

:::tip

Ukoliko želite promijeniti veličinu slova textdrawa koji je već prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon uređivanja i promjena će biti vidljiva. Fontovi izgledaju najbolje sa X naprema Y rastojanju od 1 do 4 (npr. ako je x 0.5 onda bi y trebao biti 2).

:::

## Srodne Funkcije

- [TextDrawCreate](TextDrawCreate): Kreiraj textdraw.
- [TextDrawDestroy](TextDrawDestroy): Uništi textdraw.
- [TextDrawColor](TextDrawColor): Postavi boju teksta u textdrawu.
- [TextDrawBoxColor](TextDrawBoxColor): Postavi boju boxa u textdrawu.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Postavi boju pozadine textdrawa.
- [TextDrawAlignment](TextDrawAlignment): Postavi poravnanje textdrawa.
- [TextDrawFont](TextDrawFont): Postavi font textdrawa.
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
