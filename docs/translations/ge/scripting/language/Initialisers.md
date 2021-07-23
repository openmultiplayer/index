---
title: "Keywords: Initialisers"
---

## `const`

```c
new const
    MY_CONSTANT[] =  {1, 2, 3};
```

const is not widerly used however it declares a variable which can not be modified by code. There are a few uses for this - functions with const array parameters can sometimes be compiled more efficiently or you may want something like a define but which is an array. const is a modifier, it must go with new or another variable declarator. If you try modify a const variable the compiler will complain.

## `enum`

Enumerations are a very useful system for representing large groups of data and modifying constants quickly. There are a few main uses - replacing large sets of define statements, symbolically representing array slots (these are actually the same thing but they look different) and creating new tags.

By far the most common use is as array definitions:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

That will create an array with two slots for every player. Into the one referenced by E_MY_ARRAY_MONEY it'll put 0 when a player connects and 5 into E_MY_ARRAY_GUN. Without an enum this would look like:

```c
new
    gPlayerData[MAX_PLAYERS][2];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][0] = 0;
    gPlayerData[playerid][1] = 5;
}
```

And that is how the first compiles. This is OK, however it's less readable - what is slot 0 for and what is slot 1 for? And it's less flexible, what if you want to add another slot between 0 and 1, you have to rename all your 1s to 2s, add the new one and hope you didn't miss anything, wheras with an enum you would just do:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
}
```

Recompile and everything will be updated for you.

So how does an enum know what values to give things? The full format of an enum is:

```c
enum NAME (modifier)
{
    NAME_ENTRY_1 = value,
    NAME_ENTRY_2 = value,
    ...
    NAME_ENTRY_N = value
}
```

However much of this is implied. By default, if you don't specify a modifier it becomes (+= 1), this means that every value in the enum is the last value in the enum + 1, so for:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

The first value (E_EXAMPLE_0) is 0 (by default if no other value is specified), so the second value (E_EXAMPLE_1) is 1 (0 + 1) and the third value (E_EXAMPLE_2) is 2 (1 + 1). This makes the value of E_EXAMPLE 3 (2 + 1), the name of the enum is also the last value in the enum. If we change the modifier we get different values:

```c
enum E_EXAMPLE (+= 5)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

In that example every value is the last value + 5 so, starting from 0 again, we get: E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 5, E_EXAMPLE_2 = 10, E_EXAMPLE = 15. If you were to declare an array of:

```c
new
    gEnumArray[E_EXAMPLE];
```

You would get an array 15 cells big however you would only be able to access cells 0, 5 and 10 using the enum values (you could however still use normal numbers). Lets look at another example:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

In this all the values are 0. Why? Well the first value by default is 0, then 0 _ 2 = 0, then 0 _ 2 = 0 and 0 \* 2 = 0. So how do we correct this? This is what custom values are for:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

That sets the first value to 1, so you end up with 1, 2, 4 and 8. Creating an array with that would give you an 8 cell array with named access to cells 1, 2 and 4. You can set whichever values you like and as many values as you like:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2
}
```

Gives:

```c
0, 1, 2, 4
```

While:

```c
enum E_EXAMPLE (*= 2)
{
    E_EXAMPLE_0 = 1,
    E_EXAMPLE_1 = 1,
    E_EXAMPLE_2 = 1
}
```

Gives:

```c
1, 1, 1, 2
```

It's not advised to use anything but += 1 for arrays.

You can also use arrays in enums:

```c
enum E_EXAMPLE
{
    E_EXAMPLE_0[10],
    E_EXAMPLE_1,
    E_EXAMPLE_2
}
```

That would make E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 10, E_EXAMPLE_2 = 11 and E_EXAMPLE = 12, contrary to the popular belief of 0, 1, 2 and 3.

enums items can also have tags, so for out original example:

```c
enum E_MY_ARRAY
{
    E_MY_ARRAY_MONEY,
    E_MY_ARRAY_AMMO,
    Float:E_MY_ARRAY_HEALTH,
    E_MY_ARRAY_GUN
}

new
    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];

public OnPlayerConnect(playerid)
{
    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;
    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;
    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;
    gPlayerData[playerid][E_MY_ARRAY_HEALTH] = 50.0;
}
```

That will not give a tag mismatch.

Enums can also be used as tags themselves:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_VAL_1 = 1,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;
```

That will create a new variable and assign it the value 6 (4 | 2), and it will have a custom tag so doing:

```c
gMyTagVar = 7;
```

Will generate a tag mismatch warning, although you can use tag overwrites to bypass it:

```c
gMyTagVar = E_MY_TAG:7;
```

This can be very useful for flag data (i.e. one bit for some data), or even combined data:

```c
enum E_MY_TAG (<<= 1)
{
    E_MY_TAG_NONE,
    E_MY_TAG_MASK = 0xFF,
    E_MY_TAG_VAL_1 = 0x100,
    E_MY_TAG_VAL_2,
    E_MY_TAG_VAL_3,
    E_MY_TAG_VAL_4
}

new
    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);
```

Which will produce a value of 1543 (0x0607).

Finally, as stated originally, enums can be used to replace defines by ommitting the name:

```c
#define TEAM_NONE   0
#define TEAM_COP    1
#define TEAM_ROBBER 2
#define TEAM_CIV    3
#define TEAM_CLERK  4
#define TEAM_DRIVER 5
```

I'm sure many of you have seen loads of things like that to define teams. It's all well and good but it's very static. That can easilly be replaced by an enum to handle numeric assignments automatically:

```c
enum
{
    TEAM_NONE,
    TEAM_COP,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Those all have the same values as they had before, and can be used in exactly the same way:

```c
new
    gPlayerTeam[MAX_PLAYERS] = {TEAM_NONE, ...};

public OnPlayerConnect(playerid)
{
    gPlayerTeam[playerid] = TEAM_NONE;
}

public OnPlayerRequestSpawn(playerid)
{
    if (gPlayerSkin[playerid] == gCopSkin)
    {
        gPlayerTeam[playerid] = TEAM_COP;
    }
}
```

While we're on the subject there is a much better way of defining teams based on this method:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER
}
```

Now TEAM_COP is 1, TEAM_ROBBER is 2, TEAM_CIV is 4 etc, which in binary is 0b00000001, 0b00000010 and 0b00000100. This means that if a player's team is 3 then they are in both the cop team and the robber team. That may sound pointless but it does open up possibilities:

```c
enum (<<= 1)
{
    TEAM_NONE,
    TEAM_COP = 1,
    TEAM_ROBBER,
    TEAM_CIV,
    TEAM_CLERK,
    TEAM_DRIVER,
    TEAM_ADMIN
}
```

Using that you can be in both a normal team and the admin team using only a single variable. Obviously a little code modification is required but that's easy:

To add a player to a team:

```c
gPlayerTeam[playerid] |= TEAM_COP;
```

To remove a player from a team:

```c
gPlayerTeam[playerid] &= ~TEAM_COP;
```

To check if a player is in a team:

```c
if (gPlayerTeam[playerid] & TEAM_COP)
```

Very simple and very useful.

## `forward`

forward tells the compiler that a function is coming later. It is required for all public functions however can be used in other places. It's use is "forward" followed by the full name and parameters of the function you want to forward, followed by a semicolon:

```c
forward MyPublicFunction(playerid, const string[]);

public MyPublicFunction(playerid, const string[])
{
}
```

As well as being required for all publics forward can be used to fix a rare warning when a function which returns a tag result (e.g. a float) is used before it's declared.

```c
main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

This will give a reparse warning because the compiler doesn't know how to convert the return of the function to a float because it doesn't know if the function returns a normal number or a float. Clearly in this example it returns a float. This can either be solved by putting the function at a point in the code before it's used:

```c
Float:MyFloatFunction()
{
    return 5.0;
}

main()
{
    new
        Float:myVar = MyFloatFunction();
}
```

Or by forwarding the function so the compiler knows what to do:

```c
forward Float:MyFloatFunction();

main()
{
    new
        Float:myVar = MyFloatFunction();
}

Float:MyFloatFunction()
{
    return 5.0;
}
```

Note the forward includes the return tag too.

## `native`

A native function is one defined in the virtual machine (i.e. the thing which runs the script), not in the script itself. You can only define native functions if they're coded into SA:MP or a plugin, however you can create fake natives. Because the native functions from .inc files are detected by pawno and listed in the box on the right hand side of pawno it can be useful to use native to get your own custom functions listed there. A normal native declaration could look like:

```c
native printf(const format[], {Float,_}:...);
```

If you want your own functions to appear without being declared native you can do:

```c
/*
native MyFunction(playerid);
*/
```

PAWNO doesn't recognise comments like that so will add the function to the list but the compiler does recognise comments like that so will ignore the declaration.

The other interesting thing you can do with native is rename/overload functions:

```c
native my_print(const string[]) = print;
```

Now the function print doesn't actually exist. It is still in SA:MP, and the compiler knows it's real name thanks to the "= print" part, but if you try call it in PAWN you will get an error as you have renamed print internally to my_print. As print now doesn't exist you can define it just like any other function:

```c
print(const string[])
{
    my_print("Someone called print()");
    my_print(string);
}
```

Now whenever print() is used in a script your function will be called instead of the original and you can do what you like. In this case another message is printed first then the original message.

## `new`

This is the core of variables, one of the most important keywords about. new declares a new variable:

```c
new
    myVar = 5;
```

That will create a variable, name it myVar and assign it the value of 5. By default all variables are 0 if nothing is specified:

```c
new
    myVar;

printf("%d", myVar);
```

Will give "0".

A variable's scope is where it can be used. Scope is restricted by braces (the curly brackets - {} ), any variable declared inside a set of braces can only be used within those braces.

```c
if (a == 1)
{
    // Braces start the line above this one
    new
        myVar = 5;

    // This printf is in the same braces so can use myVar.
    printf("%d", myVar);

    // This if statement is also within the braces, so it and everything in it can use myVar
    if (myVar == 1)
    {
        printf("%d", myVar);
    }
    // The braces end the line below this
}
// This is outside the braces so will give an error
printf("%d", myVar);
```

The example above also shows why correct indentation is so important.

If a global variable (i.e. one declared outside a function) is declared new, it can be used everywhere after the declaration:

File1.pwn:

```c
MyFunc1()
{
    // Error, gMyVar doesn't exist yet
    printf("%d", gMyVar);
}

// gMyVar is declared here
new
    gMyVar = 10;

MuFunc2()
{
    // Fine as gMyVar now exists
    printf("%d", gMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn:

```c
MyFunc3()
{
    // This is also fine as this file is included in the first file after the declaration and new is not file restricted
    printf("%d", gMyVar);
}
```

## `operator`

This allows you to overload operators for custom tags. For example:

```c
stock BigEndian:operator=(b)
{
    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));
}

main()
{
    new
        BigEndian:a = 7;
    printf("%d", _:a);
}
```

Normal pawn numbers are stored in what's called little endian. This operator allows you to define an assignment to convert a normal number to a big endian number. The difference between big endian and little endian is the byte order. 7 in little endian is stored as:

```c
07 00 00 00
```

7 in big endian is stored as:

```c
00 00 00 07
```

Therefore if you print the contents of a big endian stored number it will try read it as a little endian number and get it backwards, thus printing the numer 0x07000000, aka 117440512, which is what you will get if you run this code.

You can overload the following operators:

```c
+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, ! and =
```

Also note that you can make them do whatever you like:

```c
stock BigEndian:operator+(BigEndian:a, BigEndian:b)
{
    return BigEndian:42;
}

main()
{
    new
        BigEndian:a = 7,
        BigEndian:b = 199;
    printf("%d", _:(a + b));
```

Will simply give 42, nothing to do with addition.

## `public`

public is used to make a function visible to the Virtual Machine, i.e. it allows the SA:MP server to call the function directly, instead of only allowing the function to be called from inside the PAWN script. You can also make variables public to read and write their values from the server, however this is never used in SA:MP (although you may be able to utilise it from a plugin, I've never tried) (you can also combine this with const to make a variable which can ONLY be modified from the server).

A public function has it's textual name stored in the amx file, unlike normal functions which only have their address stored for jumps, which is another drawback to decompilation. This is so that you can call the function by name from outside the script, it also allows you to call functions by name from inside the script by leaving and re-entering it. A native function call is almost the opposite of a public function call, it calls a function outside the script from inside the script as opposed to calling a function inside the script from outside the script. If you combine the two you get functions like SetTimer, SetTimerEx, CallRemoteFunction and CallLocalFunction which call functions by name, not address.

Calling a function by name:

```c
forward MyPublicFunc();

main()
{
    CallLocalFunction("MyPublicFunc", "");
}

public MyPublicFunc()
{
    printf("Hello");
}
```

public functions prefixed by either "public" or "@" and, as mentioned in the forward section, all require forwarding:

```c
forward MyPublicFunc();
forward @MyOtherPublicFunc(var);

main()
{
    CallLocalFunction("MyPublicFunc", "");
    SetTimerEx("@MyOtherPublicFunc", 5000, 0, "i", 7);
}

public MyPublicFunc()
{
    printf("Hello");
}

@MyOtherPublicFunc(var)
{
    printf("%d", var);
}
```

Obviously that example introduced SetTimerEx to call "MyOtherPublicFunc" after 5 seconds and pass it the integer value 7 to print.

main, used in most of these examples, is similar to a public function in that it can be called from outside the script, however it is not a public function - it just has a special known address so the server knows where to jump to to run it.

All SA:MP callbacks are public and called from outside the script automatically:

```c
public OnPlayerConnect(playerid)
{
    printf("%d connected", playerid);
}
```

When someone joins the server it will automatically look up this public function in all scripts (gamemode first then filterscripts) and if it finds it, calls it.

If you want to call a public function from inside the script however you do not have to call it by name, public functions also behave as normal functions too:

```c
forward MyPublicFunc();

main()
{
    MyPublicFunc();
}

public MyPublicFunc()
{
    printf("Hello");
}
```

This is obviously much faster than using CallLocalFunction or another native.

## `static`

A static variable is like a global new variable but with a more limited scope. When static is used globally the resulting created variables are limited to only the section in which they were created (see #section). So taking the earlier "new" example:

**file1.pwn**

```c
MyFunc1()
{
    // Error, gMyVar doesn't exist yet
    printf("%d", gMyVar);
}

// gMyVar is declared here
new
    gMyVar = 10;

MuFunc2()
{
    // Fine as gMyVar now exists
    printf("%d", gMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // This is also fine as this file is included in the first file after the declaration and new is not file restricted
    printf("%d", gMyVar);
}
```

And modifying it for static would give:

file1.pwn

```c
MyFunc1()
{
    // Error, g_sMyVar doesn't exist yet
    printf("%d", g_sMyVar);
}

// g_sMyVar is declared here
static
    g_sMyVar = 10;

MuFunc2()
{
    // Fine as _sgMyVar now exists
    printf("%d", g_sMyVar);
}

// Include another file here
#include "file2.pwn"
```

file2.pwn

```c
MyFunc3()
{
    // Error, g_sMyVar is limited to only the file (or section) in which it was declared, this is a different file
    printf("%d", g_sMyVar);
}
```

This means you can have two globals of the same name in different files.

If you use static locally (i.e. in a function) then the variable, like local variables created with new, can only be used within the scope (based on braces - see the section on "new") in which it was declared. However unlike "new" variables "static" variables do not loose their value between calls.

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    new
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

Every time the function is called i is reset to 0, so the resulting output will be:

```c
0
1
0
1
0
1
0
1
```

If we replace the "new" with "static" we get:

```c
main()
{
    for (new loopVar = 0; loopVar < 4; loopVar++)
    {
        MyFunc();
    }
}

MyFunc()
{
    static
        i = 0;
    printf("%d", i);
    i++;
    printf("%d", i);
}
```

And, as static locals keep their value between calls, the resulting output it:

```c
0
1
1
2
2
3
3
4
```

The value given in the declaration (if one is given, like new, static variables default to 0) is the value assigned to the variable the first time the function is called. So if "static i = 5;" were used instead the result would be:

```c
5
6
6
7
7
8
8
9
```

Because of the way static variables are stored, they are in fact global variables, the compiler checks they are used in the correct place. As a result decompiled scripts cannot distinguish between normal globals, global statics and local statics and they are all given as normal globals.

You can also have static functions which can only be called from the file in which they are declared. This is useful for private style functions.

## `stock`

stock is used to declare variables and functions which may not be used but which you don't want to generate unused warnings for. With variables stock is like const in that it is a modifier, not a full declaration, so you could have:

```c
new stock
    gMayBeUsedVar;

static stock
    g_sMayBeUsedVar;
```

If the variable or function is used the compiler will include it, if it is not used it will exclude it. This is different to using #pragma unused (symbol) as that will simply surpress (i.e. hide) the warning and include the information anyway, stock will entirely ignore the unused data.

stock is most commonly used for custom libraries. If you write a library you provide a whole load of functions for other people to use but you've no idea if they'll use them or not. If your code gives loads of warnings for every function a person doesn't use people will complain (unless it's on purpose as they HAVE to use that function (e.g. for initialising variables). Having said that however, going from personal experience with YSI people will complain anyway.

```c
main()
{
    Func1();
}

Func1()
{
    printf("Hello");
}

Func2()
{
    printf("Hi");
}
```

Here Func2 is never called so the compiler will give a warning. This may be useful as you may have forgotten to call it, as is generally the case in a straight script, however if Func1 and Func2 are in a library the user may simply not need Func2 so you do:

```c
main()
{
    Func1();
}

stock Func1()
{
    printf("Hello");
}

stock Func2()
{
    printf("Hi");
}
```

And the function won't be compiled and the warning removed.
