---
title: OnGameModeInit
description: این کالبک با استارت شدن gamemode فعال می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک با استارت شدن gamemode فعال می شود.

## مثال ها

</div>

```c
public OnGameModeInit()
{
    print("Gamemode start shod!");
    return 1;
}
```
<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

این تابع همچنین میتواند در یک فیلتر اسکریپت مورد استفاده قرار گیرد تا تشخیص دهد که حالت   gamemode با دستورات
مانند changemode یا gmx تغییر می کند، زیرا تغییر gamemode باعث بارگیری مجدد فیلتر اسکریپت نمی شود.

:::

## تابع های مرتبط
</div>