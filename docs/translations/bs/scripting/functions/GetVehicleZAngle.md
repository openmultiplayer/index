---
title: GetVehicleZAngle
description: Nabavite rotaciju vozilo na Z osi (nagib).
tags: ["vehicle"]
---

## Deskripcija

Nabavite rotaciju vozilo na Z osi (nagib).

| Ime            | Deskripcija                                                       |
| -------------- | ----------------------------------------------------------------- |
| vehicleid      | ID vozila za dobiti rotaciju na Z osi.                            |
| &Float:z_angle | Float varijabla za pohraniti Z rotaciju, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da vozilo ne postoji.

Rotacija vozila pohranjena je u navedenoj varijabli.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehrot", true) == 0)
     {
          new
               currentVeh,
               Float: rotZ,
               clientMessage[40];

          currentVeh = GetPlayerVehicleID(playerid);
          GetVehicleZAngle(currentVeh, rotZ);
          format(clientMessage, sizeof(clientMessage), "Trenutna rotacija vozila je: %.0f", rotZ);
          SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);

          return 1;
     }

     return 0;
}
```

## Srodne Funkcije

- [GetVehicleRotationQuat](GetVehicleRotationQuat): Dobij kvaternionsku rotaciju vozila.
- [SetVehicleZAngle](SetVehicleZAngle): Postavi smjer vozila.
- [GetVehiclePos](GetVehiclePos): Doznajte položaj vozila.
- [GetPlayerFacingAngle](GetPlayerFacingAngle): Provjeri gdje igrač gleda.
