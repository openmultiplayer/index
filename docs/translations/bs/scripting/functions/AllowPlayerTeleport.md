---
title: AllowPlayerTeleport
description: O(ne)mogući mogućnost teleportovanja igrača kada koristi desni klik na mapu.
tags: ["player"]
---

:::warning

Ova funkcija, kao u 0.3d, je zastarjela. Provjerite [OnPlayerClickMap](../callbacks/OnPlayerClickMap.md).

:::

## Deskripcija

O(ne)mogući mogućnost teleportovanja igrača kada koristi desni klik na mapu.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača kojem je teleport dozvoljen. |
| allow    | 1-omogući/dozvoli, 0-onemogući/zabrani |

## Returns

Ova funkcija ne return-a nikakve specifične vrijednosti.

## Primjeri

```c
public OnPlayerConnect( playerid )
{
    // Dozvoljava mogućnost teleportovanja igrača kada koristi desni klik na mapu
    // s obzirom da se ovo nalazi u OnPlayerConnect, ovo će biti primijenjeno na SVAKOG igrača
    AllowPlayerTeleport( playerid, 1 );
}
```

## Zabilješke

:::warning

Ova funckija će raditi SAMO ako je funkcija [AllowAdminTeleport](AllowAdminTeleport.md) omogućena, i moraš biti admin.

:::

## Srodne Funkcije

- [AllowAdminTeleport](AllowAdminTeleport.md): O(ne)mogući teleportovanje po markerima za RCON admine.
