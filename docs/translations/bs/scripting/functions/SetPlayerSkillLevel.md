---
title: SetPlayerSkillLevel
description: Postavite nivo vještine određene vrste oružja za igrača.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Postavite nivo vještine određene vrste oružja za igrača.

| Ime      | Deskripcija                                                                                                     |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| playerid | ID igrača za postaviti nivo vještine oružja.                                                                    |
| skill    | [Oružje](../resources/weaponskills) za postaviti vještine.                                                      |
| level    | Razina vještine koju treba postaviti za to oružje, u rasponu od 0 do 999. Nivo izvan dosega maksimaliziraće ga. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);
    // To će natjerati igrača da koristi sawn-off sa jednom rukom.
    return 1;
}
```

## Zabilješke

:::warning

Parametar vještine NIJE ID oružja, to je vrsta vještine. Kliknite ovdje za listu vrsta vještina.

:::

## Srodne Funkcije

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): Postavite igračevo "armed" oružje.
- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.

## Srodne Informacije

- [Weapon Skills](../resources/weaponskills#skill-levels): Popis oružja koje se koriste za postavljanje nivoa vještine igrača.
