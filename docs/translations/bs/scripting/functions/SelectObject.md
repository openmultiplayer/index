---
title: SelectObject
description: Prikaži miš i dozvoli igraču da selektuje objekat.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Prikaži miš i dozvoli igraču da selektuje objekat. OnPlayerSelectObject je pozvan kada igrač selektuje objekat.

| Ime      | Deskripcija                        |
| -------- | ---------------------------------- |
| playerid | ID koji može da selektuje objekat. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/select", true))
    {
        SelectObject(playerid);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Molimo selektuje objekat kojeg želite urediti!");
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [MoveObject](MoveObject): Pomjeri objekat.
- [EditObject](EditObject): Uredi objekat.
- [EditPlayerObject](EditPlayerObject): Uredi objekat.
- [EditAttachedObject](EditAttachedObject): Uredi prikvačeni objekat.
- [CancelEdit](CancelEdit): Prekini uređivanje objekta.
- [OnPlayerSelectObject](../callbacks/OnPlayerSelectObject): Pozvano kada igrač odabere objekat.
