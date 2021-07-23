---
title: Kick
description: Izbacuje igrača sa servera. Morati će napustiti igru i ponovno se konektovati ako žele da nastave igrati.
tags: ["administration"]
---

## Deskripcija

Izbacuje igrača sa servera. Morati će napustiti igru i ponovno se konektovati ako žele da nastave igrati.

| Ime      | Deskripcija            |
| -------- | ---------------------- |
| playerid | ID igrača za izbaciti. |

## Returns

Ova funkcija uvijek returna (vraća) 1, bilo da funckija ne uspije da se izvrši (navedeni igrač ne postoji).

## Zabilješke

:::warning

Od SA-MP 0.3x, bilo koja radnja poduzeta neposredno prije Kicka() (poput slanja poruke pomoću SendClientMessage) neće doći do igrača. Za odgodu udarca mora se koristiti tajmer.

:::

## Primjeri

```c
// Da bi se prikazala poruka (npr. Razlog) za uređaj prije nego što se veza prekine
// morate koristiti tajmer za stvaranje kašnjenja. Ovo kašnjenje treba biti samo nekoliko milisekundi,
// ali ovaj primjer koristi punu sekundu samo da bi bio na sigurnoj strani.

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/kickme", true) == 0)
    {
        // Izbacite igrača koji je izvršio ovu naredbu.

        // Prvo im pošaljite poruku
        SendClientMessage(playerid, 0xFF0000FF, "You have been kicked!");

        // Zapravo ih izbacite sekundu kasnije na tajmeru.
        SetTimerEx("DelayedKick", 1000, false, "i", playerid);
        return 1;
    }
    return 0;
}

forward DelayedKick(playerid);
public DelayedKick(playerid)
{
    Kick(playerid);
    return 1;
}
```

## Srodne Funkcije

- [Ban](Ban): Banuj igrača sa servera.
- [BanEx](BanEx): Banuj igrača sa servera uz prilagođenu poruku.
