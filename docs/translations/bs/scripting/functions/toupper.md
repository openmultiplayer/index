---
title: toupper
description: Ova funkcija mijenja jedan znak u veliko slovo.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Ova funkcija mijenja jedan znak u veliko slovo.

| Ime | Deskripcija                         |
| --- | ----------------------------------- |
| c   | Znak za promijeniti u veliko slovo. |

## Returns

Vrijednost ASCII znaka, ali velikim slovima.

## Primjeri

```c
public OnPlayerText(playerid, text[])
{
    text[0] = toupper(text[0]);
    //Ovo postavlja prvi znak u veliko slovo
    return 1;
}
```

## Srodne Funkcije

- [tolower](tolower): Ova funkcija mijenja jedan znak u malo slovo.
