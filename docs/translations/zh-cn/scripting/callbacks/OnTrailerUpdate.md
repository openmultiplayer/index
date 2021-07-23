---
title: OnTrailerUpdate
description: 当玩家发送拖车更新时，将调用此回调。
tags: []
---

:::warning

SA-MP 0.3z R4版本增加了这个回调函数，无法在以前的版本使用！

:::

## 描述

当玩家发送拖车更新时，将调用此回调。

| 参数名    | 描述                   |
| --------- | ---------------------- |
| playerid  | 发送拖车更新的玩家的ID |
| vehicleid | 正在更新的拖车的车辆ID |

## 返回值

0 - 取消对其他玩家的所有拖车更新。将继续向那些发送拖车更新的玩家发送更新。

1 - 正常处理拖车更新，并在所有玩家之间进行同步。

它总是在过滤脚本中先被调用。

## 案例

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## 要点

:::warning

每辆拖车每秒都会频繁地调用这个回调，您应该避免进行密集计算或密集文件写/读操作。

:::

## 相关函数

- [GetVehicleTrailer](../functions/GetVehicleTrailer): 检查车辆牵引的是什么拖车。
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): 检查拖车是否与车辆相连。
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): 将拖车连接到车辆上。
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): 将车辆与拖车断开连接。
