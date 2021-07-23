---
title: memcpy
description: Kopirajte bajtove s jedne lokacije na drugu.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Kopirajte bajtove s jedne lokacije na drugu.

| Ime                   | Deskripcija                                                                 |
| --------------------- | --------------------------------------------------------------------------- |
| dest[]                | Niz u koji se kopiraju bajtovi iz izvora.                                   |
| const source[]        | Izvorni niz.                                                                |
| index                 | Početni indeks u bajtovima u odredišnom nizu u koji treba kopirati podatke. |
| numbytes              | Broj bajtova (ne ćelija) za kopiranje.                                      |
| maxlength=sizeof dest | Maksimalan broj ćelija koje se uklapaju u odredišni međuspremnik.           |

## Returns

True/tačno pri uspješnom, false/netačno pri grešci.

## Primjeri

```c
//Spojite dva stinga s memcpy
new
    destination[64] = "Ovo je ",
    source[] = "niz u 32-bitnom nizu";

memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
//Izlaz: Ovo je niz u 32-bitnom nizu
```

## Srodne Funkcije

- [strcmp](strcmp): Uporedite dva stringa da biste vidjeli jesu li isti.
- [strfind](strfind): Potražite podstring u stringu.
- [strdel](strdel): Izbriši dio/cijeli string.
- [strins](strins): Stavite string u drugi string.
- [strlen](strlen): Provjeri dužinu stringa.
- [strmid](strmid): Izdvoji znakove iz stringa.
- [strpack](strpack): Spakujte string u odredište.
- [strval](strval): Pronađi vrijednost strina.
- [strcat](strcat): Spoji dva stringa.
