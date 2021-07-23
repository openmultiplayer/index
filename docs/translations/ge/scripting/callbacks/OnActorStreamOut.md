---
title: OnActorStreamOut
description: ეს ფუნქცია გამოიძახება მაშინ როდესაც 'Actor'-ი ქრება მოთამაშისთვის.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## აღწერა

ეს ფუნქცია გამოიძახება მაშინ როდესაც 'Actor'-ი ქრება მოთამაშისთვის.

| დასახელება  | აღწერა                                                         |
| ----------- | -------------------------------------------------------------- |
| actorid     | 'Actor'-ის ID რომელიც გამოჩნდა მოთამაშისთვის.                 |
| forplayerid | მოთამაშის ID რომლისთვისაც გამოჩნდა 'Actor'                    |

## Returns

ეს ფუნქცია ყოველთვის გამოიძახება პირველად Filterscript-ში.

## მაგალითი

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d Gaqra Tqventvis.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Functions
