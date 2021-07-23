---
title: GetVehicleHealth
description: Dobij healthe vozila.
tags: ["vehicle"]
---

## Deskripcija

Dobij healthe vozila.

| Ime           | Deskripcija                                                          |
| ------------- | -------------------------------------------------------------------- |
| vehicleid     | ID vozila za dobiti healthe.                                         |
| &Float:health | Float varijabla za pohraniti healthe vozila, proslijeđeno referencom |

## Returns

1 - uspješno

0 - greška (nevažeći ID vozila).

Healthi vozila su pohranjeni u varijablama, ne u return vrijednosti.

## Primjeri

```c
if (strcmp(cmdtext, "/repair", true) == 0)
{
    new
        Float: vehicleHealth,
        playerVehicleId = GetPlayerVehicleID(playerid);

    GetVehicleHealth(playerVehicleId, vehicleHealth);

    if (vehicleHealth > 500)
    {
        return SendClientMessage(playerid, COLOR_RED, "Vozilo ne treba popravak!");
    }

    SetVehicleHealth(playerVehicleId, 1000);
    SendClientMessage(playerid, COLOR_GREEN, "Vozilo popravljeno!");
}
```

## Zabilješke

:::tip

Potpuno health stanje vozila je 1000, međutim moguće su veće vrijednosti i povećavaju health stanje vozila. Za više informacija o health vrijednostima pogledajte [ovdje](../resources/vehiclehealth).

:::

:::tip

Vozilo se zapali kad mu je health ispod 250. Eksplodirat će nekoliko sekundi kasnije.

:::

## Srodne Funkcije

- [SetVehicleHealth](SetVehicleHealth): Postavi helte vozila.
- [GetPlayerHealth](GetPlayerHealth): Doznaj koliko healtha ima igrač.
- [GetPlayerArmour](GetPlayerArmour): Otkrijte koliko armora ima igrač.
