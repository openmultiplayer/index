---
title: Scripting Basics
description: A short tutorial guiding you through the basics of the Pawn language and SA-MP/open.mp APIs.
sidebar_label: Scripting Basics
---

Below is an example of possibly the most basic script you can write:

```c
#include <a_samp>

main()
{
    print("Hello World!");
    return 1;
}
```

The various aspects will be covered in turn but we'll start by looking at the first line.

## Include

```c
#include <a_samp>
```

This basically loads the code from pawno/includes/a_samp.inc into your script, so everything it has you can use. One of the things it has is:

```c
#include <core>
#include <float>
#include <string>
#include <file>
#include <time>
#include <datagram>
#include <a_players>
#include <a_vehicles>
#include <a_objects>
#include <a_sampdb>
```

This includes all the other files in that directory so by adding that one line you have access to all the functions in SA:MP (more on functions later).

## Calls

The next part has two sides of a function call. main() is a function which you write the code for and is called from elsewhere, print(string\[\]) is a function with the code elsewhere which you call. Currently all this will do is load, print a string (i.e. print "Hello World!" (without the ""s) (a tradition in all scripting languages)) to the server console and end. The:

```c
return 1;
```

Passes a value (1) back to the place which called main to tell it what happened (the exact value passed here doesn't matter but in other places it does). You now have your first (very basic) script. If you select file->new in pawno it will give you a much bigger start point will all the callbacks in (see below), including main (which isn't technically a callback but acts like one).

## Statements

The print and return lines have ';' (a semi colon) on them, this just denotes the end of a statement (a statement is a group of one or more functions and operators which together do something, similar to a sentence in common language). Most people put separate statements on separate lines but this is not required, it just makes things clearer, the following is equally valid:

```c
main() { print("Hello World!"); return 1; }
```

The {}s (braces (curly brackets), not parenthesis (brackets)) enclose a group of statements which should be executed together (like a paragraph in common language). If you did:

```c
main() print("Hello World!"); return 1;
```

You would get an error because now the "return 1;" statement is not grouped so is not part of main. Braces group a set of statements into a single statement (called a compound statement) and functions have a single statement with them. Without the braces print and return are entirely separate statements, so there's two or them so, as a function can only have a single statement, the second is not in a function, which code can't be.

But generally, you can expand compound statements with the use of the comma (,) operator but this is not suggested as it is not the best coding practice. An example follows:

```c
main() print("Hello World!"), return 1;
```

# Functions

A function is basically a chunk of code which does something and can be told to do this thing from somewhere else. It can also pass data about what it did back to the place which told it to run (the place which "called" it).

## Calling

```c
print("Hello World!");
```

As described in [Starting out](/wiki/Scripting_Basics#Starting_out "Scripting Basics"), this calls the function called "print" (defined in a_samp.inc, which is why you need to include it) and tells it to display something in the server console (the word hello).

A function consists of the function name (e.g. print), which tells the system which chunk of code you want to call, and a parameter list, enclosed in ()s after the function name, which pass additional data to the function to help it run. If you didn't have parameters you would need millions of functions:

```c
printa();
printaa();
printab();
printac();
etc...
```

Functions can have as many parameters as you like, from 0 up (there may be an upper limit but it's at least 128):

```c
printf("Hello World!", 1, 2, 3, 4, 5, 6);
```

Don't worry about what that function does for now, just that it has 7 parameters, each separated by a comma.

## Defining

As well as being able to call existing functions you can also write and call your own:

```c
#include <a_samp>

main()
{
    return MyFunction();
}

MyFunction()
{
    print("Hello World!");
    return 1;
}
```

This just does exactly the same as the original code but is arranged differently. When main() is called when the mode is started (it's called automatically) it calls the new custom function called MyFunction(). This function prints the message in the server console then returns the number 1 to main(). main() takes the returned value (1) and then returns it to the server itself (i.e. the place which called main in the first place). As "return MyFunction();" is a single statement you could do:

```c
#include <a_samp>

main() return MyFunction();

MyFunction()
{
    print("Hello World!");
    return 1;
}
```

But most people don't for clarity. You can also not use the MyFunction return value at all and do:

```c
#include <a_samp>

main()
{
    MyFunction();
    return 1;
}

MyFunction()
{
    print("Hello World!");
    return 1;
}
```

## Parameters

Parameters are a type of [variable](/wiki/Scripting_Basics#Variables "Scripting Basics") which you don't need to declare as they come from the place which called the function:

```c
#include <a_samp>

main()
{
    return MyFunction("Hello World!");
}

MyFunction(string[])
{
    print(string);
    return 1;
}
```

This code still does the same thing but we're now telling MyFunction() what to display. The call passes the string "Hello World!" to the function where it is stored in a variable called string (the \[\] means it's an [array](/wiki/Scripting_Basics#Arrays "Scripting Basics") as explained later). The print function is the called, passing the contents of the string variable, we know it's a variable because it doesn't have the "" any more.

# Variables

A variable is basically a bit of memory, it's where data is stored and can be changed and read as required. Variables are one or more cells, a cell is 32 bits (4 bytes) big and by default signed so they can store from -2147483648 to 2147483647 (although -2147483648 is poorly defined in PAWN and gives odd results if displayed). A variable made from more than one cell is called an array, strings are a special type of array where each cell holds a character of the string (or 4 characters in packed strings, but they're not covered here).

## Declaration

To create a new variable you have to declare it:

```c
new
    myVariable;
```

This tells the system to create a new variable called myVariable, the initial value of this variable will be 0.

## Setting

```c
new
    myVariable = 7;
```

This declares a new variable and sets it's initial value to 7, so printing the variable now will give 7. To display a variable which isn't a string we need to go back to the printf() function mentioned earlier and do:

```c
new
    myVariable = 7;
printf("%d", myVariable);
```

Again, for now all you need to know is that this will print the value of myVariable (i.e. 7 at this point) to the server.

```c
new
    myVariable = 7;
printf("%d", myVariable);
myVariable = 8;
printf("%d", myVariable);
```

That code will print 7, change the value of the variable to 8 and display the new value in the server window too. There are many other things you can do to variables, some are listed below, most are listed elsewhere:

```c
myVariable = myVariable + 4;
```

Sets the value of myVariable to the old value of myVariable plus 4, i.e. increase it's value by 4. This can also be written as:

```c
myVariable += 4;
```

Which just means "increase myVariable by 4".

```c
myVariable -= 4;
```

That will decrease the value by 4.

```c
myVariable *= 4;
```

That will multiply the value by 4.

```c
myVariable /= 4;
```

That will divide the value by 4.

## Arrays

### Declaration

An array is a variable in which you can store multiple pieces of data at once and access them dynamically. An array is declared to a set size at compile time so you need to know how many pieces of data you need to store in advance, a good example of this is the very common MAX_PLAYERS array, this will have one slot for every possibly connected player, so you know data for one player will not interfere with data for another player (more on defines later).

```c
new
    myArray[5];
```

That code will declare an array 5 slots big, so you can store 5 pieces of normal data at once in that single what you can't do is something like the following:

```c
new
    myVariable = 5,
    myArray[myVariable];
```

That code looks like it would create an array the size of whatever number is stored in myVariable (here 5 but it could be anything), but you can't do this. In PAWN the memory for variables is assigned when you compile your code, this means arrays are always one size, you can't set the size to anything you like whenever you like.

### Accessing

To set a value in an array you need to say which part of the array you want to store the data in, this CAN be done with another variable:

```c
new
    myArray[5];
myArray[2] = 7;
```

This will declare an array with 5 slots and give the THIRD slot a value of 7, given that variables always start as 0 this will make the values in the array:

```
0, 0, 7, 0, 0
```

Why is it not:

```
0, 7, 0, 0, 0
```

you're wondering? It's because counting actually starts from the number 0, not 1. Consider the following:

```
2, 4, 6, 8
```

If you go through the list then after the number 2 you have already had one number (the 2), this means that if you are counting the numbers by the time you reach the number 4 you are already at one, you're not at one when you reach the 2, you're at zero. Thus the 2 is at position zero and the 4 is at position one, and thus it follows that the 6 is at position two, which is where the 7 in the first example above is. If we label the slots for the first example we get:

```
0 1 2 3 4
0 0 7 0 0
```

There are five slots but as you can see, and this is very important, THERE IS NO SLOT FIVE, doing the following could crash your server:

```c
new
    myArray[5];
myArray[5] = 7;
```

As mentioned above the array index (the index is the slot to which you're writing) can be anything, a number, a variable, or even a function which returns a value.

```c
new
    myArray[5],
    myIndex = 2;
myArray[myIndex] = 7;
```

Once you have an array and an index you can use that block exactly as if it were any other variable:

```c
myArray[2] = myArray[2] + 1;
myArray[2] += 1;
myArray[2]++;
```

### Example

As mentioned above a common type of array is the MAX_PLAYERS array. MAX_PLAYERS is not a variable, it's a define which is explained later, but for now accept that it is a constant number equal to the max number of players a server can hold (this by default is 500, even if you change the number in your server.cfg file). The following code uses normal variables to hold data for 4 players and do something with those players in a function (for simplicity's sake assume MAX_PLAYERS is 4 for now):

```c
new
    gPlayer0,
    gPlayer1,
    gPlayer2,
    gPlayer3;

SetPlayerValue(playerid, value)
{
    switch(playerid)
    {
        case 0: gPlayer0 = value; // is the same as doing if (playerid == 0)
        case 1: gPlayer1 = value; // is the same as doing if (playerid == 1)
        case 2: gPlayer2 = value; // is the same as doing if (playerid == 2)
        case 3: gPlayer3 = value; // is the same as doing if (playerid == 3)
    }
}
```

See the section on control structures for more information on what's going on there, also note this could be done as a switch but that's less clear for the example and effectively the same code anyway.

Now compare that to using an array with one slot per player, bearing in mind an array index can be any value:

```c
new
    gPlayers[MAX_PLAYERS];

SetPlayerValue(playerid, value)
{
    gPlayers[playerid] = value;
}
```

That will create a global array (see section on scope) with one slot for every player, then the function will assign whatever is in the variable "value" to the slot for the player specified. The first example was large with only four players, using 4 lines per player, that's 2000 lines for 500 players (if can be less but it's still a lot), the second version is a single line no matter how many players you have.

## Strings

### Basic use

A string is a special type of array, one which is used to hold multiple characters to create a word or sentence or other human readable text. A character is one byte big (although there are extended sets where a character is multiple bytes but these are not well defined in SA:MP) and by default a character takes up one cell (one normal variable or one array slot). Characters are encoded in a system called [ASCII](http://www.asciitable.com/ "http://www.asciitable.com/"), the character "A" is represented by the number 65, telling the system to display a number will give 65, telling the system to display a character will give a capital a. Obviously is a single character takes up a single cell multiple characters (i.e. text) will take up multiple cells, collections of cells, as just explained, are called arrays.

Strings in PAWN (and other languages) are what's called "NULL terminated", this means that when 0 is reached, the string ends. This is not the same as the character "0", represented by the number 48, this is the NULL character, represented by the number 0. This means that you can have a string array 20 cells large but only have a string 3 characters long if the fourth character is the NULL character, signalling the end of the string. You can not however have a string 20 characters long as the NULL character MUST be in the string, so in a 20 cell array you can have a 19 character string and a NULL termination character.

```c
new
    myString[16] = "Hello World!";
```

That code declares a new string with enough space for a 15 character string and sets it initially to the 5 character string "Hello World!", the double quotes around the text indicate that it's a string. Internally the array will look like:

```
104 101 108 108 111 0 x x x x x x x x x x
```

The "x"s mean anything, in this example they will all be 0 but as they're after the null character is doesn't matter what they are, they won't affect the string.

Strings can be manipulated like normal arrays, for example:

```c
new
    myString[16] = "Hello World!";
myString[1] = 97;
```

Will change the character in slot 1 to the character represented by the number 97 (a lower case "a"), resulting in the string reading "hallo". This can be written much more readably and easy to edit as:

```c
new
    myString[16] = "Hello World!";
myString[1] = 'a';
```

The single quotes around the "a" mean it's a character, not a string, characters don't need to be NULL terminated as they're only ever one cell long, they can also be used interchangeably with numbers if you know what they represent.

```c
new
    myString[16] = "Hello World!";
myString[1] = '\0';
```

'\\0' is two characters, however the \\ is a special character which modifies the next character, \\0 means NULL, that code is the same as doing:

```c
new
    myString[16] = "Hello World!";
myString[1] = 0;
```

But is NOT the same as doing:

```c
new
    myString[16] = "Hello World!";
myString[1] = '0';
```

The first and second versions will result in the string being simply:

```
h
```

The third version will result in the string being:

```
h0llo
```

### Escape character

As briefly mentioned a backslash is a special character, doing:

```
'\'
```

or:

```
"\"
```

Will give a compiler error because the \ modifies the next character so those constants will not be ended correctly, this can be used to create characters which can't normally be created, for example:

```c
new
    myString[4] = "\"";
```

That code will create a string consisting of only a double quote, normally a double quote signals the end of a written string but the backslash makes the double quote immediately after it a part of the string, and the double quote after that ends the string instead. Other special characters are:

| Code   | Name            | Purpose                                                                                                 |
| ------ | --------------- | ------------------------------------------------------------------------------------------------------- |
| \0     | NULL character  | Ends a string.                                                                                          |
| EOS    | NULL character  | (same as above)                                                                                         |
| \n     | Line feed       | use \n for a new line in Linux (also works in Windows)                                                  |
| \r     | Carriage return | Use \r\n for a new line in Windows                                                                      |
| \\\\   | Backslash       | Used to put an actual backslash in a string                                                             |
| \'     | Single quote    | Used to use an actual single quote as a character in single quotes (use: '\'')                          |
| \"     | Double quotes   | Used to put an actual double quote in a string                                                          |
| \xNNN; | Hex number      | Used to set the character to the character represented by the hex number specified in place on NNN      |
| \NNN;  | Number          | Used to set the character to the character represented by the number specified in place of NNN (see \0) |

Used to set the character to the character represented by the number specified in place of NNN (see \\0)

There are others but those are the main ones.

## Tags

A tag is an additional piece of information on a variable which defines where it can be used, providing information about its functionality. Tags can be strong (starting with a capitalized letter) or weak. For example:

```c
new
    Float:a = 6.0;
```

The "Float" part is the tag, this defines this variable as a float (non-whole/real number) and determines where it can be used.

```c
native SetGravity(Float:gravity);
```

This means the SetGravity function takes a single parameter which has to be a float, for example:

```c
SetGravity(6.0);
new
   Float:fGrav = 5.0;
SetGravity(fGrav);
```

That will set the gravity to 6 (6.0 as a float) then 5 (5.0 as a float). Using the wrong tag in the wrong place will often give a tag mismatch:

```c
SetGravity(MyTag:7);
```

That will try set the gravity to 7 with the tag "MyTag", that is clearly not a "Float" so is wrong. Also note that tags are case sensitive.

Custom tags can be defined by users:

```c
new myTag: variable = 0,

    AppleTag: another = 1;
```

This is perfectly valid, however, when adding these two variables _directly_, you must use '\_:' to 'de-tag' them, otherwise the compiler will produce a 'tag mismatch' warning.

## Scope

Scope is where a variable can be used. There are four main scopes: local, local static, global and global static. All variables can only be used after they are declared so this is right:

```c
new
    var = 4;
printf("%d", var);
```

This is wrong:

```c
printf("%d", var);
new
    var = 4;
```

### local

A local variable is one declared "new" inside a function or part of a function:

```c
MyFunc()
{
    new
        var1 = 4;
    printf("%d", var1);
    {
        // var1 still exists as this is a lower level
        new
            var2 = 8;
        printf("%d %d", var1, var2);
    }
    // var2 no longer exists as this is a higher level
}
// var1 no longer exists
```

Local variables are reset every time, for example:

```c
for (new i = 0; i < 3; i++)
{
    new
        j = 1;
    printf("%d", j);
    j++;
}
```

Will print:

```
1
1
1
```

Because j is created, printed, incremented then destroyed, then the code loops.

### static local

A static local can be used in the same place as a local but doesn't forget it's old value, for example:

```c
MyFunc()
{
    static
        var1 = 4;
    printf("%d", var1);
    {
        // var1 still exists as this is a lower level
        static
            var2 = 8;
        printf("%d %d", var1, var2);
    }
    // var2 no longer exists as this is a higher level
}
// var1 no longer exists
```

That code will behave exactly the same as the new example, however this:

```c
for (new i = 0; i < 3; i++)
{
    static
        j = 1;
    printf("%d", j);
    j++;
}
```

Will print:

```
1
2
3
```

Because `j` is static so remembers its old value.

### global

Global variables are declared outside a function and can be used in any functions:

```c
new
    gMyVar = 4;

MyFunc()
{
    printf("%d", gMyVar);
}
```

They are never reset or lost.

### global static

Global static variables are like normal globals but can only be used in the file in which they are declared:

File1:

```c
static
    gsMyVar = 4;

MyFunc()
{
    printf("%d", gsMyVar);
}

#include "File2"
```

File2:

```c
MyFunc2()
{
    // This is wrong as gsMyVar doesn't exist here
    printf("%d", gsMyVar);
}
```

static can also be applied to functions in the same way.
