---
title: PlayerTextDrawSetString
description: Promijeni tekst player-textdrawa.
tags: ["player", "textdraw", "playertextdraw"]
---

:::warning

Ova je značajka (player-textdraws) dodana u SA-MP 0.3e i neće raditi u ranijim verzijama!

:::

## Deskripcija

Promijeni tekst player-textdrawa.

| Ime      | Deskripcija                                 |
| -------- | ------------------------------------------- |
| playerid | ID igrača čijem textdrawu se mijenja tekst. |
| text     | ID textdrawa za promijeniti.                |
| string[] | Novi string za textdraw.                    |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new pVehicleHealthTimer[MAX_PLAYERS];
new PlayerText:pVehicleHealthTD[MAX_PLAYERS];

public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == 2) // Ušao u vozilo kao vozač
    {
        pVehicleHealthTD[playerid] = CreatePlayerTextDraw(playerid, x, y, " ");
        PlayerTextDrawShow(playerid, pVehicleHealthTD[playerid]);

        // Postavite tajmer za ažuriranje textdrawa svake sekunde
        pVehicleHealthTimer[playerid] = SetTimerEx("vhealth_td_update", 1000, true, "i", playerid);
    }
    if (oldstate == 2)
    {
        KillTimer(pVehicleHealthTD[playerid]);
        PlayerTextDrawDestroy(playerid, pVehicleHealthTD[playerid]);
    }
}

public vhealth_td_update(playerid)
{
    new tdstring[32], Float:vHealth;
    GetVehicleHealth(GetPlayerVehicleID(playerid), vHealth);

    format(tdstring, sizeof(tdstring), "Vehicle Health: %0f", vHealth);

    PlayerTextDrawSetString(playerid, pVehicleHealthTD[playerid], tdstring); // <<< Ažurirajte tekst da biste prikazali stanje vozila
    return 1;
}

/*
NOTE: Ovaj primjer je isključivo u demonstracijske svrhe i nije zajamčeno da će raditi u igri. To je samo za prikaz upotrebe funkcije PlayerTextDrawSetString.
*/
```

## Zabilješke

:::tip

Ne morate ponovo prikazivati ​​TextDraw da biste primijenili promjene.

:::

:::warning

Postoje ograničenja dužine stringova za textdraw! Pogledajte Ograničenja za više informacija.

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
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): Postavi sjenu na player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): Omogući/onemogući korišćenje box-a za player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): Prikaži player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): Sakrij player-textdraw.
