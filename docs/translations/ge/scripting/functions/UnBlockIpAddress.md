---
title: UnBlockIpAddress
description: Unblock an IP address that was previously blocked using BlockIpAddress.
tags: ["administration"]
---

<VersionWarn version='SA-MP 0.3z R2-2' />

## Description

Unblock an IP address that was previously blocked using BlockIpAddress.

| Name       | Description                |
| ---------- | -------------------------- |
| ip_address | The IP address to unblock. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1");
    return 1;
}
```

## Related Functions

- [BlockIpAddress](BlockIpAddress): Block an IP address from connecting to the server for a set amount of time.
- [OnIncomingConnection](../callbacks/OnIncomingConnection): Called when a player is attempting to connect to the server.
