---
title: OnFilterScriptExit
description: Ta "callback" imenuje se, ko je "filterscript" ustavil.
tags: []
---

## Opis

Ta "callback" imenuje se, ko je "filterscript" ustavil. Kliče se samo znotraj "filterscript" v katerem se ustavil.

## Primeri

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Moj "filterscript" se ustavil");
    print("--------------------------------------\n");
    return 1;
}
```

## Povezane Funkcijo
