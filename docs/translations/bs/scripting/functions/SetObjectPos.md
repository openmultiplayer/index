---
title: SetObjectPos
description: Promijeni poziciju objekta.
tags: []
---

## Deskripcija

Promijeni poziciju objekta.

| Ime      | Deskripcija                                                          |
| -------- | -------------------------------------------------------------------- |
| objectid | ID objekta za postaviti poziciju. Returnovan/vraćen od CreateObject. |
| Float:X  | X kordinata za pozicionirati objekat.                                |
| Float:Y  | Y kordinata za pozicionirati objekat.                                |
| Float:Z  | Z kordinata za pozicionirati objekat.                                |

## Returns

Ova funkcija uvijek returna (vraća) 1, even if Navedeni objekat ne postoji.

## Primjeri

```c
SetObjectPos(objectid, 2001.195679, 1547.113892, 14.283400);
```

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
