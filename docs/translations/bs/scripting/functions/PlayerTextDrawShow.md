---
title: PlayerTextDrawShow
description: Prikaži player-textdraw igraču za kojeg je kreiran.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Prikaži player-textdraw igraču za kojeg je kreiran.

| Ime      | Deskripcija                      |
| -------- | -------------------------------- |
| playerid | ID igrača za prikazati textdraw. |
| text     | ID textdraw za prikazati.        |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Zabilješke

:::tip

Izvlačenje teksta igrača vrijedi samo za igrač za kojeg je stvoren. To znači da ne možete drugom igraču prikazati tekstdraw stvorenog za određenog igrača.

:::

## Srodne Funkcije

- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiraj player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Omogući/onemogući korišćenje outline-a za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
