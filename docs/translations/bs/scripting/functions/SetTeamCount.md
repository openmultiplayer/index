---
title: SetTeamCount
description: Ova se funkcija koristi za promjenu količine timova korištenih u gamemodeu.
tags: []
---

## Deskripcija

Ova se funkcija koristi za promjenu količine timova korištenih u gamemodeu. Nema očigledan način upotrebe, ali može pomoći da se naznači broj timova koji se koriste za bolje (efikasnije) interno rukovanje. Ovu funkciju treba koristiti samo u OnGameModeInit povratnom pozivu. Važno: Ovdje možete proslijediti 2 milijarde ako želite, ova funkcija uopće nema efekta.

| Ime   | Deskripcija                    |
| ----- | ------------------------------ |
| teams | Broj timova koje gamemode zna. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit( )
{
    // Koristimo 18 timova, definirajmo ih;
    SetTeamCount(18);
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerTeam](GetPlayerTeam): Provjerite u kojem je igrač timu.
- [SetPlayerTeam](SetPlayerTeam): Postavi tim igrača.
