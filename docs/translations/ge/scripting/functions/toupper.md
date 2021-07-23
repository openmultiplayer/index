---
title: toupper
description: This function changes a single character to uppercase.
tags: ["string"]
---

<LowercaseNote />

## Description

This function changes a single character to uppercase.

| Name | Description                           |
| ---- | ------------------------------------- |
| c    | The character to change to uppercase. |

## Returns

The ASCII value of the character provided, but in uppercase.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    text[0] = toupper(text[0]);
    //This sets the first character to upper case.
    return 1;
}
```

## Related Functions

- [tolower](tolower)
