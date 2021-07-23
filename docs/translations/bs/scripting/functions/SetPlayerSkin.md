---
title: SetPlayerSkin
description: Postavi skin igrača.
tags: ["player"]
---

## Deskripcija

Postavi skin igrača. Igračev skin je njegov model karaktera.

| Ime      | Deskripcija                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID igrača za postaviti skin.                         |
| skinid   | [Skin](../resources/skins) kojeg će igrač koristiti. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

Zapamti da je 'success' (uspješno) prijavljeno i kada je ID skina nevažeći (nije 0-311, ili 74), ali skin će biti postavljen na ID 0 (CJ).

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/fireman", true) == 0)
    {
        // Postavi skin igrača na ID 277, a to je vatrogasac.
        SetPlayerSkin(playerid, 277);
        return 1;
    }
    return 0;
}

SetPlayerSkinFix(playerid, skinid)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        Float:tmpPos[4],
        vehicleid = GetPlayerVehicleID(playerid),
        seatid = GetPlayerVehicleSeat(playerid);

    GetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
    GetPlayerFacingAngle(playerid, tmpPos[3]);

    // Ako je ID skina nevažeći, manji od 0 ili veći od 311 ili jednak 74 (nevažeći skin), onda ne radi ništa
    if (0 > skinid > 311 || skinid == 74)
    {
        return 0;
    }

    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_DUCK)
    {
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // sprečavanje smrzavanja - neobavezno
        return SetPlayerSkin(playerid, skinid);
    }
    else if (IsPlayerInAnyVehicle(playerid))
    {
        new
            tmp;

        RemovePlayerFromVehicle(playerid);
        SetPlayerPos(playerid, tmpPos[0], tmpPos[1], tmpPos[2]);
        SetPlayerFacingAngle(playerid, tmpPos[3]);
        TogglePlayerControllable(playerid, true); // sprečavanje smrzavanja - bitno! zbog izvođenja animacija izlaska iz vozila
        tmp = SetPlayerSkin(playerid, skinid);
        PutPlayerInVehicle(playerid, vehicleid, (seatid == 128) ? 0 : seatid);
        return tmp;
    }
    else
    {
        return SetPlayerSkin(playerid, skinid);
    }
}
```

## Zabilješke

:::warning

Poznati Bug(ovi): Ako je igračeva koža postavljena kada čuči, u vozilu ili izvodi određene animacije, postat će smrznuti ili na neki drugi način uklonjeni. To se može popraviti pomoću TogglePlayerControllable. Igrači se mogu otkriti kako su čučali preko GetPlayerSpecialAction (SPECIAL_ACTION_DUCK). Ostali igrači oko igrača mogu se srušiti ako je u vozilu ili ako ulazi/izlazi iz vozila. Postavljanje kože igrača kada je mrtav može srušiti igrače oko njega. Prekidi sjedeći na biciklima.

:::

## Srodne Funkcije

- [GetPlayerSkin](GetPlayerSkin): Dobij igračev trenutni skin.
- [SetSpawnInfo](SetSpawnInfo): Postavi postavke spawnovanja za igrača.
