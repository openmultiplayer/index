---
title: GetVehiclePoolSize
description: Dobiva najveći id vozila koji se trenutno koristi na serveru.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobiva najveći id vozila koji se trenutno koristi na serveru.

## Primjeri

```c
RepairAllVehicles()
{
    // vehicleids počinje sa 1
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```

## Srodne Funkcije

- [GetPlayerPoolSize](GetPlayerPoolSize): Dobija najviši playerid povezan na server.
