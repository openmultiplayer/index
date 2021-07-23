---
title: SetPlayerArmour
description: Postavi nivo armora (pancira) igrača.
tags: ["player"]
---

## Deskripcija

Postavi nivo armora (pancira) igrača.

| Ime          | Deskripcija                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | ID igrača za postaviti nivo armora.                                                                                                    |
| Float:armour | Količina armora za postaviti, kao postotak (float). Vrijednosti veće od 100 su validne ali neće biti prikazane u armor bar-u na HUD-u. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    // Daje igraču full armor (100%) kada se spawnuje.
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```

## Zabilješke

:::tip

Ime funkcije je armour, a ne armor (amerikaniziran). Ovo nije u skladu s ostatkom SA-MP-a, pa zapamtite to.

:::

:::warning

Armor/pancir biva zaokružen na cijele brojeve: postavite 50.15, ali dobićete 50.0

:::

## Srodne Funkcije

- [GetPlayerArmour](GetPlayerArmour): Otkrijte koliko armora ima igrač.
- [SetPlayerHealth](SetPlayerHealth): Postavlja igraču helte.
- [GetPlayerHealth](GetPlayerHealth): Doznaj koliko healtha ima igrač.
