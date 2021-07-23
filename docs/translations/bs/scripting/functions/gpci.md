---
title: gpci
description: Dohvatite CI (računarska/klijentska identifikacija) korisnika, ovo je povezano s njihovim SAMP/GTA-om na njegovom računaru.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dohvatite CI (računarska/klijentska identifikacija) korisnika, ovo je povezano s njihovim SAMP/GTA-om na njegovom računaru.

:::warning

CI igrač NIJE JEDINSTVEN, neki igrači mogu imati sličan ili isti CI, nemojte banovati ​​samo zbog toga pto im je isti CI.

:::

## Parameters

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| playerid | ID igrača za dohvatiti njegov CI.                      |
| string[] | String za pohraniti dohvaćeni CI.                      |
| length   | Dodijeljena veličina stringa, treba koristiti sizeof() |

## Return Values

Ova funkcija će vratiti vrijednost stringa korisničkog CI.

:::warning

Morate dodati 'native gpci(playerid, serial [], len);' na vrhu vaše skripte prije upotrebe bilo kojih CI funkcija.

:::

## Primjer upotrebe

```c
#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

new szSerial[41]; // 40 + \0

gpci(iPlayerID, szSerial, sizeof(szSerial));
return szSerial;
```

:::tip

Ova funkcija može vam dobro doći da biste lako dobili nečiji CI.

:::

```c
ReturnCI(iPlayerID)
{
    new
        szSerial[41]; // 40 + \0

    gpci(iPlayerID, szSerial, sizeof(szSerial));
    return szSerial;
}
```

## Srodne Funkcije

- [GetNetworkStats]GetNetworkStats): Dobiva mrežne statistike servera i sprema ih u string.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Dobija mrežne statistike igrača i pohranjuje ih u string.
