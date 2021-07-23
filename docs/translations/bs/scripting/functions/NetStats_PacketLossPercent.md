---
title: NetStats_PacketLossPercent
description: Dobija procenat gubitka paketa (packet loss) igrača.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija procenat gubitka paketa (packet loss) igrača. Gubitak paketa znači da se podaci koje igrač šalje na server gube (ili obrnuto).

| Ime      | Deskripcija                  |
| -------- | ---------------------------- |
| playerid | ID igrača za dobiti podatke. |

## Returns

Procenat gubitka paketa kao float. 0 ako igrač nije povezan.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/packetloss"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Packets lost: %.2f percent.", NetStats_PacketLossPercent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Zabilješke

:::tip

Imajte na umu da će ova funkcija prijaviti pakete koje je server izgubio. Broj gubitka paketa koji je prijavio klijent **bit će** različit, ne zato što je i jedan i drugi netačan, već zato što su i server i klijent svjesni samo paketa gubitaka koje su poslali.

:::

:::tip

Sve veće od 0,0% već bi trebalo biti razlog za zabrinutost. Sve što je veće od 1,0% je potpuno loše.

:::

## Srodne Funkcije

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Dobija mrežne statistike igrača i pohranjuje ih u string.
- [GetNetworkStats](GetNetworkStats): Dobija mrežne statistike servera i sprema ih u string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Dobij vrijeme za kojeg je igrač povezan na server.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Dohvatite broj mrežnih poruka koje je server primio od igrača.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dohvatite količinu informacija (u bajtovima) koju je poslužitelj primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dohvatite broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dohvatite količinu informacija (u bajtovima) koje je poslužitelj poslao uređaju za reprodukciju.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dohvatite broj mrežnih poruka koje je poslužitelj primio od igrača u posljednjoj sekundi.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dohvatite status veze igrača.
- [NetStats_GetIpPort](NetStats_GetIpPort): Nabavite IP adresu i port igrača.
