---
title: IsPlayerInAnyVehicle
description: Provjerava da li je igrač unutar bilo kojeg vozila (kao vozač ili suvozač).
tags: ["player", "vehicle"]
---

## Deskripcija

Provjerava da li je igrač unutar bilo kojeg vozila (kao vozač ili suvozač).

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za provjeru. |

## Returns

1: Igrač je u vozilu.

0: Igrač nije u vozilu.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/invehicle", true) == 0)
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SendClientMessage(playerid, 0x00FF00AA, "U vozilu si.");
        }
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [IsPlayerInVehicle](IsPlayerInVehicle): Provjerite je li igrač u određenom vozilu.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Provjeri u kojem je igrač sjedištu.
