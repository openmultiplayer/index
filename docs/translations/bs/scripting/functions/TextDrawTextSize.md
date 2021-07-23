---
title: TextDrawTextSize
description: Promijeni veličinu textdrawa (veličinu boxa ako je TextDrawUseBox omogućen i/ili klikljivo područje za koristiti sa TextDrawSetSelectable).
tags: ["textdraw"]
---

## Deskripcija

Promijeni veličinu textdrawa (veličinu boxa ako je TextDrawUseBox omogućen i/ili klikljivo područje za koristiti sa TextDrawSetSelectable).

| Ime     | Deskripcija                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| text    | TextDraw za promijeniti veličinu.                                                   |
| Float:x | Veličina na X osi (lijevo/desno) slijedeći istu mrežu 640x480 kao i TextDrawCreate. |
| Float:y | Veličina na Y osi (gore/dole) slijedeći istu mrežu 640x480 kao i TextDrawCreate.    |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0,"Primjer Textdrawa");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);
    return 1;
}
```

## Zabilješke

:::tip

X i y imaju različita značenja s različitim vrijednostima TextDrawAlignment: 1 (lijevo): krajnji su desni ugao boxa, apsolutna kordinatama. 2 (sredina): trebaju se okrenuti (prebaciti dva), a X vrijednost je ukupna širina boxa. 3 (desno): x i y su kordinate krajnjeg lijevog ugla boxa.

Upotrebom tipa fonta 4 (sprite) i 5 (pregled modela) pretvara X i Y ove funkcije iz kordinata ugla u WIDTH i HEIGHT (offseti). Okvir TextDraw započinje 10.0 jedinica gore i 5.0 lijevo kao ishodište (TextDrawCreate kordinata). Ova funkcija definira područje na koje je moguće kliknuti za upotrebu s TextDrawSetSelectable, bilo da je box prikazan ili ne.

:::

:::tip

Ako želite promijeniti veličinu teksta textdrawa koji je već prikazan, ne morate ga ponovno kreirati. Prosto koristite TextDrawShowForPlayer/TextDrawShowForAll nakon uređivanja i promjena će biti vidljiva.

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
- [TextDrawSetOutline](TextDrawSetOutline): Odluči da li da tekst ima outline.
- [TextDrawSetShadow](TextDrawSetShadow): Uključi/isključi sjene (shadows) na textdrawu.
- [TextDrawSetProportional](TextDrawSetProportional): Razmjestite razmak između teksta u texstdrawu na proporcionalni omjer.
- [TextDrawUseBox](TextDrawUseBox): Uključite ili isključite da li textdraw koristi box ili ne.
- [TextDrawSetString](TextDrawSetString): Postavi tekst u već postojećem textdrawu.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Prikaži textdraw za određenog igrača.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Sakrij textdraw za određenog igrača.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
- [TextDrawHideForAll](TextDrawHideForAll): Sakrij textdraw za sve igrače.
