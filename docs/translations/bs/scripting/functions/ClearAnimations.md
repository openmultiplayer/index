---
title: ClearAnimations
description: Čisti sve animacije koje su date igraču (ovo također zaustavlja trenutne zadatke koji se vrše poput jetpackinga, padobraniranja, ulaženaj u vozila, voženja (ukloni igrača iz vozila), plivanja itd.)
tags: []
---

## Deskripcija

Čisti sve animacije koje su date igraču (ovo također zaustavlja trenutne zadatke koji se vrše poput jetpackinga, padobraniranja, ulaženaj u vozila, voženja (ukloni igrača iz vozila), plivanja itd.)

| Ime       | Deskripcija                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------- |
| playerid  | ID igrača za očistiti animacije                                                                         |
| forcesync | Postavi na 1 da natjeraš igrača da sinhronizuje animaciju sa ostalima u streaming radijusu (neobavezno) |

## Returns

Ova funkcija uvijek returna/vraća 1, bilo da odabrani igrač nije konektovan.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/animclear", true))
    {
        ClearAnimations(playerid);
        return 1;
    }
    return 0;
}
```

## Zabilješke

:::tip

ClearAnimations ne radi ništa kada animacija završi ako u ApplyAnimation dodamo 1 za parametar zamrzavanja.

:::

:::tip

Za razliku od nekih drugih načina uklanjanja igrača iz vozila, ovo će također resetirati brzinu vozila na nulu, trenutno zaustavljajući automobil. Igrač će se pojaviti na vrhu vozila s istim mjestom na kojem je bio u svome sjedištu.

:::

## Srodne Funkcije

- [ApplyAnimation](ApplyAnimation): Primijeni animaciju za igrača.
