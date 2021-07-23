---
title: GetServerVarAsInt
description: Get the integer value of a server variable.
tags: []
---

:::warning

This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsInt

:::

## Description

Get the integer value of a server variable.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | The name of the integer variable to get the value of. |

## Returns

The value of the specified server variable. 0 if the specified server variable is not an integer or doesn't exist.

## Examples

```c
new serverPort = GetServerVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## Notes

:::tip

Type 'varlist' in the server console to display a list of available server variables and their types.

:::

## Related Functions

- [GetServerVarAsString](GetServerVarAsString): Retreive a server variable as a string.
- [GetServerVarAsBool](GetServerVarAsBool): Retreive a server variable as a boolean.
