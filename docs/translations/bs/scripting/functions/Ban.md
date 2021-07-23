---
title: Ban
description: Banuj igrača koji je trenutno na serveru.
tags: ["administration"]
---

## Description

Banuj igrača koji je trenutno na serveru. On se više nikada neće moći pridružiti serveru. Zabrana će se zasnivati ​​na IP-u i bit će spremljena u datoteku samp.ban u korijenskom direktoriju poslužitelja. BanEx se može koristiti za obrazloženje zabrane. IP zabrane mogu se dodati / ukloniti pomoću naredbi RCON banip i unbanip (SendRconCommand).

| Name     | Description                  |
| -------- | ---------------------------- |
| playerid | ID igrača za banovanje.      |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Banuj igrača koji napiše ovu komandu.
        Ban(playerid);
        return 1;
    }
}
// Da bi se prikazala poruka (npr. razlog) za igrača prije nego se konekcija zatvori
// morate koristiti timer kako biste stvorili mali razmak. Ovaj razmak treba da bude dug svega nekoliko milisekundi,
// ali ovaj primjer koristi punu sekundu samo da bi bio na sigurnoj strani.

forward DelayedBan(playerid);
public DelayedBan(playerid)
{
    Ban(playerid);
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/banme", true) == 0)
    {
        // Banuj igrača koji napiše ovu komandu.

        // Prvo im pošaljite poruku
        SendClientMessage(playerid, 0xFF0000FF, "Banovani ste!");

        // Banujte ga za jednu sekundu.
        SetTimerEx("DelayedBan", 1000, false, "d", playerid);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::warning

Od SA-MP 0.3x, sve radnje poduzete izravno prije Ban() (poput slanja poruke pomoću SendClientMessage) neće doći do igrača. Za razmak/odgodu zabrane mora se koristiti tajmer.

:::

## Srodne Funkcije

- [BanEx](BanEx): Banujte igrača sa prilagođenim razlogom.
- [Kick](Kick): Kickujte (izbacite) igrača sa servera.
