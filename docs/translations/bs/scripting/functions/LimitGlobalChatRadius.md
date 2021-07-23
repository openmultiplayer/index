---
title: LimitGlobalChatRadius
description: Postavite ograničenje radijusa za chat.
tags: []
---

## Deskripcija

Postavite ograničenje radijusa za chat. Samo igrači na određenoj udaljenosti od igrača vidjet će svoju poruku u chatu. Takođe mijenja udaljenost na kojoj igrač može vidjeti druge igrače na mapi na istoj udaljenosti.

| Ime               | Deskripcija                                |
| ----------------- | ------------------------------------------ |
| Float:chat_radius | Opseg u kojem će igrači moći vidjeti chat. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
public OnGameModeInit()
{
    LimitGlobalChatRadius(200.0);
    return 1;
}
```

## Srodne Funkcije

- [SetNameTagDrawDistance](SetNameTagDrawDistance): Postavite udaljenost od mjesta na kojem ljudi mogu vidjeti oznake imena drugih igrača.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): Prisilite igrača da pošalje tekst za jednog igrača.
- [SendPlayerMessageToAll](SendPlayerMessageToAll): Prisilite igrača da pošalje tekst za sve igrače.
- [OnPlayerText](../callbacks/OnPlayerText): Pozvano kada igrač pošalje poruku putem chata.
