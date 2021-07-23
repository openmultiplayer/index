---
title: GetPlayerInterior
description: Retrieves the player's current interior.
tags: ["player"]
---

## Description

Retrieves the player's current interior. A list of currently known interiors with their positions can be found on this page.

| Name     | Description                           |
| -------- | ------------------------------------- |
| playerid | The player to get the interior ID of. |

## Returns

The interior ID the player is currently in

## Examples

```c
public OnPlayerCommandText(playerid,text[])
{
    if (strcmp(cmdtext,"/int",true) == 0)
    {
        new string[128];
        format(string, sizeof(string), "You are in interior %i",GetPlayerInterior(playerid));
        SendClientMessage(playerid, 0xFF8000FF, string);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Always returns 0 for NPCs.

:::

## Related Functions

- [SetPlayerInterior](SetPlayerInterior): Set a player's interior.
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): Check what virtual world a player is in.
