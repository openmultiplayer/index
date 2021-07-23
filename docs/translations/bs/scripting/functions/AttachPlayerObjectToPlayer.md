---
title: AttachPlayerObjectToPlayer
description: Isto kao i AttachObjectToPlayer ali za objekte koji su kreirani za igrača.
tags: ["player"]
---

## Deskripcija

Isto kao i AttachObjectToPlayer ali za objekte koji su kreirani za igrača.

| Ime           | Deskripcija                                                         |
| ------------- | ------------------------------------------------------------------- |
| objectplayer  | ID igrača koji je povezan sa objektom.                              |
| objectid      | Objectid kojeg želite prikvačiti za igrača.                         |
| attachid      | ID igrača za kojeg želite prikvačiti objekat.                       |
| Float:OffsetX | Razdaljina između igrača i player objekta za prikvačiti u X smjeru. |
| Float:OffsetY | Razdaljina između igrača i player objekta za prikvačiti u Y smjeru. |
| Float:OffsetZ | Razdaljina između igrača i player objekta za prikvačiti u Z smjeru. |
| Float:RotX    | X rotacija.                                                         |
| Float:RotY    | Y rotacija.                                                         |
| Float:RotZ    | Z rotacija.                                                         |

## Returns

Ova funkcija ne returna(vraća) nikakve posebne vrijednosti.

## Primjeri

```c
AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, 1.5, 0.5, 0, 0, 1.5, 2 );
```

## Zabilješke

:::warning

Ova funkcija je uklonjena u SA-MP 0.3.

:::

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Napravi objekat samo za jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [MovePlayerObject](MovePlayerObject): Pomjeri player objekat.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [SetPlayerAttachedObject](SetPlayerAttachedObject): Prikvači objekat za igrača.
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Ukloni prikvačeni objekat za igrača.
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Provjerite je li objekt prikvačen na igrača u određenom indeksu.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjerava da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
