---
title: gpci
description: Fetch the CI (computer/client identification) of a user, this is linked to their SAMP/GTA on their computer.
tags: []
---

<LowercaseNote />

## Description

Fetch the CI of a user, this is linked to their SAMP/GTA on their computer.

:::warning

A player's CI is NOT UNIQUE, some players may have similar or the same CI, don't ban solely due to a CI match.

:::

## Parameters

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to fetch their CI.          |
| string[] | String to store the fetched CI in.               |
| length   | Assigned size of the string, should use sizeof() |

## Return Values

This function will return the string value of a user's CI.

:::warning

You must add 'native gpci(playerid, serial[], len);' at the top of your script before using any CI functions

:::

## Example Usage

```c
#if !defined gpci
    native gpci(playerid, serial[], len);
#endif

new szSerial[41]; // 40 + \0

gpci(iPlayerID, szSerial, sizeof(szSerial));
return szSerial;
```

:::tip

This function may come in handy to easily get someone's CI.

:::

```c
ReturnCI(iPlayerID)
{
    new
        szSerial[41]; // 40 + \0

    gpci(iPlayerID, szSerial, sizeof(szSerial));
    return szSerial;
}
```

## Related Functions

- [GetNetworkStats](GetNetworkStats): Gets the servers networkstats and saves it into a string.
- [GetPlayerNetworkStats](GetPlayerNetworkStats): Gets a player networkstats and saves it into a string.
