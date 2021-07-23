---
title: deleteproperty
description: Delete an earlier set property (setproperty).
tags: []
---

<LowercaseNote />

## Description

Delete an earlier set property (setproperty).

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use. You should keep this as zero.                      |
| name[] | The property's name, you should keep this blank ("").                          |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## Returns

The value of the property. If the property does not exist, the function returns 0.

## Examples

```c
deleteproperty(0, "", 123984334);
```

## Notes

:::tip

It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow.

:::

## Related Functions

- [setproperty](setproperty): Set a property.
- [getproperty](getproperty): Get the value of a property.
- [existproperty](existproperty): Check if a property exists.
