---
title: GetPlayerState
description: Dobij trenutno stanje igrača.
tags: ["player"]
---

## Deskripcija

Dobij trenutno stanje igrača.

| Ime      | Deskripcija                          |
| -------- | ------------------------------------ |
| playerid | ID igrača za dobiti trenutno stanje. |

## Returns

Trenutno stanje igrača kao cijeli broj (pogledaj: [Stanja Igrača](../resources/playerstates)).

## Primjeri

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    new playerState = GetPlayerState(killerid); // Dobij stanje ubice

    if (playerState == PLAYER_STATE_DRIVER) // Ako je ubica u vozilu
    {
        // To je drive-by, uzmi mu malo novca
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Dobij igračevu trenutnu specijalnu akciju.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Postavi igraču specijalnu akciju.
- [OnPlayerStateChange](../callbacks/OnPlayerStateChange): Pozvano kada igrač promijeni stanje.
