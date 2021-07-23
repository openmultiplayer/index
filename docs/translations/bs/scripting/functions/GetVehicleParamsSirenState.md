---
title: GetVehicleParamsSirenState
description: Vraća stanje sirene vozila (upaljena/ugašena).
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća stanje sirene vozila (upaljena/ugašena).

| Ime       | Deskripcija                        |
| --------- | ---------------------------------- |
| vehicleid | ID vozila za dobiti stanje sirene. |

## Returns

-1: Sirena za vozilo još nije postavljena (off/ugašena)

0: Sirena vozila ugašena

1: Sirena vozila upaljena

## Primjeri

```c
new
    siren = GetVehicleParamsSirenState(vehicleid);

if (siren == 1)
{
    // Sirena je upaljena, radi nešto
}
else if (siren == 0)
{
    // Sirena je ugašena, radi nešto
}
else
{
    // Vozilo nema sirenu
}
```

## Zabilješke

:::warning

Budući da stanje sirene -1 ili 0 znači 'isključeno', ne možete koristiti logičku uvjetnu naredbu da provjerite jesu li sirene uključene. Ako napravite 'if (sirenstate)', to će važiti za sve što NIJE 0 (dakle -1 ili 1). Trebali biste provjeriti je li stanje sirene izričito jednako 1.

:::

## Srodne Funkcije
