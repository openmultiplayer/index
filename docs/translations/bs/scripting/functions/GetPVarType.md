---
title: GetPVarType
description: Dobija tip (cijli broj, float ili string) igračeve varijable.
tags: ["pvar"]
---

## Deskripcija

Dobija tip (cijli broj, float ili string) igračeve varijable.

| Ime      | Deskripcija                                            |
| -------- | ------------------------------------------------------ |
| playerid | ID igrača od čije igračeve varijable treba dobiti tip. |
| varname  | Ime igračeve varijable za dobiti tip.                  |

## Returns

Returna/vraća tip PVar-a. Pogledaj tabelu ispod.

## Primjeri

```c
stock PrintPVar(playerid, varname[])
{
    switch(GetPVarType(playerid, varname))
    {
        case PLAYER_VARTYPE_NONE:
        {
            return 0;
        }
        case PLAYER_VARTYPE_INT:
        {
            printf("Cijelobrojni PVar '%s': %i", varname, GetPVarInt(playerid, varname));
        }
        case PLAYER_VARTYPE_FLOAT:
        {
            printf("Float PVar '%s': %f", varname, GetPVarFloat(playerid, varname));
        }
        case PLAYER_VARTYPE_STRING:
        {
            new varstring[256];
            GetPVarString(playerid, varname, varstring);

            printf("String PVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}
```

## Srodne Funkcije

- [SetPVarInt](SetPVarInt): Postavi cijeli broj za igračevu varijablu.
- [GetPVarInt](GetPVarInt): Dobij prethodno postavljeni cijeli broj iz igračeve varijable.
- [SetPVarString](SetPVarString): Postavi string za igračevu varijablu.
- [GetPVarString](GetPVarString): Dobij prethodno postavljeni string iz igračeve varijable.
- [SetPVarFloat](SetPVarFloat): Postavi float za igračevu varijablu.
- [GetPVarFloat](GetPVarFloat): Dobij prethodno postavljeni float iz igračeve varijable.
- [DeletePVar](DeletePVar): Ukloni igračevu varijablu.
