---
title: GetPlayerNetworkStats
description: Gets a player's network stats and saves them into a string.
tags: ["player", "network monitoring"]
---

<VersionWarn version='SA-MP 0.3c R4' />

## Description

Gets a player's network stats and saves them into a string.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| playerid    | The ID of the player you want to get the networkstats of.     |
| retstr[]    | The string to store the networkstats in, passed by reference. |
| retstr_size | The length of the string that should be stored.               |

## Returns

This function always returns 1.

## Examples

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/mynetstats"))
    {
        new stats[400+1];
        GetPlayerNetworkStats(playerid, stats, sizeof(stats)); // get your own network stats
        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "My NetworkStats", stats, "Okay", "");
    }
    return 1;
}
```

## Notes

:::tip

This function may not return accurate data when used under OnPlayerDisconnect if the player has quit normally. It usually returns accurate data if the player has been kicked or has timed out.

:::

## Related Functions

- [GetNetworkStats](GetNetworkStats): Gets the servers networkstats and saves it into a string.
- [NetStats_GetConnectedTime](NetStats_GetConnectedTime): Get the time that a player has been connected for.
- [NetStats_MessagesReceived](NetStats_MessagesReceived): Get the number of network messages the server has received from the player.
- [NetStats_BytesReceived](NetStats_BytesReceived): Get the amount of information (in bytes) that the server has received from the player.
- [NetStats_MessagesSent](NetStats_MessagesSent): Get the number of network messages the server has sent to the player.
- [NetStats_BytesSent](NetStats_BytesSent): Get the amount of information (in bytes) that the server has sent to the player.
- [NetStats_MessagesRecvPerSecond](NetStats_MessagesRecvPerSecond): Get the number of network messages the server has received from the player in the last second.
- [NetStats_PacketLossPercent](NetStats_PacketLossPercent): Get a player's packet loss percent.
- [NetStats_ConnectionStatus](NetStats_ConnectionStatus): Get a player's connection status.
- [NetStats_GetIpPort](NetStats_GetIpPort): Get a player's IP and port.
