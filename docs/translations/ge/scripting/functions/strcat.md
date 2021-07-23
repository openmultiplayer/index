---
title: strcat
description: This function concatenates (joins together) two strings into the destination string.
tags: ["string"]
---

<LowercaseNote />

## Description

This function concatenates (joins together) two strings into the destination string.

| Name                  | Description                                          |
| --------------------- | ---------------------------------------------------- |
| dest[]                | The string to store the two concatenated strings in. |
| const source[]        | The source string.                                   |
| maxlength=sizeof dest | The maximum length of the destination.               |

## Returns

The length of the new destination string.

## Examples

```c
new string[40] = "Hello";
strcat(string, " World!");

// The string is now 'Hello World!'
```

## Related Functions

- [strcmp](strcmp): Compare two strings to check if they are the same.
- [strfind](strfind): Search for a string in another string.
- [strdel](strdel): Delete part of a string.
- [strins](strins): Insert text into a string.
- [strlen](strlen): Get the length of a string.
- [strmid](strmid): Extract part of a string into another string.
- [strpack](strpack): Pack a string into a destination string.
- [strval](strval): Convert a string into an integer.
