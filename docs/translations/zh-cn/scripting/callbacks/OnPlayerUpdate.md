---
title: OnPlayerUpdate
description: 每次客户端/玩家向服务器更新它们的状态时，都会调用这个回调函数。
tags: ["player"]
---

## 描述

每次客户端/玩家向服务器更新它们的状态时，都会调用这个回调函数。
它经常被用于创建客户端更新的自定义回调，这些更新不被服务器主动跟踪，比如生命值或护甲的更新或玩家切换武器。

| 参数名   | 描述                     |
| -------- | ------------------------ |
| playerid | 发送更新报文的玩家的ID。 |

## 返回值

0 - 来自此玩家的更新不会复制到其他客户端。 

1 - 表示此更新可以正常处理并发送给其他玩家。

它在过滤脚本中总是先被调用。

## 要点

:::tip

这个回调函数也可以由 NPC调用。

:::

:::warning

这个回调函数平均每秒被每个玩家调用30次; 只有在你知道它的意义(或更重要的是它的不意义)时才使用它。

每个玩家调用此回调的频率随玩家的行为而变化。 驾驶或射击比空闲不动时会触发更多的更新。 

:::

## 案例

案例 - 创建一个自定义回调`OnPlayerChangeWeapon(playerid, oldweapon, newweapon)`

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // 返回玩家当前的武器
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // 如果自上次更新后他换过武器
    {
        // 让我们调用一个名为OnPlayerChangeWeapon的回调函数
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//更新武器变量
    }
    return 1; // 将此更新发送给其他玩家。
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "你把武器从 % s改为 %s !", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
```

上面的例子告诉你如何轻松地创建一个自定义回调函数，该案例展示了`OnPlayerChangeWeapon`回调，并使用了`(playerid, old/new weapon)`参数。

你也可以做很多其他的事情!(注意，在这个案例中，你可能想让玩家连接时(`OnPlayerConnect`)，重置`iCurrentWeapon`变量，记得转发`(forward) OnPlayerChangeWeapon`!)。

## 案例

案例 - 跟踪玩家的生命值变化

```c
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // 自从上次更新后，玩家的生命值已经改变了——>服务器，所以很明显这就是刚刚更新的东西。
        // 让我们进一步检查他的生命值是减少还是获得了，可以借此开发反锁血外挂?;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* 他恢复了生命值!作弊了?在此编写你自己的脚本，以了解玩家是如何
            获得生命值的! */
        }
        else
        {
            /* 他生命值减少了! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

这是另一个简洁的脚本，可能对反生命值作弊有好处？或许很有帮助？ 
如果您使用另一个函数`SetPlayerHealth`，这样你就可以存储你设置给玩家的生命值。那么就可以100％准确地跟踪玩家的生命值状况，因此，您将有很大的机会防范生命值漏洞，因为玩家可以通过物品来获得生命值的机会非常有限，基本上只能通过自动售货机和商店。 

## 相关函数
