---
title: SetVehicleParamsCarWindows
description: Dozvoljava ti da otvoriš i zatvoriš prozore vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dozvoljava ti da otvoriš i zatvoriš prozore vozila.

| Ime       | Deskripcija                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| vehicleid | ID vozila za postaviti stanje prozora.                                          |
| driver    | Stanje vozačevog prozora. 0 za otvoriti, 1 za zatvoriti.                        |
| passenger | Stanje suvozačevog prozora. 0 za otvoriti, 1 za zatvoriti.                      |
| backleft  | Stanje lijevog pozadi prozora (ako je dostupno). 0 za otvoriti, 1 za zatvoriti. |
| backright | Stanje desnog pozadi prozora (ako je dostupno). 0 za otvoriti, 1 za zatvoriti.  |

## Returns

[edit]

## Srodne Funkcije

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Otvori i zatvori vrata vozila.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): Doznaj trenutno stanje vrata od vozila
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): Doznaj trenutno stanje prozora vozila.
