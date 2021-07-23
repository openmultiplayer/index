---
title: SetPlayerHealth
description: Postavi healthe (zdravlje) igrača.
tags: ["player"]
---

## Deskripcija

Postavi healthe (zdravlje) igrača.

| Ime          | Deskripcija                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| playerid     | ID igrača za postaviti healthe.                                                                                                     |
| Float:health | Vrijednost za postaviti healthe igraču. Maksimalan health koji se može prikazati na HUD-u je 100, ali i veće vrijednosti su važeće. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da navedeni igrač ne postoji.

## Primjeri

```c
// Postavi igraču healthe na potpuno (full)
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        SetPlayerHealth(playerid, 100.0);
        return 1;
    }
    if (!strcmp("/kill", cmdtext, true))
    {
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

Ako je health/zdravlje igrača postavljeno na 0 ili minus vrijednost, oni će odmah umrijeti. Ako je zdravstveno stanje igrača ispod 10 ili više od 98303, traka zdravlja će treptati.

:::

:::warning

Zdravlje se zaokružuje na cijele brojeve: postavite 50,15, ali ćete dobiti 50,0

:::

## Srodne Funkcije

- [GetPlayerHealth](GetPlayerHealth): Doznaj koliko healtha ima igrač.
- [GetPlayerArmour](GetPlayerArmour): Otkrijte koliko armora ima igrač.
- [SetPlayerArmour](SetPlayerArmour): Postavi armor igrača.
