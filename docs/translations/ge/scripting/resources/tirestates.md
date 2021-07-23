---
title: Tire States
description: Information about byte size and its corresponding tire state bits.
---

:::note

To be used with [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

Even vehicles with more than 4 wheels (e.g. trucks) only have 4 tire states.

:::

## Which bit stores what?

The damage of all tires will be saved together in 1 nibble (which is 4 bits) for 4-wheeled vehicles and in 1 pair (which is 2 bits) for 2-wheeled vehicles. Each bit stores whether the corresponding tire is **popped (value 1)** or **not (value 0)**.

- The **first bit** stores the state of the **back-right** tire for a 4-wheeled vehicle or the **back** tire for a 2-wheeled vehicle.
- The **second bit** stores the state of the **front-right** tire for a 4-wheeled vehicle or the **front** tire for a 2-wheeled vehicle.
- The **third bit** stores the state of the **back-left** tire for a 4-wheeled vehicle.
- The **fourth bit** stores the state of the **front-left** tire for a 4-wheeled vehicle.

Notice that the bits are counted from behind, so the first bit is the rightmost bit.

## Example

The following code tells that for a 4-wheeled vehicle two tires are popped and two are not:

`0101`

However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:

`5`

## Info table

Here is a visual representation of the tire states. Vehicle viewed from a top-down perspective, with the upper values being the front of the vehicle and the lower values the back of the vehicle.

**Legend:**

```
o - inflated tire
x - popped tire
```

### 4-wheeled vehicles

4 bits for 4-wheeled vehicles: (FL)(BL)(FR)(BR) (Front-Left, Back-Left, Front-Right and Back-Right).

0: (0000)

```c
    o-o
    | |
    o-o
```

1: (0001)

```c
    o-o
    | |
    o-x
```

2: (0010)

```c
    o-x
    | |
    o-o
```

3: (0011)

```c
    o-x
    | |
    o-x
```

4: (0100)

```c
    o-o
    | |
    x-o
```

5: (0101)

```c
    o-o
    | |
    x-x
```

6: (0110)

```c
    o-x
    | |
    x-o
```

7: (0111)

```c
    o-x
    | |
    x-x
```

8: (1000)

```c
    x-o
    | |
    o-o
```

9: (1001)

```c
    x-o
    | |
    o-x
```

10: (1010)

```c
    x-x
    | |
    o-o
```

11: (1011)

```c
    x-x
    | |
    o-x
```

12: (1100)

```c
    x-o
    | |
    x-o
```

13: (1101)

```c
    x-o
    | |
    x-x
```

14: (1110)

```c
    x-x
    | |
    x-o
```

15: (1111)

```c
    x-x
    | |
    x-x
```

After 15 the values are repeated, so 16 is 0, 17 is 1 and so on.

### 2-wheeled vehicles (bikes)

2 bits for 2-wheeled vehicles: (F)(B) (Front and Back).

0: (00)

```c
    o
    |
    o
```

1: (01)

```c
    o
    |
    x
```

2: (10)

```c
    x
    |
    o
```

3: (11)

```c
    x
    |
    x
```

After 3 the values are repeated, so 4 is 0, 5 is 1 and so on.

## Example usage

To pop the back two tires of a 4-wheeled vehicle while keeping the front unchanged:

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, (tires | 0b0101)); // The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.
```
