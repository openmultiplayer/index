---
title: OnClientMessage
description: Ta "callback" se pokliče vsakič, ko NPC vidi "ClientMessage"
tags: []
---

:::warning

Ta funkcijo je bila dodana v SA-MP 0.3a in ne deluje v nižjih različicah!

:::

## Opis

Ta "callback" se pokliče vsakič, ko NPC vidi "ClientMessage" (sporočilo, ki ga pošlje "client"). To bo vsakič, ko se prikliče funkcijo `SendClientMessageToAll` in vsakič, ko se funkcijo" SendClientMessage "pošlje NPC. Ta povratni klic ne bo poklican, ko nekdo nekaj reče. Za besedilno različico predvajalnika glejte funkcijo NPC: "OnPlayerText".

| Ime    | Opis                                 |
| ------ | ------------------------------------ |
| color  | Barva "ClientMessage" sporočila .    |
| text[] | Pravo sporočilo.                     |

## Returns

Ta "callback" se ne obdeluje (return).

## Primeri

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Stanje na banki : $0") != -1)
    {
        SendClientMessage(playerid, -1, "Reven sem :(");
    }
}
```

## Povezane Funkcijo
