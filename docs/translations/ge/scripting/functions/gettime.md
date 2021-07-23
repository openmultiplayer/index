---
title: gettime
description: Get the current server time, which will be stored in the variables &hour, &minute and &second.
tags: []
---

<LowercaseNote />

## Description

Get the current server time, which will be stored in the variables &hour, &minute and &second.

| Name      | Description                                                |
| --------- | ---------------------------------------------------------- |
| &hour=0   | The variable to store the hour in, passed by reference.    |
| &minute=0 | The variable to store the minute in, passed by reference.  |
| &second=0 | The variable to store the seconds in, passed by reference. |

## Returns

The function itself returns a Unix Timestamp.

## Examples

```c
new
	hours,
	minutes,
	seconds,
	timestamp;

timestamp = gettime(hours, minutes, seconds);
printf("%02d:%02d:%02d", hours, minutes, seconds);
printf("Seconds since midnight 1st January 1970: %d", timestamp);
```

## Notes

:::tip

This function is useful for measuring time intervals by using its timestamp characteristics. This can be particularly useful if you want to restrict some functionality based on a time (e.g. a command that can only be executed every 30 seconds). Using this method you don't have to rely on timers.

:::

## Related Functions

- [getdate](getdate): Get the current date of the server.
