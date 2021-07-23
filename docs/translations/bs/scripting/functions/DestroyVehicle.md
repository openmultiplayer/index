---
title: DestroyVehicle
description: Uništi vozilo.
tags: ["vehicle"]
---

## Deskripcija

Uništi vozilo. Istog će trena nestati.

| Ime       | Deskripcija            |
| --------- | ---------------------- |
| vehicleid | ID vozila za uništiti  |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);
          DestroyVehicle(vehicleid);
          return 1;
     }

     return 0;
}
```

## Srodne Funkcije

- [CreateVehicle](CreateVehicle): Kreiraj vozilo.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Izbaci igrača iz njegovog vozila.
- [SetVehicleToRespawn](SetVehicleToRespawn): Respawnuj vozilo.
