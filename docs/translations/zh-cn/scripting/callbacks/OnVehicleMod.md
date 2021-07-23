---
title: OnVehicleMod
description: 当车辆被改装时，这个回调函数被调用。
tags: ["vehicle"]
---

## 描述

当车辆被改装时，这个回调函数被调用。

| 参数名      | 描述                   |
| ----------- | ---------------------- |
| playerid    | 车辆司机的ID。         |
| vehicleid   | 被改装的车辆的ID。     |
| componentid | 添加到车辆的组件的ID。 |

## 返回值

它总是在游戏模式中先被调用，所以返回0也会阻止其他过滤脚本看到它。

## 案例

```c
public OnVehicleMod(playerid,vehicleid,componentid)
{
    printf("车辆ID %d 被玩家ID %d 改装了,添加了组件 %d",vehicleid, playerid,componentid);
    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "使用作弊器改装"); // 反作弊器改装 脚本
        return 0; // 防止错误的改装被同步到其他玩家
        //(经过测试，它甚至可以在服务器上工作，允许你使用命令，菜单，对话框等改装你的车辆。
    }
    return 1;
}
```

## 要点

:::tip

这个回调函数不会被AddVehicleComponent函数调用。

:::

## 相关函数

- [AddVehicleComponent](../functions/AddVehicleComponent): 向车辆添加组件。
- [OnEnterExitModShop](OnEnterExitModShop): 当车辆进入或离开改装店时调用。
- [OnVehiclePaintjob](OnVehiclePaintjob): 当车辆的油漆涂鸦样式被改变时调用。
- [OnVehicleRespray](OnVehicleRespray): 当车辆的油漆涂鸦样式被改变时调用。
