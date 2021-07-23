---
title: SetPlayerObjectPos
description: Postavlja poziciju player-objekta u navedenim kordinatama.
tags: ["player"]
---

## Deskripcija

Postavlja poziciju player-objekta u navedenim kordinatama.

| Ime      | Deskripcija                                                                       |
| -------- | --------------------------------------------------------------------------------- |
| playerid | ID čijem će se player-objektu promijeniti pozicija.                               |
| objectid | ID player-objekta za postaviti poziciju. Returnovan/vraćen od CreatePlayerObject. |
| Float:X  | X kordinata za staviti objekat.                                                   |
| Float:Y  | Y kordinata za staviti objekat.                                                   |
| Float:Z  | Z kordinata za staviti objekat.                                                   |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač i/ili objekat ne postoje.

## Primjeri

```c
new obj = CreatePlayerObject(...);

// Kasnije

SetPlayerObjectPos(playerid, obj, 2001.195679, 1547.113892, 14.283400);
```

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
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
