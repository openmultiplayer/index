---
title: AttachPlayerObjectToVehicle
description: Prikvači player objekat za vozilo.
tags: ["player", "vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Attach a player object to a vehicle.

| Ime           | Deskripcija                                      |
| ------------- | ------------------------------------------------ |
| playerid      | ID igrača za kojeg je kreiran objekat.           |
| objectid      | ID objekta kojeg želite prikvačiti za vozilo.    |
| vehicleid     | ID vozila za kojeg želite prikvačiti objekat.    |
| Float:OffsetX | Pomak položaja X za pričvršćivanje.              |
| Float:OffsetY | Pomak položaja Y za pričvršćivanje.              |
| Float:OffsetZ | Pomak položaja Z za pričvršćivanje.              |
| Float:RotX    | Pomak rotacije X za pričvršćivanje.              |
| Float:RotY    | Pomak rotacije Y za pričvršćivanje.              |
| Float:RotZ    | Pomak rotacije Z za pričvršćivanje.              |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // Ako igrač uđe u vozilo
    {
        // Prikvači veliku kravu
        new cow_object = CreatePlayerObject(playerid, 16442, 0, 0, 0, 0, 0, 0);

        AttachPlayerObjectToVehicle(playerid, cow_object, GetPlayerVehicleID(playerid), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
}
```

## Zabilješke

:::tip

Morate da kreirate objekat prije nego pokušate da ga privkačite za vozilo.

:::

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Napravi objekat samo za jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjerava da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
