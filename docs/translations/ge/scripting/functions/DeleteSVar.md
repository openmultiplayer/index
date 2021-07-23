---
title: DeleteSVar
description: Deletes a previously set server variable.
tags: []
---

## Description

Deletes a previously set server variable.

| Name    | Description                                |
| ------- | ------------------------------------------ |
| varname | The name of the server variable to delete. |

## Returns

1: The function executed successfully.

0: The function failed to execute. There is no variable set with the given name.

## Examples

```c
SetSVarInt("SomeVarName", 69);

// Later on, when the variable is no longer needed...

DeleteSVar("SomeVarName");
```

## Notes

:::tip

Once a variable is deleted, attempts to retrieve the value will return 0 (for integers and floats and NULL for strings).

:::

## Related Functions

- [SetSVarInt](SetSVarInt): Set an integer for a server variable.
- [GetSVarInt](GetSVarInt): Get a player server as an integer.
- [SetSVarString](SetSVarString): Set a string for a server variable.
- [GetSVarString](GetSVarString): Get the previously set string from a server variable.
- [SetSVarFloat](SetSVarFloat): Set a float for a server variable.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
