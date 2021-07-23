---
title: SetVehicleVirtualWorld
description: Postavi virtualni svijet ('virtual world') vozila.
tags: ["vehicle"]
---

## Deskripcija

Postavi virtualni svijet ('virtual world') vozila. Igrači će moći vidjeti samo ona vozila koja su u njihovom virtualnom svijetu.

| Ime       | Deskripcija                                |
| --------- | ------------------------------------------ |
| vehicleid | ID vozila za postaviti virtualni svijet.   |
| worldid   | ID virtualnog svijeta za postaviti vozilu. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```

## Srodne Funkcije

- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): Provjerite u kojem je virtualnom svijetu vozilo.
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): Postavite virtualni svijet igrača.
