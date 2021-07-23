---
title: DestroyPlayerObject
description: Uništava objekat igrača kreiran sa CreatePlayerObject.
tags: ["player"]
---

## Deskripcija

Uništava objekat igrača kreiran sa CreatePlayerObject.

| Ime      | Deskripcija                                                |
| -------- | ---------------------------------------------------------- |
| playerid | ID igrača za kojeg se uništava objekat                     |
| objectid | ID objekta koji se uništava. Kreiran sa CreatePlayerObject |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
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
