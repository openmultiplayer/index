---
title: PlayerTextDrawUseBox
description: Omogući/onemogući korišćenje box-a za player-textdraw.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Omogući/onemogući korišćenje box-a za player-textdraw.

| Ime      | Deskripcija                                               |
| -------- | --------------------------------------------------------- |
| playerid | ID igrača za čiji se textdraw treba koristiti box ili ne. |
| text     | ID player-textdrawa za omogućiti/onemogućiti box          |
| use      | 1 da koristi box 0 da ne koristi box.                     |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new PlayerText:MyTD[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    MyTD[playerid] = CreatePlayerTextDraw(playerid, 40.0, 140.0, "_~N~Primjer Teksta!~N~_");
    PlayerTextDrawUseBox(playerid, MyTD[playerid], 1);
    PlayerTextDrawBoxColor(playerid, MyTD[playerid], 0x00000066); // Postavite boju box-a na poluprozirnu crnu boju
    return 1;
}
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
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Omogući/onemogući korišćenje outline-a za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
