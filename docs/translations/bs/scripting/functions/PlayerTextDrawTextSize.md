---
title: PlayerTextDrawTextSize
description: Promijeni veličinu player-textdrawa (box ako je PlayerTextDrawUseBox omogućen i/ili klikljivo područje za koristiti sa PlayerTextDrawSetSelectable).
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Promijeni veličinu player-textdrawa (box ako je PlayerTextDrawUseBox omogućen i/ili klikljivo područje za koristiti sa PlayerTextDrawSetSelectable).

| Ime      | Deskripcija                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | ID igrača čijem se player-textdrawu mijenja veličina.                               |
| text     | ID player-textdrawa za postaviti veličinu.                                          |
| Float:x  | Veličina na X osi (lijevo/desno) slijedeći istu mrežu 640x480 kao i TextDrawCreate. |
| Float:y  | Veličina na Y osi (gore/dole) slijedeći istu mrežu 640x480 kao i TextDrawCreate.    |

## Returns

X i y imaju različita značenja s različitim vrijednostima PlayerTextDrawAlignment: 1 (lijevo): oni su krajnji desni ugao box-a, apsolutna kordinatama. 2 (sredina): trebaju se okrenuti (prebaciti dva), a X vrijednost je ukupna širina box-a. 3 (desno): x i y su kordinate krajnjeg lijevog ugla box-a

1 (left): oni su krajnji desni ugao kutije, apsolutna kordinata.

2 (center): trebaju ih okrenuti (prebaciti dva), a X vrijednost je ukupna širina boxa.

3 (right): x i y su kordinate krajnjeg lijevog ugla kutije

Upotrebom fonta tipa 4 (sprite) i 5 (pregled modela) pretvara se X i Y ove funkcije iz kordinatama ugla u WIDTH i HEIGHT (offseti).

Box TextDraw-a započinje 10.0 jedinica gore i 5.0 lijevo kao ishodište (TextDrawCreate kordinata).

Ova funkcija definira područje na koje je moguće kliknuti za upotrebu s PlayerTextDrawSetSelectable, bilo da je box prikazan ili ne.

## Primjeri

```c
MyTextDraw[playerid] = CreatePlayerTextDraw(playerid, 100.0, 33.0, "Primjer Textdrawa");
PlayerTextDrawTextSize(playerid, MyTextDraw[playerid], 2.0, 3.6);
```

## Zabilješke

:::tip

X i y imaju različita značenja s različitim vrijednostima PlayerTextDrawAlignment: 1 (lijevo): oni su krajnji desni ugao box-a, apsolutna kordinatama. 2 (sredina): trebaju se okrenuti (prebaciti dva), a X vrijednost je ukupna širina box-a. 3 (desno): x i y su kordinate krajnjeg lijevog ugla box-a

Upotrebom fonta tipa 4 (sprite) i 5 (pregled modela) pretvara se X i Y ove funkcije iz kordinatama ugla u WIDTH i HEIGHT (offseti). The TextDraw box počinje sa 10.0 jedinica gore i 5.0 ulijevo po zadanom (TextDrawCreate kordinata). Ova funkcija definira područje na koje je moguće kliknuti za upotrebu s PlayerTextDrawSetSelectable, bilo da je box prikazan ili ne.

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiraj player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Omogući/onemogući korišćenje outline-a za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
