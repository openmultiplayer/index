---
title: PlayerTextDrawAlignment
description: Postavlja poravnanje teksta player-textdrawa.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Postavlja poravnanje teksta player-textdrawa.

| Ime       | Deskripcija                                               |
| --------- | --------------------------------------------------------- |
| playerid  | ID igrača čijem se player-textdrawu postavlja poravnanje. |
| Text:text | ID player-textdrawa za postaviti poravnanje.              |
| alignment | 1-lijevo 2-centrirano 3-desno                             |

## Returns

Note

Za poravnanje 2 (u sredini) vrijednosti x i y TextSize moraju se zamijeniti, pogledajte bilješke na PlayerTextDrawTextSize.

## Primjeri

```c
new PlayerText:gMyTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gMyTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 425.0, "Ovo je primjer textdrawa");
    PlayerTextDrawAlignment(playerid, gMyTextdraw[playerid], 2); // Poravnaj ga u centar
    return 1;
}
```

## Zabilješke

:::tip

Za poravnanje 2 (u sredini) vrijednosti x i y TextSize moraju se zamijeniti, pogledajte bilješke na PlayerTextDrawTextSize.

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiraj player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): Omogući/onemogući korišćenje outline-a za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
