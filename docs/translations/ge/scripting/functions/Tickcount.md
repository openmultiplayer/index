---
title: tickcount
description: This function can be used as a replacement for GetTickCount, as it returns the number of milliseconds since the start-up of the server.
tags: []
---

<LowercaseNote />

## Description

This function can be used as a replacement for GetTickCount, as it returns the number of milliseconds since the start-up of the server.

| Name           | Description                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| &granularity=0 | Upon return, this value contains the number of ticks that the internal system time will tick per second. This value therefore indicates the accuracy of the return value of this function. |

## Returns

The number of milliseconds since start-up of the system. For a 32-bit cell, this count overflows after approximately 24 days of continuous operation.

## Related Functions

- [GetTickCount](GetTickCount): Get the uptime of the actual server.
