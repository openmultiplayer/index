---
title: GetGravity
description: Get the currently set gravity.
tags: []
---

## Description

Get the currently set gravity.

## Examples

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Current gravity: %f", GetGravity());
```

## Notes

:::warning

This function is not defined by default. Add 'native Float:GetGravity();' under the inclusion of a_samp.inc to use it.

:::

## Related Functions

- [SetGravity](SetGravity): Set the global gravity.
