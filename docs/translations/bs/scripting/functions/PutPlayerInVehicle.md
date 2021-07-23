---
title: PutPlayerInVehicle
description: Stavlja igrača u vozilo.
tags: ["player", "vehicle"]
---

## Deskripcija

Stavlja igrača u vozilo.

| Ime       | Deskripcija                              |
| --------- | ---------------------------------------- |
| playerid  | ID igrača za ubaciti u vozilo.           |
| vehicleid | ID vozila u koje treba ubaciti igrača.   |
| seatid    | ID sjedišta u koje treba ubaciti igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač ili vozilo ne postoje.

## Primjeri

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)
{
    PutPlayerInVehicle(playerid, vehicleid, 0);
    return 1;
}
```

```p
0 - Vozač
1 - Suvozač
2 - Lijevi-pozadi
3 - Desni-pozadi
4+ - Putnička sjedala (kauč i sl.)

```

## Zabilješke

:::tip

Možete koristiti GetPlayerVehicleSeat u petlji kako biste provjerili da li neko mjesto zauzima bilo koji igrač.

:::

:::warning

Ako je sedište neispravno ili je zauzeto, izazvat će crash kada IZLAZE iz vozila.

:::

## Srodne Funkcije

- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Izbaci igrača iz njegovog vozila.
- [GetPlayerVehicleID](GetPlayerVehicleID): Dobij ID vozila u kojem je igrač trenutno.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Provjeri u kojem je igrač sjedištu.
- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): Pozvano kada igrač počne da ulazi u vozilo.
