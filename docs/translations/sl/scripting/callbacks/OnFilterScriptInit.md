---
title: OnFilterScriptInit
description: Ta "callback" imenuje se, ko je "filterscript" začne.
tags: []
---

## Opis

Ta "callback" imenuje se, ko je "filterscript" začne.. Kliče se samo znotraj "filterscript" v katerem se začne.

## Primeri

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print(" Moj "filterscript" se začne");
    print("--------------------------------------\n");
    return 1;
}
```

## Povezane Funkcijo
