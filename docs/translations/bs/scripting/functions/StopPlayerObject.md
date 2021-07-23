---
title: StopPlayerObject
description: Zaustavi player-object koji se kreće nakon što se MovePlayerObject koristio.
tags: ["player"]
---

## Deskripcija

Zaustavi player-object koji se kreće nakon što se MovePlayerObject koristio.

| Ime      | Deskripcija                                    |
| -------- | ---------------------------------------------- |
| playerid | ID igrača čiji player-object treba zaustaviti. |
| objectid | ID player-object-a za zaustaviti.              |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
StopPlayerObject(playerid, objectid);
```

## Srodne Funkcije

- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Provjeri da li se player objekat kreće.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [IsObjectMoving](IsObjectMoving): Provjeri da li se objekat kreće.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
