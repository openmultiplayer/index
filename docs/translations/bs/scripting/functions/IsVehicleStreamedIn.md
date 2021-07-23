---
title: IsVehicleStreamedIn
description: Provjerava ako je vozilo učitano za igrača.
tags: ["vehicle"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Provjerava ako je vozilo učitano za igrača. Samo vozila u blizini su učitana (vidljiva) za igrača.

| Ime         | Deskripcija            |
| ----------- | ---------------------- |
| vehicleid   | ID vozila za provjeru. |
| forplayerid | ID igrača za provjeru. |

## Returns

0: Vozilo nije učitano za igrača, ili funkcija nije uspjela da se izvrši (igrač i/ili vozilo ne postoje).

1: Vozilo je učitano za igrača.

## Primjeri

```c
new streamedVehicleCount;

for(new v = 1; v <= MAX_VEHICLES; v++)
{
    if (IsVehicleStreamedIn(v, playerid))
    {
        streamedVehicleCount ++;
    }
}

new szString[144];
format(szString, sizeof(szString), "Trenutno imaš %i vozila učitanih u vašu igru.", streamedVehicleCount);
SendClientMessage(playerid, -1, szString);
```

## Srodne Funkcije

- [IsPlayerStreamedIn](IsPlayerStreamedIn): Provjerava da li je igrač učitan kod drugog igrača.
- [OnVehicleStreamIn](../callbacks/OnVehicleStreamIn): Pozvano kada se vozilo učita za igrača.
- [OnVehicleStreamOut](../callbacks/OnVehicleStreamOut): Pozvano kada se vozilo iščita za igrača.
- [OnPlayerStreamIn](../callbacks/OnPlayerStreamIn): Pozvano kada se igrač učita za drugog igrača.
- [OnPlayerStreamOut](../callbacks/OnPlayerStreamOut): Pozvano kada se igrač iščita za drugog igrača.
