---
title: SendClientCheck
description: Perform a memory check on the client.
tags: []
---

## Description

Perform a memory check on the client.

| Name            | Description                          |
| --------------- | ------------------------------------ |
| playerid        | The ID of the player to check.       |
| type            | The type of check to perform.        |
| memAddr         | The base address to check.           |
| memOffset       | The offset from the base address.    |
| byteCount       | The number of bytes to check.        |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The player is not connected.

## Examples

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        print("WARNING: The player doesn't seem to be using a regular computer!");
        Kick(playerid);
    }
    return 1;
}
```

## Notes

:::tip

There are 6 types of requests that the client processes  2, 5, 69, 70, 71, 72.
> Type 72 doesn't use any of the other arguments [arg | offset | size]. The arg returns the uptime of the computer.

:::

:::warning

This callback is only called when it is in a filterscript.

:::

## Related Callbacks

- [OnClientCheckResponse](../callbacks/OnClientCheckResponse): called when a SendClientCheck request completes.