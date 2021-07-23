---
title: GetPlayerVehicleSeat
description: Saznaj u kojem je igrač sjedištu.
tags: ["player", "vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Saznaj u kojem je igrač sjedištu.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID player you want to get the seat of. |

## Returns

ID sjedišta u kojem je igrač. -1 ako nije u vozilu, 0 ako je vozač, 1 ako je suvozač, i 2 i 3 su zadnja sjedišta.

## Primjeri

```c
if (strcmp(cmdtext, "/myseat", true) == 0)
{
    new
        playerSeat = GetPlayerVehicleSeat(playerid);

    // Kako možete odbaciti svoje podatke.
    if (playerSeat == 128)
    {
        return SendClientMessage(playerid, 0xFFFFFFFF, "Greška nas je spriječila da vratimo ID sjedala.");
    }

    new
        message[14];

    format(message, sizeof(message), "Tvoje sjedište: %i", playerSeat);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerVehicleID](GetPlayerVehicleID): Dobij ID vozila u kojem je igrač trenutno.
- [PutPlayerInVehicle](PutPlayerInVehicle): Postavi igrača u vozilo.
