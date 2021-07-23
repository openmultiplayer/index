---
title: printf
description: Outputs a formatted string on the console (the server window, not the in-game chat).
tags: []
---

<LowercaseNote />

## Description

Outputs a formatted string on the console (the server window, not the in-game chat).

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| format[]       | The format string                         |
| {Float,\_}:... | Indefinite number of arguments of any tag |

## Returns

This function does not return any specific values.

## Format Specifiers

| Specifier | Meaning                                       |
| --------- | --------------------------------------------- |
| %i        | Integer                                       |
| %d        | Integer                                       |
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
new number = 42;
printf("The number is %d.",number);  //-> The number is 42.

new string[]= "simple message";
printf("This is a %s containing the number %d.", string, number); //-> This is a simple message containing the number 42.

new character = 64;
printf("I'm %c home",character); //-> I'm @ home
```

## Notes

:::warning

The format string or its output should not exceed 1024 characters. Anything beyond that length can lead to a server to crash.

:::

## Related Functions

- [print](./print): Print a basic message to the server logs and console.
- [format](./format): Format a string.
