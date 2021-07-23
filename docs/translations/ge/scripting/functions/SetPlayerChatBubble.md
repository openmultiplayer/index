---
title: SetPlayerChatBubble
description: Creates a chat bubble above a player's name tag.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3a' />

## Description

Creates a chat bubble above a player's name tag.

| Name         | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| playerid     | The player which should have the chat bubble.                    |
| text[]       | The text to display.                                             |
| color        | The text color                                                   |
| drawdistance | The distance from where players are able to see the chat bubble. |
| expiretime   | The time in miliseconds the bubble should be displayed for.      |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    SetPlayerChatBubble(playerid, text, 0xFF0000FF, 100.0, 10000);
    return 1;
}
```

## Notes

:::tip

You can't see your own chat bubbles. The same applies to attached 3D text labels.

:::

:::tip

You can use color embedding for multiple colors in the message. Using '-1' as the color will make the text white (for the simple reason that -1, when represented in hexadecimal notation, is 0xFFFFFFFF).

:::

## Related Functions
