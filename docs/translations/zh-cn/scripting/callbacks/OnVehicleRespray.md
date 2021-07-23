---
title: OnVehicleRespray
description: 这个回调是在玩家离开改装店时调用的，即使车辆颜色没有改变。
tags: ["vehicle"]
---

## 描述

这个回调是在玩家离开改装店时调用的，即使车辆颜色没有改变。注意，回调函数名称有歧义，Pay 'n' Spray 商店不会调用该回调。

| 参数名    | 描述                     |
| --------- | ------------------------ |
| playerid  | 驾驶车辆的玩家的ID。     |
| vehicleid | 被重新喷漆的那辆车的ID。 |
| color1    | 车辆的主色被改变的颜色。 |
| color2    | 车辆的辅色被改变的颜色。 |

## 返回值

它总是在游戏模式中先被调用，所以返回0也会阻止其他过滤脚本看到它。

## 案例

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "你重新喷涂了 %d 颜色为 %d 和 %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## 要点

:::tip

这个回调不被ChangeVehicleColor函数调用。值得一提的是 Pay 'n' Spray 商店不会调用该回调。(仅改装店)。

此处修正: http://pastebin.com/G81da7N1

:::

:::warning

已知BUG(s)：

在改装店中预览组件可能会调用这个回调函数。

:::

## 相关函数

- [ChangeVehicleColor](../functions/ChangeVehicleColor): 改变车辆的颜色。
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): 改变车辆的油漆涂鸦样式。
- [OnVehiclePaintjob](OnVehiclePaintjob): 当车辆的油漆涂鸦样式被改变时调用。
- [OnVehicleMod](OnVehicleMod): 当车辆被改装时调用。
- [OnEnterExitModShop](OnEnterExitModShop): 当车辆进入或离开改装店时调用。
