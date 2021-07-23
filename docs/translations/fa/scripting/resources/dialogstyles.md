---
title: سبک های دیالوگ
---

<div dir="rtl" style={{ textAlign: "right" }}>

:::note نکته

- در [OnDialogResponse](../callbacks/OnDialogResponse) فشردن **button1** باعث میشود **response** **1** باشد، اگر **button2** فشرده شود باعث میشود **response** **0** شود.
- هر دیالوگ میتواند دو دکمه داشته باشید. برای اینکه دکمه نشان داده نشود آن را خالی بگذارید، مثل مثال اول. پلیر ها قادر نخواهند بود بر روی آن دکمه کلیک کنند اما آن ها قادر خواند بود با فشردن دکمه ESC [OnDialogResponse](../callbacks/OnDialogResponse) را با **response** = **0** فرا بخوانند.
- [ShowPlayerDialog](../functions/ShowPlayerDialog): روش color-embedding میتواند برای هر string استفاده شود : **caption**, **info**, **button1** و **button2**.
:::

- این صفحه [ShowPlayerDialog](../functions/ShowPlayerDialog) و [OnDialogResponse](../callbacks/OnDialogResponse) را توضیح میدهد.
- برای دیدن محدود ها صفحه [Limits](../resources/limits) را ببینید.
- برای مثال واکنش بازیکن به دیالوگ، میتوانید از این کد ها استفاده کنید :

</div>

```c
public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )
{
    printf( "playerid = %d, dialogid = YOUR_DIALOGID, response = %d, listitem = %d, inputtext = '%s' (size: %d)", playerid, response, listitem, inputtext, strlen( inputtext ) );
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## سبک 0: `DIALOG_STYLE_MSGBOX`

![](/images/dialogStyles/Dialog_style_msgbox.png)

نمایش دادن:

:::note نکته

- **\t** مقداری فاصله ایجاد میکند.
- **\n** یک خط جدید میسازد.
- روش Color-Embedding بعد از \n \t ریست نمیشود و رنگ آن عوض نمیشود.

:::
</div>

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_MSGBOX, "Caption", "Info\n\tInfo", "Button 1", "");
```

<div dir="rtl" style={{ textAlign: "right" }}>

### پاسخ خروجی

:::note نکته

- **listitem**  همیشه **-1** است.
- **inputtext** همیشه خالی است.

:::

</div>


```c
// Dokme feshorde shod
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '' (size: 0)

// Dokme ESC feshore shod
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '' (size: 0)
```

<div dir="rtl" style={{ textAlign: "right" }}>

## سبک 1: `DIALOG_STYLE_INPUT`

![](/images/dialogStyles/Dialog_style_input.png)

نمایش دادن:

:::note نکته

- **\t** مقداری فاصله ایجاد میکند.
- **\n** یک خط جدید میسازد.
- روش Color-Embedding بعد از \n \t ریست نمیشود و رنگ آن عوض نمیشود.

:::

</div>

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_INPUT, "Caption", "Enter information below:", "Button 1", "Button 2");
```

<div dir="rtl" style={{ textAlign: "right" }}>

### پاسخ خروجی

:::note

- **listitem**  همیشه **-1** است.
- **inputtext** توسط کاربر نوشته شده، شامل رنگ هم میشود.

:::

</div>

```c
// wrote "input" and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// wrote "input" and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

<div dir="rtl" style={{ textAlign: "right" }}>

## سبک 2: `DIALOG_STYLE_LIST`

![](/images/dialogStyles/Dialog_style_list.png)

نمایش دادن:

:::note

- **\t** مقداری فاصله ایجاد میکند.
- **\n** یک خط جدید میسازد.
- روش Color-Embedding بعد از \n \t ریست نمیشود و رنگ آن عوض نمیشود.

:::

</div>

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_LIST, "Caption", "Item 0\n{FFFF00}Item 1\nItem 2", "Button 1", "Button 2");
```

<div dir="rtl" style={{ textAlign: "right" }}>

### پاسخ خروجی:

:::note

- **listitem**شماره مورد انتخاب شده است. از **0** شروع میشود.
- **inputtext** متن مورد انتخاب شده، شامل رنگ ها نمیشود.

:::

</div>

```c
// selected the first list item and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 0' (size: 6)

// selected the second list item and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 1' (size: 6)
```

<div dir="rtl" style={{ textAlign: "right" }}>

## سبک 3: `DIALOG_STYLE_PASSWORD`

:::note نکته

- شبیه **DIALOG_STYLE_INPUT**.

:::

![](/images/dialogStyles/Dialog_style_password.png)

نمایش دادن:

:::note نکته

- **\t** مقداری فاصله ایجاد میکند.
- **\n** یک خط جدید میسازد.

:::

</div>

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_PASSWORD, "Caption", "Enter private information below:", "Button 1", "Button 2");
```

<div dir="rtl" style={{ textAlign: "right" }}>

### پاسخ خروجی

:::note نکته

- **listitem**  همیشه **-1** است.
- **inputtext** متن مورد انتخاب شده، شامل رنگ ها نمیشود.

:::

</div>

```c
// wrote "input" and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// wrote "input" and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```
<div dir="rtl" style={{ textAlign: "right" }}>

## سبک 4: `DIALOG_STYLE_TABLIST`

:::tip این مورد در نسخه **SA-MP 0.3.7** اضافه شده و در نسخه های قبلی کار نخواهد کرد!

:::

:::note نکته

- شبیه **DIALOG_STYLE_LIST**.

:::

![](/images/dialogStyles/Dialog_style_tablist.png)

نمایش دادن:

:::note نکته

- **\t** مقداری فاصله ایجاد میکند.
- **\n** یک خط جدید میسازد.
- روش Color-Embedding بعد از \n یا \t ریست میشود. اولین خط **info** شامل سر تیتر میشود.

:::

</div>

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST, "Caption",
"Deagle\t$5000\t100\n\
{FF0000}Sawnoff\t{33AA33}$5000\t100\n\
Pistol\t$1000\t50",
"Button 1", "Button 2");
```

<div dir="rtl" style={{ textAlign: "right" }}>

:::note نکته

- **inputtext** متن اولین ستون از **listitem** انتخاب شده، بدون رنگ ها.

:::

</div>

```c
// selected the first list item and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)

// selected the second list item and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)
```

<div dir="rtl" style={{ textAlign: "right" }}>

## سبک 5: `DIALOG_STYLE_TABLIST_HEADERS`

:::tip این مورد در نسخه **SA-MP 0.3.7** اضافه شده و در نسخه های قبلی کار نخواهد کرد!

:::

:::note نکته

- شبیه**DIALOG_STYLE_LIST**.

:::

![](/images/dialogStyles/Dialog_style_tablist_headers.png)

نمایش دادن:

:::note نکته

- **\t** مقداری فاصله ایجاد میکند.
- **\n** یک خط جدید میسازد.
- روش Color-Embedding بعد از \n یا \t ریست میشود. اولین خط **info** شامل سر تیتر میشود.

:::

</div>

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST_HEADERS, "Caption",
"Header 1\tHeader 2\tHeader 3\n\
Item 1 Column 1\tItem 1 Column 2\tItem 1 Column 3\n\
{FF0000}Item 2 Column 1\t{33AA33}Item 2 Column 2\tItem 2 Column 3",
"Button 1", "Button 2");
```

<div dir="rtl" style={{ textAlign: "right" }}>

:::note نکته

- **inputtext** متن اولین ستون از **listitem** انتخاب شده، بدون رنگ ها.

:::

</div>

```c
// selected the first list item and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 1 Column 1' (size: 15)

// selected the first list item and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 2 Column 1' (size: 15)
```
