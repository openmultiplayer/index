---
title: AttachObjectToPlayer
description: Prikvači objekat za igrača.
tags: ["player"]
---

## Deskripcija

Prikvači objekat za igrača.

| Ime           | Deskripcija                                                        |
| ------------- | ------------------------------------------------------------------ |
| objectid      | ID objekta kojeg želite prikvačiti za igrača.                      |
| playerid      | ID igrača za kojeg žečite prikvačiti objekat.                      |
| Float:OffsetX | Razdaljina između igrača i objekta za prikvačiti u X smjeru.       |
| Float:OffsetY | Razdaljina između igrača i objekta za prikvačiti u Y smjeru.       |
| Float:OffsetZ | Razdaljina između igrača i objekta za prikvačiti u Z smjeru.       |
| Float:RotX    | X rotacija između objekta i igrača za prikvačiti.                  |
| Float:RotY    | Y rotacija između objekta i igrača za prikvačiti.                  |
| Float:RotZ    | Z rotacija između objekta i igrača za prikvačiti.                  |

## Returns

Ova funkcija uvijek returna(vraća) 0.

## Primjeri

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## Srodne Funkcije

- [AttachObjectToVehicle](AttachObjectToVehicle): Prikvači objekat za vozilo.
- [AttachObjectToObject](AttachObjectToObject): Prikvači objekat za objekat.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player-objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjerava da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat samo za jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player-objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjerava da li je određeni player-objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player-objekat od kretanja.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player-objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player-objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player-objekta.
