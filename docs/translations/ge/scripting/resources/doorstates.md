---
title: Door States
description: Information about byte size and its corresponding door state bits.
---

:::note

To be used with [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

The states of the 2 back doors can not be handled by [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

## Which bit stores what?

The damage of each door (note that the hood and the trunk are also doors) will be saved in 1 byte (which is 8 bits). You can only change the state of one bit for every door at each time, so you have to call the function twice if you want to the door to be damaged and opened at the same time.

- The **first bit** stores whether the door is **opened (value 1)** or **not (value 0)**. The door will still lock (and change the first bit to 0) if open, it's just open.
- The **second bit** stores whether the door is **damaged (value 1)** or **not (value 0)**. If you want a damaged door to turn normal you have to remove and re-attach it undamaged.
- The **third bit** stores whether the door is **removed (value 1)** or **not (value 0)**.
- The rest of the bits are empty.

It seems like there is no bit which stores if the door will lock or not.

Notice that the bits are counted from behind, so the first bit is the rightmost bit.

## Which byte stores what?

- The **first byte** stores the state of the **hood**.
- The **second byte** stores the state of the **trunk**.
- The **third byte** stores the state of the **drivers' door**.
- The **fourth byte** stores the state of the **co-drivers' door**.

Notice that the bytes are counted from behind, so the first byte is the rightmost byte.

## Example

The following code tells that the hood is removed, the front left door is damaged, the front right door is opened and the trunk is damaged and opened:

`00000001 00000010 00000011 00000100`

However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:

`16909060`

## Info table

**Legend:**

```
Static        Doors                    Hood / Trunk

° - Light      | - healthy, closed     -- - healthy, closed
              -- - healthy, opened     [] - healthy, opened
               § - damaged, closed     ~~ - damaged, closed
              ww - damaged, opened     {} - damaged, opened
                 - missing                - missing
```

**First byte (hood):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °[]°      °~~°      °{}°      °  °      °  °      °  °      °  °
  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

**Second byte (trunk):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |
  °--°      °[]°      °--°      °{}°      °  °      °  °      °  °      °  °
```

**Third byte (drivers' door):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |     --  |      §  |     ww  |         |         |         |         |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

**Fourth byte (co-drivers' door):**

```
0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
  |  |      |  --     |  §      |  ww     |         |         |         |
  °--°      °--°      °--°      °--°      °--°      °--°      °--°      °--°
```

## Wrapper

Useful little snippet to avoid working with the bits and bytes too much.

```c
enum Door
{
    DOOR_HOOD,
    DOOR_TRUNK,
    DOOR_DRIVER
    DOOR_PASSENGER
}

enum DoorState(<<= 1)
{
    IS_OPENED = 1,
    IS_DAMAGED,
    IS_REMOVED
}

stock GetDoorState(doorStates, Door:door, DoorState:doorState)
{
    return (doorStates >>> (8 * door)) & doorState;
}
```

## Example usage

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

// Single state
if (GetDoorState(doors, DOOR_DRIVER, IS_DAMAGED))
{
    SendClientMessage(playerid, -1, "The drivers' door of your vehicle is damaged!");
}

// Combined state
if (GetDoorState(doors, DOOR_HOOD, IS_OPENED | IS_DAMAGED))
{
    SendClientMessage(playerid, -1, "The hood of your vehicle is both opened and damaged!");
}
```
