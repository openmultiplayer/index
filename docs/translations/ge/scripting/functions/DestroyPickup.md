---
title: DestroyPickup
description: Destroys a pickup created with CreatePickup.
tags: []
---

## Description

Destroys a pickup created with CreatePickup.

| Name   | Description                                                 |
| ------ | ----------------------------------------------------------- |
| pickup | The ID of the pickup to destroy (returned by CreatePickup). |

## Returns

This function does not return any specific values.

## Examples

```c
// Create a pickup for armor.
pickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );

//some time later...
DestroyPickup(pickup_armour);
```

## Related Functions

- [CreatePickup](CreatePickup): Create a pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.
