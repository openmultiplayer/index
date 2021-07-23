---
title: EditPlayerObject
description: Omogućuje igračima da uređuju player objekat (položaj i rotacija) s GUI-jem i mišem.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućuje igračima da uređuju player objekat (položaj i rotacija) s GUI-jem i mišem.

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača koji bi trebao uređivati ​​objekt.     |
| objectid | ID objekta koji će biti uređen od strane igrača. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač ili objekat su nevažeći!

## Primjeri

```c
new object[MAX_PLAYERS];
public OnPlayerSpawn(playerid)
{
    object[playerid] = CreatePlayerObject(playerid, 1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/edit", true))
    {
        EditPlayerObject(playerid, object[playerid]);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Sada uredi svoj objekat!");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Kameru možete pomicati tijekom uređivanja pritiskom i držanjem razmaknice (ili W u vozilu) i pomicanjem miša.

:::

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [MoveObject](MoveObject): Pomjeri objekat.
- [EditAttachedObject](EditAttachedObject): Uredi prikvačeni objekat.
- [SelectObject](SelectObject): odaberi objekat.
- [CancelEdit](CancelEdit): Prekini uređivanje objekta.
