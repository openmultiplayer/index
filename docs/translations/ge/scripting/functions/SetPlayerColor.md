---
title: SetPlayerColor
description: Set the colour of a player's nametag and marker (radar blip).
tags: ["player"]
---

## Description

Set the colour of a player's nametag and marker (radar blip).

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player whose color to set. |
| color    | The color to set. Supports alpha values. |

## Returns

This function does not return any specific values.

## Examples

```c
// Red, using hexadecimal notation:
SetPlayerColor(playerid, 0xFF0000FF);

//Red, using decimal notation:
SetPlayerColor(playerid, 4278190335);
```

## Notes

:::tip

This function will change player's color for everyone, even if player's color was changed with SetPlayerMarkerForPlayer for any other player. If used under OnPlayerConnect, the affecting player will not see the color in the TAB menu.

:::

## Related Functions

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Set a player's marker.
- [GetPlayerColor](GetPlayerColor): Check the color of a player.
- [ChangeVehicleColor](ChangeVehicleColor): Set the color of a vehicle.
