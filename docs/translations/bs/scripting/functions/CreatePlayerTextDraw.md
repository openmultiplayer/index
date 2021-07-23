---
title: CreatePlayerTextDraw
description: Kreira textdraw za jednog igrača.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Kreira textdraw za jednog igrača. Ovo se može koristiti za zaobići limit globalnih textdraw-ova.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača za kojeg se kreira textdraw. |
| Float:x  | X-kordinata                            |
| Float:y  | Y-kordinata                            |
| text[]   | Tekst u textdraw-u.                    |

## Returns

ID kreiranog textdraw-a.

## Primjeri

```c
// Ova varijabla je korištena da bi smo sačuvali ID textdraw-a
// kako bismo ga mogli koristiti kroz skriptu
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Prvo, kreiramo textdraw
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Dobrodosli na moj SA-MP server");

    // Sada ga prikažemo
    PlayerTextDrawShow(playerid, welcomeText[playerid]);
}
```

## Zabilješke

:::tip

Player-textdraws se automatski unište kada se igrač diskonektuje.

:::

:::warning

Kodovi mapiranja tipkovnice (kao što je ~k~~VEHICLE_ENTER_EXIT~ Ne radi duže od 255. znaka).

:::

## Srodne Funkcije

- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): Uništi player-textdraw.
- [PlayerTextDrawColor](PlayerTextDrawColor): Postavi boju teksta u player-textdrawu.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): Postavi boju box-a od player-textdrawa.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): Postavi boju pozadine player-textdrawa.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): Postavi poravnanje player-textdrawa.
- [PlayerTextDrawFont](PlayerTextDrawFont): Postavi font player-textdrawa.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): Postavi veličinu slova u tekstu player-textdrawa.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): Postavi veličinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): (Ne) Koristi outline za player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): (Ne) Koristi box na player-textdrawu.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): Postavi tekst player-textdrawa.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
