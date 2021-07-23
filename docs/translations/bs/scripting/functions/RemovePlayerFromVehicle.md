---
title: RemovePlayerFromVehicle
description: Uklanja/izbacuje igrača iz njihovog vozila.
tags: ["player", "vehicle"]
---

## Deskripcija

Uklanja/izbacuje igrača iz njihovog vozila.

| Ime      | Deskripcija                      |
| -------- | -------------------------------- |
| playerid | ID igrača za izbaciti iz vozila. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
// Primjer - Igrači mogu da voze vozila samo ako imaju score 10.
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PLAYER_STATE_DRIVER = 2
    {
        RemovePlayerFromVehicle(playerid);
    }
    return 1;
}
```

## Zabilješke

:::tip

Izlazna animacija nije sinhronizirana za druge igrače. Ova funkcija neće raditi kada se koristi u OnPlayerEnterVehicle, jer igrač nije u vozilu kad se pozove povratni poziv. Umjesto toga koristite OnPlayerStateChange (pogledajte primjer dolje). Igrač se ne uklanja ako je u RC vozilu.

:::

## Srodne Funkcije

- [PutPlayerInVehicle](PutPlayerInVehicle): Postavi igrača u vozilo.
