---
title: Panel States
description: Information about byte size and its corresponding panel state bits.
---

:::note

To be used with [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

## Which nibble stores what?

- The **first nibble** stores the state of the **front-left** panel for a car or the **(left-)engine** for a plane.
- The **second nibble** stores the state of the **front-right** panel for a car or the **(right-)engine** for a plane.
- The **third nibble** stores the state of the **back-left** panel for a car or the **rudder (on the vertical stabilizer)** for a plane.
- The **fourth nibble** stores the state of the **back-right** panel for a car or the **elevators (on the tail)** for a plane.
- The **fifth nibble** stores the state of the **windshield** for a car or the **ailerons (on the wings)** for a plane.
- The **sixth nibble** stores the state of the **front bumper** for a car.
- The **seventh nibble** stores the state of the **back bumper** for a car.

Not every vehicle supports all of the mentioned panels. The degree of damage affects the handling of a plane quite a lot and the plane will produce black smoke from whatever part is damaged.

For most panels there are 4 states: **undamaged (value 0)**, **crushed (value 1)**, **hanging loose (value 2)** and **removed (value 3)**. The crushed and hanging loose states are quite buggy (when you go from a hanging loose state to a crushed state, the panel is hanging loose AND crushed instead of just crushed, but it is only crushed again when the vehicle is restreamed, ...). To fix this weird behaviour, just reset the damage for that panel first and then apply the needed state. In this way it is also possible to have a panel that is hanging loose when driving but is not physically crushed (to better see what this means, go directly from 0 to 2, instead of going from 0 to 1 to 2).

It seems that you can only read the value of the windshield. Setting it does update the value on the server, but it does not result in any physical change on the vehicle.

Notice that the nibbles are counted from behind, so the first nibble is the rightmost nibble.

## Example

The following code tells that for a car the front and back bumpers are removed:

`00000011 00110000 00000000 00000000`

However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:

`53477376`

## Example usage

To remove the front bumper of a car while keeping the other panels unchanged:

```c
new panels, doors, lights, tires;
GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
UpdateVehicleDamageStatus(vehicleid, (panels | 0b00000000001100000000000000000000), doors, lights, tires); // The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.
```
