---
title: SetVehicleZAngle
description: Postavi Z rotaciju (yaw) vozila.
tags: ["vehicle"]
---

## Deskripcija

Postavi Z rotaciju (yaw) vozila.

| Ime           | Deskripcija                      |
| ------------- | -------------------------------- |
| vehicleid     | ID vozila za postaviti rotaciju. |
| Float:z_angle | Z ugao za postaviti.             |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeno vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new
            currentVehicle,
            Float: angle;
        currentVehicle = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(currentVehicle, angle);
        SetVehicleZAngle(currentVehicle, angle);
        SendClientMessage(playerid, 0xFFFFFFFF, "Tvoje vozilo je prevrnuto.");
        return 1;
    }

     return 0;
}
```

## Zabilješke

:::**tip**

Kada se koristi ova funkcija, okretanje vozila X i Y (nagib i kotrljanje) resetirat će se. Rotacije X i Y ne mogu se postaviti. Ova funkcija ne radi na neuzetim vozilima (vjeruje se da je to GTA ograničenje).

:::

## Srodne Funkcije

- [GetVehicleZAngle](GetVehicleZAngle): Provjerite trenutni ugao vozila.
- [SetVehiclePos](SetVehiclePos): Postavi poziciju vozila.
