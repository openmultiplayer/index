---
title: GangZoneCreate
description: Create a gangzone (colored radar area).
tags: ["gangzone"]
---

## Description

Create a gangzone (colored radar area).

| Name | Description                                          |
| ---- | ---------------------------------------------------- |
| minx | The X coordinate for the west side of the gangzone.  |
| miny | The Y coordinate for the south side of the gangzone. |
| maxx | The X coordinate for the east side of the gangzone.  |
| maxy | The Y coordinate for the north side of the gangzone. |

## Returns

The ID of the created zone, returns -1 if not created

## Examples

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
```

```
            MinY
             v
      MinX > *-------------
             |            |
             |  gangzone  |
             |   center   |
             |            |
             -------------* < MaxX
                          ^
                          MaxY
```

## Notes

:::tip

This function merely CREATES the gangzone, you must use GangZoneShowForPlayer or GangZoneShowForAll to show it.

:::

:::warning

There is a limit of 1024 gangzones. Putting the parameters in the wrong order results in glitchy behavior.

:::

## Related Functions

- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
