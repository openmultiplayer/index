---
title: SetPlayerMapIcon
description: Postavi ikonu/marker na mapu igrača.
tags: ["player"]
---

## Deskripcija

Postavi ikonu/marker na mapu igrača. Može se koristiti da označite lokacije kao npr. banke i bolnice igračima.

| Ime        | Deskripcija                                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid   | ID igrača za postaviti ikonicu na mapu.                                                                                                                               |
| iconid     | ID ikonice, od 0 do 99. Ovo znači da postoji maksimalno 100 map ikonica. ID se može koristiti u [RemovePlayerMapIcon](/docs/scripting/functions/RemovePlayerMapIcon). |
| Float:x    | X kordinata za postaviti map ikonicu.                                                                                                                                 |
| Float:y    | Y kordinata za postaviti map ikonicu.                                                                                                                                 |
| Float:z    | Z kordinata za postaviti map ikonicu.                                                                                                                                 |
| markertype | [Ikonica](/docs/scripting/resources/mapicons) za postaviti.                                                                                                           |
| color      | Boja ikonice, kao cijeli broj ili hex u RGBA formatu. Ovo bi se trebalo koristiti samo sa ikonicom kocke (ID: 0).                                                     |
| style      | [Stil](/docs/scripting/resources/mapiconstyles) ikonice.                                                                                                              |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Igrač nije konektovan.

## Primjeri

```c
public OnPlayerConnect( playerid )
{
    // Ovaj primjer demonstrira kako kreirati dollar-ikonicu na vrh locirane 24/7 trgovine
    // u Las Venturasu. Na ovaj način novi igrači znaju gdje da odu sa svojim novcem!
    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);
}
```

## Zabilješke

:::tip

Ako koristite nevažeći tip markera, stvorit će se ID 1 (Bijeli kvadrat). Ako koristite ID ikone koji se već koristi, on će zamijeniti trenutnu ikonu karte pomoću tog ID-a.

:::

:::warning

Možete imati samo 100 ikona mapa! Oznake tipa 1 (), 2 (), 4 () i 56 () uzrokovat će pad vaše igre ako ste tijekom pregledavanja karte omogućili legende karte.

:::

## Srodne Funkcije

- [RemovePlayerMapIcon](/docs/scripting/functions/RemovePlayerMapIcon): Ukloni ikonicu na mapi za igrača.
- [SetPlayerMarkerForPlayer](/docs/scripting/functions/SetPlayerMarkerForPlayer): Postavite marker/oznaku igrača.
