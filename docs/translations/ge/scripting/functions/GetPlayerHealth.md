---
title: GetPlayerHealth
description: The function GetPlayerHealth allows you to retrieve the health of a player.
tags: ["player"]
---

## Description

The function GetPlayerHealth allows you to retrieve the health of a player. Useful for cheat detection, among other things.

| Name          | Description                                 |
| ------------- | ------------------------------------------- |
| playerid      | The ID of the player.                       |
| &Float:health | Float to store health, passed by reference. |

## Returns

1 - success

0 - failure (i.e. player not connected).

The player's health is stored in the specified variable.

## Examples

```c
// Sets players health to 50 if it was lower than
// 50 before, as soon as he typed /doctor

if (strcmp(cmdtext, "/doctor", true) == 0)
{
    new Float:health;
    GetPlayerHealth(playerid,health);
    if (health < 50.0)
    {
        SetPlayerHealth(playerid, 50.0);
    }
    return 1;
}
```

## Notes

:::warning

Even though the health can be set to near infinite values on the server side, the individual clients will only report values up to 255. Anything higher will wrap around; 256 becomes 0, 257 becomes 1, etc. Health is obtained rounded to integers: set 50.15, but get 50.0

:::

## Related Functions

- [SetPlayerHealth](SetPlayerHealth): Set a player's health.
- [GetVehicleHealth](GetVehicleHealth): Check the health of a vehicle.
- [GetPlayerArmour](GetPlayerArmour): Find out how much armour a player has.
