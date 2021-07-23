---
title: BlockIpAddress
description: Blocks an IP address from further communication with the server for a set amount of time (with wildcards allowed).
tags: []
---

<VersionWarn version='SA-MP 0.3z R2-2' />

## Description

Blocks an IP address from further communication with the server for a set amount of time (with wildcards allowed). Players trying to connect to the server with a blocked IP address will receive the generic "You are banned from this server." message. Players that are online on the specified IP before the block will timeout after a few seconds and, upon reconnect, will receive the same message.

| Name       | Description                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| ip_address | The IP to block.                                                                                           |
| timems     | The time (in milliseconds) that the connection will be blocked for. 0 can be used for an indefinite block. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnRconLoginAttempt(ip[], password[], success)
{
    if (!success) // if they supplied a bad password
    {
        BlockIpAddress(ip, 60 * 1000); // block the connections from this ip for one minute
    }
    return 1;
}
```

## Notes

:::tip

Wildcards can be used with this function, for example blocking the IP '6.9._._' will block all IPs where the first two octets are 6 and 9 respectively. Any number can be in place of an asterisk.

:::

## Related Functions

- [UnBlockIpAddress](UnBlockIpAddress): Unblock an IP that was previously blocked.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Called when a player is attempting to connect to the server.
