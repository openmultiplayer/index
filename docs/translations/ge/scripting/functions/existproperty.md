---
title: existproperty
description: Check if a property exist.
tags: []
---

<LowercaseNote />

## Description

Check if a property exist.

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use, you should keep this zero.                         |
| name[] | The property's name, you should keep this "".                                  |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## Returns

True if the property exists and false otherwise.

## Examples

```c
if ( existproperty(0, "", 123984334) )
{
    //the property exists, do something
}
```

## Notes

:::tip

It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow.

:::

## Related Functions

- [setproperty](setproperty): Set a property.
- [getproperty](getproperty): Get the value of a property.
- [deleteproperty](deleteproperty): Delete a property.
