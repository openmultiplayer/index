---
title: gettime
description: Dobij trenutno vrijeme servera koje će biti pohranjeno u varijablama &hour, &minute and &second.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobij trenutno vrijeme servera koje će biti pohranjeno u varijablama &hour, &minute and &second.

| Ime       | Deskripcija                                              |
| --------- | -------------------------------------------------------- |
| &hour=0   | Varijabla za pohraniti sate, proslijeđeno referencom.    |
| &minute=0 | Varijabla za pohraniti minute, proslijeđeno referencom.  |
| &second=0 | Varijabla za pohraniti sekunde, proslijeđeno referencom. |

## Returns

Sama funkcija vraća Unix vremensku oznaku.

## Primjeri

```c
new
    hours,
    minutes,
    seconds,
    timestamp;

timestamp = gettime(hours, minutes, seconds);
printf("%02d:%02d:%02d", hours, minutes, seconds);
printf("Sekunde od ponoći 1. januara 1970: %d", timestamp);
```

## Zabilješke

:::tip

Ova je funkcija korisna za mjerenje vremenskih intervala pomoću karakteristika vremenskih žigova. Ovo može biti posebno korisno ako želite ograničiti neke funkcije na osnovu vremena (npr. Naredba koja se može izvršiti samo svakih 30 sekundi). Korištenjem ove metode ne morate se oslanjati na tajmere.

:::

## Srodne Funkcije

- [getdate](getdate): Doznajte trenutni datum servera.
