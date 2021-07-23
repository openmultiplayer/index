---
title: NetStats_BytesSent
description: Gets the amount of data (in bytes) that the server has sent to the player.
tags: ["network monitoring"]
---

<VersionWarn version='SA-MP 0.3z' />

## Description

Gets the amount of data (in bytes) that the server has sent to the player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## Returns

[edit]

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/bytes_sent"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have sent %i bytes of information to the server.", NetStats_BytesSent(playerid));
        SendClientMessage(playerid, -1, szString);
    }
    return 1;
}
```

## Related Functions

- [GetPlayerNetworkStats](GetPlayerNetworkStats): Gets a player's networkstats and saves it into a string.
- [GetNetworkStats](GetNetworkStats): Gets the server's networkstats and saves it into a string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
- [NetStats_BytesReceived](NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Get a player's connection status.
- [NetStats_GetIpPort](NetStats_GetIpPort): Get a player's IP and port.
