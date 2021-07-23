---
title: GetVehicleParamsCarWindows
description: Omogućava vam da doznate trenutno stanje prozora vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućava vam da doznate trenutno stanje prozora vozila.

| Ime        | Deskripcija                                                           |
| ---------- | --------------------------------------------------------------------- |
| vehicleid  | ID Vozila                                                             |
| &driver    | Cijeli broj za pohraniti stanje vozačevog prozora.                    |
| &passenger | Cijeli broj za pohraniti stanje suvozačevog prozora.                  |
| &backleft  | Cijeli broj za pohraniti stanje lijevog pozadi prozora (ako postoji). |
| &backright | Cijeli broj za pohraniti stanje desnog pozadi prozora (ako postoji).  |

## Returns

Stanje prozora vozila pohranjeno je u navedenim varijablama.

## Zabilješke

:::tip

Vrijednosti vraćene u svakoj varijabli su kao:

-1: Stanje prozora nije postavljeno (općenito zatvoreno, osim ako nije izričito postavljeno na -1) 0: Otvoren 1: Zatvoren

:::

## Srodne Funkcije

- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Otvori i zatvori prozore vozila.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): Doznaj trenutno stanje vrata od vozila
- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Otvori i zatvori vrata vozila.
