---
title: SetPVarString
description: Čuva string player (igračevu) varijablu.
tags: ["pvar"]
---

## Deskripcija

Čuva string player (igračevu) varijablu.

| Ime          | Deskripcija                                          |
| ------------ | ---------------------------------------------------- |
| playerid     | ID igrača čija će player varijabla biti postavljena. |
| varname      | Ime player varijable.                                |
| string_value | String kojeg želite sačuvati u player varijablu.     |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new h,m,s,str[50];
    gettime(h,m,s); // Dobij vrijeme
    format(str,50,"Connected: %d:%d:%d",h,m,s); // kreiraj string sa povezanim vremenom
    SetPVarString(playerid,"timeconnected",str); // sačuvaj string u varijablu igrača
    return 1;
}
```

## Zabilješke

:::tip

Varijable se resetiraju tek nakon što se pozove OnPlayerDisconnect, tako da su vrijednosti i dalje dostupne u OnPlayerDisconnect.

:::

## Srodne Funkcije

- [SetPVarInt](SetPVarInt): Postavi cijeli broj za igračevu varijablu.
- [GetPVarInt](GetPVarInt): Dobij prethodno postavljeni cijeli broj iz igračeve varijable.
- [GetPVarString](GetPVarString): Dobij prethodno postavljeni string iz igračeve varijable.
- [SetPVarFloat](SetPVarFloat): Postavi float za igračevu varijablu.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
