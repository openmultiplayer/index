---
title: "Scripting: Tags"
description: A guide for Tags, a type-like feature of the Pawn language providing safety features for working with values of different intent.
---

## Introduction

A tag is a prefix to a variable which tells the compiler to treat the variable specially under certain circumstances. For example you can use tags to define where a variable can and can't be used, or a special way to add two variables together.

There are two types of tag - strong tags (starting with a capital letter) and weak tags (starting with a lower case letter), for the most part they're the same however under certain circumstances weak tags can be converted to tagless silently by the compiler, i.e. you won't get a warning, most of the time with weak tags, and all the time with strong tags, implicitly changing the tag will result in a warning to tell you data is likely being used wrong.

A very simple example is the following:

```c
new
    File:myfile = fopen("file.txt", io_read);
myFile += 4;
```

The `fopen` function will return a value with a tag of type `File:`, there is no problem on that line as the return value is being stored to a variable also with a tag of `File:` (note the cases are the same too). However on the next line the value `4` is added to the file handle. `4` has no tag (it is actually tag type `_:` but variables, values and functions with no tag are automatically set to that and you don't need to worry about it normally) and myFile has a tag of `File:`, obviously nothing and something can't possibly be the same so the compiler will issue a warning, this is good as a handle to a file is meaningless in terms of it's actual value and so modifying it will merely destroy the handle and mean the file can't be closed as there is no longer a valid handle to pass and close the file with.

### Strong tags

As mentioned above a strong tag is any tag starting with a capital letter. Examples of these in SA:MP include:

```c
Float:
File:
Text:
```

These cannot be mixed with other variable types and will always issue a warning when you try to do so:

```c
new
    Float:myFloat,
    File:myFile,
    myBlank;

myFile = fopen("file.txt", io_read); // File: = File:, no warning

myFloat = myFile; // Float: = File:, "tag mismatch" warning

myFloat = 4; // Float: = _: (none), "tag mismatch" warning

myBlank = myFloat; // _: (none) = Float:, "tag mismatch" warning
```

### Weak tags

A weak tag behaves mostly the same as a strong tag however the compiler will not issue a warning when the destination is tagless and the source is a weak tag. For example compare the following strong and weak tag codes, the first with the strong tag will give a warning, the second with the weak tag will not:

```c
new
    Strong:myStrong,
    weak:myWeak,
    myNone;

myNone = myStrong; // Warning
myNone = myWeak; // No warning
```

However the reverse is not true:

```c
myWeak = myNone; // Warning
```

This is also true with functions, calling a function with a tagless parameter, passing a weak tagged variable will not give a warning:

```c
new
    weak:myWeak;
MyFunction(myWeak);



MyFunction(myVar)
{
    ...
}
```

But calling a function with a tagged parameter (weak or strong), passing an untagged parameter will give a warning. Examples of weak tags in SA:MP are less well known as such though are often used and include:

```c
bool:
filemode:
floatround_method:
```

## Use

### Declaring

Declaring a variable with a tag is very simple, just write the tag, there's no need to define a tag in advance in any way however this is possible and does have it's uses as will become apparent later:

```c
new
    Mytag:myVariable;
```

Declaring a variable with one of the existing tags will allow you to use that variable with the functions and operators already written for that tag type.

### Functions

Creating a function to take or return a tag is very simple, just prefix the relevant part with the desired tag type, for example:

```c
Float:GetValue(File:fHnd, const name[])
{
    ...
}
```

That function takes the handle to a file and returns a float value (presumably a value read from the file and corresponding to the value name passed in `name[]`). This function would most likely use the `floatstr` function, which also returns a Float: (as you can tell by looking at the status bar of pawno when you click on the function in the right hand function list), after taking a string. The implementation of this function is not important but it will convert the string to an IEEE float value, which is then stored as a cell (it's actually strictly stored as an integer which just happens to have an identical bit pattern to the relevant IEEE number as PAWN is typeless, but that's what tags are partially there to combat).

### Operators

Operators such as `+`, `==`, `>` etc can be overloaded for different tags, i.e. doing `+` on two Float:s does something different to doing it on two non-tagged variables. This is especially useful in the case of float variables as as mentioned they are not really floats they are integers with a very specific bit pattern, if the operators were not overloaded the operations would simply be performed on the integers which would give gibberish if the answer were interpreted as a float again. For this reason the Float: tag has overloaded versions of most of the operators to call special functions to do the maths in the server instead of in pawn.

An operator is exactly like a normal function but instead of a function name you use "operator(**symbol**)" where (**symbol**) is the operator you want to overwrite. The valid operators are:

```c
+
-
=
++
--
==
*
/
!=
>
<
>=
<=
!
%
```

Things like `\`, `*`, `=` etc are done automatically. Things like `&` etc can't be overloaded. You can also overload an operator multiple times with different combinations of tag. For example:

```c
stock Float:operator=(Mytag:oper)
{
    return float(_:oper);
}
```

If you add that to your code and do:

```c
new
    Float:myFloat,
    Mytag:myTag;

myFloat = myTag;
```

You will no longer get a compiler warning as you would have before because the `=` operator for the case `Float: = Mytag:` is now handled so the compiler knows exactly what to do.

### Overwriting

In the overloading example above the functional line was:

```c
return float(_:oper);
```

This is an example of tag overwriting, the `_:` in front of oper means the compiler basically ignores the fact that oper has a tag type of Mytag: and treats it as tag type `_:` (i.e. no tag type). The function `float()` tags a normal number so must be passed one. In that example it is assumed that `Mytag` stores an ordinary integer but overwriting must be dealt with very carefully, for example the following will give very odd results:

```c
new
    Float:f1,
    Float:f2 = 4.0;
f1 = float(_:f2);
```

Sense would dictate that `f1` would end up as `4.0`, however it won't. As mentioned f2 stores a representation of `4.0`, not just `4` as an integer would, this means the actual value of the variable as an integer is a very odd number. Thus if you tell the compiler to treat the variable as an integer it will simply take the bit pattern in the variable as the value, it won't convert the float to an integer, so you will get an almost random number (it's not actually random as there's a pattern to IEEE floating points but it will be nothing like `4.0`).
