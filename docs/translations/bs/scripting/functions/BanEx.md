---
title: BanEx
description: Banuj igrača uz prilagođeni razlog.
tags: ["administration"]
---

## Deskripcija

Banuj igrača uz prilagođeni razlog.

| Ime      | Deskripcija                  |
| -------- | ---------------------------- |
| playerid | ID igrača za banovati.       |
| reason   | Razlog banovanja.            |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerCommandText( playerid, cmdtext[] )
{
    if (!strcmp(cmdtext, "/banme", true))
    {
        // Banuje igrača koji je napisao ovu komandu uključujući i razlog (Request)
        BanEx(playerid, "Request");
        return 1;
    }
}
// Da bi se prikazala poruka (npr. razlog) za igrača prije nego se konekcija zatvori
// morate koristiti timer kako biste stvorili mali razmak. Ovaj razmak treba da bude dug svega nekoliko milisekundi,
// ali ovaj primjer koristi punu sekundu samo da bi bio na sigurnoj strani.

forward BanExPublic(playerid, reason[]);

public BanExPublic(playerid, reason[])
{
    BanEx(playerid, reason);
}

stock BanExWithMessage(playerid, color, message[], reason[])
{
    //reason - razlog banovanja kojeg koristimo sa BanEx.
    SendClientMessage(playerid, color, message);
    SetTimerEx("BanExPublic", 1000, false, "ds", playerid, reason);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        //Banuje igrača koji je napisao ovu komandu.
        BanExWithMessage(playerid, 0xFF0000FF, "Banovan si!", "Request");
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Od SA-MP 0.3x, sve radnje poduzete izravno prije BanEx() (poput slanja poruke pomoću SendClientMessage) neće doći do igrača. Za razmak/odgodu zabrane mora se koristiti tajmer.

:::

## Srodne Funkcije

- [Ban](Ban): Zabranite igraču da igra na serveru.
- [Kick](Kick): Kickujte (izbacite) igrača sa servera.
