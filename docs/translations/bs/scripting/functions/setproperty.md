---
title: setproperty
description: Dodaj novu imovinu ili promijeni već postojeću.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dodaj novu imovinu ili promijeni već postojeću.

| Ime      | Deskripcija                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | Virtualna mašina za upotrebu, trebali biste zadržati ovu nulu.                                                                                  |
| name[]   | Koristi se u kombinaciji s vrijednošću prilikom pohrane cijelih brojeva; nemojte koristiti ovo ako želite pohraniti niz.                        |
| value    | Cjelobrojna vrijednost za pohraniti ili jedinstveni ID imovine ako pohranjujemo string. Upotrijebite hash-funkciju za izračunavanje iz stringa. |
| string[] | Vrijednost svojstva, kao string. Ne koristite ovo ako želite pohraniti cijeli broj.                                                             |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
setproperty(.name = "MyInteger", .value = 42);

new value = getproperty(.name = "MyInteger");
printf("Vrijednost koja je sacuvana: %d", value);
setproperty(0, "", 123984334, ":)");

new value[4];
getproperty(0, "", 123984334, value);
strunpack(value, value, sizeof(value)); // Prvo moramo da otpakujemo string
print(value);

// Ispisati će :)
setproperty(.value = 123984334, .string = ":)");

// Ostalo je isto kao i gore.
```

## Zabilješke

:::tip

Preporučljivo je da koristite PVars/SVars ili GVar plugin umjesto ovih native-a zbog njihove brzine (spori su).

:::

## Srodne Funkcije

- [getproperty](getproperty): Dobij vrijednost imovine.
- [deleteproperty](deleteproperty): Obriši imovinu.
- [existproperty](existproperty): Provjeri da li imovina postoji.
