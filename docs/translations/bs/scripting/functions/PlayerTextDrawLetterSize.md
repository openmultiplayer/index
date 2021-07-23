---
title: PlayerTextDrawLetterSize
description: Postavlja širinu i visinu slova u player-textdrawu.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Postavlja širinu i visinu slova u player-textdrawu.

| Ime      | Deskripcija                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | ID igrača čijem će se player-textdrawu postaviti veličina slova. |
| text     | ID player-textdrawa za izmijeniti veličinu slova.                |
| Float:x  | Širina karaktera.                                                |
| Float:y  | Visina karaktera.                                                |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
gMyTextDraw[playerid] = CreatePlayerTextDraw(playerid, 100.0, 33.0,"Primjer Textdrawa");
PlayerTextDrawLetterSize(playerid, gMyTextDraw[playerid], 3.2 ,5.1);
```

## Zabilješke

:::tip

Kada ovu funkciju koristite isključivo radi utjecaja na okvir za crtanje teksta, pomnožite 'Y' s 0,135 da biste pretvorili u mjerenja nalik TextDrawTextSize

:::

:::tip

Čini se da fontovi izgledaju najbolje s omjerom X prema Y od 1 do 4 (npr. Ako je x 0.5, tada bi y trebalo biti 2).

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiraj player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Omogući/onemogući korišćenje outline-a za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
