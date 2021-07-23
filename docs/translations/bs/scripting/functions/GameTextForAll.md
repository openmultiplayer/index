---
title: GameTextForAll
description: Prikazuje 'game text' (tekst na ekranu) određeno vrijeme za sve igrače.
tags: []
---

## Deskripcija

Prikazuje 'game text' (tekst na ekranu) određeno vrijeme za sve igrače.

| Ime            | Deskripcija                                              |
| -------------- | -------------------------------------------------------- |
| const string[] | Tekst za prikazati.                                      |
| time           | Trajanje teksta koji se prikazuje u milisekundama.       |
| style          | [Stil](../resources/gametextstyles) teksta za prikazati. |

## Returns

Ova funkcija uvijek returna (vraća) 1.

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // Ovaj primjer prikazuje veliki, bijeli tekst koji kaže
    // "[playerName] je preminuo" na ekranu svih,
    // nakon što je igrač umro ili ubijen.
    // Prikazuje se u obliku teksta 3, na 5 sekundi (5000 ms)
    new name[ 24 ], string[ 64 ];
    GetPlayerName( playerid, name, 24 );

    // Pravilno formatirajte preminulu poruku i pokažite je svima:
    format( string, sizeof(string), "~w~%s je umro", name );
    GameTextForAll( string, 5000, 3 );

    return 1;
}
```

## Zabilješke

:::warning

Imajte na umu da igrači mogu crashati zbog neparnog broja simbola tilde (~) koji se koriste u tekstu igre. Korištenje kodova u boji (npr. ~r~) izvan 255. znaka može srušiti client.

:::

## Srodne Funkcije

- [GameTextForPlayer](GameTextForPlayer): Prikaži gametext igraču.
- [TextDrawShowForAll](TextDrawShowForAll): Prikaži textdraw za sve igrače.
