---
title: print
description: Prints a string to the server console (not in-game chat) and logs (server_log.
tags: []
---

<LowercaseNote />

## Description

Prints a string to the server console (not in-game chat) and logs (server_log.txt).

| Name                  | Description                   |
| --------------------- | ----------------------------- |
| string[]              | The string to print.          |
| foreground (optional) | The foreground colour to use. |
| background (optional) | The background colour to use. |
| highlight (optional)  | The highlight colour to use.  |

## Returns

This function does not return any specific values.

:::tip

When the colour codes are left at -1, the default colours of the server console are used.

:::

:::tip

On most systems the following foreground and background colour codes can be used: black (0), red (1), green (2), yellow (3), blue (4), magenta (5), cyan (6) and white (7).

:::

:::tip

Most systems also support the bright/bold versions of these colours. The following highlight values can be used: regular (0) and bright/bold (1).

:::

## Examples

```c
public OnGameModeInit( )
{
    print("Gamemode started.");
    return 1;
}
```

## Related Functions

- [printf](printf): Print a formatted message into the server logs and console.
