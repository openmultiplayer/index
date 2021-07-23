---
title: AllowPlayerTeleport
description: Enable/Disable the teleporting ability for a player by right-clicking on the map.
tags: ["player"]
---

:::warning

This function, as of 0.3d, is deprecated. Check [OnPlayerClickMap](../callbacks/OnPlayerClickMap).

:::

## Description

Enable/Disable the teleporting ability for a player by right-clicking on the map

| Name     | Description                             |
| -------- | --------------------------------------- |
| playerid | The ID of the player to allow teleport. |
| allow    | 1-allow, 0-disallow                     |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerConnect( playerid )
{
    // Allows the Player to teleport by right-clicking on the map
    // since this is in OnPlayerConnect, this will be done for EACH player
    AllowPlayerTeleport( playerid, 1 );
}
```

## Notes

:::warning

This function will work only if [AllowAdminTeleport](AllowAdminTeleport) is enabled, and you have to be an admin.

:::

## Related Functions

- [AllowAdminTeleport](AllowAdminTeleport): Toggle waypoint teleporting for RCON admins.
