---
title: PlayerTextDrawSetShadow
description: Dodaje sjenku na donju desnu stranu teksta u player-textdrawu.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Dodaje sjenku na donju desnu stranu teksta u player-textdrawu. Font sjene odgovara fontu teksta.

| Ime      | Deskripcija                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | ID igrača čijem se player-textdrawu postavlja veličina sjene. |
| text     | ID player-textdrawa za izmijeniti.                            |
| size     | Veličina sjene. 0 će sakriti sjenu.                           |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da player-textdraw ne postoji.

## Primjeri

```c
new Text:MyTextDraw = CreatePlayerTextDraw(playerid, 100.0, 33.0, "Primjer Teksta");
PlayerTextDrawSetShadow(playerid, MyTextDraw, 1);
```

## Zabilješke

:::tip

Sjena se može izrezati po polju boxa/okvira ako je postavljena veličina prevelika za to područje.

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
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Omogući/onemogući korišćenje outline-a za player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
