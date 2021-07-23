---
title: AttachCameraToObject
description: Možete koristiti ovu funkciju da prikvačite kameru igrača za objekt.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Možete koristiti ovu funkciju da prikvačite kameru igrača za objekt.

| Ime      | Deskripcija                                                          |
| -------- | -------------------------------------------------------------------- |
| playerid | ID igrača koji će imati kameru prikvačenu za objekat.                |
| objectid | ID objekta za kojeg želite prikvačiti kameru igrača.                 |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/attach", false))
    {
        new objectId = CreateObject(1245, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
        AttachCameraToObject(playerid, objectId);
        SendClientMessage(playerid, 0xFFFFFFAA, "Your camera is attached on object now.");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Prvo morate stvoriti objekt, prije nego što pokušate za to prikvačiti kameru igrača.

:::

## Srodne Funkcije

- [AttachCameraToPlayerObject](AttachCameraToPlayerObject): Prikvači kameru igrača za player objekat.
