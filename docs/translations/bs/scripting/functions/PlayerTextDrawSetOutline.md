---
title: PlayerTextDrawSetOutline
description: Postavite outline za player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Postavite outline za player-textdraw. Boja outline-a ne može biti promijenjena osim ako se PlayerTextDrawBackgroundColor ne koristi.

| Ime      | Deskripcija                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID igrača čijem player-textdrawu se stavlja outline. |
| text     | ID player-textdrawa za postaviti outline             |
| size     | Debljina outline-a.                                  |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
gMyTextDraw[playerid] = CreatePlayerTextDraw(playerid, 100.0, 33.0,"Primjer Textdrawa");
PlayerTextDrawSetOutline(playerid, gMyTextDraw[playerid], 1);
```

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiraj player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
