---
title: SetPlayerVirtualWorld
description: Postavite virtualni svijet igrača.
tags: ["player"]
---

## Deskripcija

Postavite virtualni svijet igrača. Mogu vidjeti samo one igrače i vozila koji su u istom svijetu.

| Ime      | Deskripcija                              |
| -------- | ---------------------------------------- |
| playerid | ID igrača za postaviti virutalni svijet. |
| worldid  | ID virtualnog svijeta za ubaciti igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
if (strcmp(cmdtext, "/world3", true) == 0)
{
    SetPlayerVirtualWorld(playerid, 3);
    return 1;
}
```

## Zabilješke

:::tip

Zadani virtualni svijet je 0.

:::

## Srodne Funkcije

- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Provjerava u kojem je igrač virtualnom svijetu.
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): Postavi virtualni svijet vozila.
