---
title: OnPlayerCommandText
description: این کالبک زمانی فرا خوانده می شود که یک بازیکن یک دستور را در پنجره کلاینت وارد کند.
tags: ["player"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می شود که یک بازیکن یک دستور را در پنجره کلاینت وارد کند. دستورات چیز هایی هستند که با اسلش شروع می شوند، به عنوان مثال help/.

| اسم   | توضیح                                                  |
| --------- | ----------------------------------------------------------- |
| playerid  | شناسه بازیکنی که دستور را وارد میکند.                |
| cmdtext[] | دستور وارد شده (از جمله اسلش). |

## مقادیر برگشتی

این همیشه ابتدا در فیلتر اسکریپت ها فرا خوانده می شود بنابراین برگداندن 1 جلوی دیدن اسکریپت های دیگر را میگیرد.

## مثال ها
</div>

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "SERVER: In dastoore /help ast");
        return 1;
        // Bargardandan 1 be server etela midahad ke dastoor pardazesh shode.
        // OnPlayerCommandText dar script haye digar farakhani nemishavad.
    }
    return 0;
    // Bargardandane 0 be server etela midahad ke dastoor tavasote in script pardazesh nashode.
    // OnPlayerCommandText dar script haye digar farakhani mishavad ta zamani ke 1 ra bargaranad.
    // Agar hich scripti 1 ra barnagardanad, payame 'SERVER: Unknown Command' baraye bazikon namayesh dade mishavad.
}
```
<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

این کالبک توسط NPC نیز قابل فرا خوانی است.

:::
    
## تابع های مرتبط


- [SendRconCommand](../functions/SendRconCommand.md): یک  دستور RCON را از طریق اسکریپت ارسال میکند.
</div>