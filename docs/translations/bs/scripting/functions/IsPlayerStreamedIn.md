---
title: IsPlayerStreamedIn
description: Provjerava ako je igrač učitan u klijent drugog igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava ako je igrač učitan u klijent drugog igrača.

| Ime         | Deskripcija                                                          |
| ----------- | -------------------------------------------------------------------- |
| playerid    | ID igrača kojeg želite provjeriti da li je učitan.                   |
| forplayerid | ID igrača kojeg želite provjeriti je li prvi igrač učitan kod njega. |

## Returns

1: Igrač je učitan.

0: Igrač nije učitan.

## Primjeri

```c
if (IsPlayerStreamedIn(playerid, 0))
{
    SendClientMessage(playerid, -1, "ID 0 te može vidjeti.");
}
```

## Zabilješke

:::tip

Igrači nestaju ako su udaljeni više od 150 metara (vidi server.cfg - stream_distance)

:::

:::warning

Igrači se ne prenose putem vlastitog klijenta (nisu učitani u vlastitom klijentu), pa ako je playerid isti kao forplayerid, vratit će se false!

:::

## Srodne Funkcije

- [IsActorStreamedIn](IsActorStreamedIn): Provjeri da li je aktor učitan kod igrača.
- [IsVehicleStreamedIn](IsVehicleStreamedIn): Provjerava ako je vozilo učitano za igrača.
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): Pozvano kada se igrač učita za drugog igrača.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): Pozvano kada se igrač iščita za drugog igrača.
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): Pozvano kada se vozilo učita za igrača.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): Pozvano kada se vozilo iščita za igrača.
