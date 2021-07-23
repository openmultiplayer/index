---
title: NetStats_GetIpPort
description: Nabavite IP adresu i port igrača.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Nabavite IP adresu i port igrača.

| Ime         | Deskripcija                                                  |
| ----------- | ------------------------------------------------------------ |
| playerid    | ID igrača za dobiti IP i port.                               |
| ip_port[]   | Niz stringa za pohraniti IP i port, proslijeđeno referencom. |
| ip_port_len | Maksimalna dužina IP/port. 22 je preporučljivo.              |

## Returns

IP i port uređaja pohranjeni su u navedenom nizu.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/ipandport"))
    {
        new dest[22];
        NetStats_GetIpPort(playerid, dest, sizeof(dest));

        new szString[144];
        format(szString, sizeof(szString), "Tvoj trenutni IP i port je: %s.", dest);
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetPlayerIp](GetPlayerIp): Dobij IP igrača.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Dobija mrežne statistike igrača i pohranjuje ih u string.
- [GetNetworkStats](GetNetworkStats): Dobija mrežne statistike servera i sprema ih u string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Dobij vrijeme za kojeg je igrač povezan na server.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Dohvatite broj mrežnih poruka koje je server primio od igrača.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dohvatite količinu informacija (u bajtovima) koju je poslužitelj primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dohvatite broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dohvatite količinu informacija (u bajtovima) koje je poslužitelj poslao uređaju za reprodukciju.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dohvatite broj mrežnih poruka koje je poslužitelj primio od igrača u posljednjoj sekundi.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Dobijte packet loss procenat igrača.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dohvatite status veze igrača.
