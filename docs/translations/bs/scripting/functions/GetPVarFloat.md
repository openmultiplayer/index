---
title: GetPVarFloat
description: Dobija varijablu igrača kao float.
tags: ["pvar"]
---

## Deskripcija

Dobija varijablu igrača kao float.

| Ime      | Deskripcija                                     |
| -------- | ----------------------------------------------- |
| playerid | ID igrača za dobiti varijablu igrača u float-u. |
| varname  | Ime varijable igrača.                           |

## Returns

Float navedene varijable igrača.

## Primjeri

```c
forward LoadPos(playerid);
public LoadPos(playerid)
{
    SetPlayerPos(playerid, GetPVarFloat(playerid,"xpos"), GetPVarFloat(playerid,"ypos"), GetPVarFloat(playerid,"zpos"));
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
- [SetPVarFloat](SetPVarFloat): Postavi float za igračevu varijablu.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
