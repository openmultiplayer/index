---
title: format
description: Formats a string to include variables and other strings inside it.
tags: ["string"]
---

<LowercaseNote />

## Description

Formats a string to include variables and other strings inside it.

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| output[]       | The string to output the result to        |
| len            | The maximum length output can contain     |
| format[]       | The format string                         |
| {Float,\_}:... | Indefinite number of arguments of any tag |

## Returns

This function does not return any specific values.

## Format Specifiers

| Specifier | Meaning                                       |
| --------- | --------------------------------------------- |
| %i        | Unsigned Integer                              |
| %d        | Signed Integer                                |
| %s        | String                                        |
| %f        | Floating-point number                         |
| %c        | ASCII character                               |
| %x        | Hexadecimal number                            |
| %b        | Binary number                                 |
| %%        | Literal '%'                                   |
| %q        | Escape a text for SQLite. (Added in 0.3.7 R2) |

The values for the placeholders follow in the exact same order as parameters in the call, i.e. `"I am %i years old"` - the `%i` will be replaced with an integer variable, which is the person's age.

You may optionally put a number between the `%` and the letter of the placeholder code. This number indicates the field width; if the size of the parameter to print at the position of the placeholder is smaller than the field width, the field is expanded with spaces. To cut the number of decimal places beeing shown of a float, you can add '.\<max number\>' between the `%` and the `f`, i.e. `%.2f`.

## Examples

```c
new result[128];
new number = 42;
format(result,sizeof(result), "The number is %i.",number);  //-> The number is 42.
new string[]= "simple message";
format(result,sizeof(result), "This is a %s containing the number %i.", string, number);
// This is a simple message containing the number 42.
new string[64];
format(string,sizeof(string),"Your score is: %d",GetPlayerScore(playerid));
SendClientMessage(playerid,0xFFFFFFAA,string);
new hour, minute, second, string[32];
gettime(hour, minute, second);

format(string, sizeof(string), "The time is %02d:%02d:%02d.", hour, minute, second); // will output something like 09:45:02
SendClientMessage(playerid, -1, string);
new string[35];
format(string,sizeof(string),"43%s of my shirts are black.","%%");
SendClientMessage(playerid,0xFFFFFAA,string);
```

## Notes

:::warning

This function doesn't support packed strings.

:::

## Related Functions

- [print](print): Print a basic message to the server logs and console.
- [printf](printf): Print a formatted message into the server logs and console.
