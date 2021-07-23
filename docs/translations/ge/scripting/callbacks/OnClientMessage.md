---
title: OnClientMessage
description: This callback gets called whenever the NPC sees a ClientMessage.
tags: []
---

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Description

This callback gets called whenever the NPC sees a ClientMessage. This will be everytime a SendClientMessageToAll function is used and everytime a SendClientMessage function is sent towards the NPC. This callback won't be called when someone says something. For a version of this with player text, see NPC:OnPlayerText.

| Name   | Description                     |
| ------ | ------------------------------- |
| color  | The color the ClientMessage is. |
| text[] | The actual message.             |

## Returns

This callback does not handle returns.

## Examples

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## Related Functions
