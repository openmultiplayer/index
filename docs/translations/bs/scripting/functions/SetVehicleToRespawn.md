---
title: SetVehicleToRespawn
description: Postavlja vozila nazad na poziciju gdje je kreirano.
tags: ["vehicle"]
---

## Deskripcija

Postavlja vozila nazad na poziciju gdje je kreirano.

| Ime       | Deskripcija          |
| --------- | -------------------- |
| vehicleid | ID vozila za respawn |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Vozilo ne postoji.

## Primjeri

```c
// Respawnuje prvo vozilo.
SetVehicleToRespawn(1);
for(new i = GetVehiclePoolSize(); i > 0; i--)
{
    SetVehicleToRespawn(i);
}
```

## Srodne Funkcije

- [CreateVehicle](CreateVehicle): Kreiraj vozilo.
- [DestroyVehicle](DestroyVehicle): Uništi vozilo.
