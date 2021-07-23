---
title: SetPVarInt
description: Postavi cjelobrojnu player (igračevu) varijablu.
tags: ["pvar"]
---

## Deskripcija

Postavi cjelobrojnu player (igračevu) varijablu.

| Ime       | Deskripcija                                          |
| --------- | ---------------------------------------------------- |
| playerid  | ID igrača čija će player varijabla biti postavljena. |
| varname   | Ime player varijable.                                |
| int_value | Cijeli broj za postaviti.                            |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ili navedeni igrač nije konektovan, ili je ime varijable prazno ili preko 40 karaktera.

## Primjeri

```c
// Postavi GetPlayerMoney vrijednost player varijable nazvane "Money"
SetPVarInt(playerid, "Money", GetPlayerMoney(playerid));
// ispisati će da igrač ima
printf("money: %d", GetPVarInt(playerid, "Money"));
```

## Zabilješke

:::tip

Varijable se resetiraju tek nakon što se pozove OnPlayerDisconnect, tako da su vrijednosti i dalje dostupne u OnPlayerDisconnect.

:::

## Srodne Funkcije

- [GetPVarInt](GetPVarInt): Dobij prethodno postavljeni cijeli broj iz igračeve varijable.
- [SetPVarString](SetPVarString): Postavi string za igračevu varijablu.
- [GetPVarString](GetPVarString): Dobij prethodno postavljeni string iz igračeve varijable.
- [SetPVarFloat](SetPVarFloat): Postavi float za igračevu varijablu.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
