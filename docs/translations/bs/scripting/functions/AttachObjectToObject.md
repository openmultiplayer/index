---
title: AttachObjectToObject
description: Možete koristiti ovu funkciju da prikvačite objekat za drugi objekat.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Možete koristiti ovu funkciju da prikvačite objekat za drugi objekat. Objekti će pratiti glavni objekat.

| Ime           | Deskripcija                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| objectid      | Objekat kojeg želite prikvačiti za neki drugi.                                 |
| attachtoid    | Objekat za kojeg želite zakačiti prvi objekat.                                 |
| Float:OffsetX | Razdaljina između glavnog objekta i objekta za prikvačiti u X smjeru.          |
| Float:OffsetY | Razdaljina između glavnog objekta i objekta za prikvačiti u Y smjeru.          |
| Float:OffsetZ | Razdaljina između glavnog objekta i objekta za prikvačiti u Z smjeru.          |
| Float:RotX    | X rotacija između glavnog objekta i objekta za prikvačiti.                     |
| Float:RotY    | Y rotacija između glavnog objekta i objekta za prikvačiti.                     |
| Float:RotZ    | Z rotacija između glavnog objekta i objekta za prikvačiti.                     |
| SyncRotation  | Ako je stavljeno na 0, rotacija objectid-a se neće mijenjati sa attachtoid-em. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija nije uspjela da se izvrši. Ovo znali da prvi objekat (objectid) ne postoji. Ne postoje interne provjere da se potvrdi da li drugi objekat (attachtoid) postoji.

## Primjeri

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1);
```

## Zabilješke

:::tip

Oba objekta treba stvoriti prije pokušaja da ih prikačite. Ne postoji verzija ove funkcije player-objekta (AttachPlayerObjectToObject), što znači da je streameri neće podržati.

:::

## Srodne Funkcije

- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
- [AttachObjectToVehicle](AttachObjectToVehicle): Prikvači objekat za vozilo.
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
