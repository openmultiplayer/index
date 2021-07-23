---
title: OnVehiclePaintjob
description: 当玩家在改装店里预览车辆油漆涂鸦样式时调用。
tags: ["vehicle"]
---

## 描述

当玩家在改装店里预览车辆油漆涂鸦样式时调用。注意，当玩家购买油漆涂鸦样式时，这个回调函数不会被调用。

| 参数名     | 描述                         |
| ---------- | ---------------------------- |
| playerid   | 改变车辆油漆涂鸦的玩家的ID。 |
| vehicleid  | 更换了油漆涂鸦的车辆ID。     |
| paintjobid | 新的油漆涂鸦样式ID。         |

## 返回值

它总是在游戏模式中先被调用，所以返回0也会阻止其他过滤脚本看到它。

## 案例

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "你把你的车辆油漆涂鸦改为了 %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## 要点

:::tip

这个回调不被ChangeVehiclePaintjob函数调用。

你可以从vSync中使用OnVehicleChangePaintjob回调来了解玩家何时购买了新的油漆涂鸦。

:::

## 相关函数

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): 改变车辆的油漆涂鸦样式。
- [ChangeVehicleColor](../functions/ChangeVehicleColor): 改变车辆的颜色。
- [OnVehicleRespray](OnVehicleRespray): 当车辆的油漆涂鸦样式被改变时调用。
- [OnVehicleMod](OnVehicleMod): 当车辆被改装时调用。
