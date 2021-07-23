---
title: random
description: Get a pseudo-random number.
tags: []
---

<LowercaseNote />

## Description

Get a pseudo-random number.

| Name | Description                                                                |
| ---- | -------------------------------------------------------------------------- |
| max  | The range of values (from 0 to this value minus one) that can be returned. |

## Returns

A random number ranging from 0 to max-1.

## Examples

```c
new value = random(5);

// 'value' might be 0, 1, 2, 3 or 4. 5 possible values.
new Float:RandomSpawn[][4] =
{
    // Positions, (X, Y, Z and Facing Angle)
    {-2796.9854, 1224.8180, 20.5429, 192.0335},
    {-2454.2170, 503.8759, 30.0790, 267.2932},
    {-2669.7322, -6.0874, 6.1328, 89.8853}
};


public OnPlayerSpawn(playerid)
{
    new rand = random(sizeof(RandomSpawn));

    // SetPlayerPos to the random spawn data
    SetPlayerPos(playerid, RandomSpawn[rand][0], RandomSpawn[rand][1],RandomSpawn[rand][2]);

    // SetPlayerFacingAngle to the random facing angle data
    SetPlayerFacingAngle(playerid, RandomSpawn[rand][3]);
    return 1;
}
```

## Notes

:::tip

Using a value smaller than 1 gives weird values.

:::

## Related Functions
