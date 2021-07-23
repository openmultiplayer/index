---
title: GetPlayerVersion
description: Returns the SA-MP client version, as reported by the player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Returns the SA-MP client version, as reported by the player.

| Name      | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| playerid  | The ID of the player to get the client version of.                |
| version[] | The string to store the player's version in, passed by reference. |
| len       | The maximum length of the version.                                |

## Returns

The client version is stored in the specified array.

## Examples

```c
public OnPlayerConnect(playerid)
{
    new
        string[24];
    GetPlayerVersion(playerid, string, sizeof(string));
    format(string, sizeof(string), "Your version of SA-MP: %s", string);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    // possible text: "Your version of SA-MP: 0.3.7"
    return 1;
}
```

## Notes

:::tip

A client's version can be up to 24 characters long, otherwise the connection will be rejected due to "Invalid client connection". However, normal players can only join with a version length between 5 (0.3.7) and 9 (0.3.DL-R1) characters.

:::

:::warning

The string the version gets stored in will be empty if playerid is an NPC.

:::

## Related Functions

- [GetPlayerName](GetPlayerName): Get a player's name.
- [GetPlayerPing](GetPlayerPing): Get the ping of a player.
- [GetPlayerIp](GetPlayerIp): Get a player's IP.
