---
title: floatlog
description: This function allows you to get the logarithm of a float value.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

This function allows you to get the logarithm of a float value.

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| Float:value | The value of which to get the logarithm. |
| Float:base  | The logarithm base.                      |

## Returns

The logarithm as a float value.

## Examples

```c
public OnGameModeInit()
{
    printf("The logarithm of 15.0 with the base 10.0 is %f", floatlog( 15.0, 10.0 ));
    return 1;
}
```

## Related Functions

- [floatsqroot](floatsqroot): Calculate the square root of a floating point value.
- [floatpower](floatpower): Raises given value to a power of exponent.
