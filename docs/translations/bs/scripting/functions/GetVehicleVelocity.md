---
title: GetVehicleVelocity
description: Dobij brzinu vozila na X,Y i Z osi.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij brzinu vozila na X,Y i Z osi.

| Ime       | Deskripcija                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| vehicleid | ID vozila za dobiti brzinu.                                                      |
| &Float:x  | Float varijabla za pohraniti the brzinu vozila u X osi, proslijeđeno referencom. |
| &Float:y  | Float varijabla za pohraniti the brzinu vozila u Y osi, proslijeđeno referencom. |
| &Float:z  | Float varijabla za pohraniti the brzinu vozila u Z osi, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeno vozilo ne postoji.

Brzina vozila pohranjena je u navedenim varijablama.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext) && IsPlayerInAnyVehicle(playerid))
    {
        new
            Float: vehVelocity[3],
            clientMessage[80];

        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        format(clientMessage, sizeof(clientMessage), "Ideš brzinom od: X%f, Y%f, Z%f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Ova funkcija se može koristiti za pronalaženje brzine vozila (km/h, m/s ili mph). Za više informacija pogledajte ovdje.

:::

## Srodne Funkcije

- [GetPlayerVelocity](GetPlayerVelocity): Dobij brzinu igrača.
- [SetVehicleVelocity](SetVehicleVelocity): Postavi brzinu vozila.
- [SetPlayerVelocity](SetPlayerVelocity): Postavi brzinu igrača.
