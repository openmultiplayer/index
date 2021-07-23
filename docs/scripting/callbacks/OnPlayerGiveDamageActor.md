---
title: OnPlayerGiveDamageActor
description: This callback is called when a player gives damage to an actor.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

This callback is called when a player gives damage to an actor.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| playerid        | The ID of the player that gave damage.                |
| damaged_actorid | The ID of the actor that received damage.             |
| amount          | The amount of health/armour damaged_actorid has lost. |
| weaponid        | The reason that caused the damage.                    |
| bodypart        | The [body part](../resources/bodyparts) that was hit   |

## Returns

1 - Callback will not be called in other filterscripts.

0 - Allows this callback to be called in other filterscripts.

It is always called first in filterscripts so returning 1 there blocks other filterscripts from seeing it.

## Examples

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float: amount, weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s has made %.0f damage to actor id %d, weapon: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

This function does not get called if the actor is set invulnerable (WHICH IS BY DEFAULT). See SetActorInvulnerable.

:::

## Related Functions

- [CreateActor](../functions/CreateActor): Create an actor (static NPC).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Set actor invulnerable.
- [SetActorHealth](../functions/SetActorHealth): Set the health of an actor.
- [GetActorHealth](../functions/GetActorHealth): Gets the health of an actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Check if actor is invulnerable.
- [IsValidActor](../functions/IsValidActor): Check if actor id is valid.
- [OnActorStreamOut](OnActorStreamOut): Called when an actor is streamed out by a player.
- [OnPlayerStreamIn](OnPlayerStreamIn): Called when a player streams in for another player.
