---
title: Light States
description: Information about byte size and its corresponding light state bits.
---

:::note

To be used with [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

:::note

The lights on vehicles with 2 wheels (and thus 2 lights) can not be changed.

:::

:::note

The two back lights of a vehicle can not be changed separately.

:::

## Which bit stores what?

The damage of all lights will be saved together in 1 byte (which is 8 bits). Each bit stores whether the corresponding light is **broken (value 1)** or **not (value 0)**.

- The **first bit** stores the state of the **front-left** light.
- The **third bit** stores the state of the **front-right** light.
- The **zeventh bit** stores the state of the **back** lights.
- The rest of the bits are empty.

Notice that the bits are counted from behind, so the first bit is the rightmost bit.

## Example

The following code tells that both front lights are broken and the back lights are not:

`0000 0101`

However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:

`5`

## Info table

Here is a visual representation of the light states. Vehicle viewed from a top-down perspective, with the upper values being the front of the vehicle and the lower values the back of the vehicle.

**Legend:**

```
o - enabled light
x - disabled light
```

0: (0000 0000)

```c
    o-o
    | |
    o-o
```

1: (0000 0001)

```c
    x-o
    | |
    o-o
```

4: (0000 0100)

```c
    o-x
    | |
    o-o
```

5: (0000 0101)

```c
    x-x
    | |
    o-o
```

64: (0100 0000)

```c
    o-o
    | |
    x-x
```

65: (0100 0001)

```c
    x-o
    | |
    x-x
```

68: (0100 0100)

```c
    o-x
    | |
    x-x
```

69: (0100 0101)

```c
    x-x
    | |
    x-x
```

Other values not listed here can change the lights, but they are just repeats of other values (e.g. 15 has the same outcome as 5). After 255 the values will wrap around, 256 will be set as 0, 257 as 1 and so on.

## Example usage

To disable the back two lights of a vehicle while keeping the front unchanged:

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, panels, doors, (lights | 0b01000000), tires); // The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.
```
