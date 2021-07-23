---
title: SetVehiclePos
description: Postavlja poziciju vozila.
tags: ["vehicle"]
---

## Deskripcija

Postavlja poziciju vozila.

| Ime       | Deskripcija                                     |
| --------- | ----------------------------------------------- |
| vehicleid | ID vozila kojem želite postaviti novu poziciju. |
| Float:x   | X kordinata na koju treba pozicirati vozilo.    |
| Float:y   | Y kordinata na koju treba pozicirati vozilo.    |
| Float:z   | Z kordinata na koju treba pozicirati vozilo.    |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeno vozilo ne postoji.

## Primjeri

```c
// Postavi vozilo igrača na kordinatama 0, 0, 3 (centar SA)
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0, 0, 3);
```

## Zabilješke

:::warning

Prazno vozilo neće padati nakon što se bude teleportovalo u zrak.

:::

## Srodne Funkcije

- [SetPlayerPos](SetPlayerPos): Postavite poziciju igrača.
- [GetVehiclePos](GetVehiclePos): Doznajte položaj vozila.
- [SetVehicleZAngle](SetVehicleZAngle): Postavi smjer vozila.
