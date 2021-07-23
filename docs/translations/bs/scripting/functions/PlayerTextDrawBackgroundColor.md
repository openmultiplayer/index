---
title: PlayerTextDrawBackgroundColor
description: Podesite boju pozadine player-textdrawa.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Podesite boju pozadine player-textdrawa.

| Ime      | Deskripcija                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | ID igrača čijem će se player-textdraw postaviti boja pozadine. |
| text     | ID player-textdrawa za postaviti boju pozadine.                |
| color    | Boja koja će biti postavljena.                                 |

## Returns

Note

Ako se PlayerTextDrawSetOutline koristi s veličinom> 0, boja obrisa odgovarat će boji koja se koristi u PlayerTextDrawBackgroundColor. Čini se da promjena vrijednosti boje mijenja boju koja se koristi u PlayerTextDrawColor

## Primjeri

```c
new PlayerText:gMyTextdraw;

public OnPlayerConnect(playerid)
{
    gMyTextdraw = CreatePlayerTextDraw(playerid, 320.0, 425.0, "Ovo je primjer textdrawa");
    PlayerTextDrawUseBox(playerid, gMyTextdraw, 1);
    PlayerTextDrawBackgroundColor(playerid, gMyTextdraw, 0xFFFFFFFF); // Postavi mu boju pozadine na bijelu
    return 1;
}
```

## Zabilješke

:::tip

Ako se PlayerTextDrawSetOutline koristi s veličinom> 0, boja obrisa odgovarat će boji koja se koristi u PlayerTextDrawBackgroundColor. Čini se da promjena vrijednosti boje mijenja boju koja se koristi u PlayerTextDrawColor

:::

## Srodne Funkcije

- [CreatePlayerTextDraw](CreatePlayerTextDraw): Kreiraj player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
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
