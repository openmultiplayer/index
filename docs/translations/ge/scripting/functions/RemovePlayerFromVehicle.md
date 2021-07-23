---
title: RemovePlayerFromVehicle
description: Removes/ejects a player from their vehicle.
tags: ["player", "vehicle"]
---

## Description

Removes/ejects a player from their vehicle.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to remove from their vehicle. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
// Example - Players can only drive vehicles if they have 10 score.
public OnPlayerStateChange(playerid, newstate, oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PlAYER_STATE_DRIVER = 2
    {
        RemovePlayerFromVehicle(playerid);
    }
    return 1;
}
```

## Notes

:::tip

The exiting animation is not synced for other players. This function will not work when used in OnPlayerEnterVehicle, because the player isn't in the vehicle when the callback is called. Use OnPlayerStateChange instead(see the example below). The player isn't removed if he is in a RC Vehicle.

:::

## Related Functions

- [PutPlayerInVehicle](PutPlayerInVehicle): Put a player in a vehicle.
