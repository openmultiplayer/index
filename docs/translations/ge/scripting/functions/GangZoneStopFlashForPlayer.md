---
title: GangZoneStopFlashForPlayer
description: Stops a gangzone flashing for a player.
tags: ["player", "gangzone"]
---

## Description

Stops a gangzone flashing for a player.

| Name     | Description                                             |
| -------- | ------------------------------------------------------- |
| playerid | The ID of the player to stop the gangzone flashing for. |
| zone     | The ID of the gangzonezone to stop flashing.            |

## Returns

This function does not return any specific values.

## Examples

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneFlashForPlayer(playerid, gGangZoneId, COLOR_RED);
    return 1;
}

public OnPlayerEnterVehicle(playerid, vehicleid)
{
    GangZoneStopFlashForPlayer(playerid, gGangZoneId);
    return 1;
}
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
