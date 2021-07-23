---
title: OnUnoccupiedVehicleUpdate
description: 当玩家的客户端更新/同步他们没有驾驶的车辆的位置时，这个回调被调用。
tags: ["vehicle"]
---

:::warning

SA-MP 0.3c R3版本增加了这个回调函数，无法在以前的版本使用！

:::

## 描述

当玩家的客户端更新/同步他们没有驾驶的车辆的位置时，这个回调被调用。这可能发生在车外，或当玩家是某个无人驾驶的车辆的乘客时。

| 参数名         | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| vehicleid      | 更新了位置的车辆载具ID。                                     |
| playerid       | 发送车辆位置同步更新的玩家的ID。                             |
| passenger_seat | 如果玩家是乘客，则为其座位的ID。0=不在车上，1=前排乘客，2=后左，3=后右，4+用于有很多乘客座位的大客车/公共汽车等车辆。 |
| new_x          | 车辆新的X轴坐标。这个参数是在0.3z中添加的。如果使用的是较早的版本，可以省略。 |
| new_y          | 车辆新的Y轴坐标。这个参数是在0.3z中添加的。如果使用的是较早的版本，可以省略。 |
| new_z          | 车辆新的Z轴坐标。这个参数是在0.3z中添加的。如果使用的是较早的版本，可以省略。 |
| vel_x          | 车辆新的X轴速度。这个参数是在0.3z R4中添加的。如果使用的是较早的版本，可以省略。 |
| vel_y          | 车辆新的Y轴速度。这个参数是在0.3z R4中添加的。如果使用的是较早的版本，可以省略。 |
| vel_z          | 车辆新的Z轴速度。这个参数是在0.3z R4中添加的。如果使用的是较早的版本，可以省略。 |

## 返回值

它总是在过滤脚本中先被调用，所以返回0也会阻止其他过滤脚本看到它。

## 案例

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // 检查它是否移动了很远。
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // 拒绝更新
        return 0;
    }

    return 1;
}
```

## 要点

:::warning

这个回调函数每秒钟被频繁地调用。

您应该避免在这个回调中实现密集的计算或密集的文件写/读操作。

GetVehiclePos函数将返回在此更新之前车辆的旧坐标。

:::

## 相关函数
