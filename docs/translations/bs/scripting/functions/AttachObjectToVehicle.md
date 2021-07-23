---
title: AttachObjectToVehicle
description: Prikvači objekat za vozilo.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Prikvači objekat za vozilo.

| Ime           | Deskripcija                                                                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid      | ID objekta kojeg želite prikvačiti za vozilo. Zapamtite da je ovo ID objekta, ne modela. Objekat prvo mora biti kreiran preko CreateObject.   |
| vehicleid     | ID vozila za koje želite prikvačiti objekat.                                                                                                  |
| Float:OffsetX | Osa X pomaknuta od vozila do objekta za prikvačiti.                                                                                           |
| Float:OffsetY | Osa Y pomaknuta od vozila do objekta za prikvačiti.                                                                                           |
| Float:OffsetZ | Osa Z pomaknuta od vozila do objekta za prikvačiti.                                                                                           |
| Float:RotX    | Pomak X rotacije za objekt.                                                                                                                   |
| Float:RotY    | Pomak Y rotacije za objekt.                                                                                                                   |
| Float:RotZ    | Pomak Z rotacije za objekt.                                                                                                                   |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## Zabilješke

:::tip

Objekat prvobitno mora biti kreiran.

:::

:::warning

Kada se vozilo uništi ili respawnuje, prikvačeni predmeti se neće uništiti s njim; ostat će stacionarni na mjestu na kojem je vozilo nestalo i biti ponovno će se prikvačiti na sljedeće vozilo kako bi zatražili ID vozila na koje su predmeti prikvačeni.

:::

## Related Functions

- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
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
