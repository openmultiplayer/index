---
title: SetPVarInt
description: Set an integer player variable.
tags: ["pvar"]
---

## Description

Set an integer player variable.

| Name      | Description                                             |
| --------- | ------------------------------------------------------- |
| playerid  | The ID of the player whose player variable will be set. |
| varname   | The name of the player variable.                        |
| int_value | The integer to be set.                                  |

## Returns

1: The function was executed successfully.

0: The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

## Examples

```c
// set GetPlayerMoney the value of player variable named "Money"
SetPVarInt(playerid, "Money", GetPlayerMoney(playerid));
// will print money that player has
printf("money: %d", GetPVarInt(playerid, "Money"));
```

## Notes

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## Related Functions

- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString): Set a string for a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
