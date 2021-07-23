---
title: EditObject
description: Omogućuje igraču da uređuje objekt (položaj i rotaciju) pomoću miša na GUI (grafičko korisničko sučelje / Graphical User Interface).
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Omogućuje igraču da uređuje objekt (položaj i rotaciju) pomoću miša na GUI (grafičko korisničko sučelje / Graphical User Interface).

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača koji bi trebao uređivati ​​objekt.     |
| objectid | ID objekta koji će biti uređen od strane igrača. |

## Returns

1: Funkcija uspješno izvršena. Uspjeh se izvještava i kada se navede nepostojeći objekt, ali ništa se neće dogoditi.

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
new object;
public OnGameModeInit()
{
    object = CreateObject(1337, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/oedit", true))
    {
        EditObject(playerid, object);
        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Sada možete uređivati objekte!");
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
- [EditPlayerObject](EditPlayerObject): Uredi objekat.
- [EditAttachedObject](EditAttachedObject): Uredi prikvačeni objekat.
- [SelectObject](SelectObject): odaberi objekat.
- [CancelEdit](CancelEdit): Prekini uređivanje objekta.
