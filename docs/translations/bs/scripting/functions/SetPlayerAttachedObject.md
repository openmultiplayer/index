---
title: SetPlayerAttachedObject
description: Prikvači objekat na određenu kost igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3c i ne radi u nižim verzijama!

:::

## Deskripcija

Prikvači objekat na određenu kost igrača.

| Ime            | Deskripcija                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| playerid       | ID igrača za prikvačiti objekat.                                                         |
| index          | Index (slot) za dodijeliti objekat (0-9 od 0.3d, 0-4 u ranijim verzijama).               |
| modelid        | Model kojeg želite koristiti.                                                            |
| bone           | [Kost](../resources/boneid) za koju želite prikvačiti objekat.                           |
| fOffsetX       | (neobavezno) Pomak osi X za položaj objekta.                                             |
| fOffsetY       | (neobavezno) Pomak osi Y za položaj objekta.                                             |
| fOffsetZ       | (neobavezno) Pomak osi Z za položaj objekta.                                             |
| fRotX          | (neobavezno) Pomak osi X za rotaciju objekta.                                            |
| fRotY          | (neobavezno) Pomak osi Y za rotaciju objekta.                                            |
| fRotZ          | (neobavezno) Pomak osi Z za rotaciju objekta.                                            |
| fScaleX        | (optional) Pomak osi X za veličinu objekta.                                              |
| fScaleY        | (optional) Pomak osi Y za veličinu objekta.                                              |
| fScaleZ        | (optional) Pomak osi Z za veličinu objekta.                                              |
| materialcolor1 | (optional) Primarna boja za postaviti objektu, kao cijeli broj ili hex u ARGB formatu.   |
| materialcolor2 | (optional) Sekundarna boja za postaviti objektu, kao cijeli broj ili hex u ARGB formatu. |

## Returns

1 uspješno, 0 pri grešci.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerAttachedObject(playerid, 3, 1609, 2); // Prikvači kornjaču za playerid-evu glavu, in slou 3

    // Primjer korištenja boja na objektu koje je prikvačen za igrača:
    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);
    // Prikvači bijeli šešir na glavu igrača i oboji ga u zeleno
    return 1;
}
```

## Zabilješke

:::tip

Ova je funkcija odvojena od spremišta CreateObject / CreatePlayerObject.

:::

:::warning

U 0.3d verziji pa nadalje, 10 objekata se može prikvačiti za jednog igrača (index 0-9). U ranijim verzijama, limit je 5 (index 0-4).

:::

## Srodne Funkcije

- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Ukloni prikvačeni objekat sa igrača
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Provjeri da li je objekat prikvačen za igrača u oređenom indexu.
- [EditAttachedObject](EditAttachedObject): Uredi prikvačeni objekat.
