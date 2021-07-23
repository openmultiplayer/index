---
title: GetConsoleVarAsBool
description: Get the boolean value of a console variable.
tags: []
---

## Description

Get the boolean value of a console variable.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | The name of the boolean variable to get the value of. |

## Returns

The value of the specified console variable. 0 if the specified console variable is not a boolean or doesn't exist.

## Examples

```c
public OnGameModeInit()
{
    new queryEnabled = GetConsoleVarAsBool("query");
    if (!queryEnabled)
    {
        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");
    }
    return 1;
}
```

## Notes

:::tip

Type 'varlist' in the server console to display a list of available console variables and their types.

:::

## Related Functions

- [GetConsoleVarAsString](GetConsoleVarAsString): Retreive a server variable as a string.
- [GetConsoleVarAsInt](GetConsoleVarAsInt): Retreive a server variable as an integer.
