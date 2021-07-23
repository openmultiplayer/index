---
title: SetPlayerVelocity
description: Postavi brzinu igrača na X, Y i Z osama.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Postavi brzinu igrača na X, Y i Z osama.

| Ime      | Deskripcija                  |
| -------- | ---------------------------- |
| playerid | Igrač za primijeniti brzinu. |
| Float:X  | Brzina na X osi.             |
| Float:Y  | Brzina na Y osi.             |
| Float:Z  | Brzina nae Z osi.            |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
    SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Forsira igrača da skoči (Z brzina + 0.2)
    return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [GetPlayerVelocity](GetPlayerVelocity): Dobij brzinu igrača.
- [SetVehicleVelocity](SetVehicleVelocity): Postavi brzinu vozila.
- [GetVehicleVelocity](GetVehicleVelocity): Dobij brzinu vozila.
