---
title: "Keywords: Directives"
---

Directives are instructions passed to the compiler to control how it interprets your source code.

## `#assert`

This checks if constant expression is true and if not halts the compile.

```c
#define MOO 10
#assert MOO > 5
```

This will compile fine.

```c
#define MOO 1
#assert MOO > 5
```

That won't and will give a fatal error. This is similar to:

```c
#define MOO 1
#if MOO <= 5
    #error MOO check failed
#endif
```

However assert will give an error of:

```
Assertation failed: 1 > 5
```

Wheras the second will give an error of:

```
User error: Moo check failed
```

Which may or may not be helpful.

## `#define`

`#define` is a text replacement directive, wherever the first symbol of the define is found the rest of it will be placed.

```c
#define MOO 7
printf("%d", MOO);
```

Will be changed to:

```c
printf("%d", 7);
```

This is why all defines are lost in decompilation as they don't exist when the code is compiled (all directives are pre-processed). Defines don't have to contain numbers:

```c
#define PL new i = 0; i < MAX_PLAYERS; i++) if (IsPlayerConnected(i)

for(PL) printf("%d connected", i);
```

Will compile to the player loop we all know and love (despise). Notice how the brackets are used here, some from the for and some from the define macro(the replacement).

Another little known fact about defines is that they can be multi-line if you escape the new line. Generally a new line ends the define however the following is valid:

```c
#define PL \
        new i = 0; i < MAX_PLAYERS; i++) \
                if (IsPlayerConnected(i)

printf("%d", MOO(6));
```

That will output 42 (no, not chosen randomly). Notice the excessive brackets in the define? This is because defines are straight text replacements so that will compile as:

```c
printf("%d", ((6) * 7));
```

That's fine as it is but let's take this example:

```c
printf("%d", MOO(5 + 6));
```

You would expect that to compile to output 77 ((5 + 6) \* 7) and with the brackets it will, however without the brackets you have:

```c
#define MOO(%0) \
        %0 * 7

printf("%d", MOO(5 + 6));
```

Which converts to:

```c
printf("%d", MOO(5 + 6 * 7));
```

Which, due to the order of operations, compules as (5 + (6 \* 7)), whiche is 47 and very wrong. One interesting fact about the parameters is that if you have too many, the last one is all the extra ones. So doing:

```c
#define PP(%0,%1) \
        printf(%0, %1)

PP(%s %s %s, "hi", "hello", "hi");
```

Will infact print:

```
hi hello hi
```

As `%1` contains "hi", "hello", "hi". You may have also noticed the use of `#` to convert a literal into a string. This is a SA-MP only feature and can be useful. It was just added here to give a disting distinguishing between the parameters.

## `#else`

`#else` is like else, but for #if instead of if.

## `#elseif`

`#elseif` is like else if but for #if.

```c
#define MOO 10

#if MOO == 9
        printf("if");
#elseif MOO == 8
        printf("else if");
#else
        printf("else");
#endif
```

## `#emit`

This directive is unlisted in the pawn-lang.pdf table however does exist. It is basically an inline compiler. If you know AMX you can use this to put AMX opcodes directly into your code. The one limitation is that is allows only one argument. Syntax: `#emit <opcode> <argument>`. `<argument>` can be a rational number, integer or (local or global) symbol(variables, functions and labels). The list of opcodes and their meaning can be found in Pawn Toolkit ver. 3664.

## `#endif`

`#endif` is like a close brace for if. #if doesn't use braces, everything is conditionally added up to the corresponding #endif.

## `#endinput, #endscript`

This stops the inclusion of a single file.

## `#error`

This halts the compiler instantly and gives a custom error message. See #assert for an example.

## `#if`

`#if` is to the proprocessor what if is to code. You can choose exactly what to compile and what not to from here. For example consider the following code:

```c
#define LIMIT 10

if (LIMIT < 10)
{
    printf("Limit too low");
}
```

That will compile as:

```c
if (10 < 10)
{
    printf("Limit too low");
}
```

Which will clearly never be true and the compiler knows it - so it tells you so, giving you a "constant expression" warning. The question is, if it will never be true what's the point of including it at all? You could just remove the code but then there will be no checks if someone changes LIMIT and recompiles. This is what #if is for. Unlike normal if which gives a warning if the expression is constant, #if expressions MUST be constant. So:

```c
#define LIMIT 10

#if LIMIT < 10
    #error Limit too low
#endif
```

That will check that the limit is not too small when you compile and if it is will give a compile time error, rather than you having to test the mode to see if there's something wrong. This also means that no excess code is generated. Note the lack of brackets too, you can use them, and may need them in more complex expressions, but they're not required.

Here's another example:

```c
#define LIMIT 10

if (LIMIT < 10)
{
    printf("Limit less than 10");
}
else
{
    printf("Limit equal to or above 10");
}
```

Again this is a constant check, which will give a warning, but both prints will be compiled when we KNOW only one will ever run. Using #if this becomes:

```c
#define LIMIT 10

#if LIMIT < 10
    printf("Limit less than 10");
#else
    printf("Limit equal to or above 10");
#endif
```

That way only the printf which is required will be compiled and the other one will still be in your source code incase they change LIMIT and recompile, but won't be included in the code as it's not needed. This way also means the pointless if isn't run every time your code is run, which is always good.

## `#include`

This takes all the code from a specified file and inserts it into your code at the point at which the include line is. There are two types of include: relative and system (I just made those terms up, if you have better ones please say). Relative includes use double quotes around the filename and are located relative to the current file, so:

```c
#include "me.pwn"
```

would include the file "me.pwn" from the same directory as the file including that file. The other type, system, includes the file from the "include" directory that is located either in same directory as is Pawn compiler or parent directory(paths:"include","../include"):

```c
#include "<me>"
```

Would include the file "me.inc" (note the lack of extension, you can specify one if the file is not .p (not .pwn) or .inc) from the pawno/include directory (assuming you're using pawno).

Both these types can take directories:

```c
#include "folder/me.pwn"
```

```c
#include <folder/me>
```

Both of those will include a file one directory down from their respective default directories. If the file does not exist compile fails instantly.

## `#pragma`

This is one of the most complex directives. It has a number of options to control how your script works. An example setting would look like:

```c
#pragma ctrlchar '$'
```

That changes the escape character from \ to $, so a new line, instead of being "\r\n" (windows CR-LF) would be "$r\$n". Many of the options are designed to control amx compilation for embedded systems and so limit things which are really almost unlimited on a PC, they are all listed in pawn-lang.pdf but only selected ones relevant to SA:MP are here:

| Name       | Values                        | Description                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| codepage   | name/value                    | Sets the Unicode codepage to use for strings.                                                                                                                                                                                                                                                                                                                           |
| compress   | 1/0                           | Unsupported in SA-MP - don't try to use it.                                                                                                                                                                                                                                                                                                                             |
| deprecated | symbol                        | Generated a warning if the given symbol is used to tell people there's a better version available.                                                                                                                                                                                                                                                                      |
| dynamic    | value(generally a power of 2) | Sets the size of memory (in cells) assigned to the stack and heap. Required if you get excess memory usage warning after compilation. (A weird table after the compiler copyright line)                                                                                                                                                                                 |
| library    | dll name                      | Widley incorrectly used in SA-MP. This specifies the dll to get the native functions defined in the file it is from. It does not define a file **as** a library.                                                                                                                                                                                                        |
| pack       | 1/0                           | Swap the meanings of !"" and "". See pawn-lang.pdf for more information on packed strings.                                                                                                                                                                                                                                                                              |
| tabsize    | value                         | Another widely misused setting. This should be used to set the size of a tab to avoid compiler warnings which are wrong due to spaces and tabs being used interchangably. This is set to 4 in SA:MP as that is the size of a tab in pawno. Setting this to 0 will surpress all your indentation warnings but is highly unadvised as it allows entirely unreadable code. |
| unused     | symbol                        | Like deprecated this appears after the symbol you wish to surpress the "symbol is never used" warning for. Generally the preferred method of doing this is by using stock however this is not always applicable (e.g. function parameters cannot not be compiled).                                                                                                      |

### Deprecated

```c
new
    gOldVariable = 5;

#pragma deprecated gOldVariable

main() {printf("%d", gOldVariable);}
```

That will give a warning that gOldVariable should not be used anymore. This is mostly useful for functions to preserve backwards compatability while updating the API.

### `#tryinclude`

This is similar to #include but if the file doesn't exist the compilation doesn't fail. This is useful for only including features in your script if a person has the correct plugin installed (or at least the plugin include):

**myinc.inc**

```c
#if defined _MY_INC_INC
    #endinput
#endif
#define _MY_INC_INC

stock MyIncFunc() {printf("Hello");}
```

**Gamemode:**

```c
#tryinclude <myinc>

main()
{
    #if defined _MY_INC_INC
        MyIncFunc();
    #endif
}
```

That will only call MyIncFunc if the file with it in was found and compiled. This, as stated before, is good for things like IRC plugins to check if they actually have the plugin.

### `#undef`

Removes a previously defined macro or constant symbol.

```c
#define MOO 10
printf("%d", MOO);
#undef MOO
printf("%d", MOO);
```

That will fail to compile as MOO doesn't exist anymore by the time the second printf is reached.

```c
enum {
    e_example = 300
};

printf("%d", e_example);
#undef e_example
printf("%d", e_example); // fatal error
```
