---
title: GetVehicleDistanceFromPoint
description: Ova se funkcija može koristiti za izračunavanje udaljenosti (kao float) između vozila i druge kordinate na mapi.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c R3 i ne radi u nižim verzijama!

:::

## Deskripcija

Ova se funkcija može koristiti za izračunavanje udaljenosti (kao float) između vozila i druge kordinate na mapi. Ovo može biti korisno za provjeravanje koliko je vozilo daleko od lokacije.

| Ime       | Deskripcija                         |
| --------- | ----------------------------------- |
| vehicleid | ID vozila za izračunati udaljenost. |
| Float:X   | X kordinata na mapi.                |
| Float:Y   | Y kordinata na mapi.                |
| Float:Z   | Z kordinata na mapi.                |

## Returns

Float koji sadrži udaljenost od navedene tačke u kordinatama.

## Primjeri

```c
/* kada igrač napiše 'vendingmachine' u chat box, vidjeti će ovo.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "vendingmachine", true) == 0)
    {
        new
            Float: fDistance = GetVehicleDistanceFromPoint(GetPlayerVehicleID(playerid), 237.9, 115.6, 1010.2),
            szMessage[44];

        format(szMessage, sizeof(szMessage), "Ti si %f daleko od vending mašine.", fDistance);
        SendClientMessage(playerid, 0xA9C4E4FF, szMessage);
    }
    return 0;
}
```

## Srodne Funkcije

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Dobij razmak između igrača i tačke.
- [GetVehiclePos](GetVehiclePos): Doznajte položaj vozila.
