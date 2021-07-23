---
title: ShowPlayerNameTagForPlayer
description: This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head.
tags: ["player"]
---

## Description

This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head. For use of a similar function like this on a global level, ShowNameTags function.

| Name         | Description                                      |
| ------------ | ------------------------------------------------ |
| playerid     | Player who will see the results of this function |
| showplayerid | Player whose name tag will be shown or hidden    |
| show         | 1-show name tag, 0-hide name tag                 |

## Returns

ImportantNote

ShowNameTags must be set to 1 to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ahead of time(OnPlayerStreamIn is a good spot).

## Examples

```c
//The player who typed /nameoff will not be able to see any other players nametag.
if (strcmp("/nameoff", cmdtext, true) == 0)
{
    for (new i = 0; i != MAX_PLAYERS; -- i)
    {
        ShowPlayerNameTagForPlayer(playerid, i, false);
    }
    GameTextForPlayer(playerid, "~W~Nametags ~R~off", 5000, 5);
    return 1;
}
```

## Notes

:::warning

ShowNameTags must be set to 1 to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ahead of time(OnPlayerStreamIn is a good spot).

:::

## Related Functions

- [ShowNameTags](ShowNameTags): Set nametags on or off.
- [DisableNameTagLOS](DisableNameTagLOS): Disable nametag Line-Of-Sight checking.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Set a player's marker.
