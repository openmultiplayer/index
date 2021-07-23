---
title: GangZoneFlashForPlayer
description: Makes a gangzone flash for a player.
tags: ["player", "gangzone"]
---

## Description

Makes a gangzone flash for a player.

| Name       | Description                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| playerid   | The ID of the player to flash the gangzone for.                                                            |
| zone       | The ID of the zone to flash.                                                                               |
| flashcolor | The color to flash the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

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
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
