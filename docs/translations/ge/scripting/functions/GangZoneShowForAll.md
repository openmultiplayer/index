---
title: GangZoneShowForAll
description: Shows a gangzone with the desired color to all players.
tags: ["gangzone"]
---

## Description

Shows a gangzone with the desired color to all players.

| Name  | Description                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------------- |
| zone  | The ID of the gangzone to show (returned by GangZoneCreate).                                              |
| color | The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

## Returns

1: The function executed successfully. The gang zone was shown for all players.

0: The function failed to execute. The gangzone does not exist.

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
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangZoneId, COLOR_RED);
    }
    return 1;
}
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
