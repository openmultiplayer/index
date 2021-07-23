---
title: IsPlayerInVehicle
description: Provjerava da li je igrač u određenom vozilu.
tags: ["player", "vehicle"]
---

## Deskripcija

Provjerava da li je igrač u određenom vozilu.

| Ime       | Deskripcija                        |
| --------- | ---------------------------------- |
| playerid  | ID igrača.                         |
| vehicleid | ID vozila. Zabilješka: NE Modelid! |

## Returns

1 - Igrač JE u vozilu.

0 - Igrač NIJE u vozilu.

## Primjeri

```c
new gSpecialCar;

public OnGameModeInit()
{
    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, gSpecialCar))
        {
            SendClientMessage(playerid, -1, "Nisi u specijalnom automobilu!");
        }
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): Provjerite je li igrač u bilo kojem vozilu.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Provjeri u kojem je igrač sjedištu.
