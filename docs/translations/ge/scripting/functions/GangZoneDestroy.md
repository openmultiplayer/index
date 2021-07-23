---
title: GangZoneDestroy
description: Destroy a gangzone.
tags: ["gangzone"]
---

## Description

Destroy a gangzone.

| Name | Description                    |
| ---- | ------------------------------ |
| zone | The ID of the zone to destroy. |

## Returns

This function does not return any specific values.

## Examples

```c
new gangZoneId;
gangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

GangZoneDestroy(gangZoneId);
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
