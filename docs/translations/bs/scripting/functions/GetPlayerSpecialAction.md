---
title: GetPlayerSpecialAction
description: Dohvaća trenutnu specijalnu akciju igrača.
tags: ["player"]
---

## Deskripcija

Dohvaća trenutnu specijalnu akciju igrača.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača za dobiti specijalnu akciju. |

## Returns

Specijalnu akciju igrača (pogledaj: [Specijalne Akcije](../resources/specialactions)).

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    // Banuje igrača ako ima jetpack
    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerSpecialAction](SetPlayerSpecialAction): Postavi igraču specijalnu akciju.
- [GetPlayerState](GetPlayerState): Dobij trenutno stanje igrača.
