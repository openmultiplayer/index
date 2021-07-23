---
title: OnPlayerWeaponShot
description: 当玩家使用武器射击时，这个回调函数被调用。
tags: ["player"]
---

:::warning

SA-MP 0.3z版本增加了这个回调函数，无法在以前的版本使用！

:::

## 描述

该回调函数在玩家使用武器射击时调用。仅适用于有子弹的武器。仅对乘客提供支持(不对司机提供支持，并且不适用 sea sparrow (水上飞机)/hunter shots (阿帕奇直升机))。

| 参数名   | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| playerid | 用武器射击的玩家的ID。                                       |
| weaponid | 该玩家使用的[武器](../resources/weaponids)的ID。             |
| hittype  | 射击击中的物体[类型](../resources/bullethittypes)(无、玩家、车辆或(玩家)物体)。 |
| hitid    | 被击中的玩家、车辆或物体的ID。                               |
| fX       | 玩家所击中的X轴坐标。                                        |
| fY       | 玩家所击中的Y轴坐标。                                        |
| fZ       | 玩家所击中的Z轴坐标。                                        |

## 返回值

0 - 防止子弹造成伤害。

1 - 允许子弹造成伤害。

它在过滤脚本中总是先被调用，所以返回0会阻止其他脚本看到它。

## 案例

```c
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new szString[144];
    format(szString, sizeof(szString), "武器 %i 开火了。击中物体类型: %i   被击中的ID: %i   坐标: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, szString);
    return 1;
}
```

## 要点

:::tip

这个回调函数只在启用延迟补偿时被调用。

如果 hittype(物体类型) 是:

- BULLET_HIT_TYPE_NONE：fX, fY和fZ参数是法线坐标，如果没有击中任何物体(例如子弹无法到达的远的物体)，坐标将为0.0;
- 其他类型：fX，fY和fZ是相对于Hitid的偏移量。

:::

:::tip

GetPlayerLastShotVectors函数可以在这个回调中用于获得更详细的子弹向量信息。

:::

:::warning

已知Bug(s): 

当你作为驾驶员在车中射击或者你在瞄准后(在空中射击)时不会被调用。

如果你射击的是一名驾驶着一辆车的玩家，那么hittype值为BULLET_HIT_TYPE_VEHICLE，并带有正确的hitid(即击中的玩家的车辆id)，而不是BULLET_HIT_TYPE_PLAYER(击中的玩家)。

SA-MP 0.3.7版本中修正了部分问题：当用户恶意发送假武器数据时，其他的玩家客户端会冻结或崩溃。要解决这一问题，请检查参数中的 weaponid武器ID是否能够真正发射子弹。

:::

## 相关函数

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): 获取玩家最后一枪的向量信息。
