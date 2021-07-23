---
title: SetTimer
description: Sets a 'timer' to call a function after some time.
tags: ["timer"]
---

## Description

Sets a 'timer' to call a function after some time. Can be set to repeat.

| Name       | Description                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| funcname[] | Name of the function to call as a string. This must be a public function (forwarded). A null string here will crash the server. |
| interval   | Interval in milliseconds.                                                                                                       |
| repeating  | Boolean (true/false) on whether the timer should repeat or not.                                                                 |

## Returns

The ID of the timer that was started. Timer IDs start at 1.

## Examples

```c
forward message();

public OnGameModeInit()
{
    print("Starting timer...");
    SetTimer("message", 1000, false); // Set a timer of 1000 miliseconds (1 second)
}

public message()
{
    print("1 second has passed.");
}
```

## Notes

:::tip

Timer intervals are not accurate (roughly 25% off). There are fixes available here and here. Timer IDs are never used twice. You can use KillTimer() on a timer ID and it won't matter if it's running or not. The function that should be called, must be public, meaning it has to be forwarded. The use of many timers will result in increased memory/cpu usage.

:::

## Related Functions

- [SetTimerEx](SetTimerEx): Set a timer with parameters.
- [KillTimer](KillTimer): Stop a timer.
