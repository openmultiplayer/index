---
title: GetPlayerSkin
description: Vraća klasu skina igrača.
tags: ["player"]
---

## Deskripcija

Vraća klasu skina igrača.

| Ime      | Deskripcija                       |
| -------- | --------------------------------- |
| playerid | Igrač od kojeg želite dobiti skin |

## Returns

ID skina (0 ako je nevažeći)

## Primjeri

```c
playerskin = GetPlayerSkin(playerid);
```

## Zabilješke

:::tip

Vraća novi skin nakon što se pozove SetSpawnInfo, ali prije nego što se igrač stvarno ponovo pokrene da bi dobio novi skin. Vraća stari skin ako je igrač stvoren putem funkcije SpawnPlayer.

:::

## Srodne Funkcije

- [SetPlayerSkin](SetPlayerSkin): Postavi skin igraču.
