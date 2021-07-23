---
title: tickcount
description: Ova se funkcija može koristiti kao zamjena za GetTickCount, jer vraća broj milisekundi od pokretanja poslužitelja.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova se funkcija može koristiti kao zamjena za GetTickCount, jer vraća broj milisekundi od pokretanja poslužitelja.

| Ime            | Deskripcija                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| &granularity=0 | Po povratku, ova vrijednost sadrži broj otkucaja koje će unutarnje sistemsko vrijeme otkucati u sekundi. Ova vrijednost stoga ukazuje na točnost povratne vrijednosti ove funkcije. |

## Returns

Broj milisekundi od pokretanja sistema. Za 32-bitnu ćeliju ovaj broj preplavljuje nakon približno 24 dana neprekidnog rada.

## Srodne Funkcije

- [GetTickCount](GetTickCount): Nabavite vrijeme rada stvarnog servera.
