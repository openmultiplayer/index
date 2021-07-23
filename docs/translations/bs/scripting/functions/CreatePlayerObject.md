---
title: CreatePlayerObject
description: Kreira objekat koji će biti vidljiv samo jednom igraču.
tags: ["player"]
---

## Deskripcija

Kreira objekat koji će biti vidljiv samo jednom igraču.

| Ime                | Deskripcija                                                                                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid           | ID igrača za kojeg se kreira objekat.                                                                                                                                                                                                                                                                      |
| modelid            | Model za kreirati.                                                                                                                                                                                                                                                                                         |
| Float:X            | X kordinata za kreirati ovjekat.                                                                                                                                                                                                                                                                           |
| Float:Y            | Y kordinata za kreirati ovjekat.                                                                                                                                                                                                                                                                           |
| Float:Z            | Z kordinata za kreirati ovjekat.                                                                                                                                                                                                                                                                           |
| Float:rX           | X rotacija objekta.                                                                                                                                                                                                                                                                                        |
| Float:rY           | Y rotacija objekta.                                                                                                                                                                                                                                                                                        |
| Float:rZ           | Z rotacija objekta.                                                                                                                                                                                                                                                                                        |
| Float:DrawDistance | Udaljenost s koje će se igračima prikazati predmeti. 0.0 će objekt prikazati na zadanoj udaljenosti. Ako izostavite ovaj parametar, uzrokovat će se prikazivanje objekata na zadanoj udaljenosti. Maksimalna korisna udaljenost je 300 u verzijama prije 0,3x, u kojima udaljenost može biti neograničena. |

## Returns

ID objekta koji je kreiran, ili INVALID_OBJECT_ID ako je dostignut limit objekata (MAX_OBJECTS).

## Primjeri

```c
new gObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0, 0, 96);

    // Or alternativno, koristeći parametar DrawDistance da ga prikažete što dalje:
    gObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0, 0, 96, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gObject[playerid]);
    return 1;
}
```

## Zabilješke

:::warning

Parametar 'DrawDistance' dodan je u 0.3b. Mora se izostaviti u skriptama za starije verzije SA: MP.

:::

## Srodne Funkcije

- [DestroyPlayerObject](DestroyPlayerObject): Destroy a player object.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
