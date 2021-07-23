---
title: IsValidPlayerObject
description: Provjerava da li je dati ID objekta važeći za datog igrača.
tags: ["player"]
---

## Deskripcija

Provjerava da li je dati ID objekta važeći za datog igrača.

| Ime      | Deskripcija                                  |
| -------- | -------------------------------------------- |
| playerid | ID igrača čiji igrač-objekt treba potvrditi. |
| objectid | ID objekta za potvrditi.                     |

## Returns

1 ako objekat postoji, 0 ako ne.

## Primjeri

```c
// Provjerite je li objekt valjan (postoji) prije nego što ga izbrišemo
if (IsValidPlayerObject(playerid, objectid))
{
    DestroyPlayerObject(playerid, objectid);
}
```

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
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
