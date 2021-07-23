---
title: TextDrawHideForAll
description: Hides a text draw for all players.
tags: ["textdraw"]
---

## Description

Hides a text draw for all players.

| Name | Description                                                  |
| ---- | ------------------------------------------------------------ |
| text | The ID of the textdraw to hide (returned by TextDrawCreate). |

## Returns

This function does not return any specific values.

## Examples

```c
new Text: gMyTextdraw;

gMyTextdraw = TextDrawCreate(...);


//Later on
TextDrawShowForAll(gMyTextdraw);

//Even later on
TextDrawHideForAll(gMyTextdraw);
```

## Related Functions

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
