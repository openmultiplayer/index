---
title: MovePlayerObject
description: Premjestite player objekat na novi položaj zadanom brzinom.
tags: ["player"]
---

## Deskripcija

Premjestite player objekat na novi položaj zadanom brzinom. Također podržava rotaciju. Also supports rotation. Igrači/vozila će 'surfati' objektom dok se kreće.

| Ime         | Deskripcija                                            |
| ----------- | ------------------------------------------------------ |
| playerid    | ID igrača čiji se player objekat pomjera.              |
| objectid    | ID objekta za pomjeriti.                               |
| Float:X     | X kordinata za pomjeriti objekat.                      |
| Float:Y     | Y kordinata za pomjeriti objekat.                      |
| Float:Z     | Z kordinata za pomjeriti objekat.                      |
| Float:Speed | Brzina kojom se objekt premješta (jedinice u sekundi). |
| Float:RotX  | FINALNA X rotacija (neobavezna).                       |
| Float:RotY  | FINALNA Y rotacija (neobavezna).                       |
| Float:RotZ  | FINALNA Z rotacija (neobavezna).                       |
| playerid    | Igrač kojeg si povezao sa ovim objektom.               |
| objectid    | ID objekta kojeg želiš pomjeriti.                      |
| Float:X     | Nova X kordinata.                                      |
| Float:Y     | Nova Y kordinata.                                      |
| Float:Z     | Nova Z kordinata.                                      |
| Float:Speed | Brzina kojom se objekt premješta.                      |

## Returns

Vrijeme koje će biti potrebno da se objekt pomakne u milisekundama.

## Primjeri

```c
MovePlayerObject(playerid, objectid, 2001.195679, 1547.113892, 10);
```

## Zabilješke

:::tip

Ako koristite parametre rotacije, objekt se mora premjestiti (X / Y / Z). Objekt će interpolirati rotaciju od trenutka kada se objekti počnu kretati i kada se zaustavi. Dolje navedeni parametri su za 0.3d R2 i starije verzije i trebali bi se zanemariti ako pokrenete najnoviju verziju SA-MP.

:::

## Srodne Funkcije

- [CreatePlayerObject](CreatePlayerObject): Kreiraj objekat za samo jednog igrača.
- [DestroyPlayerObject](DestroyPlayerObject): Uništi player objekat.
- [IsValidPlayerObject](IsValidPlayerObject): Provjeri da li je određeni player objekat validan.
- [StopPlayerObject](StopPlayerObject): Zaustavi player objekat od kretanja.
- [IsObjectMoving](IsObjectMoving): Provjeri da li se objekat kreće.
- [SetPlayerObjectPos](SetPlayerObjectPos): Postavi poziciju player objekta.
- [SetPlayerObjectRot](SetPlayerObjectRot): Postavi rotaciju player objekta.
- [GetPlayerObjectPos](GetPlayerObjectPos): Lociraj player objekat.
- [GetPlayerObjectRot](GetPlayerObjectRot): Provjeri rotaciju player objekta.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Prikvači player objekat za igrača.
- [CreateObject](CreateObject): Kreiraj objekat.
- [DestroyObject](DestroyObject): Uništi objekat.
- [IsValidObject](IsValidObject): Provjeri da li je određeni objekat validan.
- [MoveObject](MoveObject): Pomjeri objekat.
- [StopObject](StopObject): Zaustavi objekat od kretanja.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Provjeri da li se player objekat kreće.
- [SetObjectPos](SetObjectPos): Postavi poziciju objekta.
- [SetObjectRot](SetObjectRot): Postavi rotaciju objekta.
- [GetObjectPos](GetObjectPos): Lociraj objekat.
- [GetObjectRot](GetObjectRot): Provjeri rotaciju objekta.
- [AttachObjectToPlayer](AttachObjectToPlayer): Prikvači objekat za igrača.
