---
title: "Keywords: Operators"
---

## `char`

char returns the number of cells required to hold the given number of characters in a packed string. I.e. the number of 4-byte cells required to hold a given number of bytes. For example:

```c
4 char
```

Returns 1.

```c
3 char
```

Returns 1 (you can't have 3/4 of a variable).

```c
256 char
```

Returns 64 (256 divided by 4).

This is generally used in variable declarations.

```c
new
    someVar[40 char];
```

Will make an array 10 cells big.

For more information on packed strings read pawn-lang.pdf.

## `defined`

Checks if a symbol exists. Generally used in #if statements:

```c
new
    someVar = 5;
#if defined someVar
    printf("%d", someVar);
#else
    #error The variable 'someVar' isn't defined
#endif
```

Most commonly it's used to check if a define is defined and generate code accordingly:

```c
#define FILTERSCRIPT

#if defined FILTERSCRIPT

public OnFilterScriptInit()
{
    return 1;
}

#else

public OnGameModeInit()
{
    return 1;
}

#endif
```

## `sizeof`

Returns the size in ELEMENTS of an array:

```c
new
    someVar[10];
printf("%d", sizeof (someVar));
```

Output:

```c
10
```

And:

```c
new
    someVar[2][10];
printf("%d %d", sizeof (someVar), sizeof (someVar[]));
```

Gives:

```c
2 10
```

## `state`

This again is related to the PAWN autonoma code and thus not covered here.

## `tagof`

This returns a number representing the tag of a variable:

```c
new
    someVar,
    Float:someFloat;
printf("%d %d", tagof (someVar), tagof (someFloat));
```

Gives:

```c
-./,),(-*,( -1073741820
```

Which is a slight bug but basically means:

```c
0x80000000 0xC0000004
```

To check, for example, if a variable is a float (with the tag 'Float:'):

```c
new Float: fValue = 6.9;

new tag = tagof (fValue);

if (tag == tagof (Float:))
{
    print("float");
}
else
{
    print("not a float");
}
```
