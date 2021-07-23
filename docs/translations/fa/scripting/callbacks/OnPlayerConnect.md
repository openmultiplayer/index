---
title: OnPlayerConnect
description: این کالبک وقتی فرا خوانده میشود که بازیکن به سرور متصل می شود.

tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک وقتی فرا خوانده میشود که بازیکن به سرور متصل می شود.

## مقادیر برگشتی

0 - از دریافت این کالبک به دیگر فیلتر اسکریپت ها جلوگیری میکند.

1 - نشان میدهد که  این کالبک به  فیلتر اسکریپت بعدی انتقال داده می شود.

این همیشه ابتدا در فیلتر اسکریپت ها فرا خوانده می شود.

## مثال ها
</div>

```c
public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    format(string, sizeof string, "%s be server peyvast. Khosh amadid!", playerName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```
<div dir="rtl" style={{ textAlign: "right" }}>
	
## نکته ها

:::tip

این کالبک توسط NPC نیز قابل فرا خوانی است.

:::
	
## تابع های مرتبط
</div>