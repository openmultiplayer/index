---
title: GetPlayerKeys
description: Check which keys a player is pressing.
tags: ["player"]
---

## Description

Check which keys a player is pressing.

| Name      | Description                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | The ID of the player to get the keys of.                                                                                                          |
| keys      | A set of bits containing the player's key states. This value is what is called a bit mask. [Click here](../resources/keys) for a list of keys.    |
| updown    | Up/down state.                                                                                                                                    |
| leftright | Left/right state.                                                                                                                                 |

## Returns

The keys are stored in the specified variables.

## Examples

```c
public OnPlayerUpdate(playerid)
{
    new
        Keys, ud, lr;
    GetPlayerKeys(playerid, Keys, ud, lr);

    if (ud == KEY_UP)
    {
        SendClientMessage(playerid, -1, "UP");
    }
    else if (ud == KEY_DOWN)
    {
        SendClientMessage(playerid, -1, "DOWN");
    }

    if (lr == KEY_LEFT)
    {
        SendClientMessage(playerid, -1, "LEFT");
    }
    else if (lr == KEY_RIGHT)
    {
        SendClientMessage(playerid, -1, "RIGHT");
    }

    return 1;
}
```

## Notes

:::warning

Only the FUNCTION of keys can be detected; not actual keys. For example, it is not possible to detect if a player presses SPACE, but you can detect if they press SPRINT (which can be mapped (assigned/binded) to ANY key (but is space by default)). As of update 0.3.7, the keys "A" and "D" are not recognized when in a vehicle. However, keys "W" and "S" can be detected with the "keys" parameter.

:::

## Related Functions
