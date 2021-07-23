---
title: SetPlayerMarkerForPlayer
description: Promijeni boju igračevog nametag-a i bljeskalice na radaru za drugog igrača.
tags: ["player"]
---

## Deskripcija

Promijeni boju igračevog nametag-a i bljeskalice na radaru za drugog igrača.

| Ime          | Deskripcija                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| playerid     | Igrač koji će vidjeti promijenjenu boju bljeskalice/nametag-a drugog igrača. |
| showplayerid | Igrač čija će boja biti promijenjena.                                        |
| color        | Nova boja. Podržava alfa vrijednosti.                                        |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Postavi da igrač ID 42 vidi igrača ID 1 kao crveni marker (crvenu oznaku na mapi/radaru)
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

// Neka igračeva oznaka/marker bude nevidljivo bijeli/a (chat će biti bijeli, ali marker više neće biti).
SetPlayerMarkerForPlayer(42, 1, 0xFFFFFF00);

// Neka oznaka/marker igrača bude nevidljiva igraču, a boja chata će ostati ista. Ispravno će raditi samo ako je korišten SetPlayerColor:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) & 0xFFFFFF00));

// Neka oznaka/marker igrača bude potpuno neproziran (pun) za igrača, a da boja chata ostane ista. Ispravno će raditi samo ako je korišten SetPlayerColor:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) | 0x000000FF));
```

## Srodne Funkcije

- [ShowPlayerMarkers](ShowPlayerMarkers): Odlučite hoće li server prikazivati ​​oznake na radaru.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Ograničite radijus markera/oznake igrača.
- [SetPlayerColor](SetPlayerColor): Postavi boju igrača.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Prikaži ili sakrij nametag za određenog igrača.
