---
title: StopRecordingPlayerData
description: Zaustavlja sve snimke započete sa StartRecordingPlayerData za određenog igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Zaustavlja sve snimke započete sa StartRecordingPlayerData za određenog igrača.

| Ime      | Deskripcija                              |
| -------- | ---------------------------------------- |
| playerid | Igrač za kojeg želite zaustaviti snimke. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/stoprecording", cmdtext))
    {
        StopRecordingPlayerData(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "Snimljena datoteka je spremljena u mapu scriptfiles!");
        return 1;
    }
}
```

## Srodne Funkcije

- [StartRecordingPlayerData](StartRecordingPlayerData): Počnite snimati podatke o igraču.
