---
title: AttachCameraToPlayerObject
description: Prikvači kameru igrača za player objekat.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Prikvači kameru igrača za player objekat. Igrač može pomicati svoju kameru dok je prikvačena za objekat. Može se koristiti s MovePlayerObject i AttachPlayerObjectToVehicle.

| Ime            | Deskripcija                                                                    |
| -------------- | ------------------------------------------------------------------------------ |
| playerid | ID igrača koji će imati kameru prikvačenu za player-objekat.                         |
| playerobjectid | ID player-objekta za kojeg želite prikvačiti kameru igrača.                    |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new playerobject = CreatePlayerObject(playerid, 1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToPlayerObject(playerid, playerobject);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is now attached to an object.");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Prvo morate stvoriti player-objekt, prije nego što pokušate za to prikvačiti kameru igrača.

:::

## Related Functions

- [AttachCameraToObject](AttachCameraToObject): Attachs the player's camera on an global object.
- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
