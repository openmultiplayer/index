---
title: OnIncomingConnection
description: Ta "callback" se pokliče, ko se naslov IP poskuša povezati s strežnikom.
tags: []
---

:::warning

Ta funkcijo je bila dodana v SA-MP 0.3z R2-2 in ne deluje v nižjih različicah!

:::

## Opis

Ta "callback" se pokliče, ko se naslov IP poskuša povezati s strežnikom. Če želite blokirati dohodne povezave, uporabite "BlockIpAddress".

| Ime          | Opis                                            |
| ------------ | ----------------------------------------------- |
| playerid     | ID predvajalnika, ki se poskuša povezati        |
| ip_address[] | Naslov IP predvajalnika, ki se poskuša povezati |
| port         | "Port" so poskusila povezavo                    |

## Returns

1 - Preprečil bo druge "filterscript" to prejmem "callback".

0 -Pomeni, da bo ta "callback" se posreduje na naslednjo "filterscript".

Vedno je bila povabljena prva v "filterscript".

## Primeri

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf(Dohodna povezava iz ID-ja igralca %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Povezane Funkcijo

- [BlockIpAddress](../functions/BlockIpAddress.md): Blokirajte naslov IP, da se določen čas ne poveže s strežnikom.
- [UnBlockIpAddress](../functions/UnBlockIpAddress.md): Odblokirajte IP, ki ste ga prej blokirali.
