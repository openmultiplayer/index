---
title: "Keywords: Statements"
---

## `assert`

Aborts execution with a runtime error if the expression evaluates to logically false. Seems to work only in the main() block. The assert statement should be used to indicate a logical(programmer's) error, never a run-time(user's) error.

```c
main()
{
    assert (MAX_PLAYERS == GetMaxPlayers()); // ascertain that the definition of MAX_PLAYERS is equal to the actual number of server slots in use
}
```

## `break`

Breaks out of a loop instantly, only leaves the top level loop, not all current loops.

```c
for (new i = 0; i < 10; i++)
{
    printf("%d", i);
    if (i == 5)
    {
        break;
    }
}
```

Will produce:

```c
0
1
2
3
4
5
```

While:

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;
    }
    printf("%d", i);
}
```

Will produce:

```c
0
1
2
3
4
```

As the loop is instantly exited neither loop gets to 10 and the second one ends before the number 5 is printed.

## `case`

Handles a specific result in a switch statement. The result can be either a single number, a selection of numbers or a range of numbers:

```c
new
    switchVar = 10;
switch (switchVar)
{
    case 1:
    {
        printf("switchVar is 1");
    }
    case 4:
    {
        printf("switchVar is 4");
    }
    case 2, 3, 5:
    {
        printf("switchVar is either 2, 3 or 5");
    }
    case 7 .. 11:
    {
        printf("switchVar is somewhere between 7 and 11 inclusive (7, 8, 9, 10 or 11)");
    }
    default:
    {
        printf("switchVar is not 1, 2, 3, 4, 5, 7, 8, 9, 10 or 11");
    }
}
```

## `continue`

Similar to break but just goes on to the next loop itteration. It is important to note that the point to which it jumps varies depending on which loop type you use.

```c
for (new i = 0; i < 10; i++)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
}
```

Will produce:

```c
0
1
2
3
4
6
7
8
9
```

A continue after the print will basically do nothing. In a for loop continue jumps to the third statement in the for statement (in this example the "i++;" bit), this is different to how it behaves in a while loop:

```c
new
    i = 0;
while (i < 10)
{
    if (i == 5)
    {
        continue;
    }
    printf("%d", i);
    i++;
}
```

This will produce an infinate loop as continue will jump to AFTER the "i++;" and go back to the "while (i < 10)" part. At this time, "i" will still be 5 as "i++;" was never called, and so continue will be called again and "i" will be stuck at 5 forever.

## `default`

default handles switch statement results which aren't handled explicitly by case statements. See the case example for an example.

## `do`

do is a type of loop which can be used with while to produce a loop which will always be run at least once. Note the semi-colon after the while () in the following example:

```c
new
    i = 10;
do
{
    printf("%d", i);
    i++;
}
while (i < 10);
```

"i" is clearly not less that 10 but this loop will produce:

```c
10
```

anyway. The similar while loop:

```c
new
    i = 10;
while (i < 10)
{
    printf("%d", i);
    i++;
}
```

} Will not give any output as the condition instantly fails.

These are also useful for avoiding double checks:

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    while (checkVar == 10)
    {
        checkVar = someFunction(i);
        i++;
    }
}
```

This isn't obviously a major issue but you are checking checkVar twice in quick succession at the start of the loop, which is quite pointless, however the if is required as you need to do code if the condition is true but outside the loop (this is a fairly common situation). This can be improved by doing:

```c
new
    checkVar = 10;
if (checkVar == 10)
{
    new
        i = 0;
    do
    {
        checkVar = someFunction(i);
        i++;
    }
    while (checkVar == 10);
}
```

In this instance the result will be exactly the same but crucially with one less pointless check.

## `else`

else is called when an if statement fails (assuming it is present):

```c
new
    checkVar = 5;
if (checkVar == 10)
{
    printf("This will never be called");
}
else
{
    printf("The if statement failed so this will be displayed");
}
```

else can also be combined with if:

```c
new
    checkVar = 2;
if (checkVar == 1)
{
    printf("This will not be called"):
}
else if (checkVar == 2)
{
    printf("The first if failed so the second was checked and is true");
}
else
{
    printf("This will not be called as one of the ifs was true");
}
```

## `exit`

This exits the current program instantly.

```c
main()
{
    exit;
    return 0;
}
```

## `for`

A for loop is a type of loop involving three stages, initialisation, comparison and update. These are each separated by a semicolon (Wink and can each be excluded by just setting a blank space. The most basic for loop is:

```c
for ( ; ; ) {}
```

This has no initialisation, no comparison and no update and as a result will go forever (the comparison, being absent, defaults to true).

One of the more common loops is:

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
```

The initialisation in this loop is:

```c
new i = 0;
```

The semicolon marks the end of the initialisation. This declares a new variable, called i, which can only be used with this loop. Next comparison is done. This compares i to MAX_PLAYERS (default 500 - see #define) and if it is less continues. Then the contents of the loop is run. Initially this will print "0". Finally the update is done "i++", this increases the value of i. Now a complete itteration is done, the loop loops, as its name implies, and goes back to the comparison stage (initialisation is only done once per call).

The result of this loop is all the numbers from 0 to 499 inclusive being printed out. The equivalent while loop (ignoring the effects of continue) would be:

```c
new
    i = 0;
while (i < MAX_PLAYERS)
{
    printf("%d", i);
    i++;
}
```

The three stages can be made a lot more complex if required using commas for the first and last sections and standard comparisons for the middle section:

```c
for (new i = 0, j = 200; i < MAX_PLAYERS && j > 10; i++, j -= 2)
{
    printf("%d %d", i, j);
}
```

This will create two new variables and set them to 0 and 200, then loop while one is less than 200 and the other is greater than 10, increasing one each time and decreasing the other by two each time.

As stated before the scope of variables is limited to the loop usually:

```c
for (new i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

That will produce an error as "i" doesn't exist after the loop ends. However:

```c
new
    i = 0;
for ( ; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

Is fine as "i" is not declared in the loop. You could also initialise "i" in the loop but not declare it there:

```c
new
    i;
for (i = 0; i < MAX_PLAYERS; i++)
{
    printf("%d", i);
}
printf("%d", i);
```

## `goto`

goto and labels are generally discouraged in the coding community as what they do can usually be done better by restructuring your code properly. However basically a goto is a jump:

```c
goto my_label;
printf("This will never be printed");
my_label:
printf("This will be printed");
```

The compiler however doesn't handle goto very well so that will not be optimised at all and things like:

```c
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    else
    {
        my_label:
        return 0;
    }
}
```

Will give a warning about inconsistent return types as it things the true branch doesn't return anything when it actually does, just in a very roundabout way. Also:

```c
MyFunction()
{
    new
        i = 5;
    if (i == 5)
    {
        goto my_label;
    }
    return 0;
    my_label:
    return 1;
}
```

Will give an unreachable code warning despite the fact it actually is reachable.

The basic syntax is:

```c
label:

goto label;
```

The label should be on a line on it's own and ends in a colon, NOT a semicolon. Labels follow the same naming restrictions as variables and functions etc.

## `if`

If is one of the most important operators. It determines wether something should be done or not and acts accordingly, it, along with goto, is the basis of almost all other control structures:

```c
for (new i = 0; i < 10; i++)
{
}
```

Is equivalent to:

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

The conditions if can take are way too many for this post however some are listed below:

Operator Explanation Example Result when a=1, b=0 Result when a=1, b=1 Result when a=0, b=1 Result when a=0, b=0 == Checks if one thing is equal to another if (a == b) false true false true != Checks if one thing is not the same as another if (a != b) true false true false < Checks if one thing is less than another if (a < b) false false true false > Checks if one thing is greater than another if (a > b) true false false false <= Checks if one thing is less than or equal to another if (a <= b) false true true true >= Checks if one thing is greater than or equal to another if (a >= b) true true false true && Checks if two things are true (not 0) if (a && b) false true false false || Checks if at least one of two things are true (not 0) if (a || b) true true true false ! Checks if something is false if (!(a == b)) true false true false

Obviously with these you can build up complex conditionals:

```c
if (a == b && (c != d || f < g))
```

That will be true if a is the same as b and either f is less than g or c is not the same as d (or both).

## `return`

This breaks out a function and can return data to the calling function:

```c
MyFunction()
{
    new
        someVar = OtherFunction();
}

OtherFunction()
{
    return 5;
}
```

someVar will now be 5.

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Returned 1");
    }
}

SomeFunction()
{
    return random(2);
}
```

That will either return 1 or 0 to the calling function's if statement. 1 is true and 0 if false so the text will only be printed if 1 is returned. However:

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Returned something between 1 and 10");
    }
}

SomeFunction()
{
    return random(11);
}
```

That will return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 or 10. Anything which is not 0 is true so the text will display if anything between 1 and 10 is returned.

You can also use return with strings:

```c
MyFunction()
{
    printf("%s", SomeFunction());
}

SomeFunction()
{
    new
        str[10] = "Hello";
    return str;
}
```

Will print "Hello" (without the quotes).

You also don't have to return anything:

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    return;
}
```

However if you do this you must make sure the function's return is never used:

```c
MyFunction()
{
    if (SomeFunction())
    {
        printf("Problem");
    }
}

SomeFunction()
{
    return;
}
```

Here SomeFunction is not returning anything however MyFunction is checking if the value returned from SomeFunction is true or not - it's neither as it just doesn't exist, so you will get a compiler error. No return is the default, so:

```c
SomeFunction()
{
    return;
}
```

And:

```c
SomeFunction()
{
}
```

Are the same.

Finally, you can't mix return values:

```c
MyFunction()
{
    SomeFunction();
}

SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
    else
    {
        return;
    }
}
```

This will give an error because it doesn't know what to do.

```c
SomeFunction()
{
    if (random(2))
    {
        return 1;
    }
}
```

Is also not allowed as the default return is nothing.

## `sleep`

sleep is a psudo-function which makes execution pause for a given number of milliseconds:

```c
printf("Time 0s");
sleep(1000);
printf("Time 1s");
```

This only works in main(), not callbacks however as it's run in the PAWN thread.

## `state`

state is part of the PAWN state machine and autonoma system, see this thread https://forum.sa-mp.com/showthread.php?t=86850 for more information.

## `switch`

switch is basically a structured if/else if/else system:

```c
switch (someVar)
{
    case 1:
    {
        printf("one");
    }
    case 2:
    {
        printf("two");
    }
    case 3:
    {
        printf("three");
    }
    default:
    {
        printf("other");
    }
}
```

Is just a slightly more efficient (and much cleaner) way of doing:

```c
if (someVar == 1)
{
    printf("one");
}
else if (someVar == 2)
{
    printf("two");
}
else if (someVar == 3)
{
    printf("three");
}
else
{
    printf("other");
}
```

## `while`

while is a loop type similar to for and do..while. The basic operation is an if statement done which if true does some code and jumps back to the if. If it's false it goes to after the loop code - there is no else. Going back to the goto example:

```c
new
    i = 0;
for_loop:
if (i < 10)
{
    i++;
    goto for_loop;
}
```

This can also be written as:

```c
new
    i = 0;
while (i < 10)
{
    i++;
}
```

See do and for more information.
