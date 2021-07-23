---
title: getproperty
description: Uzmite određenu imovinu iz memorije, string se vraća kao spakirani string!

tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Uzmite određenu imovinu iz memorije, string se vraća kao spakirani string!

| Ime      | Deskripcija                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| id       | Virtualna mašina za upotrebu, trebali biste zadržati ovu nulu.                  |
| name[]   | Ime imovine, trebali biste ovo zadržati "".                                     |
| value    | Jedinstveni ID imovine, upotrijebite hash-funkciju za izračunavanje iz stringa. |
| string[] | Varijabla za pohraniti rezultat, proslijeđeno referencom.                       |

## Returns

Vrijednost imovine kada se prenese ime; popunjava argument niza kada se vrijednost preda. Ako imovina ne postoji, ova funkcija vraća nulu.

## Primjeri

```c
new value[16];

getproperty(0, "", 123984334, value);

strunpack(value, value, sizeof(value));

print(value);
```

## Zabilješke

:::tip

Preporučljivo je da koristite PVars/SVars ili GVar plugin umjesto ovih native-a zbog njihove brzine (spori su).

:::

## Srodne Funkcije

- [setproperty](setproperty): Postavi imovinu.
- [deleteproperty](deleteproperty): Obriši imovinu.
- [existproperty](existproperty): Provjeri da li imovina postoji.
