---
title: SetObjectMaterialText
description: Replace the texture of an object with text.
tags: []
---

<VersionWarn version='SA-MP 0.3e' />

## Description

Replace the texture of an object with text.

| Name          | Description                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| objectid      | The ID of the object to replace the texture of with text.                                     |
| text          | The text to show on the object. (MAX 2048 characters)                                         |
| materialindex | The object's material index to replace with text.                                             |
| materialsize  | The [size](/docs/scripting/resources/materialtextsizes) of the material.                      |
| fontface      | The font to use.                                                                              |
| fontsize      | The size of the text (MAX 255).                                                               |
| bold          | Bold text. Set to 1 for bold, 0 for not.                                                      |
| fontcolor     | The color of the text, in ARGB format.                                                        |
| backcolor     | The background color, in ARGB format.                                                         |
| textalignment | The [alignment](/docs/scripting/resources/materialtextalignment) of the text (default: left). |

## Returns

1: The function was executed successfully.

0: The function failed to execute.

## Examples

```c
if (strcmp("/text", cmdtext, true) == 0)
{
    new objectId = CreateObject(19353, 0, 0, 10, 0.0, 0.0, 90.0); //create the object
    SetObjectMaterialText(objectId, "SA-MP {FFFFFF}0.3{008500}e {FF8200}RC7", 0, OBJECT_MATERIAL_SIZE_256x128,
    "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);
    // write "SA-MP 0.3e RC7" on the object, with orange font color and black background
    return 1;
}
```

## Notes

:::tip

Color embedding can be used for multiple colors in the text.

:::

:::warning

You MUST use ARGB color format, not RGBA like used in client messages etc.
Text does not update after 16 calls against the same object.
:::

## Related Functions

- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): Replace the texture of a player object with text.
- [SetObjectMaterial](SetObjectMaterial): Replace the texture of an object with the texture from another model in the game.
- Ultimate Creator by Nexius
- SetObjectMaterialText Editor by RIDE2DAY
- Fusez's Map Editor by RedFusion
