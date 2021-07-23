---
title: OnGameModeExit
description: این کالبک با پایان یافتن gamemode یا از طریق 'gmx'، خاموش  شدن سرور یا خارج شدن gamemode فرا خوانده می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک با پایان یافتن gamemode یا از طریق 'gmx'، خاموش  شدن سرور یا خارج شدن gamemode فرا خوانده می شود.

## مثال ها
</div>

```c
public OnGameModeExit()
{
    print("Gamemode be payan resid.");
    return 1;
}
```
<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

این تابع همچنین میتواند در یک فیلتر اسکریپت مورد استفاده قرار گیرد تا تشخیص دهد که حالت   gamemode با دستورات
مانند changemode یا gmx تغییر می کند، زیرا تغییر gamemode باعث بارگیری مجدد فیلتر اسکریپت نمی شود.
هنگام استفاده از OnGameModeExit همراه با  دستور 'rcon gmx' به خاطر داشته باشید، احتمال بروز مشکلات برای کلاینت
وجود دارد. مثالی از این موارد  فراخوانی های بیش از حد  RemoveBuildingForPlayer هنگام OnGameModeExit است که منجر به به crash(خرابی) بیشتر کلاینت می شود. در صورت crash سرور یا از بین رفتن روند کار با روش های دیگر مانند استفاده از دستور Linux kill یا فشار دادن دکمه بستن روی کنسول Windows، این کالبک مجدد فرا خوانده نمی شود.

:::

## تابع های مرتبط

- [GameModeExit](../functions/GameModeExit): خارج شدن از gamemode جاری.
