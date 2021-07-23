---
title: NetStats_PacketLossPercent
description: Gets the packet loss percentage of a player.
tags: ["network monitoring"]
---

<VersionWarn version='SA-MP 0.3z' />

## Description

Gets the packet loss percentage of a player. Packet loss means data the player is sending to the server is being lost (or vice-versa).

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## Returns

The percentage packet loss as a float. 0 if player not connected.

## Examples

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

## Notes

:::tip

Be advised that this function will report the packets lost by the server. The packet loss number reported by the client **will** be different, not because either is incorrect, but because both the server and the client are only aware of the loss packages sent by them.

:::

:::tip

Anything greater than 0.0% should already be a cause of concern. Anything greater than 1.0% is outright bad.

:::

## Related Functions

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Gets a player's networkstats and saves it into a string.
- [GetNetworkStats](GetNetworkStats): Gets the server's networkstats and saves it into a string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Get a player's connection status.
- [NetStats_GetIpPort](NetStats_GetIpPort): Get a player's IP and port.
