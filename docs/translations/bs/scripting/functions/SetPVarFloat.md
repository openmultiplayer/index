---
title: SetPVarFloat
description: Postavi float vrijednost player (igračeve) varijable.
tags: ["pvar"]
---

## Deskripcija

Postavi float vrijednost player (igračeve) varijable.

| Ime         | Deskripcija                                          |
| ----------- | ---------------------------------------------------- |
| playerid    | ID igrača čija će player varijabla biti postavljena. |
| varname     | Ime player varijable.                                |
| float_value | Float za pohraniti u player varijablu.               |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ili navedeni igrač nije konektovan, ili je ime varijable prazno ili preko 40 karaktera.

## Primjeri

```c
forward SavePos(playerid);
public SavePos(playerid)
{
    new
        Float: x, Float: y, Float: z;

    GetPlayerPos(playerid, x, y, z); // Dobij poziciju igrača
    SetPVarFloat(playerid, "xpos", x); // Pohrani float u player varijablu
    SetPVarFloat(playerid, "ypos", y); // Pohrani float u player varijablu
    SetPVarFloat(playerid, "zpos", z); // Pohrani float u player varijablu
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
- [SetPVarString](SetPVarString): Postavi string za igračevu varijablu.
- [GetPVarString](GetPVarString): Dobij prethodno postavljeni string iz igračeve varijable.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
