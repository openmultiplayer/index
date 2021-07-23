---
title: getarg
description: Get an argument that was passed to a function.
tags: []
---

<LowercaseNote />

## Description

Get an argument that was passed to a function.

| Name  | Description                                             |
| ----- | ------------------------------------------------------- |
| arg   | The argument sequence number. Use 0 for first argument. |
| index | The index (in case the argument is an array).           |

## Returns

The value of the argument.

## Examples

```c
SomeFunc(...)
{
    printf("%i", getarg(3));
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);
}

// Output: 7. The fourth argument (index 3) is 7.
```

## Related Functions

- [numargs](numargs): Return the number of arguments.
- [setarg](setarg): Set an argument.
