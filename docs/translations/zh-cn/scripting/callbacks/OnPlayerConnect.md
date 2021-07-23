---
title: OnPlayerConnect
description: 当玩家连接到服务器时，这个回调函数被调用。
tags: ["player"]
---

## 描述

当玩家连接到服务器时，这个回调函数被调用。

| 参数名   | 描述                       |
| -------- | -------------------------- |
| playerid | 连接到服务器的该玩家的ID。 |

## 返回值

0 - 将阻止其他过滤脚本接收到这个回调。

1 - 表示这个回调函数将被传递给下一个过滤脚本。

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s 已加入服务器。欢迎!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## 要点

:::tip

这个回调函数也可以被 NPC调用。

:::

## 相关函数
