---
title: Dialog Styles
---

:::note

- In [OnDialogResponse](../callbacks/OnDialogResponse), pressing **button1** sets **response** to **1**, while pressing **button2** sets **response** to **0**.
- Every dialog can have an optional button 2. To make it disappear leave it empty, like in the first example. Players won't be able to click it, but they will be able to press ESC and trigger [OnDialogResponse](../callbacks/OnDialogResponse) with **response** = **0**.
- [ShowPlayerDialog](../functions/ShowPlayerDialog): Color embedding can be used for every string: **caption**, **info**, **button1** and **button2**.

:::

- This page describes the behavior of [ShowPlayerDialog](../functions/ShowPlayerDialog) and [OnDialogResponse](../callbacks/OnDialogResponse).
- For various limitations, visit the [Limits](../resources/limits) page.
- For the response examples, this code will be used:

```c
public OnDialogResponse( playerid, dialogid, response, listitem, inputtext[ ] )
{
    printf( "playerid = %d, dialogid = YOUR_DIALOGID, response = %d, listitem = %d, inputtext = '%s' (size: %d)", playerid, response, listitem, inputtext, strlen( inputtext ) );
    return 1;
}
```

## Style 0: `DIALOG_STYLE_MSGBOX`

![](/images/dialogStyles/Dialog_style_msgbox.png)

Showing:

:::note

- **\t** adds a TAB (more space).
- **\n** creates a new line.
- Color Embedding won't reset after \n \t

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_MSGBOX, "Caption", "Info\n\tInfo", "Button 1", "");
```

### Response Output

:::note

- **listitem** is always **-1**.
- **inputtext** is always empty.

:::

```c
// pressed the button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = '' (size: 0)

// pressed ESC (as the second button isn't visible)
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = '' (size: 0)
```

## Style 1: `DIALOG_STYLE_INPUT`

![](/images/dialogStyles/Dialog_style_input.png)

Showing:

:::note

- **\t** adds a TAB (more space).
- **\n** creates a new line.
- Color Embedding won't reset after \n \t

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_INPUT, "Caption", "Enter information below:", "Button 1", "Button 2");
```

### Response Output

:::note

- **listitem** is always **-1**.
- **inputtext** is the text written by the user, including colors.

:::

```c
// wrote "input" and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// wrote "input" and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

## Style 2: `DIALOG_STYLE_LIST`

![](/images/dialogStyles/Dialog_style_list.png)

Showing:

:::note

- **\t** adds a TAB (more space).
- **\n** creates a new line.
- Color Embedding won't reset after \n \t

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_LIST, "Caption", "Item 0\n{FFFF00}Item 1\nItem 2", "Button 1", "Button 2");
```

### Response output:

:::note

- **listitem** is the number of the selected item, starting from **0**.
- **inputtext** is the text contained by the selected listitem, without the colors.

:::

```c
// selected the first list item and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 0' (size: 6)

// selected the second list item and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 1' (size: 6)
```

## Style 3: `DIALOG_STYLE_PASSWORD`

:::note

- Similar to **DIALOG_STYLE_INPUT**.

:::

![](/images/dialogStyles/Dialog_style_password.png)

Showing:

:::note

- **\t** adds a TAB (more space).
- **\n** creates a new line.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_PASSWORD, "Caption", "Enter private information below:", "Button 1", "Button 2");
```

### Response Output

:::note

- **listitem** is always **-1**.
- **inputtext** is the text contained by the selected listitem, without the colors.

:::

```c
// wrote "input" and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = -1, inputtext = 'input' (size: 5)

// wrote "input" and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = -1, inputtext = 'input' (size: 5)
```

## Style 4: `DIALOG_STYLE_TABLIST`

:::tip This style was added in **SA-MP 0.3.7** and will not work in earlier versions!

:::

:::note

- Similar to **DIALOG_STYLE_LIST**.

:::

![](/images/dialogStyles/Dialog_style_tablist.png)

Showing:

:::note

- **\t** creates a new column.
- **\n** creates a new list item.
- Color embedding resets after \n and \t.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST, "Caption",
"Deagle\t$5000\t100\n\
{FF0000}Sawnoff\t{33AA33}$5000\t100\n\
Pistol\t$1000\t50",
"Button 1", "Button 2");
```

:::note

- **inputtext** is the text contained by the _first column_ of the selected **listitem**, without the colors.

:::

```c
// selected the first list item and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Deagle' (size: 6)

// selected the second list item and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Sawnoff' (size: 7)
```

## Style 5: `DIALOG_STYLE_TABLIST_HEADERS`

:::tip This style was added in **SA-MP 0.3.7** and will not work in earlier versions!

:::

:::note

- Similar to **DIALOG_STYLE_LIST**.

:::

![](/images/dialogStyles/Dialog_style_tablist_headers.png)

Showing:

:::note

- **\t** creates a new column.
- **\n** creates a new list item.
- Color embedding resets after \n and \t. The first **info** row contains the header.

:::

```c
ShowPlayerDialog(playerid, YOUR_DIALOGID, DIALOG_STYLE_TABLIST_HEADERS, "Caption",
"Header 1\tHeader 2\tHeader 3\n\
Item 1 Column 1\tItem 1 Column 2\tItem 1 Column 3\n\
{FF0000}Item 2 Column 1\t{33AA33}Item 2 Column 2\tItem 2 Column 3",
"Button 1", "Button 2");
```

:::note

- **inputtext** is the text contained by the _first column_ of the selected **listitem**, without the colors.

:::

```c
// selected the first list item and pressed the left button
playerid = 0, dialogid = YOUR_DIALOGID, response = 1, listitem = 0, inputtext = 'Item 1 Column 1' (size: 15)

// selected the first list item and pressed the right button
playerid = 0, dialogid = YOUR_DIALOGID, response = 0, listitem = 1, inputtext = 'Item 2 Column 1' (size: 15)
```
