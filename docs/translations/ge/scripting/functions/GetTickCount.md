---
title: GetTickCount
description: Returns the uptime of the actual server (not the SA-MP server) in milliseconds.
tags: []
---

## Description

Returns the uptime of the actual server (not the SA-MP server) in milliseconds.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new count = GetTickCount();
    //Rest of OnPlayerConnect
    printf("Time taken to execute OnPlayerConnect: %d", GetTickCount() - count);
    return 1;
}
```

## Notes

:::tip

One common use for GetTickCount is for benchmarking. It can be used to calculate how much time some code takes to execute. See below for an example.

:::

:::warning

GetTickCount will cause problems on servers with uptime of over 24 days as GetTickCount will eventually warp past the integer size constraints. Check [this package](https://github.com/ScavengeSurvive/tick-difference) for a solution.

:::

## Related Functions

- [Tickcount](Tickcount): Get the uptime of the actual server.
