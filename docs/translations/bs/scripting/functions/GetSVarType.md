---
title: GetSVarType
description: Dobija tip (cijeli broj, float or string) server varijable.
tags: []
---

## Deskripcija

Dobija tip (cijeli broj, float or string) server varijable.

| Ime     | Deskripcija                         |
| ------- | ----------------------------------- |
| varname | Ime server varijable za dobiti tip. |

## Returns

Returna/vraća tip SVar-a. Pogledaj tabelu ispod.

## Primjeri

```c
stock PrintSVar(varname[])
{
    switch(GetSVarType(varname))
    {
        case SERVER_VARTYPE_NONE:
        {
            return 0;
        }
        case SERVER_VARTYPE_INT:
        {
            printf("Cjelobrojni SVar '%s': %i", varname, GetSVarInt(varname));
        }
        case SERVER_VARTYPE_FLOAT:
        {
            printf("Float SVar '%s': %f", varname, GetSVarFloat(varname));
        }
        case SERVER_VARTYPE_STRING:
        {
            new varstring[256];
            GetSVarString(varname, varstring);

            printf("String SVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}
```

## Srodne Funkcije

- [SetSVarInt](SetSVarInt): Postavite cijeli broj za varijablu servera.
- [GetSVarInt](GetSVarInt): Dobij cjelobrojnu vrijednost server varijable.
- [SetSVarString](SetSVarString): Postavite string za server varijablu.
- [GetSVarString](GetSVarString): Dobij prethodno postavljeni string iz server varijable.
- [SetSVarFloat](SetSVarFloat): Postavi float za server varijablu.
- [GetSVarFloat](GetSVarFloat): Dobij prethodno postavljeni float iz server varijable.
- [DeleteSVar](DeleteSVar): Obriši server varijablu.
