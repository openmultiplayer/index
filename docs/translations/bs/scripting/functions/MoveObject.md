---
title: MoveObject
description: Premjestite objekt na novi položaj zadanom brzinom.
tags: []
---

## Deskripcija

Premjestite objekt na novi položaj zadanom brzinom. Igrači/vozila će 'surfati' objektom dok se kreće.

| Ime         | Deskripcija                                            |
| ----------- | ------------------------------------------------------ |
| objectid    | ID objekta za pomjeriti.                               |
| Float:X     | X kordinata za pomjeriti objekat.                      |
| Float:Y     | Y kordinata za pomjeriti objekat.                      |
| Float:Z     | Z kordinata za pomjeriti objekat.                      |
| Float:Speed | Brzina kojom se objekt premješta (jedinice u sekundi). |
| Float:RotX  | FINALNA X rotacija (neobavezna).                       |
| Float:RotY  | FINALNA Y rotacija (neobavezna).                       |
| Float:RotZ  | FINALNA Z rotacija (neobavezna).                       |

## Returns

Vrijeme koje će biti potrebno da se objekt pomakne u milisekundama.

## Primjeri

```c
new gAirportGate; // Negdje na vrhu skripte

public OnGameModeInit()
{
    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/moveobject", true) == 0)
    {
        new
            string[50],
            moveTime = MoveObject(gAirportGate, 0, 0, 10, 2.00);

        format(string, sizeof(string), "Objekat će završiti svoje pomjeranje za %d milieskundi", moveTime);
        SendClientMessage(playerid, 0xFF000000, string);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Ovu funkciju možete koristiti za nesmetano okretanje objekata. Međutim, da bi se to postiglo, objekt se također mora premjestiti. Navedena rotacija je rotacija koju će objekt imati nakon kretanja. Stoga se objekt neće okretati kada se ne primijeni nikakvo kretanje. Za primjer skripte pogledajte filtrirnu datoteku ferriswheel.pwn koju je izradio Kye uključen u paket poslužitelja (SA-MP 0.3d i noviji). Da biste u potpunosti razumjeli gornju napomenu, možete (ali ne ograničavajući se na to) povećati Z poziciju za (+0,001), a zatim (-0,001) nakon ponovnog pomicanja, jer ako ne promijenite X, Y ili Z neće rotirati objekt.

:::

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [IsObjectMoving](IsObjectMoving): Provjeri da li se objekat kreće.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Provjeri da li se player objekat kreće.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
