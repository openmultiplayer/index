---
title: GetVehicleParamsCarDoors
description: Omogućava vam vraćanje trenutnog stanja vrata od vozila.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućava vam vraćanje trenutnog stanja vrata od vozila.

| Ime        | Deskripcija                                                        |
| ---------- | ------------------------------------------------------------------ |
| vehicleid  | ID vozila                                                          |
| &driver    | Cijeli broj za pohraniti stanje vozačeva vrata.                    |
| &passenger | Cijeli broj za pohraniti stanje suvozačeva vrata.                  |
| &backleft  | Cijeli broj za pohraniti stanje lijeva pozadi vrata (ako postoje). |
| &backright | Cijeli broj za pohraniti stanje desna pozadi vrata (ako postoje).  |

## Returns

Stanje vrata vozila je pohranjeno u navedenim varijablama.

## Zabilješke

:::tip

Vrijednosti vraćene u svakoj varijabli su kao:

-1: Stanje vrata nije postavljeno 1: Otvorena 0: Zatvorena

:::

## Srodne Funkcije

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): Otvori i zatvori vrata vozila.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Otvori i zatvori prozore vozila.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): Doznaj trenutno stanje prozora vozila.
