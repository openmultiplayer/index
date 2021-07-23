---
title: OnObjectMoved
description: Ta "callback" se pokliče, ko se objekt premakne po MoveObject (ko se neha premikati). 
tags: []
---

## Opis

Ta "callback" se pokliče, ko se objekt premakne po MoveObject (ko se neha premikati).

| Ime      | Opis                             |
| -------- | -------------------------------- |
| objectid | ID predmet, ki je bil premaknjen |

## Returns

V filtrih je vedno poklican prvi.

## Primeri

```c
public OnObjectMoved(objectid)
{
    printf("Predmet  %d je zaključil svoje gibanje.", objectid);
    return 1;
}
```

## Opombe

:::tip

SetObjectPos ne deluje, ko ga uporabljate v tem "callback". Če želite to popraviti, znova ustvarite predmet.

:::

## Povezane Funkcijo

- [MoveObject](../functions/MoveObject.md): Premakni predmet.
- [MovePlayerObject](../functions/MovePlayerObject.md): Premaknite predmet predvajalnika.
- [IsObjectMoving](../functions/IsObjectMoving.md): Prepričajte se, da se predmet premika.
- [StopObject](../functions/StopObject.md): Zaustavite premikanje predmeta.
- [OnPlayerObjectMoved](OnPlayerObjectMoved.md): Pokliče se, ko se predvajalnik neha premikati.
