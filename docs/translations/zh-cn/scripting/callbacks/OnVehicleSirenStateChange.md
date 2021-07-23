---
title: OnVehicleSirenStateChange
description: 当车辆的警笛被触发时，这个回调被调用。
tags: ["vehicle"]
---

:::warning

SA-MP 0.3.7版本增加了这个回调函数，无法在以前的版本使用！

:::

## 描述

当车辆的警笛被触发时，这个回调被调用。

| 参数名    | 描述                             |
| --------- | -------------------------------- |
| playerid  | 触发警笛的玩家(司机)的ID。       |
| vehicleid | 打开警笛的那辆车的ID。           |
| newstate  | 0表示关闭警笛，1如果警笛已经打开 |

## 返回值

1 - 将阻止其他游戏模式接收到这个回调。

0 - 表示这个回调函数将被传递给下一个游戏模式。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~警笛 ~G~开", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~警笛 ~r~关", 1000, 3);
    }
    return 1;
}
```

## 要点

:::tip

只有当汽车的警笛打开或关闭时，才会调用这个回调，当交替警笛在使用时(按住喇叭)不能使用。

:::

## 相关函数

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): 检查车辆的警笛是否打开或关闭。
