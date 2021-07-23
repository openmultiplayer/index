---
title: GetSVarsUpperIndex
description: Svaki SVar (server-varijabla) ima svoj jedinstveni identifikacijski broj za traženje, ova funkcija vraća najveći ID.
tags: []
---

## Deskripcija

Svaki SVar (server-varijabla) ima svoj jedinstveni identifikacijski broj za traženje, ova funkcija vraća najveći ID.

## Primjeri

```c
// Pohrani gornji index u varijablu 'SVarUpperIndex' + 1
new SVarUpperIndex = GetSVarsUpperIndex() + 1;

// Ova sVarCount varijabla će pohraniti koliko sVar-ova je postavljeno pa ih brojimo.
new sVarCount;

for(new i=0; i != sVarUpperIndex; i++) // Loop through all sVar IDs under the upper index
{
    // Prvo, trebamo dobiti ime SVar-a
    new sVarName[128];
    GetSVarNameAtIndex(i, pVarName, sizeof(pVarName));
    // ako je SVar postavljen (tip nije 0), prirasti sVarCount.
    if (GetSVarType(pVarName) != 0)
    {
        sVarCount ++;
    }
}

new szString[66];
printf(%i server varijabli je postavljeno. Gornji index (najveći ID): %i.", sVarCount, SVarUpperIndex-1);
```

## Srodne Funkcije

- [GetSVarNameAtIndex](GetSVarNameAtIndex): Dobij ime server varijable iz njenog indexa.
- [GetSVarType](GetSVarType): Dobij tip server varijable.
