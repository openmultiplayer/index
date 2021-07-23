---
title: OnRecordingPlaybackEnd
description: 当使用NPC:StartRecordingPlayback复制的录制文件到达其末尾时，将调用此回调。
tags: []
---

:::warning

SA-MP 0.3a版本增加了这个NPC回调函数，无法在以前的版本使用！

:::

## 描述

当使用NPC:StartRecordingPlayback复制的录制文件到达其末尾时，将调用此回调。

## 案例

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //这将在录制的文件完成复制后再次启动。
}
```
