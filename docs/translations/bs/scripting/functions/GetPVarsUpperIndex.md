---
title: GetPVarsUpperIndex
description: Svaki PVar (igrač-varijabla) ima svoj jedinstveni identifikacijski broj za traženje, ova funkcija vraća najviši ID postavljen za igrača.
tags: ["pvar"]
---

## Deskripcija

Svaki PVar (igrač-varijabla) ima svoj jedinstveni identifikacijski broj za traženje, ova funkcija vraća najviši ID postavljen za igrača.

| Ime      | Deskripcija                                |
| -------- | ------------------------------------------ |
| playerid | ID igrača da dobije gornji PVar indeks od. |

## Returns

Najviši postavljeni PVar ID.

## Primjeri

```c
// Spremite gornji indeks u varijablu 'PVarUpperIndex' + 1
new PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;

// Ova pVarCount varijabla će pohraniti koliko pVar-ova igrač ima postavljenih pa ih brojimo.
new pVarCount;

for(new i=0; i != PVarUpperIndex; i++) // Pokreni petlju kroz sve pVar ID-eve unutar gornjeg indexa.
{
    // Prvo, trebamo dobiti ime PVar-a
    new pVarName[128];
    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));
    // ako je var postavljen (tip nije 0), prirasti pVarCount.
    if (GetPVarType(playerid, pVarName) != 0)
    {
        pVarCount++;
    }
}

new szString[66];
format(szString, sizeof(szString), "Imaš %i postavljenih igračevih varijabli. Gornji index (najveći ID): %i.", pVarCount, PVarUpperIndex-1);
SendClientMessage(playerid, -1, szString);
```

## Srodne Funkcije

- [GetPVarNameAtIndex](GetPVarNameAtIndex): Uzmite ime varijable igrača iz njenog indeksa.
- [GetPVarType](GetPVarType): Dobij tip igračeve varijable.
