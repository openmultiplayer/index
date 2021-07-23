---
title: GetPlayerTargetActor
description: Dobij id aktora koji je naciljan od strane nekog igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij id aktora koji je naciljan od strane nekog igrača.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača za dobiti naciljanog aktora. |

## Returns

ID naciljanog aktora, ili INVALID_ACTOR_ID ako ga nema.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    new
        targetActorId = GetPlayerTargetActor(playerid),
        string[32];

    format(string, sizeof(string), "Ti ciljaš na aktora ID %d", targetActorId);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## Zabilješke

:::warning

Ne radi za joypad/kontrolere i nakon određene udaljenosti. Ne radi za snajpersku pušku, jer se ništa ne zaključava i kao takva ne može i neće vratiti igrača.

:::

## Srodne Funkcije

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): Dobij ID aktora (ako ima) u kojeg igrač gleda.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Dobij prednji vektor kamere igrača.
- [OnPlayerGiveDamageActor](../callbacks/OnPlayerGiveDamageActor): Ovaj callback je pozvan kada igrač ozlijedi aktora.
