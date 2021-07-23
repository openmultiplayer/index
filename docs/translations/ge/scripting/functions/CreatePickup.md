---
title: CreatePickup
description: This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.
tags: []
---

## Description

This function does exactly the same as AddStaticPickup, except it returns a pickup ID which can be used to destroy it afterwards and be tracked using OnPlayerPickUpPickup.

| Name                                | Description                                                                       |
| ----------------------------------- | --------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | The model of the pickup.                                                          |
| [type](../resources/pickuptypes) | The pickup type. Determines how the pickup responds when picked up.               |
| Float:X                             | The X coordinate to create the pickup at.                                         |
| Float:Y                             | The Y coordinate to create the pickup at.                                         |
| Float:Z                             | The Z coordinate to create the pickup at.                                         |
| virtualworld                        | The virtual world ID of the pickup. Use -1 to make the pickup show in all worlds. |

## Returns

The ID of the created pickup, -1 on failure (pickup max limit).

## Examples

```c
new pickup; // Create a variable to store the pickup ID in

public OnGameModeInit()
{
    pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // Create an armour pickup and store the ID in 'pickup'
    return 1;
}

// Later..
DestroyPickup(pickup); // Example of using the pickup ID
pickup = 0; // pickup variable needs to be reset to avoid future conflicts
```

## Notes

:::tip

The only type of pickup that can be picked up from inside a vehicle is 14 (except for special pickups such as bribes). Pickups are shown to, and can be picked up by all players. It is possible that if DestroyPickup() is used when a pickup is picked up, more than one player can pick up the pickup, due to lag. This can be circumvented through the use of variables. Certain pickup types come with 'automatic responses', for example using an M4 model in the pickup will automatically give the player the weapon and some ammo. For fully scripted pickups, type 1 should be used.

:::

:::warning

Known Bug(s): Pickups that have a X or Y lower than -4096.0 or bigger than 4096.0 won't show up and won't trigger OnPlayerPickUpPickup either.

:::

## Related Functions

- [AddStaticPickup](AddStaticPickup): Add a static pickup.
- [DestroyPickup](DestroyPickup): Destroy a pickup.
- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): Called when a player picks up a pickup.
