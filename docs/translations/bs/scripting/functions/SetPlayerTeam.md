---
title: SetPlayerTeam
description: Postavi tim igrača.
tags: ["player"]
---

## Deskripcija

Postavi tim igrača.

| Ime      | Deskripcija                                                                   |
| -------- | ----------------------------------------------------------------------------- |
| playerid | ID igrača kojem želite postaviti tim.                                         |
| teamid   | Tim za ubaciti igrača. Koristi NO_TEAM da uklonite igrača iz bilo kojeg tima. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    // Postavi tim 4 igraču kada se spawnuje
    SetPlayerTeam(playerid, 4);
    return 1;
}
```

## Zabilješke

:::tip

Igrači ne mogu oštetiti / ubiti igrače iz istog tima, osim ako nožem ne prerežu grkljan. Od SA-MP 0.3x, igrači takođe ne mogu oštetiti vozila koja vozi igrač iz istog tima. To se može omogućiti pomoću EnableVehicleFriendlyFire. 255 (ili NO_TEAM) je zadani tim koji može pucati na druge igrače, a ne na 0.

:::

## Srodne Funkcije

- [GetPlayerTeam](GetPlayerTeam): Provjerite u kojem je igrač timu.
- [SetTeamCount](SetTeamCount): Postavi broj dostupnih timova.
- [EnableVehicleFriendlyFire](EnableVehicleFriendlyFire): Omogućite prijateljsku vatru za timska vozila.
