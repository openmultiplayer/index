---
title: GetPlayerVelocity
description: Dobij brzinu (brzinu) igrača na X, Y i Z osi.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij brzinu (brzinu) igrača na X, Y i Z osi.

| Ime      | Deskripcija                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | Igrač za dobiti brzinu.                                                |
| &Float:x | Float varijabla za pohraniti brzinu na X osi, proslijeđeno referencom. |
| &Float:y | Float varijabla za pohraniti brzinu na Y osi, proslijeđeno referencom. |
| &Float:z | Float varijabla za pohraniti brzinu na Z osi, proslijeđeno referencom. |

## Returns

Sama funkcija ne vraća određenu vrijednost. Brzine X, Y i Z pohranjene su u navedenim varijablama.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/velocity", cmdtext))
    {
        new
            Float: playerVelocity[3],
            message[80];

        GetPlayerVelocity(playerid, playerVelocity[0], playerVelocity[1], playerVelocity[2]);
        format(message, sizeof(message), "Idete brzinom od X: %f, Y: %f, Z: %f", playerVelocity[0], playerVelocity[1], playerVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, message);
        return 1;
    }
}
```

## Srodne Funkcije

- [SetPlayerVelocity](SetPlayerVelocity): Postavi brzinu igrača.
- [SetVehicleVelocity](SetVehicleVelocity): Postavi brzinu vozila.
- [GetVehicleVelocity](GetVehicleVelocity): Dobij brzinu vozila.
