---
title: GetVehicleVirtualWorld
description: Dobij virtualni svijet vozila.
tags: ["vehicle"]
---

## Deskripcija

Dobij virtualni svijet vozila.

| Ime       | Deskripcija                                  |
| --------- | -------------------------------------------- |
| vehicleid | ID vozila za dobiti njegov virtualni svijet. |

## Returns

Virutalni svijet u kojem se vozilo nalazi.

## Primjeri

```c
new
    vehicleWorld = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, vehicleWorld);
```

## Srodne Funkcije

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Postavi virtualni svijet vozila.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Provjerava u kojem je igrač virtualnom svijetu.
