---
title: StartRecordingPlayerData
description: Počinje snimati pokrete igrača u datoteku, koju NPC može reproducirati.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Počinje snimati pokrete igrača u datoteku, koju NPC može reproducirati.

| Ime          | Deskripcija                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | ID igrača za snimati.                                                                                                                                                                                                               |
| recordtype   | [Tip](../resources/recordtypes) snimke.                                                                                                                                                                                             |
| recordname[] | Ime datoteke koja će sadržavati snimljene podatke. Bit će spremljen u direktorij skript datoteka, s automatski dodanom .rec ekstenzijom, morat ćete datoteku premjestiti u npcmodes / snimke da biste je koristili za reprodukciju. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
if (!strcmp("/recordme", cmdtext))
{
    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");
    }
    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)
    {
        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");
    }
    SendClientMessage(playerid, 0xFFFFFFFF, "Svi vaši pokreti su sada zabilježeni!");
    return 1;
}
```

## Srodne Funkcije

- [StopRecordingPlayerData](StopRecordingPlayerData): Zaustavlja snimanje podataka sa igrača.
