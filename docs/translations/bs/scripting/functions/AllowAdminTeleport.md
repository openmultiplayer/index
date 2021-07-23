---
title: AllowAdminTeleport
description: Ovaj funkcija će da odredi da li će RCON admini biti teleportovani do waypointa/markera kojeg su postavili.
tags: []
---

:::warning

Ova funkcija, kao 0.3d, je zastarjela. Molim vas pogledajte [OnPlayerClickMap](../callbacks/OnPlayerClickMap.md).

:::

## Deskripcija

Ovaj funkcija će da odredi da li će RCON admini biti teleportovani do waypointa/markera kojeg su postavili.

| Ime   | Deskripcija                       |
| ----- | --------------------------------- |
| allow | 0 da onemogućite, 1 da omogućite. |

## Returns

Ova funkcija ne return-a nikakve specifične vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Ostale stvari
    return 1;
}
```

## Srodne Funkcije

- [IsPlayerAdmin](IsPlayerAdmin.md): Provjerava da li je igrač ulogovan u RCON kao admin.
- [AllowPlayerTeleport](AllowPlayerTeleport.md): O(ne)mogućiti teleportanje igrača sa markerom.
