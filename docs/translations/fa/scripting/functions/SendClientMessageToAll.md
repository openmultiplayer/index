---
title: SendClientMessageToAll
description: یک پیام را برای همه بازیکن ها نشان میدهد.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

یک پیام را برای همه بازیکن ها نشان میدهد. این معادل چند نفره SendClientMessage است.

| Name            | Description                                       |
| --------------- | ------------------------------------------------- |
| color           | رنگ پیام (0xRRGGBBAA Hex format).     |
| const message[] | متنی که نمایش داده می شود (حداکثر 144 کاراکتر). |

## مقادیر بازگشتی

این تابع همیشه true را بررمی گرداند. (1).

## مثال ها

</div>

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Ferestadan payam baraye hame
        SendClientMessageToAll(-1, "Hello!");
        return 1;
    }
    return 0;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::warning

بدون فرمت رشته ای که ارسال می شود ، از استفاده از مشخص کننده های فرمت در پیام های خود خودداری کنید. در غیر این صورت منجر به crash(خرابی) می شود.

:::

## تابع های مرتبط

- [SendClientMessage](SendClientMessage): فرستادن پیام برای یک بازیکن خاص.
- [SendPlayerMessageToAll](SendPlayerMessageToAll)