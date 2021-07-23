---
title: Damage Status
description: Information about vehicle damage status and sample code.
---

:::note

To be used with [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus) and [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus).

:::

Vehicle damage is stored in 4 values: **Panels**, **Doors**, **Lights** and **Tires**. Each value holds a bit mask of the state of all the panels, doors, lights or tires. This means you need to use bitwise operators to work with them (most of the time).

For example, the tires status stores 4 bits for the 4 tires. The value is 1 if the tire is popped, and 0 if it is not popped. So, for example, a value of `1010` means both the front tires are popped, and the rear ones are not.

:::note

For more info on panel states, see [Panel States](../resources/panelstates).  
For more info on door states, see [Door States](../resources/doorstates).  
For more info on light states, see [Light States](../resources/lightstates).  
For more info on tire states, see [Tire States](../resources/tirestates).

:::

To make working with these easier, there are some encoding and decoding functions below.

```c
//Panels
decode_panels(panels, &front_left_panel, &front_right_panel, &rear_left_panel, &rear_right_panel, &windshield, &front_bumper, &rear_bumper)
{
    front_left_panel = panels & 15;
    front_right_panel = panels >> 4 & 15;
    rear_left_panel = panels >> 8 & 15;
    rear_right_panel = panels >> 12 & 15;
    windshield = panels >> 16 & 15;
    front_bumper = panels >> 20 & 15;
    rear_bumper = panels >> 24 & 15;
}

encode_panels(front_left_panel, front_right_panel, rear_left_panel, rear_right_panel, windshield, front_bumper, rear_bumper)
{
    return front_left_panel | (front_right_panel << 4) | (rear_left_panel << 8) | (rear_right_panel << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);
}

//Doors
decode_doors(doors, &bonnet, &boot, &driver_door, &passenger_door)
{
    bonnet = doors & 7;
    boot = doors >> 8 & 7;
    driver_door = doors >> 16 & 7;
    passenger_door = doors >> 24 & 7;
}

encode_doors(bonnet, boot, driver_door, passenger_door)
{
    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);
}

//Lights
decode_lights(lights, &front_left_light, &front_right_light, &back_lights)
{
    front_left_light = lights & 1;
    front_right_light = lights >> 2 & 1;
    back_lights = lights >> 6 & 1;
}

encode_lights(front_left_light, front_right_light, back_lights)
{
    return front_left_light | (front_right_light << 2) | (back_lights << 6);
}

//Tires
decode_tires(tires, &rear_right_tire, &front_right_tire, &rear_left_tire, &front_left_tire)
{
    rear_right_tire = tires & 1;
    front_right_tire = tires >> 1 & 1;
    rear_left_tire = tires >> 2 & 1;
    front_left_tire = tires >> 3 & 1;
}

encode_tires(rear_right_tire, front_right_tire, rear_left_tire, front_left_tire)
{
	return rear_right_tire | (front_right_tire << 1) | (rear_left_tire << 2) | (front_left_tire << 3);
}
```
