---
title: strcmp
description: دو رشته را مقایسه می کند تا ببینید آیا یکسان هستند.
tags: ["string"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

:::warning

این تابع با یک حرف کوچک شروع می شود.

:::
## توضیحات

دو رشته را مقایسه می کند تا ببینید آیا یکسان هستند.

| اسم                  | توضیح                                                                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| string1               | اولین رشته برای مقایسه                                                                                                                |
| string2               | دومین رشته برای مقایسه                                                                                                               |
| ignorecase (اختیاری) | وقتی روی true تنظیم شد، حالت مهم نیست - HeLLo همان Hello است. هنگامی که false است، آنها یکسان نیستد(به صورت پیشفرض false میباشد).                                    |
| length (اختیاری)     | وقتی این طول تعیین شود ، اولین کاراکترهای x مقایسه می شوند - با انجام "Hello" و "Hell No" با طول 4 ، این همان رشته است. |

## مقادیر برگشتی

اگر رشته ها با طول مشخص شده با هم مطابقت داشته باشند 0 بر می گرداند; اگر برخی از کاراکتر ها با هم مطابقت نداشته باشند: string1 [i] - string2 [i] ('i' شاخص کاراکتر را از 0 نشان می دهد) 1 یا -1 برمی گرداند؛ تفاوت در تعداد کاراکتر ها اگر یک رشته باشد فقط با بخشی از رشته دیگر مطابقت دارد.

## مثال ها

</div>

```c
new string1[] = "Hello World";
new string2[] = "Hello World";

// Barresi kardan baraye moshabeh boodan reshte ha
if (!strcmp(string1, string2))

new string3[] = "Hell";

// Barresi kardan baraye motabeghat dashtane 4 character avval
if (!strcmp(string2, string3, false, 4))

// Barresi kardane reshte haye khali ba isnull()
if (!strcmp(string1, string2) && !isnull(string1) && !isnull(string2))

// Tarife isnull():
#if !defined isnull
    #define isnull(%1) ((!(%1[0])) || (((%1[0]) == '\1') && (!(%1[1]))))
#endif
```
<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::warning

اگر هر رشته خالی باشد ، این تابع 0 را برمی گرداند. رشته های null را با isnull () بررسی کنید. اگر رشته ها را از یک فایل متنی مقایسه می کنید ، باید هنگام استفاده از fread ، کاراکتر های خاص "carriage return" و "خط جدید" را در نظر بگیرید (n  \r\) ، همانطور که در آنها گنجانده شده است.

:::

## تابع های مرتبط

- [strfind](strfind): جست و جو کردن رشته ای در رشته دیگر
- [strdel](strdel): بخشی از رشته را حذف کردن.
- [strins](../function/strins): قرارد دادن متن در یک رشته.
- [strlen](../function/strlen): گرفتن طول یک رشته.
- [strmid](strmid): استخراج کردن بخشی از رشته به رشته دیگر.
- [strpack](strpack): قرار دادن یک رشته به رشته مقصد.
- [strval](strval): تبدیل کردن یک رشته به عدد صحیح.
- [strcat](strcat): پیوند دادن دو رشته در یک مرجع مقصد.
- http://www.compuphase.com/pawn/String_Manipulation.pdf
</div>