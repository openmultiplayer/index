---
title: SendClientMessage
description: این تابع با یک رنگ انتخاب شده در چت پیامی را به یک بازیکن خاص ارسال می کند.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این تابع با یک رنگ انتخاب شده در چت پیامی را به یک بازیکن خاص ارسال می کند. کل خط در جعبه چت به رنگ تعیین شده خواهد بود مگر اینکه جاسازی رنگ استفاده شود (نسخه 0.3c یا بالاتر).

| اسم            | توضیح                                           |
| --------------- | ----------------------------------------------------- |
| playerid        | شناسه بازیکن برای نمایش پیام       |
| color           | رنگ پیام (0xRRGGBBAA Hex format).     |
| const message[] | متنی که نمایش داده می شود (حداکثر 144 کاراکتر). |

## مقادیر برگشتی

1: تابع با موفقیت اجرا شد. وقتی رشته بیش از 144 کاراکتر باشد ، موفقیت گزارش داده می شود ، اما پیام ارسال نمی شود.


0: تابع اجرا نشد. بازیکن متصل نیست.

## مثال ها

</div>

```c
#define COLOR_RED 0xFF0000FF

public OnPlayerConnect(playerid)
{
    SendClientMessage(playerid, COLOR_RED, "In matn ghermez ast");
    SendClientMessage(playerid, 0x00FF00FF, "In matn sabz ast");
    SendClientMessage(playerid, -1, "In matn sefid ast.");
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::tip

می توانید از جاسازی رنگ برای چندین رنگ در پیام استفاده کنید. با استفاده از "-1" به عنوان رنگ ، متن سفید می شود (به همین دلیل ساده که -1 ، اگر در نماد hexadecimal نشان داده شود ، 0xFFFFFFFF است).


:::

:::warning

اگر پیامی بیش از 144 کاراکتر داشته باشد، ارسال نمی شود. برای جلوگیری از این امر می توان از کوتاه کردن استفاده کرد. نمایش پیام در چندین خط نیز این مسئله را حل می کند. از استفاده از علامت درصد (یا مشخص کننده های فرمت) در متن پیام واقعی بدون فرار صحیح از آن خودداری کنید (مانند ٪٪). در غیر این صورت منجر به crash(خرابی) می شود.


:::

## تابع های مرتبط

- [SendClientMessageToAll](SendClientMessageToAll): فرستادن پیام به همه بازیکن ها.
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer)
- [SendPlayerMessageToAll](SendPlayerMessageToAll)
</div>