---
title: FindTextureFileNameFromCRC
description: Pronađite postojeću prilagođenu datoteku teksture kože ili jednostavnog objekta.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.DL R1 i ne radi u nižim verzijama!

:::

## Deskripcija

Pronađite postojeću prilagođenu datoteku teksture kože ili jednostavnog objekta. Datoteke modela se prema zadanim postavkama nalaze u direktoriju poslužitelja modela (postavka artpath).

| Ime         | Deskripcija                                                            |
| ----------- | ---------------------------------------------------------------------- |
| crc         | CRC kontrolna suma datoteke prilagođenog modela.                       |
| retstr[]    | Niz u koji treba pohraniti .dff ime datoteke, proslijeđeno referencom. |
| retstr_size | Dužina niza koji treba pohraniti.                                      |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena.

## Srodne Funkcije

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Pozvano kada igrač dovrši preuzimanje prilagođenih modela.
