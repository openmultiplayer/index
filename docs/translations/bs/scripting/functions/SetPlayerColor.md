---
title: SetPlayerColor
description: Postavlja boju igračevog nametag-a i markera/oznake (bljeskalica na mapi/radaru).
tags: ["player"]
---

## Deskripcija

Postavlja boju igračevog nametag-a i markera/oznake (bljeskalica na mapi/radaru).

| Ime      | Deskripcija                                   |
| -------- | --------------------------------------------- |
| playerid | ID igrača za postaviti boju.                  |
| color    | Boja za postaviti. Podržava alfa vrijednosti. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
// Crvena, koristeći se hexadecimalnom notacijom:
SetPlayerColor(playerid, 0xFF0000FF);

// Crvena, koristeći se decimalnom notacijom:
SetPlayerColor(playerid, 4278190335);
```

## Zabilješke

:::tip

Ova funkcija će promijeniti boju igrača za sve, čak i ako je boja igrača promijenjena pomoću SetPlayerMarkerForPlayer za bilo koji drugi igrač. Ako se koristi pod OnPlayerConnect, igrač koji utječe neće vidjeti boju u TAB izborniku.

:::

## Srodne Funkcije

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Postavite marker/oznaku igrača.
- [GetPlayerColor](GetPlayerColor): Provjeri boju igrača.
- [ChangeVehicleColor](ChangeVehicleColor): Postavi boju vozila.
