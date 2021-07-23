---
title: GetPVarString
description: Gets a player variable as a string.
tags: ["pvar"]
---

## Description

Gets a player variable as a string.

| Name           | Description                                                           |
| -------------- | --------------------------------------------------------------------- |
| playerid       | The ID of the player whose player variable to get.                    |
| varname        | The name of the player variable, set by SetPVarString.                |
| &string_return | The array in which to store the string value in, passed by reference. |
| len            | The maximum length of the returned string.                            |

## Returns

The length of the string.

## Examples

```c
public OnPlayerConnect(playerid,reason)
{
    new playerName[MAX_PLAYER_NAME+1];
    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    SetPVarString(playerid, "PlayerName", playerName);
    return 1;
}

public OnPlayerDeath(playerid, killerid, reason)
{
    new playerName[MAX_PLAYER_NAME+1];
    GetPVarString(playerid, "PlayerName", playerName, sizeof(playerName));

    printf("%s died.", playerName);
}
```

## Notes

:::tip

If length of string is zero (value not set), string_return text will not be updated or set to anything and will remain with old data, neccesying that you clear the variable to blank value if GetPVarString returns 0 if that behavior is undesired

:::

## Related Functions

- [SetPVarString](SetPVarString): Set a string for a player variable.
- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
