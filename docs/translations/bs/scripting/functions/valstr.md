---
title: valstr
description: Pretvori cijeli broj u string.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Pretvori cijeli broj u string.

| Ime             | Deskripcija                                                            |
| --------------- | ---------------------------------------------------------------------- |
| dest            | Odredište stringa.                                                     |
| value           | Vrijednost koju treba pretvoriti u string.                             |
| pack (optional) | Da li treba spakirati odredište (isključeno prema zadanim postavkama). |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new string[4];
new iValue = 250;
valstr(string,iValue); // string je sada "250"
// valstr fix by Slice
stock FIX_valstr(dest[], value, bool:pack = false)
{
    // format ne može pravilno obraditi cellmin
    static const cellmin_value[] = !"-2147483648";

    if (value == cellmin)
        pack && strpack(dest, cellmin_value, 12) || strunpack(dest, cellmin_value, 12);
    else
        format(dest, 12, "%d", value), pack && strpack(dest, dest, 12);
}
#define valstr FIX_valstr
```

## Zabilješke

:::warning

Prosljeđivanje velike vrijednosti ovoj funkciji može dovesti do zamrzavanja / pada sistema. Dostupni su popravci. Ispod je popravak koji se može staviti ravno u vašu skriptu (prije nego što se valstr koristi bilo gdje). fixes.inc uključuje ovaj popravak.

:::

## Srodne Funkcije

- [strval](strval): Pretvori string u cijeli broj.
- [strcmp](strcmp): Uporedi dva stringa kako bi provjerio da li su isti.
