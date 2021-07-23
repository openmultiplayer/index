---
title: SetPlayerChatBubble
description: Kreira chat balončić iznad igračevog nametag-a.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Kreira chat balončić iznad igračevog nametag-a.

| Ime          | Deskripcija                                                |
| ------------ | ---------------------------------------------------------- |
| playerid     | Igrač koji će imati chat balončić.                         |
| text[]       | Tekst za prikazati.                                        |
| color        | Boja teksta.                                               |
| drawdistance | Distanca sa koje će igrači moći vidjeti chat balončić.     |
| expiretime   | Vrijeme u milisekundama za koje će balončić biti prikazan. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerText(playerid, text[])
{
    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);
    return 1;
}
```

## Zabilješke

:::tip

Ne možete vidjeti svoje lične chat balončiće. Isto se dešava i sa prikavčenim 3D text labelom.

:::

:::tip

Ugradnju boja možete koristiti za više boja u poruci. Korištenje '-1' kao boje učinit će tekst bijelim (iz jednostavnog razloga što je -1, kada je predstavljen u heksadecimalnom zapisu, 0xFFFFFFFF).

:::

## Srodne Funkcije
