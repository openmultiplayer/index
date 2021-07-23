---
title: "Pawn Style Guide"
description: A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.
---

This document is a short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.

See also:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminology

### Statement

A statement is a piece of code that imperatively tells the host program to do something. A statement is a valid piece of code that yields some result.

```c
a = b + c;
```

This is a statement composed of a variable being assigned the result of an [#Expression].

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

This is a statement telling the program to call a function with some arguments.

```c
x + 8
```

This is _not_ a statement as the result is not used anywhere, this is just an [#Expression].

### Compound Statement

A compound statement is a collection of statements surrounded by braces.

```c
{
    new message[] = "hi!";
    print(message);
}
```

This is a compound statement composed of two statements.

```c
if (a == b)
{
    print("hello!");
}
```

This is a compound statement with an `if` condition, this is usually referred to as an "if statement".

```c
return Function1(), Function2(), Function3();
```

This is _not_ a compound statement, it's a chain of statements separated by commas. This form of chaining statements is considered bad practice.

### Expression

An expression is a piece of syntax that yields a value, it's not a valid statement unless the yielded value is used in some way.

Expressions are often composed to form statements.

```c
a + b
```

This is a simple addition expression that takes two values and applies the add operator to them.

## Guidelines

### Braces

Allman braces are preferred:

```pawn
function()
{
    //
}
```

However, if you can't shake the muscle memory, K&R braces are also valid Pawn:

```pawn
function() {
    //
}
```

### Switches

Switches must use two indent levels, one for the `switch` block and another for each `case` statement or compound statement.

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (variable)
{
    case 0:
    {
        // code...
        return 0;
    }
    case 1:
    {
        // code...
        return 1;
    }
    case 2:
    {
        // code...
        return 2;
    }
    default:
    {
        // code...
        return -1;
    }
}
```

### Compound Statements (Blocks)

Blocks must always use braces, even if only a single line of code exists within a block. This applies to all levels including functions.

```pawn
func()
{
    singleLineExpr();
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
    else if ()
    {
        //
    }
    else
    {
        //
    }
}
```

### Naming

#### Functions

Functions must be named with `PascalCase`.

#### Global Variables

Global variables declared using `new` must always use `g_` prefixed PascalCase, so `g_VariableName`, however if they are declared using `static` they must always use `s_` prefixed PascalCase, so `s_VariableName`

Constant globals must use `SCREAMING_SNAKE_CASE`.

#### Local Variables

Local variables must always use `camelCase` and must never use single letter names, apart from:

- `i`, `j`, `k`, etc in `for` loops
- `x`, `y`, `z`, etc in mathematical contexts

#### Enumerators

Enumerators, if named, must be prefixed with `E_` (a strong tag) or `e_` (a weak tag)

Enumerator fields must also be `SCREAMING_SNAKE_CASE` and use the enumerator name as a prefix.

```pawn
static enum E_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Using a weak tag

```pawn
static enum e_PLAYER_DATA {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Non-named enumerator fields must also be `SCREAMING_SNAKE_CASE` and use the enumerator name as a prefix.

```pawn
static enum {
    ENUMATOR_INTEGER,
    Float:ENUMATOR_FLOAT,
}
```

Enumerators must always be declared `static` unless used outside the module.

#### Macros and Pre-Processor Definitions

Macros must always use `SCREAMING_SNAKE_CASE` regardless of their usage.

Pre-Processor definitions (constant definitions) must also use `SCREAMING_SNAKE_CASE`.

This helps differentiate between variables and constants as well as functions and macros.

It's generally advised to avoid inventing new syntactical elements in order to prevent confusion among newcomers as to which words are part of the language and which words are from libraries.

However, some older libraries do this and cannot change because of backwards compatibility.

### Documentation

Always document exported functions with a simple line comment in the format `// FunctionName does X, Y and Z and returns A` where the first word is the name of the function itself followed by a brief description of what it does. No need to waste time describing each individual parameter. For example:

```pawn
// LoadPlayerAccount is called to initiate the account load process. This
// function will trigger HTTP calls to get player data, it will display dialogs
// to the player and eventually, once the process has completed, the event
// `OnPlayerLogin` is emitted on success. On failure, the player is kicked.
stock Error:LoadPlayerAccount(playerid)
{
    // code...
}
```

Each package should have a `README` and, if necessary, each module should have a comment on the very first line describing what that module provides.
