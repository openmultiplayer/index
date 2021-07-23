---
title: SpawnPlayer
description: (Re)Spawnuje igrača.
tags: ["player"]
---

## Deskripcija

(Re)Spawnuje igrača.

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača za spawn-ovati (stvoriti). |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
if (strcmp(cmdtext, "/spawn", true) == 0)
{
    SpawnPlayer(playerid);
    return 1;
}
```

## Zabilješke

:::tip

Ubija igrača ako je u vozilu, a zatim se spawnaju s bocom u ruci.

:::

## Srodne Funkcije

- [SetSpawnInfo](SetSpawnInfo): Postavi postavke spawnovanja za igrača.
- [AddPlayerClass](AddPlayerClass): Dodaj klasu.
- [OnPlayerSpawn](../callbacks/OnPlayerSpawn): Pozvano kada se igrač stvori.
