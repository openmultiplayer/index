---
title: "Control Structures"
description: An overview of control structures in the Pawn language
---

## Conditionals

### if

An if statement checks if something is true and does something if it is.

```c
new
    a = 5;
if (a == 5)
{
    print("a is 5");
}
```

The code within the brackets after the "if" is called the condition, there are a number of different things you can test for (see operators).

In the example above both "a" and 5 are symbols, functions can also be symbols:

```c
if (SomeFunction() == 5)
{
    print("SomeFunction() is 5");
}
```

That will test the return value of SomeFunction (see below) against 5.

You can also combine checks to check multiple things:

```c
new
    a = 5,
    b = 3;
if (a == 5 && b != 3)
{
    print("Won't be printed");
}
```

That example checks that a is equal to 5 AND b is not equal to 3, however b is 3 so the check fails.

```c
new
    a = 5,
    b = 3;
if (a == 5 || b != 3)
{
    print("Will be printed");
}
```

That examples checks that a is equal to 5 OR b is not equal to 3, b equals 3 so that part fails\* however a is 5 so that part is true, we are using || (or) so only one part needs to be true (if both are true the statement is still true, this is slightly different to the linguistic meaning of "or" meaning only one or the other), so the if statement is true.

Also it is possible to chain the comparisons together without the explicit AND-ing of two different comparisons.

```c
new
    idx = 3;

if (0 < idx < 5)
{
    print("idx is greater than 0 and less than 5!");
}
```

### Operators

The following are symbols you can use in comparisons and their explanations. Some have been used in examples already.

| Operator     | Meaning                                                           | Usage                                                        |
| ------------ | ----------------------------------------------------------------- | ------------------------------------------------------------ |
| ==           | Left is equal to Right                                            | if (Left == Right)                                           |
| !=           | Left is not equal to Right                                        | if (Left != Right)                                           |
| >            | Left is greater than Right                                        | if (Left > Right)                                            |
| >=           | Left is greater than or equal to Right                            | if (Left >= Right)                                           |
| <            | Left is less than Right                                           | if (Left < Right)                                            |
| <=           | Left is less than or equal to Right                               | if (Left <= Right)                                           |
| &&           | and                                                               | if (Left && Right)                                           |
| &#124;&#124; | or                                                                | if (Left &#124;&#124; Right)                                 |
| !            | not                                                               | if (!Variable)                                               |
|              | nor                                                               | if (!(Left &#124;&#124; Right))                              |
|              | nand                                                              | if (!(Left && Right))                                        |
|              | exclusive or (xor, eor) - only one or the other is true, not both | if (!(Left && Right) && (Left &#124;&#124;Right))            |
|              | not exclusive or (nxor, neor) - both or neither are true          | if ((Left && Right) &#124;&#124; !(Left &#124;&#124; Right)) |

### Brackets

The other main aspect of if statements is brackets, these control the order things are done in:

```c
new
    a = 3,
    b = 3,
    c = 1;
if (a == 5 && b == 3 || c == 1)
{
    print("Will this be called?");
}
```

There are two ways of looking at the above statement:

```c
if ((a == 5 && b == 3) || c == 1)
```

And:

```c
if (a == 5 && (b == 3 || c == 1))
```

The first version will check if a is 5 and b is 3, if that is false (i.e. one or both of them are not their respective values) it will check if c is 1. (a == 5 && b == 3) is false as you should know from above, so you replace that group with FALSE:

```c
if (FALSE || c == 1)
```

We know FALSE cannot be true (as it is not true by definition), however c is 1 so that half is true and, as we're using an OR in between the whole statement is true.

The second version checks if a is 5, if it is it checks if either b is 3 or c is 1. The game will do the a == 5 part first but for clarity we'll do it backwards. (b == 3 || c == 1) is true, both halves are true, although only one needs to be, so going into our if statement we have:

```c
if (a == 5 && TRUE)
```

(a == 5) is false, because a is 3, so we have:

```c
if (FALSE && TRUE)
```

Obviously FALSE is false so that statement cannot be true, so the check will fail.

This little example shows how using brackets can change the outcome of a check, without brackets the compiler will be the first of the two versions demonstrated but that cannot always be guaranteed so you should always use brackets, even if just to clarify what is going on to other people.

- (b != 3) in the OR example doesn't actually fail as it's never called, the compiler orders the code using a thing called short-circuiting, as the first part is already true there's no point checking the second part as it won't affect the final outcome, but if it did check it it would fail.

### else

else basically does something if an if check fails:

```c
new
    a = 5;
if (a == 3) // False
{
    print("Won't be called");
}
else
{
    print("Will be called as the check failed");
}
```

### else if

An else if is a check which occurs if the first if check fails to check something else:

```c
new
    a = 5;
if (a == 1)
{
    print("Will be called if a is 1");
}
else if (a == 5)
{
    print("Will be called if a is 5");
}
else
{
    print("All other numbers");
}
```

You can have an many of these as you like (you can only have one if and one else in a group of checks):

```c
new
    a = 4;
if (a == 1)
{
    // False
}
else if (a == 2)
{
    // False
}
else if (a == 3)
{
    // False
}
else if (a == 4)
{
    // True
}
else
{
    // False
}
```

else ifs will only check the value as it was when the ifs start, so you can't do:

```c
new
    a = 5;
if (a == 5)
{
    // Will be called
    a = 4;
}
else if (a == 4)
{
    // Won't be called because the first check didn't fail, even though a is now 4
}
```

To get round this you would simply make the else if an if.

### ?:

'?' and ':' together are called a triadic operator, they basically act as an if statement inside another statement:

```c
new
    a,
    b = 3;
if (b == 3)
{
    a = 5;
}
else
{
    a = 7;
}
```

That's a simple example to assign a variable based on another variable, however it can be made much shorter:

```c
new
    a,
    b = 3;
a = (b == 3) ? (5) : (7);
```

The part before the '?' is the conditional, this is exactly the same as a normal conditional. The part between the '?' and the ':' is the value to return if the condition is true, the other part is the value to return if the condition is false. You can stack them up the same as else ifs too:

```c
new
    a,
    b = 3;
if (b == 1)
{
    a = 2;
}
else if (b == 2)
{
    a = 3;
}
else if (b == 3)
{
    a = 4;
}
else
{
    a = 5;
}
```

Can be written as:

```c
new
    a,
    b = 3;
a = (b == 1) ? (2) : ((b == 2) ? (3) : ((b == 3) ? (4) : (5)));
```

This is actually more similar to doing:

```c
new
    a,
    b = 3;
if (b == 1)
{
    a = 2;
}
else
{
    if (b == 2)
    {
        a = 3;
    }
    else
    {
        if (b == 3)
        {
            a = 4;
        }
        else
        {
            a = 5;
        }
    }
}
```

But they're equivalent (in this example anyway).

## Loops

### While

"while" loops do something while the condition specified is true. A condition is exactly the same format as the condition in an if statement, it is just checked repeatedly and the code done if it is true every time it is checked:

```c
new
    a = 9;
while (a < 10)
{
    // Code in the loop
    a++;
}
// Code after the loop
```

That code will check if 'a' is less than 10. If it is, the code inside the braces (a++;) will be executed, thus incrementing 'a'. When the closing brace is reached, code execution jumps back to the check and does it again, this time the check will fail as 'a' is 10 and execution will jump to after the loop. If 'a' started out as 8, the code would be run twice etc.

### for()

A "for" loop is essentially a compressed "while" loop. A "for" statement has three sections; initialization, condition and finalization. As a "for" loop, the "while" example above would be written:

```c
for (new a = 9; a < 10; a++)
{
    // Code in the loop
}
// Code after the loop
```

That's a simple code to loop through all players:

```c
for(new i,a = GetMaxPlayers(); i < a; i++)
{
        if (IsPlayerConnected(i))
        {
                 //do something
        }
}
```

Any of the conditions can be omitted simply by putting no code in them:

```c
new
    a = 9;
for ( ; a < 10; )
{
    // Code in the loop
    a++;
}
// Code after the loop
```

This example makes it a little easier to show how a "for" loop matches up to a "while" loop. There are two very slight differences between the two "for" loops given. The first is that the second example declares 'a' outside the "for" loop, this means it can be used outside the "for" loop, in the first example 'a's scope (the section of code for which a variable exists) is only inside the loop. The second difference is that the a++ in the second example is actually done slightly before the a++ in the first example, 99% of the time this doesn't make any difference, the only time it matters is when you're using 'continue' (see below), 'continue' will call the a++ in the first example, but will skip it in the second example.

### do-while

A do-while loop is a while loop where the condition comes after the code inside the loop instead of before. This means that the code inside will always be executed at least once because it is done before the check is done:

```c
new
    a = 10;
do
{
    // Code inside the loop
    a++;
}
while (a < 10); // Note the semi-colon
// Code after the loop
```

If that was a standard while loop a would not be incremented as the (a < 10) check is false, but here it's incremented before the check. If a started as 9 the loop would also only be done once, 8 - twice etc.

### if-goto

This is essentially what the loops above compile to, the use of goto is generally discouraged however it's interesting to see exactly what a loop is doing:

```c
new
    a = 9;

loop_start:
if (a < 10)
{
    // Code in the loop
    a++;
    goto loop_start;
}
// Code after the loop
```

### OBOE

OBOE stands for Off By One Error. This is a very common mistake where a loop runs for one too many or two few times. E.g:

```c
new
    a = 0,
    b[10];
while (a <= sizeof (b))
{
    b[a] = 0;
}
```

This very simple example demonstrates one of the most common OBOEs, at first glance people may think this will loop through all the contents of b and set them to 0, however this loop will actually run 11 times and try access b[10], which doesn't exist (it would be the 11th slot in b starting from 0), thus can cause all sorts of problems. This is known as an Out Of Bounds (OOB) error.

You have to be especially careful of OBOEs when using do-while loops as they ALWAYS run at least once.

## Switch

### switch

A switch statement is basically a structured if/else if/else system (similar to how for is a structured while). The easiest way to explain it is with an example:

```c
new
    a = 5;
switch (a)
{
    case 1:
    {
        // Won't be called
    }
    case 2:
    {
        // Won't be called
    }
    case 5:
    {
        // Will be called
    }
    default:
    {
        // Won't be called
    }
}
```

This is functionally equivalent to:

```c
new
    a = 5;
if (a == 1)
{
    // Won't be called
}
else if (a == 2)
{
    // Won't be called
}
else if (a == 5)
{
    // Will called
}
else
{
    // Won't be called
}
```

However it is slightly clearer to see what is going on.

An important thing to note here is the different ways in which ifs and switches are processed:

```c
switch (SomeFunction())
{
    case 1: {}
    case 2: {}
    case 3: {}
}
```

That will call SomeFunction() ONCE and compare it's result 3 times.

```c
if (SomeFunction() == 1) {}
else if (SomeFunction() == 2) {}
else if (SomeFunction() == 3) {}
```

That will call SomeFunction() three times, which is very inefficient, a switch is more like doing:

```c
new
    result = SomeFunction();
if (result == 1) {}
else if (result == 2) {}
else if (result == 3) {}
```

For those of you who know C the PAWN switch is slightly different, the individual conditions are NOT fall-through and are bound by braces so there's no need for break statements.

### case

case statements (the "case X:" parts of the switch statement) can have other options besides a single number. You can compare a value to a list of numbers (replacing fall-through in C) or even a range of values:

```c
case 1, 2, 3, 4:
```

This case will trigger if the symbol being tested is 1, 2, 3, or 4, it's the same as doing:

```c
if (bla == 1 || bla == 2 || bla == 3 || bla == 4)
```

but far more concise. Numbers in lists do not have to be consecutive, in fact if they are it's better to do:

```c
case 1 .. 4:
```

This case will do exactly the same as above but by checking a range instead of a list, it is the same as doing:

```c
if (bla >= 1 && bla <= 4)
```

```c
new
    a = 4;
switch (a)
{
    case 1 .. 3:
    {
    }
    case 5, 8, 11:
    {
    }
    case 4:
    {
    }
    default:
    {
    }
}
```

### default

This is the equivalent to else in if statements, it does something if all the other case statements failed.

## Single line statements

### goto

goto is essentially a jump, it goes to a label without question (i.e. there's no condition to need to be true). You can see an example above in the if-goto loop.

```c
goto my_label;

// This section will be jumped over

my_label: // Labels end in a colon and are on their own line

// This section will be processed as normal
```

The use of gotos is widely discouraged due to their effect on program flow.

### break

break breaks out of a loop, ending it prematurely:

```c
for (new a = 0; a < 10; a++)
{
    if (a == 5) break;
}
```

This loop will go 6 times but code after the break will only be executed 5 times.

### continue

continue basically skips a loop iteration

```c
for (new a = 0; a < 3; a++)
{
    if (a == 1) continue;
    printf("a = %d", a);
}
```

That will give the output of:

```c
a = 0 a = 2
```

The continue basically jumps to the closing brace of the loop, as hinted at above you have to be careful when using continue with some loops:

```c
new
    a = 0;
while (a < 3)
{
    if (a == 1) continue;
    printf("a = %d", a);
    a++;
}
```

This looks very similar to the other example however this time the continue will skip the a++; line, so the loop will get stuck in an infinite loop as a will always be 1.

### return

return stops a function and goes back to the point in code which called the function in the first place:

```c
main()
{
    print("1");
    MyFunction(1);
    print("3");
}

MyFunction(num)
{
    if (num == 1)
    {
        return;
    }
    print("2");
}
```

That code will give an output of:

1 3

Because the print("2"); line will never be reached.

You can also use return to return a value:

```c
main()
{
    print("1");
    if (MyFunction(1) == 27)
    {
        print("3");
    }
}

MyFunction(num)
{
    if (num == 1)
    {
        return 27;
    }
    print("2");
    return 0;
}
```

That code will give the same output as above, however note that an additional return has been added to the end of the function. The end of a function has a return implied at it, however this return has no value, you cannot return a value and not return a value from the same function so we must explicitly return a value.

The symbol you return can be a number, a variable or even another function (in which case the other function will be called, it will return a value (it MUST return a value if you use it as a return value) and that value will be returned from the first function.

You can also store return values for later use:

```c
main()
{
    print("1");
    new
        ret = MyFunction(1);
    if (ret == 27)
    {
        print("3");
    }
}

MyFunction(num)
{
    if (num == 1)
    {
        return 27;
    }
    print("2");
    return 0;
}
```
