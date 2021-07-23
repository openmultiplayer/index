---
title: GetPlayerVersion
description: Returna/vraća verziju SA-MP klijenta, kako je izvijestio igrač.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3e i ne radi u nižim verzijama!

:::

## Deskripcija

Returna/vraća verziju SA-MP klijenta, kako je izvijestio igrač.

| Ime       | Deskripcija                                                  |
| --------- | ------------------------------------------------------------ |
| playerid  | ID igrača za dobiti verziju klijenta.                        |
| version[] | String za pohraniti verziju igrača, proslijeđeno referencom. |
| len       | Maksimalna dužina verzije.                                   |

## Returns

Verzija klijenta je pohranjena u navedenom nizu.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new
        string[24];
    GetPlayerVersion(playerid, string, sizeof(string));
    format(string, sizeof(string), "Tvoja verzija SA-MP-a: %s", string);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    // mogući tekst: "Tvoja verzija SA-MP-a: 0.3.7"
    return 1;
}
```

## Zabilješke

:::tip

Klijentska verzija može imati najviše 24 znaka, inače će veza biti odbijena zbog "Nevažeće veze s klijentom". Međutim, normalni igrači mogu se pridružiti samo sa verzijom dužine između 5 (0.3.7) i 9 (0.3.DL-R1) znakova.

:::

:::warning

Niz u kojem se verzija čuva bit će prazan ako je playerid NPC.

:::

## Srodne Funkcije

- [GetPlayerName](GetPlayerName): Dobij ime igrača.
- [GetPlayerPing](GetPlayerPing): Dobij ping igrača.
- [GetPlayerIp](GetPlayerIp): Dobij IP igrača.
