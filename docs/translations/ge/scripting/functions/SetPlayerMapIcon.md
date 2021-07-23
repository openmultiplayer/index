---
title: SetPlayerMapIcon
description: Place an icon/marker on a player's map.
tags: ["player"]
---

## Description

Place an icon/marker on a player's map. Can be used to mark locations such as banks and hospitals to players.

| Name       | Description                                                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid   | The ID of the player to set the map icon for.                                                                                                                                       |
| iconid     | The player's icon ID, ranging from 0 to 99. This means there is a maximum of 100 map icons. ID can be used in [RemovePlayerMapIcon](/docs/scripting/functions/RemovePlayerMapIcon). |
| Float:x    | The X coordinate to place the map icon at.                                                                                                                                          |
| Float:y    | The Y coordinate to place the map icon at.                                                                                                                                          |
| Float:z    | The Z coordinate to place the map icon at.                                                                                                                                          |
| markertype | The [icon](/docs/scripting/resources/mapicons) to set.                                                                                                                              |
| color      | The color of the icon, as an integer or hex in RGBA color format. This should only be used with the square icon (ID: 0).                                                            |
| style      | The [style](/docs/scripting/resources/mapiconstyles) of icon.                                                                                                                       |

## Returns

1: The function executed successfully.

0: The function failed to execute. Player is not connected.

## Examples

```c
public OnPlayerConnect( playerid )
{
    // This example demonstrates how to create a dollar-icon on top of a 24/7 located
    // in Las Venturas. This way new players know where to go with their money!
    SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0, MAPICON_LOCAL);
}
```

## Notes

:::tip

If you use an invalid marker type, it will create ID 1 (White Square). If you use an icon ID that is already in use, it will replace the current map icon using that ID.

:::

:::warning

You can only have 100 map icons! Marker type 1 (![](/images/mapIcons/icon1.gif)), 2 (![](/images/mapIcons/icon2.gif)), 4 (![](/images/mapIcons/icon4.gif)), and 56 (![](/images/mapIcons/icon56.gif)) will cause your game to crash if you have map legends enabled while viewing the map.

:::

## Related Functions

- [RemovePlayerMapIcon](/docs/scripting/functions/RemovePlayerMapIcon): Remove a map icon for a player.
- [SetPlayerMarkerForPlayer](/docs/scripting/functions/SetPlayerMarkerForPlayer): Set a player's marker.
