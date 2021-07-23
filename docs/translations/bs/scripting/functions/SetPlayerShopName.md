---
title: SetPlayerShopName
description: Učitava ili rasterećuje unutrašnju skriptu (enterijera) za igrača (na primjer meni za ammunation).
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Učitava ili rasterećuje unutrašnju skriptu (enterijera) za igrača (na primjer meni za ammunation).

| Ime        | Deskripcija                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| playerid   | ID igrača za učitati skripte enterijera.                                         |
| shopname[] | Skripta trgovine za učitavanje. Ostavi prazno ("") za rasteretiti (onemogućiti). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/enter", cmdtext))
    {
        SetPlayerInterior(playerid, 5);
        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);
        SetPlayerShopName(playerid,"FDPIZA");
        SendClientMessage(playerid,0xFFFFFFFF,"Dobrodošao u Pizza Stack!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Ova funkcija ne podržava casino skripte.

:::

## Srodne Funkcije

- [DisableInteriorEnterExits](DisableInteriorEnterExits): Onemogući žute markere na vratima.
- [SetPlayerInterior](SetPlayerInterior): Postavlja igraču enterijer
