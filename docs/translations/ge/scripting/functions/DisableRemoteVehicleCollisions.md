---
title: DisableRemoteVehicleCollisions
description: Disables collisions between occupied vehicles for a player.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Disables collisions between occupied vehicles for a player.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player for whom you want to disable collisions. |
| disable  | 1 to disable collisions, 0 to enable collisions.              |

## Returns

1: The function executed successfully.

0: The function failed to execute. The player specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/collision", true))
    {
        new string[64];

        format(string, sizeof(string), "Vehicle collision for you is now '%s'", (GetPVarInt(playerid, "vehCollision") != 1) ? ("Disabled") : ("Enabled"));
        SendClientMessage(playerid, 0xFFFFFFFF, string);

        SetPVarInt(playerid, "vehCollision", !GetPVarInt(playerid, "vehCollision"));

        DisableRemoteVehicleCollisions(playerid, GetPVarInt(playerid, "vehCollision"));
        return 1;
    }
    return 0;
}
```

## Related Functions
