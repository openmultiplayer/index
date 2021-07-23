---
title: NetStats_GetConnectedTime
description: Dobija količinu vremena (u milisekundama) za koje je igrač povezan na server.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3z i ne radi u nižim verzijama!

:::

## Deskripcija

Dobija količinu vremena (u milisekundama) za koje je igrač povezan na server.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača za dobiti vrijeme konekcije. |

## Returns

Ova funkcija vraća količinu vremena (u milisekundama) za koje je igrač povezan sa serverom. 0 je vraćeno ako igrač nije konektovan.

## Primjeri

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/connectedtime"))
    {
        new szString[144];
        format(szString, sizeof(szString), "Konektovan si %i milisekundi na server.", NetStats_GetConnectedTime(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Zabilješke

:::tip

The return value is not reset to zero after changing the game mode (using the RCON command "gmx").

:::

## Srodne Funkcije

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Dobija mrežne statistike igrača i pohranjuje ih u string.
- [GetNetworkStats](GetNetworkStats): Dobija mrežne statistike servera i sprema ih u string.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Dohvatite broj mrežnih poruka koje je server primio od igrača.
- [NetStats_BytesReceived](NetStats_BytesReceived): Dohvatite količinu informacija (u bajtovima) koju je poslužitelj primio od igrača.
- [NetStats_MessagesSent](NetStats_MessagesSent): Dohvatite broj mrežnih poruka koje je server poslao igraču.
- [NetStats_BytesSent](NetStats_BytesSent): Dohvatite količinu informacija (u bajtovima) koje je poslužitelj poslao uređaju za reprodukciju.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Dohvatite broj mrežnih poruka koje je poslužitelj primio od igrača u posljednjoj sekundi.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Dobijte packet loss procenat igrača.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Dohvatite status veze igrača.
- [NetStats_GetIpPort](NetStats_GetIpPort): Nabavite IP adresu i port igrača.
