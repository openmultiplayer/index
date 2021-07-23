---
title: ShowPlayerNameTagForPlayer
description: Ova funkcija ti omogućava da omogućite/onemogućite iscrtavanje nametag-ova, healthbar-pva i armora igrača koji se prikazuju iznad njegove glave.
tags: ["player"]
---

## Deskripcija

Ova funkcija ti omogućava da omogućite/onemogućite iscrtavanje nametag-ova, healthbar-pva i armoa igrača koji se prikazuju iznad njegove glave. Za upotrebu slične funkcije poput ove na globalnom nivou, funkcija ShowNameTags.

| Ime          | Deskripcija                                       |
| ------------ | ------------------------------------------------- |
| playerid     | Igrač koji će vidjeti rezultate ove funkcije.     |
| showplayerid | Player čiji će nametag biti skriven ili prikazan. |
| show         | 1-prikaži nametag, 0-sakrij nametag.              |

## Returns

## Važna Bilješka

ShowNameTags mora biti postavljen na 1 da bi bilo moguće prikazati name tagove sa ShowPlayerNameTagForPlayer, to znači da u slučaju da bude efikasno moraš da izvršiš funkciju: ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ispred vremena (OnPlayerStreamIn je dobro mjesto).

## Primjeri

```c
//igrač koji je napisao /nameoff neće biti u mogućnosti da vidi nametagove ostalih igrača.
if (strcmp("/nameoff", cmdtext, true) == 0)
{
    for (new i = 0; i != MAX_PLAYERS; -- i)
    {
        ShowPlayerNameTagForPlayer(playerid, i, false);
    }
    GameTextForPlayer(playerid, "~W~Nametagovi ~R~ugaseni", 5000, 5);
    return 1;
}
```

## Zabilješke

:::warning

ShowNameTags mora biti postavljen na 1 da bi bilo moguće prikazati name tagove sa ShowPlayerNameTagForPlayer, to znači da u slučaju da bude efikasno moraš da izvršiš funkciju: ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ispred vremena (OnPlayerStreamIn je dobro mjesto).

:::

## Srodne Funkcije

- [ShowNameTags](ShowNameTags): Postavi nametagove uključeno ili isključeno.
- [DisableNameTagLOS](DisableNameTagLOS): Onemogućite provjeru oznake imena.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Postavite marker/oznaku igrača.
