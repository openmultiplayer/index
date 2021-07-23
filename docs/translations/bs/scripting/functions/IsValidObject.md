---
title: IsValidObject
description: Provjerava da li je navedeni ID objekta postojeći.
tags: []
---

## Deskripcija

Provjerava da li je navedeni ID objekta postojeći.

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| objectid | ID objekta za provjeriti postojanje. |

## Returns

1: Objekat postoji.

0: Objekat ne postoji.

## Primjeri

```c
if (IsValidObject(objectid))
{
    DestroyObject(objectid);
}
```

## Zabilješke

:::warning

Ovo je provjera da li objekt postoji, a ne da li je model valjan.

:::

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [MoveObject](MoveObject): Pomjeri objekat.
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
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
