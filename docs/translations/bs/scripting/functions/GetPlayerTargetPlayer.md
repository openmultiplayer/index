---
title: GetPlayerTargetPlayer
description: Provjeri na koga igrač cilja.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nižim verzijama!

:::

## Deskripcija

Provjeri na koga igrač cilja.

| Ime      | Deskripcija                     |
| -------- | ------------------------------- |
| playerid | ID igrača na kojeg igrač cilja. |

## Returns

ID ciljanog igrača, ili INVALID_PLAYER_ID ako ga nema.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    // Store the ID
    new playerTarDobij ID = GetPlayerTargetPlayer(playerid);
    if (playerTarDobij ID != INVALID_PLAYER_ID && GetPlayerTeam(playerTarDobij ID) == GetPlayerTeam(playerid))
    {
        GameTextForPlayer(playerid, "~R~ne pucaj na saigrače!", 5000, 3);
    }
}
```

## Zabilješke

:::warning

Ne radi za joypad/kontrolere i nakon određene udaljenosti. Ne radi za snajpersku pušku, jer se ništa ne zaključava i kao takva ne može i neće vratiti igrača.

:::

## Srodne Funkcije

- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobij prednji vektor kamere igrača.
- [OnPlayerGiveDamage](../callbacks/OnPlayerGiveDamage): Ovaj callback je pozvan kada igrač daje ozljede.
- [OnPlayerTakeDamage](../callbacks/OnPlayerTakeDamage): Ovaj callback je pozvan kada igrač prima ozljede.
