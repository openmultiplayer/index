---
title: SetVehicleAngularVelocity
description: Postavlja ugaonu brzinu X, Y i Z vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

:::info

Ova funkcija je u _svjetskom_ prostoru a ne u _lokalnom_ prostoru. Ako želite izvršiti prilagodbe ugaone brzine lokalnog prostora, morate primijeniti matricu rotacije na temelju [quat rotacije vozila](GetVehicleRotationQuat).

:::

## Deskripcija

Postavlja ugaonu brzinu X, Y i Z vozila.

| Ime       | Deskripcija                      |
| --------- | -------------------------------- |
| vehicleid | ID vozila za postaviti brzinu.   |
| Float:X   | Iznos brzine u ugaonom X smjeru. |
| Float:Y   | Iznos brzine u ugaonom Y smjeru. |
| Float:Z   | Iznos brzine u ugaonom Z smjeru. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/spin", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);
        }
        return 1;
    }
}
```

## Zabilješke

:::warning

Ova funkcija nema utjecaja na prazna vozila i ne utječe na vozove.

:::

## Srodne Funkcije

- [SetVehicleVelocity](SetVehicleVelocity): Postavi brzinu vozila.
- [GetVehicleVelocity](GetVehicleVelocity): Dobij brzinu vozila.
