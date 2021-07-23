---
title: GameTextForPlayer
description: Prikazuje 'game text' (tekst na ekranu) određeno vrijeme za određenog igrača.
tags: ["player"]
---

## Deskripcija

Prikazuje 'game text' (tekst na ekranu) određeno vrijeme za određenog igrača.

| Ime            | Deskripcija                                              |
| -------------- | -------------------------------------------------------- |
| playerid       | ID igrača za pokazati gametext.                          |
| const string[] | Tekst za prikazati.                                      |
| time           | Trajanje teksta koji se prikazuje u milisekundama.       |
| style          | [Stil](../resources/gametextstyles) teksta za prikazati. |

## Returns

1: Funkcija uspješno izvršena. Uspjeh se prijavljuje kada su stil i / ili vrijeme nevaljani. Ipak se ništa neće dogoditi (tekst se ne prikazuje). Može takođe uzrokovati pad sistema.

0: Funkcija neuspješno izvršena. To znači da je string prazan ili Igrač nije konektovan..

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    GameTextForPlayer(playerid, "Wasted", 5000, 2);
    return 1;
}
```

## Zabilješke

:::warning

Imajte na umu da igrači mogu crashati zbog neparnog broja simbola tilde (~) koji se koriste u tekstu igre. Korištenje kodova u boji (npr. ~r~) izvan 255. znaka može srušiti client.

Također, prazan prostor na kraju niza može rezultirati neuspjehom. Na primjer: `"Headshot "` rezultira neuspjehom. Umjesto toga, trebao bi biti `"Headshot"` ili `"Headshot_"`.

:::

## Srodne Funkcije

- [GameTextForAll](GameTextForAll): Prikaži gametext svim igračima.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
