---
title: GetPVarsUpperIndex
description: Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.
tags: ["pvar"]
---

## Description

Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | The ID of the player to get the upper PVar index of. |

## Returns

The highest set PVar ID.

## Examples

```c
// Store the upper index in the variable 'PVarUpperIndex' + 1
new PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;

// This pVarCount variable will store how many pVars a player has set as we count them.
new pVarCount;

for(new i=0; i != PVarUpperIndex; i++) // Loop through all pVar IDs under the upper index
{
    // At first, we need to get PVar name
    new pVarName[128];
    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));
    // If the var is set (type not 0), increment pVarCount.
    if (GetPVarType(playerid, pVarName) != 0)
    {
        pVarCount++;
    }
}

new szString[66];
format(szString, sizeof(szString), "You have %i player-variables set. Upper index (highest ID): %i.", pVarCount, PVarUpperIndex-1);
SendClientMessage(playerid, -1, szString);
```

## Related Functions

- [GetPVarNameAtIndex](GetPVarNameAtIndex): Get the player variable's name from its index.
- [GetPVarType](GetPVarType): Get the type of the player variable.
