---
title: GetConsoleVarAsInt
description: Get the integer value of a console variable.
tags: []
---

## Description

Get the integer value of a console variable.

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| const varname[] | The name of the integer variable to get the value of. |

## Returns

The value of the specified console variable. 0 if the specified console variable is not an integer or doesn't exist.

## Examples

```c
new serverPort = GetConsoleVarAsInt("port");
printf("Server Port: %i", serverPort);
```

## Notes

:::tip

Type 'varlist' in the server console to display a list of available console variables and their types.

:::

## Related Functions

- [GetConsoleVarAsString](GetConsoleVarAsString): Retreive a server variable as a string.
- [GetConsoleVarAsBool](GetConsoleVarAsBool): Retreive a server variable as a boolean.
