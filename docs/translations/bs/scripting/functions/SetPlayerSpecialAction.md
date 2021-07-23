---
title: SetPlayerSpecialAction
description: Ova funkcija dozvoljava da postavite igraču specijalnu akciju.
tags: ["player"]
---

## Deskripcija

Ova funkcija dozvoljava da postavite igraču specijalnu akciju.

| Ime      | Deskripcija                                                  |
| -------- | ------------------------------------------------------------ |
| playerid | Igrač koji će vršiti specijalnu akciju.                      |
| actionid | [Akcija](../resources/specialactions) koja će biti izvedena. |

## Returns

1: Funkcija uspješno izvršena.

0: Funkcija neuspješno izvršena. Ovo znači da igrač nije konektovan.

## Primjeri

```c
if (strcmp(cmd, "/handsup", true) == 0)
{
    SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
    return 1;
}
```

## Zabilješke

:::tip

Uklanjanjem jetpacks-a s igrača postavljanjem njihove posebne akcije na 0 zvuk ostaje do smrti.

:::

## Srodne Funkcije

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Dobij igračevu trenutnu specijalnu akciju.
- [ApplyAnimation](ApplyAnimation): Primijeni animaciju na igrača.
