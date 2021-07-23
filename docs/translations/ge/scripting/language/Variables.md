---
title: "Basics: Variables"
description: A beginner's guide to variables in Pawn
---

## Variables

One of the most important concepts in programming is the concept of ‘variables’. In programming, a variable is an entity that is changeable, but in terms of what ? In Pawn language a variable holds a ‘value’ at any time and that value-as the name suggests-is ‘variable’ or ‘changeable’.

The reason why variables are so important is because they are basically small units of computer memory which can hold or ‘remember’ different values while the program is under execution (running), and that property turns out to be very useful in programming. For example, you want to keep track of the scores of 100 players in a game, you can do it easily by programming the computer to store (remember) and update those values. Later if you want to find the mean score of those players or want to create a leaderboard, those values from the variables can be easily accessed and used for that purpose.

### Declaring Variables

Following is the syntax for variable declaration :

```c
// Creating (more appropriately, 'declaring') a variable named 'myVariable

new myVariable;

// The 'new' keyword is used for declaring a variable
// In the above line a variable is declared with the name 'myVariable'
// Semi-colon is used in the end to close the declaration statement.
```

The declaration syntax can be better understood by looking at some examples :

```c
new var;
new ammo;
new score;
new vehicles;
new topScore;
```

Each of the above defined variable has a value by default, which is zero. There are different ways of assigning values to a variable. One method is directly assigning a value to the variable as it’s declared :

```c
new letters = 25;
```

In the above example, a variable named ‘letters’ is being declared, with a value of 25. You will notice an equal sign which is a simple Assignment Operator that can be used for assigning values to variables. It evaluates the expression on its right and assigns the resultant value to the variable referenced on its left side. Other than assigning values directly at the declaration, you can also do it in later parts of the code :

```c
new letters;

letters = 25;
```

### Scopes

Modifying a variable's value is possible only if the part of the code where you’re referencing the variable is within the scope of that variable. Scope of a variable depends upon the code block or position where that variable was declared. For example a variable being declared outside any block of code, usually in the beginning of the script, has a ‘Global’ scope and can be accessed from anywhere within the script:

```c
#include <a_samp>

new g_var = 5;

public OnFilterScriptInit ()
{
    g_var = 10;

    printf ("The value is %i", g_var);

    return 1;
}

public OnPlayerConnect (playerid)
{
    g_var = 100;

    printf ("The value is %i", g_var);

    return 1;
}

// Output :
// The value is 10
// The value is 100

// Note: The second output line is shown only when a player connects.
```

Other than ‘Global’ (scoped) variables, there are ‘local’ or ‘private’ variables that can be accessed only from inside the block of code where they were declared.

```c
#include <a_samp>

public OnFilterScriptInit ()
{
    new localVar;

    localVar = 5;

    return 1;
}

public OnPlayerConnect (playerid)
{
    localVar = 10; // This line will show an error upon compilation

    return 1;
}
```

If you try to compile the code above, the compiler will show an error which is reasonable as a local variable is being references in a completely different block of code. Note: If it is a nested code block then the variable can be accessed from there.

One important thing to note is that you cannot declare variables with the same names if their scopes intercede. For example if you already have a variable named ‘score’ on a global scope, you cannot create another variable named ‘score’ on the global scope as well as a local one, and this is true for other way around as well (if you already have a local variable, avoid declaring a global variable with the same name).

```c
#include <a_samp>

new g_score;

public OnFilterScriptInit ()
{
    new g_score = 5; // This line will show an error.
    return 1;
}
```

### Naming Rules

Now that you know how to declare variables, you need to know the naming rules for declaring variable which are listed below :

- All variable names must begin with a letter or an underscore (`_`)
- After the first initial letter, variable names can contain letters and numbers but no spaces or special characters.
- The variable names are case sensitive i.e Uppercase letters are distinct from the lowercase letters.
- Using a reserved word (keyword) as a variable name will show an error.

#### Examples :

```c
new new; // Incorrect : Using a reserved word
new _new; // Correct

new 10letters; // Incorrect : Name starting with a number
new letters10; // Correct
new letters_10; // Correct

new my name; // Incorrect : Space in the name
new my_name; // Correct

new !nternet; // Incorrect
new Internet; // Correct
```

### Storing different types of Data

After that, now lets look at some examples of what types of data can be stored in variable and how :

```c
new letter = 'M';


new value = 100;


new decimalValue = 1.0;
// Works, but will show a compiler warning
// warning 213: tag mismatch


new engineOn = true;
// Works, and will not show a compiler warning but using a Tag is suggested


new sentence = "This is a sentence";
// Will show an error.
// error 006: must be assigned to an array
```

A variable is capable of holding a character, integer value, boolean (true or false) and a float value (decimal value). The comments in the above code show that storing a string in a variable results into an error (as strings can be stored in _Arrays_ only). Other than that, assigning a float value to a variable will result in a compiler warning, which can be avoided by adding ‘tags’. Without proper tags, the script will show warnings upon compilation but will be executable. Tags tell the compiler about the type of data that is intended to be stored in the variable, which in turn informs us in the form of errors or warning if we make a program-breaking mistake in the code. Example of tags :

```c
new decimalValue = 1.0; // Incorrect
new bool: decimalValue = 1.0 // Incorrect
new Float: decimalValue = 1.0; // Correct

new switchOn = 1.0; // Incorrect
new switchOn = true; // Incorrect, doesn't show a warning
new bool: switchOn = true; // Correct
```

Using correct tags is important to avoid any bugs or errors during program execution.

Pawn being a typeless language allows us to store different types of data in the same variable which can be useful in some cases and troublesome in others, but such usage of variables is not recommended.

```c
#include <a_samp>

public OnFilterScriptInit ()
{

    new var ;

    var = 'a';
    printf ("%c", var);

    var = 1;
    printf ("%d", var);

    var = 1.0;
    printf ("%f", var);

    var = true;
    printf ("%d", var); // prints a value 0 or 1

    return 1;
}

// Output :
a
1
1.000000
1
```
