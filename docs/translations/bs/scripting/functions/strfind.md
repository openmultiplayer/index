---
title: strfind
description: Potraži podstring u stringu.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Potraži podstring u stringu.

| Ime                   | Deskripcija                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| const string[]        | String u kojem želite tražiti (haystack).                                                                                         |
| const sub[]           | String kojeg želite tražiti (needle).                                                                                             |
| ignorecase (optional) | Kada je postavljeno na 'true', velika slova nemaju veze - HeLLo je isto kao Hello. Kada je postavljeno na 'false', oni nisu isti. |
| Position (optional)   | Pomak od kojeg treba započeti pretragu.                                                                                           |

## Returns

Broj znakova prije podstringa (početna pozicija podstringa) ili -1 ako nije pronađen.

## Primjeri

```c
if (strfind("Are you in here?", "you", true) != -1) //vraća 4, zato što početak od 'you' (y) je na indexu 4 u stringu
{
    SendClientMessageToAll(0xFFFFFFFF, "Pronašao sam te!");
}
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
- [strdel](strdel): Obriši dio stringa.
- [strins](strins): Unesi tekst u string.
- [strlen](strlen): Dobij dužinu stringa.
- [strmid](strmid): Izdvoji dio stringa u drugi string.
- [strpack](strpack): Upakuj string u odredišni string.
- [strval](strval): Pretvori string u cijeli broj.
- [strcat](strcat): Spojite dva stringa u odredišnu referencu.
