---
title: NetStats_MessagesReceived
description: Dobija broj poruka koje je server primio od klijenta za reprodukciju.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija broj poruka koje je server primio od klijenta za reprodukciju.

| Ime      | Deskripcija                  |
| -------- | ---------------------------- |
| playerid | ID igrača za dobiti podatke. |

## Returns

Ova funkcija vraća broj poruka koje je server primio od klijenta za reprodukciju. 0 se vraća ako igrač nije konektovan.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/msgs"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Poslao si %i network poruka.", NetStats_MessagesReceived(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Dobija mrežne statistike igrača i pohranjuje ih u string.
- [GetNetworkStats](GetNetworkStats): Dobija mrežne statistike servera i sprema ih u string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Dobij vrijeme za kojeg je igrač povezan na server.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dohvatite količinu informacija (u bajtovima) koju je poslužitelj primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dohvatite broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dohvatite količinu informacija (u bajtovima) koje je poslužitelj poslao uređaju za reprodukciju.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dohvatite broj mrežnih poruka koje je poslužitelj primio od igrača u posljednjoj sekundi.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Dobijte packet loss procenat igrača.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dohvatite status veze igrača.
- [NetStats_GetIpPort](NetStats_GetIpPort): Nabavite IP adresu i port igrača.
