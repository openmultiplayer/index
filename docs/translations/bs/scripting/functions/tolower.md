---
title: tolower
description: Ova funkcija mijenja jedan znak u malo slovo.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova funkcija mijenja jedan znak u malo slovo.

| Ime | Deskripcija                         |
| --- | ----------------------------------- |
| c   | Znak za promijeniti u veliko slovo. |

## Returns

Vrijednost ASCII znaka, ali malim slovima.

## Primjeri

```c
public OnPlayerText(playerid, text[])
{
    text[0] = tolower(text[0]);
    //Ovo postavlja prvi karakter u malo slovo
    return 1;
}
```

## Srodne Funkcije

- [toupper](toupper): Ova funkcija mijenja jedan znak u veliko slovo.
