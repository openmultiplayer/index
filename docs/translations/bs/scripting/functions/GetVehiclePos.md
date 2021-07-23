---
title: GetVehiclePos
description: Dobija poziciju vozila.
tags: ["vehicle"]
---

## Deskripcija

Dobija poziciju vozila.

| Ime       | Deskripcija                                                        |
| --------- | ------------------------------------------------------------------ |
| vehicleid | ID vozila za dobiti njegovu poziciju.                              |
| &Float:x  | Float varijabla za pohraniti X kordinatu, proslijeđeno referencom. |
| &Float:y  | Float varijabla za pohraniti Y kordinatu, proslijeđeno referencom. |
| &Float:z  | Float varijabla za pohraniti Z kordinatu, proslijeđeno referencom. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Navedeno vozilo ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehpos", true) == 0)
     {
          new
               playerVehicle;
          playerVehicle = GetPlayerVehicleID(playerid);

          // ako je playerVehicle jednako 0
          if (!playerVehicle)
          {
               return SendClientMessage(playerid, -1, "Nisi u vozilu!");
          }

          new
               Float: vehX, Float: vehY, Float: vehZ,
               clientMessage[96];

          GetVehiclePos(playerVehicle, vehX, vehY, vehZ);
          format(clientMessage, sizeof(clientMessage), "Trenutna pozicija vozila je: %f, %f, %f", vehX, vehY, vehZ);
          SendClientMessage(playerid, 0xFFFFFFFF, clientMessage);
          return 1;
     }

     return 0;
}
```

## Srodne Funkcije

- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Dobij razmak između vozila i tačke.
- [SetVehiclePos](SetVehiclePos): Postavi poziciju vozila.
- [GetVehicleZAngle](GetVehicleZAngle): Provjerite trenutni ugao vozila.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Nabavite rotaciju kvaderiona vozila.
