---
title: GetVehicleParamsSirenState
description: Returns a vehicle's siren state (on/off).
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Returns a vehicle's siren state (on/off).

| Name      | Description                                      |
| --------- | ------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the siren state of. |

## Returns

-1: Vehicle siren hasn't been set yet (off)

0: Vehicle siren is off

1: Vehicle siren is on

## Examples

```c
new
    siren = GetVehicleParamsSirenState(vehicleid);

if (siren == 1)
{
    // Siren is on, do something
}
else if (siren == 0)
{
    // Siren is off, do something
}
else
{
    // Vehicle does not have a siren
}
```

## Notes

:::warning

Because a siren state of -1 or 0 means 'off', you cannot use a boolean conditional statement to check whether sirens are on. If you do 'if (sirenstate)', it will be true for anything NOT 0 (so -1 or 1). You should check that the siren state explicitly equals 1.

:::

## Related Functions
