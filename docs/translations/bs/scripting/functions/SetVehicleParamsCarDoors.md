---
title: SetVehicleParamsCarDoors
description: Dozvoljava ti da otvoriš i zatvoriš vrata vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dozvoljava ti da otvoriš i zatvoriš vrata vozila.

| Ime       | Deskripcija                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| vehicleid | ID vozila za postaviti stanje vrata.                                          |
| driver    | Stanje vozačevih vrata. 0 za otvoriti, 1 za zatvoriti.                        |
| passenger | Stanje suvozačevih vrata. 0 za otvoriti, 1 za zatvoriti.                      |
| backleft  | Stanje lijevih pozadi vrata (ako je dostupno). 0 za otvoriti, 1 za zatvoriti. |
| backright | Stanje desnih pozadi vrata (ako je dostupno). 0 za otvoriti, 1 za zatvoriti.  |

## Returns

[edit]

## Srodne Funkcije

- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): Doznaj trenutno stanje vrata od vozila
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Otvori i zatvori prozore vozila.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): Doznaj trenutno stanje prozora vozila.
