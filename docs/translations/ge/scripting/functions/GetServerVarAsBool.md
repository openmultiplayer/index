---
title: GetServerVarAsBool
description: Get the boolean value of a server variable.
tags: []
---

:::warning

This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsBool

:::

## Description

Get the boolean value of a server variable.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | The name of the boolean variable to get the value of. |

## Returns

The value of the specified server variable. 0 if the specified server variable is not a boolean or doesn't exist.

## Examples

```c
public OnGameModeInit()
{
    new queryEnabled = GetServerVarAsBool("query");
    if (!queryEnabled)
    {
        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");
    }
    return 1;
}
```

## Notes

:::tip

Type 'varlist' in the server console to display a list of available server variables and their types.

:::

## Related Functions

- [GetServerVarAsString](GetServerVarAsString): Retreive a server variable as a string.
- [GetServerVarAsInt](GetServerVarAsInt): Retreive a server variable as an integer.
