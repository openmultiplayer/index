---
title: GangZoneHideForAll
description: GangZoneHideForAll hides a gangzone from all players.
tags: ["gangzone"]
---

## Description

GangZoneHideForAll hides a gangzone from all players.

| Name | Description       |
| ---- | ----------------- |
| zone | The zone to hide. |

## Returns

This function does not return any specific values.

## Examples

```c
new gGangZoneId;
gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
GangZoneHideForAll(gGangZoneId);
```

## Related Functions

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
