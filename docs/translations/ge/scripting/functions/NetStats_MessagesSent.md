---
title: NetStats_MessagesSent
description: Gets the number of messages the server has sent to the player.
tags: ["network monitoring"]
---

<VersionWarn version='SA-MP 0.3z' />

## Description

Gets the number of messages the server has sent to the player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the data from. |

## Returns

The number of messages the server has sent to the player.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/msgsent"))
    {
        new szString[144];
        format(szString, sizeof(szString), "You have recieved %i network messages.", NetStats_MessagesSent(playerid));
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
- [NetStats_BytesReceived](NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_BytesSent](NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Get a player's connection status.
- [NetStats_GetIpPort](NetStats_GetIpPort): Get a player's IP and port.
