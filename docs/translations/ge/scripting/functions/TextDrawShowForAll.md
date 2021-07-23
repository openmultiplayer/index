---
title: TextDrawShowForAll
description: Shows a textdraw for all players.
tags: ["textdraw"]
---

## Description

Shows a textdraw for all players.

| Name | Description                                                 |
| ---- | ----------------------------------------------------------- |
| text | The ID of the textdraw to show. Returned by TextDrawCreate. |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the textdraw specified does not exist.

## Examples

```c
new Text: textId = TextDrawCreate(100.0, 100.0, "Hello!");
TextDrawShowForAll(textId);
```

## Related Functions

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
