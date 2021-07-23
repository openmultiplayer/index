---
title: GetPVarInt
description: Dobiva vrijednost cijelog broja varijable igrača.
tags: ["pvar"]
---

## Deskripcija

Dobiva vrijednost cijelog broja varijable igrača.

| Ime      | Deskripcija                                                                           |
| -------- | ------------------------------------------------------------------------------------- |
| playerid | ID igrača za dobiti igračevu varijablu.                                               |
| varname  | Ime igračeve varijable (osjetljivo na velika i mala slova). Dodijeljeno u SetPVarInt. |

## Returns

Cjelobrojna vrijednost navedene varijable igrača. I dalje će vraćati 0 ako varijabla nije postavljena ili igrač ne postoji.

## Primjeri

```c
public OnPlayerDisconnect(playerid,reason)
{
    printf("money: %d", GetPVarInt(playerid, "money")); // dobij sačuvanu vrijednost ('money')
    // ispisati će 'money: amount'
    return 1;
}
```

## Zabilješke

:::tip

Varijable se resetiraju tek nakon što se pozove OnPlayerDisconnect, tako da su vrijednosti i dalje dostupne u OnPlayerDisconnect.

:::

## Srodne Funkcije

- [SetPVarInt](SetPVarInt): Postavi cijeli broj za igračevu varijablu.
- [SetPVarString](SetPVarString): Postavi string za igračevu varijablu.
- [GetPVarString](GetPVarString): Dobij prethodno postavljeni string iz igračeve varijable.
- [SetPVarFloat](SetPVarFloat): Postavi float za igračevu varijablu.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
