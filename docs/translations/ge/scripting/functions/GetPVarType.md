---
title: GetPVarType
description: Gets the type (integer, float or string) of a player variable.
tags: ["pvar"]
---

## Description

Gets the type (integer, float or string) of a player variable.

| Name     | Description                                                    |
| -------- | -------------------------------------------------------------- |
| playerid | The ID of the player whose player variable to get the type of. |
| varname  | The name of the player variable to get the type of.            |

## Returns

Returns the type of the PVar. See table below.

## Examples

```c
stock PrintPVar(playerid, varname[])
{
    switch(GetPVarType(playerid, varname))
    {
        case PLAYER_VARTYPE_NONE:
        {
            return 0;
        }
        case PLAYER_VARTYPE_INT:
        {
            printf("Integer PVar '%s': %i", varname, GetPVarInt(playerid, varname));
        }
        case PLAYER_VARTYPE_FLOAT:
        {
            printf("Float PVar '%s': %f", varname, GetPVarFloat(playerid, varname));
        }
        case PLAYER_VARTYPE_STRING:
        {
            new varstring[256];
            GetPVarString(playerid, varname, varstring);

            printf("String PVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}
```

## Related Functions

- [SetPVarInt](SetPVarInt): Set an integer for a player variable.
- [GetPVarInt](GetPVarInt): Get the previously set integer from a player variable.
- [SetPVarString](SetPVarString): Set a string for a player variable.
- [GetPVarString](GetPVarString): Get the previously set string from a player variable.
- [SetPVarFloat](SetPVarFloat): Set a float for a player variable.
- [GetPVarFloat](GetPVarFloat): Get the previously set float from a player variable.
- [DeletePVar](DeletePVar): Delete a player variable.
