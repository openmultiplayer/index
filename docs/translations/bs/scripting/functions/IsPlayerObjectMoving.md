---
title: IsPlayerObjectMoving
description: Provjerava ako se dati player objectid pomjera.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava ako se dati player objectid pomjera.

| Ime      | Deskripcija                                                |
| -------- | ---------------------------------------------------------- |
| playerid | ID igrača čiji je player-objekat provjeren.                |
| objectid | ID player objectid kojeg želite provjeriti da li se kreće. |

## Returns

1 ako se player obejkat kreće, 0 ako ne.

## Primjeri

```c
if (IsPlayerObjectMoving(playerid, objectid))
{
    StopPlayerObject(playerid, objectid);
}
```

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachObjectToPlayer): Prikvači player objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [IsObjectMoving](IsObjectMoving): Check if the object is moving.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved): Pozvano kada se player-objekat prestane kretati.
