---
title: GetPVarString
description: Dobija igračevu varijablu kao string.
tags: ["pvar"]
---

## Deskripcija

Dobija igračevu varijablu kao string.

| Ime            | Deskripcija                                                  |
| -------------- | ------------------------------------------------------------ |
| playerid       | ID igrača za dobiti igračevu varijablu.                      |
| varname        | Ime igračeve varijable, postavljeno od SetPVarString.        |
| &string_return | Niz za pohraniti string vrijednost, proslijeđeno referencom. |
| len            | Maksimalna dužina returnovanog/vraćenog stringa.             |

## Returns

Dužina stringa.

## Primjeri

```c
public OnPlayerConnect(playerid,reason)
{
    new playerName[MAX_PLAYER_NAME+1];
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    SetPVarString(playerid, "PlayerName", playerName);
    return 1;
}

public OnPlayerDeath(playerid, killerid, reason)
{
    new playerName[MAX_PLAYER_NAME+1];
    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));

    printf("%s je umro.", playerName);
}
```

## Zabilješke

:::tip

Ako je dužina niza jednaka nuli (vrijednost nije postavljena), tekst string_return neće se ažurirati ili postaviti na bilo što i ostat će sa starim podacima, nužno obrisati varijablu na praznu vrijednost ako GetPVarString vrati 0 ako to ponašanje nije poželjno.

:::

## Srodne Funkcije

- [SetPVarString](SetPVarString): Postavi string za igračevu varijablu.
- [SetPVarInt](SetPVarInt): Postavi cijeli broj za igračevu varijablu.
- [GetPVarInt](GetPVarInt): Dobij prethodno postavljeni cijeli broj iz igračeve varijable.
- [SetPVarFloat](SetPVarFloat): Postavi float za igračevu varijablu.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
