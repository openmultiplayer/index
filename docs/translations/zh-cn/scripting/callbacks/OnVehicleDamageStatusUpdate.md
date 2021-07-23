---
title: OnVehicleDamageStatusUpdate
description: 这个回调是在汽车部件(例如车门、轮胎、面板或车灯)改变其损坏状态时调用的。
tags: ["vehicle"]
---

:::warning

SA-MP 0.3a版本增加了这个回调函数，无法在以前的版本使用！

:::

:::tip

关于处理车辆损坏度的一些有用函数，请参阅[这里](../resources/damagestatus)。

:::

## 描述

这个回调是在汽车部件(例如车门、轮胎、面板或车灯)改变其损坏状态时调用的。

| 参数名    | 描述                                                   |
| --------- | ------------------------------------------------------ |
| vehicleid | 更改其损坏状态的车辆的ID。                             |
| playerid  | 同步损坏状态变化的玩家的ID(即汽车被损坏或修复的玩家)。 |

## 返回值

1 - 将阻止其他过滤脚本接收到这个回调。

0 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // 获取所有部件的损坏情况
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // 将轮胎设置为0，这意味着还未爆胎。
    tires = 0;

    // 更新车辆的损坏状态为车辆未爆胎。
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## 要点

:::tip

这不包括车辆健康度变化。

:::

## 相关函数

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): 分别获取每个零件的车辆损坏状态。
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): 更新车辆损坏状态。
