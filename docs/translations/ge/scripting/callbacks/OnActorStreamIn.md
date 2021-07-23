---
title: OnActorStreamIn
description: This callback is called when an actor is streamed in by a player's client.
description: ეს პროცესი ხდება მაშინ როდესაც 'Actor'-ი ჩნდება მოთამაშის კლიენტისთვის.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## აღწერა

ეს პროცესი ხდება მაშინ როდესაც 'Actor'-ი ჩნდება მოთამაშის კლიენტისთვის.

| დასახელება  | აღწერა                                                       |
| ----------- | -------------------------------------------------------------|
| actorid     | 'Actor'-ის ID რომელიც ჩნდება კლიენტისთვის.                  |
| forplayerid | მოთამაშის ID რომლისთვისაც გაჩნდა კლიენტი.                   |

## 

ეს ყოველთვის გამოიძახება პირველად Filterscript-ში.

## მაგალითი

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d Gamochnda Shentvis.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Functions
