---
title: SetPlayerObjectRot
description: Postavi rotaciju player objekta na X, Y i Z osi.
tags: ["player"]
---

## Deskripcija

Postavi rotaciju player objekta na X, Y i Z osi.

| Ime        | Deskripcija                                      |
| ---------- | ------------------------------------------------ |
| playerid   | ID igrača čiji se player objekat treba rotirati. |
| objectid   | ID player-objekta za rotirati.                   |
| Float:RotX | X rotacija za postaviti.                         |
| Float:RotY | Y rotacija za postaviti.                         |
| Float:RotZ | Z rotacija za postaviti.                         |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Primjeri

```c
SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ);
```

## Zabilješke

:::tip

Da glatko rotirate objekat, pogledaj [MovePlayerObject](MovePlayerObject).

:::

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
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
