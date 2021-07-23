---
title: EnableTirePopping
description: Sa ovom funkcijom možete da omogućite ili onemogućite pucanje guma.
tags: []
---

## Deskripcija

Sa ovom funkcijom možete da omogućite ili onemogućite pucanje guma.

| Ime  | Deskripcija                                    |
| ---- | ---------------------------------------------- |
| show | 1 da omogućite, 0 da onemogućite pucanje guma. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    // Ovo će onemogućiti pucanje guma na vašem gamemode-u.
    EnableTirePopping(0);
    return 1;
}
```

## Zabilješke

:::warning

Ova je funkcija uklonjena u SA-MP 0.3. Pucanje guma je omogućeno prema zadanim postavkama. Ako želite onemogućiti pucanje guma, morat ćete ga ručno skriptati koristeći [OnVehicleDamageStatusUpdate](OnVehicleDamageStatusUpdate).

:::

## Srodne Funkcije

- [SetPlayerTeam](SetPlayerTeam): Postavi tim igrača.
