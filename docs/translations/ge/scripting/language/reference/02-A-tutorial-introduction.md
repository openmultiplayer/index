# A tutorial introduction

---

pawn is a simple programming language with a syntax reminiscent to the “C”
programming language. A pawn program consists of a set of functions and
a set of variables. The variables are data objects and the functions contain
instructions (called “statements”) that operate on the data objects or that perform tasks.

The first program in almost any computer language is one that prints a simple
string; printing “Hello world” is a classic example. In pawn, the program would look like:

Listing: hello.p

```c

main()
    printf  "Hello  world\n"

```

This manual assumes that you know how to run a pawn program; if not, please
consult the application manual (more hints are at page 168).

A pawn program starts execution in an “entry” function∗ —in nearly all ex-
amples of this manual, this entry function is called “main”. Here, the function
main contains only a single instruction, which is at the line below the function
head itself. Line breaks and indenting are insignificant; the invocation of the
function print could equally well be on the same line as the head of function main.

The definition of a function requires that a pair of parentheses follow the func-
tion name. If a function takes parameters, their declarations appear between
the parentheses. The function main does not take any parentheses. The rules
are different for a function invocation (or a function call); parentheses are
optional in the call to the print function.

The single argument of the print function is a string, which must be enclosed
in double quotes. The characters \n near the end of the string form an escape
sequence, in this case they indicate a “newline” symbol. When print encoun-
ters the newline escape sequence, it advances the cursor to the first column of
the next line. One has to use the \n escape sequence to insert a “newline” into
the string, because a string may not wrap over multiple lines.

---

###### ∗ This should not be confused with the “state” entry functions, which are called entry, but serve a different purpose — see page 42.

`Compiling and running scripts: see page 168`

`String literals: 99 Escape sequence: 99`

---

pawn is a “case sensitive” language: upper and lower case letters are considered
to be different letters. It would be an error to spell the function printf in the
above example as “PrintF”. Keywords and predefined symbols, like the name
of function “main”, must be typed in lower case.

If you know the C language, you may feel that the above example does not
look much like the equivalent “Hello world” program in C/C++. pawn can
also look very similar to C, though. The next example program is also valid
pawn syntax (and it has the same semantics as the earlier example):

Listing: hello.p — C style

```c

#include  <console>

main()
{
    printf("Hello  world\n");
}

```

These first examples also reveal a few differences between pawn and the C language:

- there is usually no need to include any system-defined “header file”;

- semicolons are optional (except when writing multiple statements on one line);

- when the body of a function is a single instruction, the braces (for a compound instruction) are optional;

- when you do not use the result of a function in an expression or assignment, parentheses around the function argument are optional.

As an aside, the few preceding points refer to optional syntaxes. It is
your choice what syntax you wish to use: neither style is “deprecated” or  
“considered harmful”. The examples in this manual position the braces and use
an indentation that is known as the “Whitesmith’s style”, but pawn is a free
format language and other indenting styles are just as good.

Because pawn is designed to be an extension language for applications,
the function set/library that a pawn program has at its disposal depends on the
host application. As a result, the pawn language has no intrinsic knowledge
of any function. The print function, used in this first example, must be made
available by the host application and be “declared” to the pawn parser.

---

###### ∗ In the language specification, the term “parser” refers to any implementation that processes and runs on conforming Pawn programs —either interpreters or compilers.

`More function descriptions at page 124`

---

It is assumed, however, that all host applications provide a minimal set of common
functions, like print and printf.

In some environments, the display or terminal must be enabled before any text
can be output onto it. If this is the case, you must add a call to the function
“console” before the first call to function print or printf. The console
function also allows you to specify device characteristics, such as the number
of lines and columns of the display. The example programs in this  
manual do not use the console functions, because many platforms do not require or provide it.

### • Arithmetic

Fundamental elements of most programs are calculations, decisions  
(conditional execution), iterations (loops) and variables to store input data, output
data and intermediate results. The next program example illustrates many of
these concepts. The program calculates the greatest common divisor of two
values using an algorithm invented by Euclides.

Listing: gcd.p

```c

/*  the  greatest  common  divisor  of  two  values,  using  Euclides’
algorithm  */

main()
{
    print  "Input  two  values\n"
    new  a  =  getvalue()
    new  b  =  getvalue()
    while  (a  !=  b)
    if  (a  >  b)
        a  =  a  -  b
    else
        b  =  b  -  a
    printf  "The  greatest  common  divisor  is  %d\n",  a
}

```

Function main now contains more than just a single “print” statement. When
the body of a function contains more than one statement, these statements
must be embodied in braces —the “{” and “}” characters. This groups the in-
structions to a single compound statement. The notion of grouping statements
in a compound statement applies as well to the bodies of if–else and loop instructions.

The new keyword creates a variable. The name of the variable follows new.
It Data declarations is common, but not imperative,
to assign a value to the variable already at the moment of its creation.

`Compound statement: 112`

`Data declarations are covered in detail starting at page 62`

---

Variables must be declared before they are used in an expression.
The getvalue function (also common predefined function)
reads in a value from the keyboard and returns the result. Note that pawn
is a typeless language, all variables are numeric
cells that can hold a signed integral value.

The getvalue function name is followed by a pair of parentheses. These are
required because the value that getvalue returns is stored in a variable. Nor-
mally, the function’s arguments (or parameters) would appear between  
the parentheses, but getvalue (as used in this program) does not take any
explicit arguments. If you do not assign the result of a function to a variable
or use it in a expression in another way, the parentheses are optional. For
example, the result of the print and printf statements are not used. You
may still use parentheses around the arguments, but it is not required.

Loop instructions, like “while”, repeat a single instruction as long as the loop
condition (the expression between parentheses) is “true”. One can  
execute multiple instructions in a loop by grouping them in a compound statement.
The if–else instruction has one instruction for the “true” clause and one for the “false”.

Observe that some statements, like while and if–else, contain (or  
“fold around”) another instruction —in the case of if–else even two other instructions.
The complete bundle is, again, a single instruction. That is:

- the assignment statements “a = a - b” below the if and “b = b - a” below the else are statements;

- the if–else statement folds around these two assignment statements and forms a single statement of itself;

- the while statement folds around the if–else statement and forms, again, a single statement.

It is common to make the nesting of the statements explicit by indenting any
sub-statements below a statement in the source text. In the “Greatest Com-
mon Divisor” example, the left margin indent increases by four space characters
after the while statement, and again after the if and else keywords. State-
ments that belong to the same level, such as both printf invocations and the
while loop, have the same indentation.

The loop condition for the while loop is “(a != b)”; the symbol != is the
“not equal to” operator. That is, the if–else instruction is repeated  
until “a” equals “b”. It is good practice to indent the instructions that run under
control of another statement, as is done in the preceding example.

---

The call to printf, near the bottom of the example, differs from the print call
right below the opening brace (“{”). The “f” in printf stands for “formatted”,
which means that the function can format and print numeric values and other
data (in a user-specified format), as well as literal text. The %d symbol in the
string is a token that indicates the position and the format that the subsequent
argument to function printf should be printed. At run time, the token %d is
replaced by the value of variable “a” (the second argument of printf).

Function print can only print text; it is quicker than printf. If you want to
print a literal “%” at the display, you have to use print, or you have to double
it in the string that you give to printf. That is:

`print "20% of the personnel accounts for 80% of the costs\n"`

and

`printf "20%% of the personnel accounts for 80%% of the costs\n"`

print the same string.

---

`"while" loop: 116`

`"if else": 114`

`Relational operators: 107`

---

### • Arrays and constants

Next to simple variables with a size of a single cell, pawn supports “array
variables” that hold many cells/values. The following example program displays
a series of prime numbers using the well known “sieve of Eratosthenes”. The
program also introduces another new concept: symbolic constants.
Symbolic constants look like variables, but they cannot be changed.

Listing: sieve.p

```c

/*  Print  all  primes  below  100,  using  the  "Sieve  of  Eratosthenes"  */

main()
{
    const  max_primes  =  100
    new  series[max_primes]  =  {  true,  ...  }
    for  (new  i  =  2;  i  <  max_primes;  ++i)
    if  (series[i])
    {
        printf  "%d  ",  i
        /*  filter  all  multiples  of  this  "prime"  from  the  list  */
        for  (new  j  =  2  *  i;  j  <  max_primes;  j  +=  i)
            series[j]  =  false
    }
}

```

---

When a program or sub-program has some fixed limit built-in, it is good prac-
tice create a symbolic constant for it. In the preceding example, the symbol
max_primes is a constant with the value 100. The program uses the symbol
max_primes three times after its definition: in the declaration of the variable
series and in both for loops. If we were to adapt the program to print all
primes below 500, there is now only one line to change.

Like simple variables, arrays may be initialized upon creation. pawn offers a
convenient shorthand to initialize all elements to a fixed value:
all hundred
elements of the “series” array are set to true —without requiring that the
programmer types in the word “true” a hundred times. The symbols true
and false are predefined constants.

When a simple variable, like the variables i and j in the primes sieve example,
is declared in the first expression of a for loop, the variable is  
valid only inside the loop.
Variable declaration has its own rules; it is not a
statement — although it looks like one.
One of those rules is that the first expression
of a for loop may contain a variable declaration.

Both for loops also introduce new operators in their third expression.
The ++ operator increments its operand by one; that is, ++i is equal to i = i + 1.
The += operator adds the expression on its right to the variable on its left;
that is, j += i is equal to j = j + i.

There is an “off-by-one” issue that you need to be aware if when working with
arrays. The first element in the series array is series[0], so if the array
holds max_primes elements, the last element in the array is series[max_primes 1].
If max_primes is 100, the last element, then, is series[99]. Accessing series[100] is invalid.

`Constant declaration: 101`

`Progressive initiallers: 65`

`"for" loop: 113`

`An overview of all operators: 104`

### • Functions

Larger programs separate tasks and operations into functions. Using functions
increases the modularity of programs and functions, when well written, are
portable to other programs. The following example implements a function to
calculate numbers from the Fibonacci series.

The Fibonacci sequence was discovered by Leonardo “Fibonacci” of Pisa, an
Italian mathematician of the 13th century—whose greatest achievement was
popularizing for the Western world the Hindu-Arabic numerals. The goal of
the sequence was to describe the growth of a population of (idealized) rabbits;

and the sequence is 1, 1, 2, 3, 5, 8, 13, 21,. . .
(every next value is the sum of its two predecessors).

Listing: fib.p

```c

/*  Calculation  of  Fibonacci  numbers  by  iteration  */

main()
{
    print  "Enter  a  value:  "
    new  v  =  getvalue()
    if  (v  >  0)
        printf  "The  value  of  Fibonacci  number  %d  is  %d\n", v,  fibonacci(v)
    else
        printf  "The  Fibonacci  number  %d  does  not  exist\n",  v
}
fibonacci(n)
{
    assert  n  >  0
    new  a  =  0,  b  =  1
    (new  i  =  2;  i  <  n;  i++)
    {
        new  c  =  a  +  b
        a  =  b
        b  =  c
    }
    return  a  +  b
}

```

The assert instruction at the top of the fibonacci function deserves explicit
mention; it guards against “impossible” or invalid conditions. A negative Fi-
bonacci number is invalid, and the assert statement flags it as a programmer’s
error if this case ever occurs. Assertions should only flag programmer’s
errors, never user input errors.

The implementation of a user-defined function is not much different than that
of function main. Function fibonacci shows two new concepts, though: it
receives an input value through a parameter and it returns a value (it has a
“result”).

Function parameters are declared in the function header; the single parameter
in this example is “n”. Inside the function, a parameter behaves as a  
local variable, but one whose value is passed from the outside at
the call to the function.

The return statement ends a function and sets the result of the function.
It need not appear at the very end of the function; early exits are permitted.

`"assert" statement: 112`

`Funcitons: properties & features: 70`

---

The main function of the Fibonacci example calls predefined “native” functions,
like getvalue and printf, as well as the user-defined function fibonacci.
From the perspective of calling a function (as in function main), there is no
difference between user-defined and native functions.

The Fibonacci numbers sequence describes a surprising variety of natural phe-
nomena. For example, the two or three sets of spirals in pineapples, pine cones
and sunflowers usually have consecutive Fibonacci numbers between 5 and 89
as their number of spirals. The numbers that occur naturally in branching
patterns (e.g. that of plants) are indeed Fibonacci numbers. Finally, although
the Fibonacci sequence is not a geometric sequence, the further the sequence
is extended, the more closely the ratio between successive terms approaches
the Golden Ratio, of 1.618. . . ∗ that appears so often in art and architecture.

### • Call-by-reference & call-by-value

Dates are a particularly rich source of algorithms and conversion routines,
because the calenders that a date refers to have known such a diversity,
through time and around the world.

The “Julian Day Number” is attributed to Josephus Scaliger† and it counts
the number of days since November 24, 4714 BC (proleptic Gregorian cal-
endar‡). Scaliger chose that date because it marked the coincidence of three
well-established cycles: the 28-year Solar Cycle (of the old Julian calendar),
the 19-year Metonic Cycle and the 15-year Indiction Cycle (periodic taxes or gov-
ernmental requisitions in ancient Rome), and because no literature or recorded
history was known to predate that particular date in the remote past. Scaliger
used this concept to reconcile dates in historic documents, later astronomers
embraced it to calculate intervals between two events more easily.

---

###### ∗ The exact value for the Golden Ratio is 1/2(√5 + 1). The relation between Fibonacci numbers and the Golden Ratio also allows for a “direct” calculation of any sequence number, instead of the iterative method described here.

###### ∗ There is some debate on exactly what Josephus Scaliger invented and who or what he called it after.

###### ∗ The Gregorian calendar was decreed to start on 15 October 1582 by pope Gregory XIII, which means that earlier dates do not really exist in the Gregorian calendar. When extending the Gregorian calendar to days before 15 October 1582, we refer to it as the proleptic Gregorian calendar.

`Native function interface: 85`

---

Julian Day numbers (sometimes denoted with unit “jd”) should not be con-
fused with Julian Dates (the number of days since the start of the same year),
or with the Julian calendar that was introduced by Julius Caesar.

Below is a program that calculates the Julian Day number from a date in
the (proleptic) Gregorian calendar, and vice versa. Note that in the proleptic
Gregorian calendar, the first year is 1 AD (Anno Domini) and the year before
that is 1 BC (Before Christ): year zero does not exist! The program uses
negative year values for BC years and positive (non-zero) values for AD years.

Listing: julian.p

```c

/*  calculate  Julian  Day  number  from  a  date,  and  vice  versa  */

main()
{
    new  d,  m,  y,  jdn
    print  "Give  a  date  (dd-mm-yyyy):  "

    d  =  getvalue(_,  ’-’,  ’/’)
    m  =  getvalue(_,  ’-’,  ’/’)
    y  =  getvalue()
    jdn  =  DateToJulian(d,  m,  y)

    printf("Date  %d/%d/%d  =  %d  JD\n",  d,  m,  y,  jdn)
    print  "Give  a  Julian  Day  Number:  "

    jdn  =  getvalue()
    JulianToDate  jdn,  d,  m,  y

    printf  "%d  JD  =  %d/%d/%d\n",  jdn,  d,  m,  y
}

DateToJulian(day,  month,  year)
{
    /*  The  first  year  is  1.  Year  0  does  not  exist:  it  is  1  BC  (or  -1)  */

    assert  year  !=  0
    if  (year  <  0)
    year++

    /*  move  January  and  February  to  the  end  of  the  previous  year  */

    if  (month  <=  2)
    year--,  month  +=  12
    new  jdn  =  365*year  +  year/4  -  year/100  +  year/400
    +  (153*month  -  457)  /  5
    +  day  +  1721119

    return  jdn
}

JulianToDate(jdn,  &day,  &month,  &year)
{
    jdn  -=  1721119

    /*  approximate  year,  then  adjust  in  a  loop  */

    year  =  (400  *  jdn)  /  146097
    while  (365*year  +  year/4  -  year/100  +  year/400  <  jdn)
        year++
    year--
    /*  determine  month  */

    jdn  -=  365*year  +  year/4  -  year/100  +  year/400
    month  =  (5*jdn  +  457)  /  153

    /*  determine  day  */

    day  =  jdn  -  (153*month  -  457)  /  5

    /*  move  January  and  February  to  start  of  the  year  */

    if  (month  >  12)
        month  -=  12,  year++

    /*  adjust  negative  years  (year  0  must  become  1  BC,  or  -1)  */

    if  (year  <=  0)
        year--
}

```

---

Function main starts with creating variables to hold the day, month and year,
and the calculated Julian Day number. Then it reads in a date —three calls to
getvalue— and calls function DateToJulian to calculate the day number. Af-
ter calculating the result, main prints the date that you entered and the Julian
Day number for that date. Now, let us focus on function DateToJulian. . .

Near the top of function DateToJulian, it increments the year value if it is
negative; it does this to cope with the absence of a “zero” year in the
proleptic Gregorian calendar. In other words, function DateToJulian modifies its func-
tion arguments (later, it also modifies month). Inside a function, an argument
behaves like a local variable: you may modify it. These modifications remain
local to the function DateToJulian, however. Function main passes the values
of d, m and y into DateToJulian, who maps them to its function arguments
day, month and year respectively. Although DateToJulian modifies year and
month, it does not change y and m in function main; it only changes local copies
of y and m. This concept is called “call by value”.

The example intentionally uses different names for the local variables in the
functions main and DateToJulian, for the purpose of making the above ex-
planation easier. Renaming main’s variables d, m and y to day, month
and year respectively, does not change the matter: then you just happen to have
two local variables called day, two called month and two called year, which is
perfectly valid in pawn.

`"Call by value" versus "Call by reference": 71`

---

The remainder of function DateToJulian is, regarding the
pawn language, uninteresting arithmetic.

Returning to the second part of the function main we see that it now asks
for a day number and calls another function, JulianToDate, to find the date
that matches the day number. Function JulianToDate is interesting because
it takes one input argument (the Julian Day number) and needs to calculate
three output values, the day, month and year. Alas, a function can only have
a single return value —that is, a return statement in a function may
only contain one expression. To solve this, JulianToDate specifically requests that
changes that it makes to some of its function arguments are copied back to the
variables of the caller of the function. Then, in main, the variables that must
hold the result of JulianToDate are passed as arguments to JulianToDate.

Function JulianToDate marks the appropriate arguments for being “copied
back to caller” by prefixing them with an & symbol. Arguments with an & are
copied back, arguments without is are not. “Copying back” is actually not the
correct term. An argument tagged with an & is passed to the function in a
special way that allows the function to directly modify the original variable.
This is called “call by reference” and an argument that uses it is a “reference argument”.

In other words, if main passes y to JulianToDate —who maps it to its function
argument year— and JulianToDate changes year, then JulianToDate really
changes y. Only through reference arguments can a function directly modify
a variable that is declared in a different function.

To summarize the use of call-by-value versus call-by-reference: if a function
has one output value, you typically use a return statement; if a function has
more output values, you use reference arguments. You may combine the two
inside a single function, for example in a function that returns its “normal”
output via a reference argument and an error code in its return value.

As an aside, many desktop application use conversions to and from  
Julian Day numbers (or varieties of it) to conveniently calculate the number of days
between to dates or to calculate the date that is 90 days from now —for example.---

### • Rational numbers

All calculations done up to this point involved only whole numbers —integer
values. pawn also has support for numbers that can hold fractional values:

these are called “rational numbers”. However, whether this support is enabled
depends on the host application.

Rational numbers can be implemented as either floating-point or fixed-point
numbers. Floating-point arithmetic is commonly used for general-purpose and
scientific calculations, while fixed-point arithmetic is more suitable for
financial processing and applications where rounding errors should not come into

play (or at least, they should be predictable). The pawn toolkit has both a
floating-point and a fixed-point module, and the details (and
trade-offs) for
these modules in their respective documentation. The issue is, however, that a
host application may implement either floating-point or fixed-point, or both
or neither.∗ The program below requires that at least either kind of rational
number support is available; it will fail to run if the host application does
not support rational numbers at all.

Listing: c2f.p

```c

main()
{
    new  Rational:  Celsius
    new  Rational:  Fahrenheit
    print  "Celsius\t  Fahrenheit\n"
    for  (Celsius  =  5;  Celsius  <=  25;  Celsius++)
    {
        Fahrenheit  =  (Celsius  *  1.8)  +  32
        printf  "%r  \t  %r\n",  Celsius,  Fahrenheit
    }
}

```

The example program converts a table of degrees Celsius to degrees Fahrenheit.
The first directive of this program is to import definitions for rational number
support from an include file. The file “rational” includes either support
for floating-point numbers or for fixed-point numbers, depending on what is available.

The variables Celsius and Fahrenheit are declared with a tag “Rational:”
between the keyword new and the variable name. A tag name denotes the
purpose of the variable, its permitted use and, as a special
case for rational numbers, its memory lay-out.

---

###### ∗ Actually, this is already true of all native functions, including all native functions that the examples in this manual use.

`Tag names: 68`

---

The Rational: tag tells the pawn parser that the variables Celsius and Fahrenheit
contain fractional values, rather than whole numbers.

The equation for obtaining degrees Fahrenheit from degrees Celsius is

°F = ⁹⁄₅ + 32 °C

The program uses the value 1.8 for the quotient 9/₅. When rational number
support is enabled, pawn supports values with a fractional part behind  
the decimal point.

The only other non-trivial change from earlier programs is that the format
string for the printf function now has variable placeholders denoted with
“%r” instead of “%d”. The placeholder %r prints a rational number at
the position; %d is only for integers (“whole numbers”).

I used the include file “rational” rather than “float” or “fixed” in an
attempt to make the example program portable. If you know that the host
application supports floating point arithmetic, it may be more convenient to
“#include” the definitions from the file float and use the tag Float: instead
of Rational —when doing so, you should also replace %r by %f in the call to
printf. For details on fixed point and floating point support, please see the
application notes “Fixed Point Support Library” and “Floating Point Support
Library” that are available separately.

### • Strings

pawn has no intrinsic “string” type; character strings are stored in arrays, with
the convention that the array element behind the last valid character is zero.
Working with strings is therefore equivalent with working with arrays.

Among the simplest of encryption schemes is the one called “ROT13” —
actually the algorithm is quite “weak” from a cryptographical point of view. It
is most widely used in public electronic forums (BBSes, Usenet) to hide texts
from casual reading, such as the solution to puzzles or riddles. ROT13 simply
“rotates” the alphabet by half its length, i.e. 13 characters. It is a symmetric
operation: applying it twice on the same text reveals the original.

---

Listing: rot13.p

```c

/*  Simple  encryption,  using  ROT13  */

main()
{
    printf  "Please  type  the  string  to  mangle:  "

    new  str[100]
    getstring  str,  sizeof  str
    rot13  str

    printf  "After  mangling,  the  string  is:  \"%s\"\n",  str
}

rot13(string[])
{
    for  (new  index  =  0;  string[index];  index++)
    if  (’a’  <=  string[index]  <=  ’z’)
        string[index]  =  (string[index]  -  ’a’  +  13)  %  26  +  ’a’
    else  if  (’A’  <=  string[index]  <=  ’Z’)
        string[index]  =  (string[index]  -  ’A’  +  13)  %  26  +  ’A’
}

```

In the function header of rot13, the parameter “string” is declared as an
array, but without specifying the size of the array —there is no value between
the square brackets. When you specify a size for an array in a function header,
it must match the size of the actual parameter in the function call. Omitting
the array size specification in the function header removes this restriction and
allows the function to be called with arrays of any size. You must then have
some other means of determining the (maximum) size of the array. In the case
of a string parameter, one can simply search for the zero terminator.

The for loop that walks over the string is typical for string processing func-
tions. Note that the loop condition is “string[index]”. The rule for true/
false conditions in pawn is that any value is “true”, except zero. That is,
when the array cell at string[index] is zero, it is “false” and the loop aborts.

The ROT13 algorithm rotates only letters; digits, punctuation and special
characters are left unaltered. Additionally, upper and lower case letters must
be handled separately. Inside the for loop, two if statements filter out the
characters of interest. The way that the second if is chained to the “else”
clause of the first if is noteworthy, as it is a typical method of
testing for multiple non-overlapping conditions.

Earlier in this chapter, the concept of “call by value” versus “call by
reference” were discussed. When you are working with strings, or arrays in general, note
that pawn always passes arrays by reference. It does this to conserve memory
and to increase performance —arrays can be large data structures and passing
them by value requires a copy of this data structure to be made, taking both memory and time.

---

`A function that takes an array as an argument and that does not change it, may mark the argument as “const”; see page 72`

Due to this rule, function rot13 can modify its function
parameter (called “string” in the example) without needing to declare as a
reference argument.

Another point of interest are the conditions in the two if statements. The first
if, for example, holds the condition “’a’ <= string[index] <= ’z’”, which
means that the expression is true if (and only if) both ’a’ <= string[index]
and string[index] <= ’z’ are true. In the combined expression, the rela-
tional operators are said to be “chained”, as they chain multiple comparisons
in one condition.

Finally, note how the last printf in function main uses the escape sequence
\" to print a double quote. Normally a double quote ends the literal string;
the escape sequence “\"” inserts a double quote into the string.

Staying on the subject of strings and arrays, below is a program that separates
a string of text into individual words and counts them. It is a simple program
that shows a few new features of the pawn language.

Listing: wcount.p

```c

/*  word  count:  count  words  on  a  string  that  the  user  types  */

main()
{
    print  "Please  type  a  string:  "
    new  string[100]
    getstring  string,  sizeof  string

    new  count  =  0

    new  word[20]
    new  index
    for (  ;;  )
    {
        word  =  strtok(string,  index)
        if  (strlen(word)  ==  0)
            break
        count++
        printf  "Word  %d:  ’%s’\n",  count,  word
    }
    printf  "\nNumber  of  words:  %d\n",  count
}

strtok(const  string[],  &index)
{
    new  length  =  strlen(string)

    /*  skip  leading  white  space  */
    while  (index  <  length  &&  string[index]  <=  ’  ’)
        index++
    /*  store  the  word  letter  for  letter  */
    new  offset  =  index                            /*  save  start position  of  token  */
    new  result[20]                                  /*  string  to store  the  word  in  */
    while  (index  <  length
        &&  string[index]  >  ’  ’
        &&  index  -  offset  <  sizeof  result  -  1)
    {
        result[index  -  offset]  =  string[index]
        index++
    }
    result[index  -  offset]  =  EOS                 /*  zero-terminate  the string  */
    return  result
}

```

---

`Relational operators: 107`

`Escape sequence: 99`

Function main first displays a message and retrieves a string that  
the user must type. Then it enters a loop: writing “for (;;)” creates a loop
without initialisation, without increment and without test —it is an infinite loop,

equivalent to “while (true)”. However, where the pawn parser will give you
a warning if you type “while (true)” (something along the line “redundant
test expression; always true”), “for (;;)” passes the parser without warning.

A typical use for an infinite loop is a case where you need a loop  
with the test in the middle —a hybrid between a while and a do. . . while loop, so to
speak. pawn does not support loops-with-a-test-in-the middle directly,  
but you can imitate one by coding an infinite loop with a conditional break. In
this example program, the loop:

- gets a word from the string —code before the test ;

- tests wether a new word is available, and breaks out of the loop if not —the test in the middle;

- prints the word and its sequence number —code after the test .

As is apparent from the line “word = strtok(string, index)” (and the
declaration of variable word), pawn supports array assignment and functions
returning arrays. The pawn parser verifies that the array that strtok returns
has the same size and dimensions as the variable that it is assigned into.

Function strlen is a native function (predefined), but strtok is not: it must be
implemented by ourselves. The function strtok was inspired by the function of
the same name from C/C++, but it does not modify the source string. Instead

it copies characters from the source string, word for word, into a local array,
which it then returns.

---

### • Arrays and enumerations (structured data)

In a typeless language, we might assign a different purpose to some  
array elements than to other elements in the same array. pawn supports enumerated
constants with an extension that allows it to mimic some functionality that
other languages implement with “structures” or “records”.

The example to illustrate enumerations and arrays is longer than  
previous pawn programs, and it also displays a few other features, such as global
variables and named parameters.
Listing: queue.p

```c

/*  Priority  queue  (for  simple  text  strings)  */

enum  message
{
    text[40  char],
    priority
}

main()
{
    new  msg[message]

    /*  insert  a  few  items  (read  from  console  input)  */

    printf  "Please  insert  a  few  messages  and  their  priorities;  \
        end  with  an  empty  string\n"
    for  (  ;;  )
    {
        printf  "Message:    "
        getstring  .string  =  msg[text],  .maxlength  =  40,  .pack  =  true
        if  (strlen(msg[text])  ==  0)
            break
        printf  "Priority:  "
        msg[priority]  =  getvalue()
        if  (!insert(msg))
        {
            printf  "Queue  is  full,  cannot  insert  more  items\n"
            break
        }
    }
    /*  now  print  the  messages  extracted  from  the  queue  */
    printf  "\nContents  of  the  queue:\n"
    while  (extract(msg))
        printf  "[%d]  %s\n",  msg[priority],  msg[text]
}

const  queuesize  =  10
new  queue[queuesize][message]
new  queueitems  =  0
insert(const  item[message])
{
    /*  check  if  the  queue  can  hold  one  more  message  */
    if  (queueitems  ==  queuesize)
        return  false                         /*  queue  is  full  */

    /*  find  the  position  to  insert  it  to  */
    new  pos  =  queueitems                 /*  start  at  the  bottom  */
    while  (pos  >  0  &&  item[priority]  >  queue[pos-1][priority])
        --pos                                        /*  higher  priority:  move  one  position  up  */

    /*  make  place  for  the  item  at  the  insertion  spot  */
    for  (new  i  =  queueitems;  i  >  pos;  --i)
        queue[i]  =  queue[i-1]

    /*  add  the  message  to  the  correct  slot  */
        queue[pos]  =  item
    queueitems++

    return  true
}

extract(item[message])
{
    /*  check  whether  the  queue  has  one  more  message  */
    if  (queueitems  ==  0)
        return  false                         /*  queue  is  empty  */

    /*  copy  the  topmost  item  */
    item  =  queue[0]
    --queueitems

    /*  move  the  queue  one  position  up  */
    for  (new  i  =  0;  i  <  queueitems;  ++i)
        queue[i]  =  queue[i+1]

    return  true
}

```

---

`"for" loop: 113`

`"enum" statement: 101`

`"char" operator: 110`

Near the top of the program listing is the declaration of the enumeration mes-
sage. This enumeration defines two constants: text, which is zero, and pri-
ority, which is 11 (assuming a 32-bit cell). The idea behind an enumeration
is to quickly define a list of symbolic constants without duplicates. By
default, every constant in the list is 1 higher than its predecessor and the very  
first constant in the list is zero. However, you may give an extra increment for a
constant so that the successor has a value of 1 plus that extra increment. The

text constant specifies an extra increment of 40 char. In pawn, char is an
operator, it returns the number of cells needed to
hold a packed string of the

specified number of characters. Assuming a 32-bit cell and a 8-bit character,
10 cells can hold 40 packed characters.

Immediately at the top of function main, a new array variable is declared with
the size of message. The symbol message is the name of the enumeration. It
is also a constant with the value of the last constant in the enumeration list
plus the optional extra increment for that last element. So in this example,
message is 12. That is to say, array msg is declared to hold 12 cells.

Further in main are two loops. The for loop reads strings and priority values
from the console and inserts them in a queue. The while loop below  
that
extracts element by element from the queue and prints the information on the
screen. The point to note, is that the for loop stores both the string and the
priority number (an integer) in the same variable msg; indeed, function main
declares only a single variable. Function getstring stores the message text
that you type starting at array msg[text] while the priority value is stored
(by an assignment a few lines lower) in msg[priority]. The printf function
in the while loop reads the string and the value from those positions as well.

At the same time, the msg array is an entity on itself: it is passed in its
entirety
to function insert. That function, near the end, says “queue[queueitems]

= item”, where item is an array with size message and queue is a  
two-
dimensional array that holds queuesize elements of size message. The decla-
ration of queue and queuesize are just above function insert.

The example implements a “priority queue”. You can insert a number  
of
messages into the queue and when these messages all have the same priority,
they are extracted from the queue in the same order. However, when  
the
messages have different priorities, the one with the highest priority comes out
first. The “intelligence” for this operation is inside function insert: it
first
determines the position of the new message to add, then moves a few messages
one position upward to make space for the new message. Function extract
simply always retrieves the first element of the queue and shifts all remaining
elements down by one position.

Note that both functions insert and extract work on two shared variables,
queue and queueitems. A variable that is declared inside a function,  
like
variable msg in function main can only be accessed from within that function.
A “global variable” is accessible by all functions, and that variable is
declared
outside the scope of any function. Variables must still be declared before they
are used, so main cannot access variables queue and queueitems, but both
insert and extract can.

---

Function extract returns the messages with the highest priority via its func-
tion argument item. That is, it changes its function argument by copying the
first element of the queue array into item. Function insert copies in the other
direction and it does not change its function argument item. In such a case,
it is advised to mark the function argument as “const”. This helps the pawn
parser to both check for errors and to generate better (more compact, quicker) code.

A final remark on this latest sample is the call to getstring in function main:
note how the parameters are attributed with a description. The first param-
eter is labeled “.string”, the second “.maxlength” and the third “.pack”.
Function getstring receives “named parameters” rather than positional pa-
rameters. The order in which named parameters are listed is not important.
Named parameters are convenient in specifying —and deciphering— long pa-
rameter lists.

---

`Named parameters: 74`

### • Bit operations to manipulate ‘‘sets’’

A few algorithms are most easily solved with “set operations”, like
intersection,
union and inversion. In the figure below, for example, we want to design an
algorithm that returns us the points that can be reached from some other point
in a specified maximum number of steps. For example, if we ask it to
return the points that can be reached in two steps starting from B, the algorithm has
to return C, D, E and F, but not G because G takes three steps from B.

Our approach is to keep, for each point in the graph, the set of other points
that it can reach in one step —this is the “next_step” set. We  
also have a “result” set that keeps all points that we have found so far. We start by
setting the result set equal to the next_step set for the departure point. Now
we have in the result set all points that one can reach in one step. Then, for
every point in our result set, we create a union of the result set and the
next_step set for that point. This process is iterated for a specified number of loops.

---

An example may clarify the procedure outlined above. When the departure
point is B, we start by setting the result set to D and E —these are the
points that one can reach from B in one step. Then, we walk through
the result set. The first point that we encounter in the set is D, and we check
what points can be reached from D in one step: these are C and F. So we add
C and F to the result set. We knew that the points that can be reached from
D in one step are C and F, because C and F are in the next_step set for

D. So what we do is to merge the next_step set for point D into the result
set. The merge is called a “union” in set theory. That handles D. The original
result set also contained point E, but the next_step set for E is empty, so
no more point is added. The new result set therefore now contains C, D, E and F.

![img](https://i.ibb.co/m9Dq7x2/image.png)

A set is a general purpose container for elements. The only information that
a set holds of an element is whether it is present in the set or not. The order
of elements in a set is insignificant and a set cannot contain the same element

multiple times. The pawn language does not provide a “set” data type or
operators that work on sets. However, sets with up to 32 elements can be
simulated by bit operations. It takes just one bit to store a “present/absent”
status and a 32-bit cell can therefore maintain the status for 32 set elements
—provided that each element is assigned a unique bit position.

The relation between set operations and bitwise operations is summarized in
the following table. In the table, an upper case letter stands for a set and a
lower case letter for an element from that set.

| concept      | mathematical notation | pawn expression |
| ------------ | --------------------- | --------------- |
| intersection | A ∩ B                 | A & B           |
| union        | A ∪ B                 | A I B           |
| complement   | A                     | ~A              |
| empty set    | ε                     | 0               |
| membership   | x ∈ A                 | (1 << x ) & A   |

---

To test for membership —that is, to query whether a set holds a particular
element, create a set with just one element and take the intersection. If the
result is 0 (the empty set) the element is not in the set. Bit numbering starts
typically at zero; the lowest bit is bit 0 and the highest bit in a 32-bit cell
is bit 31. To make a cell with only bit 7 set, shift the value 1 left by seven
—or in a pawn expression: “1 << 7”.

Below is the program that implements the algorithm described earlier to find
all points that can be reached from a specific departure in a given number of
steps. The algorithm is completely in the findtargets function.

Listing: set.p

```c

/*  Set  operations,  using  bit  arithmetic  */

main()
{
    enum  (<<=  1)  {  A  =  1,  B,  C,  D,  E,  F,  G  }
    new  nextstep[]  =

        {  C  |  E,       /*  A  can  reach  C  and  E  */
           D  |  E,          /*  B    "        "      D  and  E  */
           G,                /*  C    "        "      G  */
           C  |  F,          /*  D    "        "      C  and  F  */
           0,                /*  E    "        "      none  */
           0,                /*  F    "        "      none  */
           E  |  F,          /*  G    "        "      E  and  F  */
        }
    #pragma  unused  A,  B

    print  "The  departure  point:  "
    new  source  =  clamp(  .value  =  toupper(getchar())  -  ’A’,
                .min  =  0,
                .max  =  sizeof  nextstep  -  1
                 )
    print  "\nThe  number  of  steps:  "
    new  steps  =  getvalue()

    /*  make  the  set  */
    new  result  =  findtargets(source,  steps,  nextstep)
    printf  "The  points  reachable  from  %c  in  %d  steps:  ",  source+’A’,
    steps
    for  (new  i  =  0;  i  <  sizeof  nextstep;  i++)
        if  (result  &  1  <<  i)
            printf  "%c  ",  i  +  ’A’
}

findtargets(source,  steps,  nextstep[],  numpoints  =  sizeof  nextstep)
{
    new  result  =  0
    new  addedpoints  =  nextstep[source]
    while  (steps--  >  0  &&  result  !=  addedpoints)
    {
        result  =  addedpoints
        for  (new  i  =  0;  i  <  numpoints;  i++)
            if  (result  &  1  <<  i)
                addedpoints  |=  nextstep[i]
    }
    return  result
}

```

---

The enum statement just below the header of the main function declares the
constants for the nodes A to G, but with a twist. Usually, the enum starts
counting from zero; here, the value of the first constant, A, is explicitly set to

1.  More noteworthy is the expression “(<<= 1)” between the enum keyword
    and the opening brace that starts the constant list: it specifies a “bit
    shifting” increment. By default, every constant in an enum list gets a value that is
    1 above its predecessor, but you can specify every successive constant
    in an enumeration to have a value that is:

_its predecessor incremented by any value (not just 1) —e.g., “(+= 5)”;_

_its predecessor multiplied by any value —e.g., “(_= 3)”;\_

_its predecessor bit-shifted to the left by any value —e.g., “(<<= 1)”;_

Note that, in binary arithmetic, shifting left by one bit amounts to the same
as multiplying by two, meaning that `(/*= 2)` and `(<<= 1)` do the same thing.

When working with sets, a typical task that pops up is to determine the number
of elements in the set. A straightforward function that does this is below:

Listing: simple bitcount function

```c

bitcount(set)
{
    new  count  =  0
    for  (new  i  =  0;  i  <  cellbits;  i++)
        if  (set  &  (1  <<  i))
            count++
    return  count
}

```

With a cell size of 32 bits, this function’s loop iterates 32 times to check for
a single bit at each iteration. With a bit of binary arithmetic magic, we can
reduce it to loop only for the number of bits that are “set”.  
That is, the following function iterates only once if the input value has only one bit set:

Listing: improved bitcount function

```c

bitcount(set)
{
    new  count  =  0
    if  (set)
        do
            count++
        while  ((set  =  set  &  (set  -  1)))
    return  count
}

```

---

`“enum” statement: 101`

`“cellbits” constant: 102`

---

### • A simple RPN calculator

The common mathematical notation, with expressions like “26 3 (5 + 2)”,
is known as the algebraic notation. It is a compact notation and  
we have
grown accustomed to it. pawn and by far most other programming languages
use the algebraic notation for their programming expressions. The algebraic

notation does have a few disadvantages, though. For instance, it occasionally
requires that the order of operations is made explicit by folding a part of the
expression in parentheses. The expression at the top of this paragraph  
can
be rewritten to eliminate the parentheses, but at the cost of nearly doubling
its length. In practice, the algebraic notation is augmented with precedence
level rules that say, for example, that multiplication goes before addition and
subtraction.∗ Precedence levels greatly reduce the need for parentheses, but it
does not fully avoid them. Worse is that when the number of operators grows large,
the hierarchy of precedence levels and the particular precedence  
level for each operator becomes hard to memorize —which is why an operator-rich
language as APL does away with precedence levels altogether.

Around 1920, the Polish mathematician Jan ´Lukasiewicz demonstrated that
by putting the operators in front of their operands, instead of between them,

precedence levels became redundant and parentheses were never necessary.
This notation became known as the “Polish Notation”.† Charles Hamblin
proposed later to put operators behind the operands, calling it the “Reverse Polish Notation”.

---

###### ∗ These rules are often summarized in a mnemonic like “Please Excuse My Dear Aunt Sally” (Parentheses, Exponentiation, Multiplication, Division, Addition, Subtraction)

###### \* Polish Notation is completely unrelated to “Hungarian Notation” —which is just the habit of adding “type” or “purpose” identification warts to names of variables or functions

---

`Algebraic notation is also called “infix” notation`

`Reverse Polish Notation is also called “postfix” notation`

---

The advantage of reversing the order is that the operators
are listed in the same order as they must be executed: when  
reading the operators from the left to the right, you also have the operations to perform in
that order. The algebraic expression from the beginning of this section would
read in rpn as:

`26 3 5 2 + × −`

When looking at the operators only, we have: first an addition, then a mul-
tiplication and finally a subtraction. The operands of each operator are read
from right to left: the operands for the + operator are the values 5  
and 2, those for the operator are the result of the previous addition
and the value 3, and so on.

It is helpful to imagine the values to be stacked on a pile, where the operators
take one or more operands from the top of the pile and put a result back on top
of the pile. When reading through the rpn expression, the values 26, 3, 5 and
2 are “stacked” in that order. The operator + removes the top two elements

from the stack (5 and 2) and pushes the sum of these values back —the stack
now reads “26 3 7”. Then, the operator removes 3 and 7 and pushes the
product of the values onto the stack —the stack is “26 21”. Finally, the
operator subtracts 21 from 26 and stores the single value 5, the end result of
the expression, back onto the stack.

Reverse Polish Notation became popular because it was easy to understand and
easy to implement in (early) calculators. It also opens the way to operators
with more than two operands (e.g. integration) or operators with more than
one result (e.g. conversion between polar and cartesian coordinates).

The main program for a Reverse Polish Notation calculator is below:

Listing: rpn.p

```c

/*  a  simple  RPN  calculator  */
#include  strtok
#include  stack
#include  rpnparse

main()
{
    print  "Type  an  expression  in  Reverse  Polish  Notation:  "
    new  string[100]
    getstring  string,  sizeof  string
    rpncalc  string
}

```

---

The main program contains very little code itself; instead it includes the re-
quired code from three other files, each of which implements a few functions
that, together, build the rpn calculator. When programs or scripts get larger,
it is usually advised to spread the implementation over several files, in
order to make maintenance easier.

Function main first puts up a prompt and calls the native function getstring
to read an expression that the user types. Then it calls the custom function
rpncalc to do the real work. Function rpncalc is implemented in the  
file rpnparse.inc, reproduced below:

Listing: rpnparse.inc

````c

/*  main  rpn  parser  and  lexical  analysis,  part  of  the  RPN  calculator  */
#include  <rational>
#include  <string>

enum  token
{
    t_type,                       /*  operator  or  token  type  */
    Rational:  t_value,           /*  value,  if  t_type  is  "Number"  */
    t_word[20],                   /*  raw  string  */

}

const  Number     =  ’0’
const  EndOfExpr  =  ’#’

rpncalc(const  string[])
{
    new  index
    new  field[token]
    for  (  ;;  )
    {
        field  =  gettoken(string,  index)
        switch  (field[t_type])
        {
            case  Number:
                push  field[t_value]
            case  ’+’:
                push  pop()  +  pop()
            case  ’-’:
                push  -  pop()  +  pop()
            case  ’*’:
                push  pop()  *  pop()
            case  ’/’,  ’:’:
                push  1.0  /  pop()  *  pop()
            case  EndOfExpr:
                break      /*  exit  "for"  loop  */
            default:
                printf  "Unknown  operator  ’%s’\n",  field[t_word]
        }
    }
    printf  "Result  =  %r\n",  pop()
    if  (clearstack())
        print  "Stack  not  empty\n",  red
}

gettoken(const  string[],  &index)
{
    /*  first  get  the  next  "word"  from  the  string  */
    new  word[20]
    word  =  strtok(string,  index)

    /*  then  parse  it  */
    new  field[token]
    field[t_word]  =  word
    if  (strlen(word)  ==  0)
    {
        field[t_type]  =  EndOfExpr  /*  special  "stop"  symbol  */
        field[t_value]  =  0
    }
    else  if  (’0’  <=  word[0]  <=  ’9’)
    {
        field[t_type]  =  Number
        field[t_value]  =  rationalstr(word)
    }
    else
    {
        field[t_type]  =  word[0]
        field[t_value]  =  0
    }
    return  field

}

```***

The rpn calculator uses rational number support and rpnparse.inc includes
the “rational” file for that purpose. Almost all of the operations on rational
numbers is hidden in the arithmetic. The only direct references to
rational numbers are the “%r” format code in the printf statement near the bottom
of function rpncalc and the call to rationalstr halfway function gettoken.

The first remarkable element in the file rpnparse.inc is the enum
declaration, where one element has a tag (t_field) and the other element has a size
(t_word). Function rpncalc declares variable field as an array using
the enumeration symbol as its size. Behind the screens, this declaration does more
than just create an array with 22 cells:

/*The index tag of the array is set to the tag name “token:”. This means that you can index the array with any of the elements from the enumeration, but not with values that have a different tag. In other words, field[t_type] is okay, but field[1] gives a parser diagnostic.

/*The tag name of the enumeration overrules the tag name of the array variable, if any. The field variable is untagged, but field[t_value] has the tag Rational:, because the enumeration element t_value is declared as such. This, hence, allows you to create an array whose elements have different tag names.

/*When the enumeration element has a size, the array element indicated with that element is sometimes treated as a sub-array. In rpncalc, expression “field[t_type]” is a single cell, “field[t_value]” is a single cell, but “field[t_word]” is a one-dimensional array of 20 cells. We see that specifically in the line:

    printf  "Unknown  operator  ’%s’\n",  field[t_word]

where the format code %s expects a string —a zero-terminated array.





`Rational numbers, see also the “Celsius to Fahrenheit” example on page page 16`

`“enum” statement: 101`

`Another example of an index tag: page 68`



// came to here




***

If you know C/C⁺⁺  or Java, you may want to look at the switch statement.
The switch statement differs in a number of ways from the other languages
that provide it. The cases are not fall-through, for example, which in
turn means that the break statement for the case EndOfExpr breaks out of the
enclosing loop, instead of out of the switch.

On the top of the for loop in function rpncalc, you will find the
instruction “field = gettoken(string, index)”. As already exemplified in the
wcount.p (“word count”) program on page 19, functions may return arrays.
It gets more interesting for a similar line in function gettoken:

field[t_word] = word

where word is an array of 20 cells and field is an array of 22 cells.
However, as the t_word enumeration field is declared as having a size of 20 cells,
“field[t_word]” is considered a sub-array of 20 cells, precisely matching the
array size of word.

Listing: strtok.inc

```c

/* extract words from a string (words must be separated by white space) */
#include <string>

strtok(const string[], &index)
{
    new length = strlen(string)

    /* skip leading white space */
    while (index < length && string[index] <= ’ ’)
        index++

    /* store the word letter for letter */
    new offset = index     /* save start position of token */
    new result[20]         /* string to store the word in */
    while (index < length
        && string[index] > ’ ’
        && index - offset < sizeof result - 1)
        {
            result[index - offset] = string[index]
            index++
        }
    result[index - offset] = EOS /* zero-terminate the string */

    return result
}

````

---

`“switch” statement: page 115`

---

Function strtok is the same as the one used in the wcount.p example. It is
implemented in a separate file for the rpn calculator program. Note that the
strtok function as it is implemented here can only handle words with up to 19

characters —the 20th character is the zero terminator. A truly general purpose
re-usable implementation of an strtok function would pass the destination
array as a parameter, so that it could handle words of any size. Supporting
both packed and unpack strings would also be a useful feature of a  
general purpose function.

When discussing the merits of Reverse Polish Notation, I mentioned that a
stack is both an aid in “visualizing” the algorithm as well as a  
convenient method to implement an rpn parser. This example rpn calculator, uses
a stack with the ubiquitous functions push and pop. For error checking  
and resetting the stack, there is a third function that clears the stack.

Listing: stack.inc

```c

/* stack functions, part of the RPN calculator */
#include <rational>

static Rational: stack[50]
static stackidx = 0

push(Rational: value)
{
    assert stackidx < sizeof stack
    stack[stackidx++] = value
}

Rational: pop()
{
    assert stackidx > 0
    return stack[--stackidx]
}

clearstack()
{
    assert stackidx >= 0
    if (stackidx == 0)
        return false
    stackidx = 0
    return true
}

```

---

`wcount.p: page 19`

---

The file stack.inc includes the file rational again. This is technically not
necessary (rpnparse.inc already included the definitions for rational number
support), but it does not do any harm either and, for the sake of code re-use,
it is better to make any file include the definitions of the libraries that it
depends on.

Notice how the two global variables stack and stackidx are declared  
as “static” variables; using the keyword static instead of new. Doing this makes
the global variables “visible” in that file only. For all other files in a  
larger project, the symbols stack and stackidx are invisible and they cannot (ac-
cidentally) modify the variables. It also allows the other modules to declare
their own private variables with these names, so it avoids name clashing.

The rpn calculator is actually still a fairly small program, but it has been set
up as if it were a larger program. It was also designed to demonstrate a set
of elements of the pawn language and the example program could have been
implemented more compactly.

### • Event-driven programming

All of the example programs that were developed in this chapter so far, have
used a “lineal” programming model: they start with main and the code deter-
mines what to do and when to request input. This programming model is easy
to understand and it nicely fits most programming languages, but it is also a
model does not fit many “real life” situations. Quite often, a program cannot
simply process data and suggest that the user provides input only when it is
ready for him/her. Instead, it is the user who decides when to provide input,
and the program or script should be prepared to process it in an acceptable
time, regardless of what it was doing at the moment.

The above description suggests that a program should therefore be able to in-
terrupt its work and do other things before picking up the original task. In
early implementations, this was indeed how such functionality was implemented: a
multi-tasking system where one task (or thread) managed the background tasks
and a second task/thread that sits in a loop continuously requesting user input.
This is a heavy-weight solution, however. A more light-weight implementation
of a responsive system is what is called the “event-driven” programming model.

---

In the event-driven programming model, a program or script decomposes any
lengthy (background) task into short manageable blocks and in between, it is
available for input. Instead of having the program poll for input, however, the
host application (or some other sub-system) calls a function that is attached
to the event —but only if the event occurs.

A typical event is “input”. Observe that input does not only come from human
operators. Input packets can arrive over serial cables, network stacks,
internal
sub-systems such as timers and clocks, and all kinds of other equipment that
you may have attached to your system. Many of the apparatus that produce
input, just send it. The arrival of such input is an event, just like a key
press.
If you do not catch the event, a few of them may be stored in an  
internal
system queue, but once the queue is saturated the events are simply dropped.

pawn directly supports the event-driven model, because it supports multiple
entry points. The sole entry point of a lineal program is main; an event-driven
program has an entry point for every event that it captures. When compared to
the lineal model, event-driven programs often appear “bottom-up”: instead of

your program calling into the host application and deciding what to do next,
your program is being called from the outside and it is required to  
respond
appropriately and promptly.

pawn does not specify a standard library, and so there is no guarantee that in
a particular implementation, functions like printf and getvalue. Although
it is suggested that every implementation provides a minimal console/terminal
interface with a these functions, their availability is ultimately
implementation-

dependent. The same holds for the public functions —the entry points for a
script. It is implementation-dependent which public functions a host applica-
tion supports. The script in this section may therefore not run on your platform
(even if all previous scripts ran fine). The tools in the standard
distribution of
the pawn system support all scripts developed in this manual, provided that

your operating system or environment supports standard terminal functions

such as setting the cursor position.

An early programming language that was developed solely for teaching the
concepts of programming to children was “Logo”. This dialect of LISP made
programming visual by having a small robot, the “turtle”, drive over the floor
under control of a simple program. This concept was then copied to moving
a (usually triangular) cursor of the computer display, again under control of a
program. A novelty was that the turtle now left a trail behind it, allowing you
to create drawings by properly programming the turtle —it became known as turtle graphics.

---

`Public functions: 83`

---

The term “turtle graphics” was also used for drawing inter-
actively with the arrow keys on the keyboard and a “turtle” for the current
position. This method of drawing pictures on the computer was briefly popular
before the advent of the mouse.

Listing: turtle.p

```c

@keypressed(key)
{
    /_ get current position */
    new x, y
    wherexy x, y

    /_ determine how the update the current position */
    switch (key)
    {
        case ’u’: y-- /_ up */
        case ’d’: y++ /_ down */
        case ’l’: x-- /_ left */
        case ’r’: x++ /_ right */
        case ’\e’: exit /_ Escape = exit */
    }

    /_ adjust the cursor position and draw something */
    moveturtle x, y
}

moveturtle(x, y)
{
    gotoxy x, y
    print ’/*’
    gotoxy x, y
}

```

The entry point of the above program is @keypressed —it is called on a
key press. If you run the program and do not type any key, the  
function @keypressed never runs; if you type ten keys, @keypressed runs ten times.
Contrast this behaviour with main: function main runs immediately after you
start the script and it runs only once.

It is still allowed to add a main function to an event-driven program: the main
function will then serve for one-time initialization. A simple addition to this
example program is to add a main function, in order to clear the  
console/
terminal window on entry and perhaps set the initial position of the “turtle”
to the centre.

Support for function keys and other special keys (e.g. the arrow keys) is highly
system-dependent. On ANSI terminals, these keys produce different codes
than in a Windows “DOS box”.

---

In the spirit of keeping the example program
portable, I have used common letters (“u” for up, “l” for left, etc.). This
does not mean, however, that special keys are beyond pawn’s capabilities.

In the “turtle” script, the “Escape” key terminates the host application through
the instruction exit. For a simple pawn run-time host, this will indeed work.
With host applications where the script is an add-on, or  
host-applications

that are embedded in a device, the script usually cannot terminate the host application.

### • Multiple events

The advantages of the event-driven programming model, for building reactive
programs, become apparent in the presence of multiple events. In fact,
the event-driven model is only useful if you have more that one entry  
point; if your script just handles a single event, it might as well enter a polling
loop for that single event. The more events need to be handled, the  
harder the lineal programming model becomes. The script below implements a bare-bones
“chat” program, using only two events: one for sending and one for receiving.
The script allows users on a network (or perhaps over another connection) to
exchange single-line messages.

The script depends on the host application to provide the native and public
functions for sending and receiving “datagrams” and for responding to keys
that are typed in. How the host application sends its messages, over a serial
line or using TCP/IP, the host application may decide itself. The tools in the

standard pawn distribution push the messages over the TCP/IP network, and
allow for a “broadcast” mode so that more than two people can chat with each other.

---

Listing: chat.p

```c

#include <datagram>

@receivestring(const message[], const source[])
printf "[%s] says: %s\n", source, message

@keypressed(key)
{
    static string[100 char]
    static index

    if (key == ’\e’)
        exit /* quit on ’Esc’ key */

    echo key

    if (key == ’\r’ || key == ’\n’ || index char == sizeof string)
    {
        string{index} = ’\0’ /* terminate string */
        sendstring string

        index = 0
        string[index] = ’\0’
    }
    else
        string{index++} = key
}

echo(key)
{
    new string[2 char] = { 0 }
    string{0} = key == ’\r’ ? ’\n’ : key
    printf string
}

```

The bulk of the above script handles gathering received key-presses  
into a string and sending that string after seeing the enter key. The “Escape” key
ends the program. The function echo serves to give visual feedback of what
the user types: it builds a zero-terminated string from the key and prints it.

Despite its simplicity, this script has the interesting property that there is
no fixed or prescribed order in which the messages are to be sent or received —
there is no query–reply scheme where each host takes its turn in talking &
listening. A new message may even be received while the user is typing its
own message.∗

• State programming

In a program following the event-driven model, events arrive individually, and
they are also responded to individually. On occasion, though, an event is part
of a sequential flow, that must be handled in order. Examples are data transfer
protocols over, for example, a serial line. Each event may carry a command,
a snippet of data that is part of a larger file, an acknowledgement, or
other signals that take part in the protocol.

---

###### ∗ As this script makes no attempt to separate received messages from typed messages (for example, in two different scrollable regions), the terminal/console will look confusing when this happens. With an improved user-interface, this simple script could indeed be a nice message-base chat program

---

For the stream of events (and the data packets that they carry) to make sense,
the event-driven program must follow a precise hand-shaking protocol.

To adhere to a protocol, an event-driven program must respond to each event in
compliance with the (recent) history of events received earlier and the
responses to those events. In other words, the handling of one event may set
up a “condition” or “environment” for the handling any one or more subsequent events.

A simple, but quite effective, abstraction for constructing reactive systems
that need to follow (partially) sequential protocols, is that of the “automaton” or
state machine. As the number of states are usually finite, the theory often
refers to such automatons as Finite State Automatons or Finite State Machines. In
an automaton, the context (or condition) of an event is its state. An event
that arrives may be handled differently depending on the state of the automaton,
and in response to an event, the automaton may switch to another state —
this is called a transition. A transition, in other words, as a response of the
automaton to an event in the context of its state.

Automatons are very common in software as well as in mechanical devices (you
may see the Jacquard Loom as an early state machine). Automatons, with a
finite number of states, are deterministic (i.e. predictable in behaviour)
and their relatively simple design allows a straightforward
implementation from a “state diagram”.

![State diagram](https://i.ibb.co/k3kWVvy/image.png)

In a state diagram, the states are usually represented as circles or  
rounded rectangles and the arrows represent the transitions. As transitions are
the response of the automaton to events, an arrow may also be seen as an event “that does something”.

---

An event/transition that is not defined in a particular
state is assumed to have no effect —it is silently ignored. A filled dot
represents the entry state, which your program (or the host application) must set in start-
up. It is common to omit in a state diagram all event arrows that drop back
into the same state, but here I have chosen to make the response to all events explicit.

This state diagram is for “parsing” comments that start with `/*` and end
with `*/`. There are states for plain text and for text inside a comment, plus
two states for tentative entry into or exit from a comment. The automaton
is intended to parse the comments interactively, from characters that the user
types on the keyboard. Therefore, the only events that the automaton reacts
on are key presses. Actually, there is only one event (“key-press”) and  
the state switches are determined by event’s parameter: the key.

pawn supports automatons and states directly in the language. Every func-
tion∗ may optionally have one or more states assigned to it. pawn also supports
multiple automatons, and each state is part of a particular automaton. The

following script implements the preceding state diagram (in a single, anony-
mous, automaton). To differentiate plain text from comments, both are output
in a different colour.

Listing: comment.p

```c

/* parse C comments interactively, using events and a state machine */

main()
    state plain

@keypressed(key) <plain>
{
    state (key == ’/’) slash
    if (key != ’/’)
        echo key
}

@keypressed(key) <slash>
{
    state (key != ’/’) plain
    state (key == ’/*’) comment
    echo ’/’    /* print ’/’ held back from previous state */
    if (key != ’/’)
        echo key
}

@keypressed(key) <comment>
{
    echo key
    state (key == ’/*’) star
}

@keypressed(key) <star>
{
    echo key
    state (key != ’/*’) comment
    state (key == ’/’) plain
}

echo(key) <plain, slash>
    printchar key, yellow

echo(key) <comment, star>
    printchar key, green

printchar(ch, colour)
{
    setattr .foreground = colour
    printf "%c", ch
}

```

---

###### ∗ With the exception of “native functions” and user-defined operators.

---

Function main sets the starting state to main and exits; all logic  
is eventdriven. when a key arrives in state plain, the program checks for  
a slash and conditionally prints the received key. The interaction between the states
plain and slash demonstrates a complexity that is typical for automatons:
you must decide how to respond to an event when it arrives, without being
able to “peek ahead” or undo responses to earlier events. This is usually the
case for event-driven systems —you neither know what event you will receive
next, nor when you will receive it, and whatever your response to the current
event, there is a good chance that you cannot erase it on a future event and
pretend that it never happened.

In our particular case, when a slash arrives, this might be the start of a
comment sequence (`/*`), but it is not necessarily so. By inference, we cannot decide
on reception of the slash character what colour to print it in. Hence, we hold
it back. However, there is no global variable in the script that says
that a character is held back —in fact, apart from function parameters, no variable
is declared at all in this script. The information about a character being held
back is “hidden” in the state of the automaton.

As is apparent in the script, state changes may be conditional. The condition
is optional, and you can also use the common if–else construct to change states.

Being state-dependent is not reserved for the event functions. Other functions
may have state declarations as well, as the echo function demonstrates. When
a function would have the same implementation for several states, you
just need to write a single implementation and mention all applicable states. For
function echo there are two implementations to handle the four states.†

That said, an automaton must be prepared to handle all events in any state.
Typically, the automaton has neither control over which events arrive nor over
when they arrive, so not handling an event in some state could lead to wrong
decisions. It frequently happens, then, that a some events are meaningful only
in a few specific states and that they should trigger an error or “reset” pro-
cedure in all other cases. The function for handling the event in such “error”
condition might then hold a lot of state names, if you were to mention them
explicitly. There is a shorter way: by not mentioning any name between the
angle brackets, the function matches all states that have not explicit imple-
mentation elsewhere. So, for example, you could use the signature `echo(key) <>`
for either of the two implementations (but not for both).

A single anonymous automaton is pre-defined. If a program contains more
than one automaton, the others must be explicitly mentioned, both in  
the state classifier of the function and in the state instruction. To do so, add the
name of the automaton in front of the state name and separate the names of
the automaton and the state with a colon. That is, “parser:slash” stands
for the state slash of the automaton parser. A function can only be part of a
single automaton; you can share one implementation of a function for several
states of the same automaton, but you cannot share that function for states
of different automatons.

### • Entry functions and automata theory

State machines, and the foundation of “automata theory”, originate from me-
chanical design and pneumatic/electric switching circuits (using relays rather
than transistors). Typical examples are coin acceptors, traffic light control
and communication switching circuits. In these applications, robustness and pre-
dictability are paramount, and it was found that these goals were best achieved
when actions (output) were tied to the states rather than to the events (input).

---

###### \* A function that has the same implementation for all states, does not need a state classifierat all —see printchar.

---

![pcl](https://i.ibb.co/PYnBGS9/image.png)

###### Figure 1: Pedestrian crossing lights

---

Entering a state (optionally) causes activity; events cause state changes, but
do not carry out other operations.

In a pedestrian crossing lights system, the lights for the vehicles and the
pedestrians must be synchronized. Obviously, the combination of a green light for
the traffic and a “walk” sign for the pedestrians is recipe for disaster. We
can also immediately dismiss the combination of yellow /walk as too  
dangerous. Thus, four combinations remain to be handled. The figure below is a  
state diagram for the pedestrian crossing lights. The entire process is activated with
a button, and operates on a timer.

![pcl](https://i.ibb.co/9wNR3ry/image.png)

When the state red/walk times out, the state cannot immediately go back to
green/wait, because the pedestrians that are busy crossing the road at  
that moment need some time to clear the road —the state red/wait
allows for this.

---

For purpose of demonstration, this pedestrian crossing has the added
functionality that when a pedestrian pushes the button while the light for the
traffic is already red, the time that the pedestrian has for crossing is lengthened.
If the state is red/wait and the button is pressed, it switches back to red/walk.
The englobing box around the states red/walk and red/wait for handling the
button event is just a notational convenience: I could also have  
drawn two arrows from either state back to red/walk. The script source code  
(which follows below) reflects this same notational convenience, though.

In the implementation in the pawn language, the event functions now always
have a single statement, which is either a state change or an empty statement.
Events that do not cause a state change are absent in the diagram, but they
must be handled in the script; hence, the “fall-back” event functions that do nothing.

The output, in this example program only messages printed on the
console, is all done in the special functions entry. The function entry may
be seen as a main for a state: it is implicitly called when the  
state that it is attached to is entered. Note that the entry function is also called  
when “switching” to the state that the automaton is already in: when the state is
red_walk an invocation of the @keypressed sets the state to red_walk (which
it is already in) and causes the entry function of red_walk to run —this is a
re-entry of the state.

Listing: traffic.p

```c

/* traffic light synchronizer, using states in an event-driven model */
#include <time>

main()                     state green_wait

@keypressed(key) <green_wait>         state yellow_wait
@keypressed(key) <red_walk, red_wait>     state red_walk
@keypressed(key) <>             {} /* fallback */

@timer() <yellow_wait>            state red_walk
@timer() <red_walk>             state red_wait
@timer() <red_wait>             state green_wait
@timer() <>                 {} /* fallback */

entry() <green_wait>
    print "Green / Don’t walk\n"

entry() <yellow_wait>
{
    print "Yellow / Don’t walk\n"
    settimer 2000
}

entry() <red_walk>
{
    print "Red / Walk\n"
    settimer 5000
}

entry() <red_wait>
{
    print "Red / Don’t walk\n"
    settimer 2000
}

```

---

This example program has an additional dependency on the host application/
environment: in addition to the “@keypressed” event function, the host must
also provide an adjustable “@timer” event. Because of the timing functions,
the script includes the system file time.inc near the top of the script.

The event functions with the state changes are all on the top part of the
script. The functions are laid out to take a single line each, to suggest a  
table-like structure. All state changes are unconditional in this example, but conditional
state changes may be used with entry functions too. The bottom part are the
event functions.

Two transitions to the state red_walk exist —or three if you consider  
the affection of multiple states to a single event function as a mere  
notational convenience: from yellow_wait and from the combination of red_walk and
red_wait. These transitions all pass through the same entry function, thereby
reducing and simplifying the code.

In automata theory, an automaton that associates output with state entries,
such as this pedestrian traffic lights example, is a “Moore automaton”; an au-
tomaton that associates output with (state-dependent) events or transitions is
a “Mealy automaton”. The interactive comment parser on page 40 is a typical
Mealy automaton. The two kinds are equivalent: a Mealy automaton can be
converted to a Moore automaton and vice versa, although a Moore automa-
ton may need more states to implement the same behaviour. In practice, the
models are often mixed, with an overall “Moore automaton” design, and a few
“Mealy states” where that saves a state.

• State variables

The previous example was crafted to demonstrate a few properties of  
state programming with pawn, but its model of a pedestrian crossing light is not

very realistic. The first thing that is lacking is a degree of fairness : pedestrians
should not be able to block car traffic indefinitly. The car traffic should
see a green light for a period of some minimum duration after pedestrians have had
their time slot for crossing the road. Secondly, many traffic lights have a kind
of remote control ability, so that emergency traffic (ambulance, firetruck, . . . )
can force green lights on their path. A well-known example of such remote

control is the mirt system (Mobile Infra-Red Transmitter) but not de facto
standard exists —the Netherlands use a radiographic system called vetag for
instance.

---

The new state diagram for the pedestrian crossing light has two more states,
but more importantly: it needs to save data across events and share it between
states. When the pedestrian presses the button while the state is red_wait, we
neither want to react on the button immediately (this was our “fairness rule”),
nor the button to be ignored or “forgotten”. In other words, we move to the
state green_wait_interim regardless of the button press, but memorize the
press for a decision made at the point of leaving state green_wait_interim.

Automatons excel in modelling control flow in reactive/interactive
systems, but data flow has traditionally been a weak point. To see why, consider that
each event is handled individually by a function and that the local variables in
that function disappear when the function returns. Local variables can, hence,
not be used to pass data from one event to the next. Global variables, while
providing a work-around, have drawbacks: global scope and and  
“eternal” lifespan. If a variable is used only in the event handlers of a single state,
it is desirable to hide it from the other states, in order to protect it from
accidental modification. Likewise, shortening the lifespan to the state(s) that the
variable is active in, reduces the memory footprint. “State variables” provide
this mix of variable scope and variable lifespan that are tied to a series of states,
rather than to functions or modules.

pawn enriches the standard finite state machine (or automaton) with variables
that are declared with a state classifier. These variables are only
accessible from the listed states and the memory these variable hold may be  
reused by other purposes while the automaton is in a different state (different than
the ones listed). Apart from the state classifier, the declaration of a state

variable is similar to that of a global variable. The declaration of the
variable button_memo in the next listing illustrates the concept.

---

Listing: traffic2.p

```c

/* a more realistic traffic light synchronizer, including an
 * "override" for emergency vehicles
 */

#include <time>

main()
    state green_wait_interim

new bool: button_memo <red_wait, green_wait_interim, yellow_wait>

@keypressed(key)
{
    switch (key)
    {
        case ’ ’: button_press
        case ’/*’: mirt_detect
    }
}

button_press() <green_wait>
    state yellow_wait

button_press() <red_wait, green_wait_interim>
    button_memo = true

button_press() <>         /* fallback */
    {}

mirt_detect()
    state mirt_override

@timer() <yellow_wait>
    state red_walk

@timer() <red_walk>
    state red_wait

@timer() <red_wait>
    state green_wait_interim

@timer() <green_wait_interim>
{
    state (!button_memo) green_wait
    state (button_memo) yellow_wait
}

@timer() <mirt_override>
    state green_wait

@timer() <>             /* fallback */
    {}

entry() <green_wait_interim>
{
    print "Green / Don’t walk\n"
    settimer 5000
}

entry() <yellow_wait>
{
    print "Yellow / Don’t walk\n"
    button_memo = false
    settimer 2000
}

entry() <red_walk>
{
    print "Red / Walk\n"
    settimer 5000
}

entry() <red_wait>
{
    print "Red / Don’t walk\n"
    settimer 2000
}

entry() <mirt_override>
{
    print "Green / Don’t walk\n"
    settimer 5000
}

```

---

If a pedestrian pushes the button during mirt activity, that button press
is
forgotten. Unless emergencies are a frequent occurence, this is  
probably a
minor nuisance; and it is easy to fix, too.

• State programming wrap-up

States are ubiquitous, even if we do not always recognize them as such. The
concept of finite state machines has traditionally been applied mostly to pro-

grams mimicking mechanical apparatus and software that implements commu-
nication protocols. With the appearance of event-driven windowing systems,
state machines now also appear in the GUI design of desktop programs. States
abound in web programs, because the browser and the web-site scripting host
have only a weak link, but the state machine in web applications is typically
implemented in an ad-hoc manner.

States can also be recognized in common problems and riddles. In the well
known riddle of the man that must move a cabbage, a sheep and a wolf across a river,
∗ the states are obvious —the trick of the riddle is to avoid the forbidden
states. But now that we are seeing states everywhere, the task is not to overdo it.

---

For example, in the second implementation of a pedestrian crossing light, see
page 47, I used a variable (button_memo) to hold a criterion for a decision made
at a later time. An alternative implementation would be to throw in a couple
of more states to hold the situations “red-wait-&-button-pressed” and “green-
wait-interim-&-button-pressed”. No more variable would then be needed, but
at the cost of a more complex state diagram and implementation. In general,
the number of states should be kept small.

Although automata provide a good abstraction to model reactive and interac-
tive systems, coming to a correct diagram is not straightforward —and some-
times just outright hard. Too often, the “sunny day scenario” of states and
events is plotted out first, and everything straying from this path is then
added on an impromptu basis. This approach carries the risk that some combinations
of events & states are forgotten, and indeed I have encountered two comment
parser diagrams (like the one at page 40) by different book/magazine authors
that were flawed in such way. Instead, I advise to focus on the
events and on the responses for individual events. For every state, every event should be
considered; do not route events through a general purpose fall-back too eagerly.

It has become common practice, unfortunately, to introduce automata theory
with applications for which better solutions exist. One, oft repeated, example
is that of an automaton that accumulates the value of a series of  
coins, or that “calculates” the remainder after division by 3 of a binary number. These
applications may have made sense in mechanical/pneumatic design where “the

∗ A man has to ferry a wolf, a sheep and a cabbage across a  
river in a boat, that just fits 2 things: the man and something else. If left alone the wolf will eat
the sheep and the sheep will eat the cabbage. How can the man ferry them across the river?

state” is the only memory that the automaton has, but in software, using vari-
ables and arithmetic operations is the better choice. Another typical example
is that of matching words or patterns using a state machine: every next let-
ter that is input switches to a new state. Lexical scanners, such as the ones
that compilers and interpreters use to interpret source code, might use such
state machines to filter out “reserved words”. However, for any practical set
of reserved words, such automatons become unwieldy, and no one will design
them by hand. In addition, there is no reason why a lexical scanner cannot
peek ahead in the text or jump back to a mark that it set earlier —which is
one of the criterions for choosing a state implementation in the first place,
and finally, solutions like trie lookups are likely simpler to design and implement
while being at least as quick.

What I have side-stepped in this book is a formal description for the notation
in the state diagrams —in part because it is in line with the usual notation.
For a state, the rounded rectangle holds the name of the state and optionally
a brief description of what the state entry function does. The  
arrow for a transition contains the name of the event (or pseudo-event), an  
optional condition between square brackets and an optional action behind a slash (“/”).

• Program verification

Should the compiler/interpreter not catch all bugs? This rhetorical question
has both technical and philosophical sides. I will forego all  
non-technical aspects and only mention that, in practice, there is a tradeoff
between the “expressiveness” of a computer language and the “enforced correctness” (or
“provable correctness’) of programs in that language. Making a language very
“strict” is not a solution if work needs to be done that exceeds the size of a
toy program. A too strict language leaves the programmer struggling with the
language, whereas the “problem to solve” should be the real struggle and the
language should be a simple means to express the solution in.

The goal of the pawn language is to provide the developer with an informal,
and convenient to use, mechanism to test whether the program behaves as was
intended. This mechanism is called “assertions” and, although the concept of
assertions predates the idea of “design by contract”, it is most easily
explained through the idea of design by contract.

The “design by contract” paradigm provides an alternative approach for deal-
ing with erroneous conditions. The premise is that the programmer  
knows the task at hand, the conditions under which the software must operate and

the environment. In such an environment, each function specifies the specific
conditions, in the form of assertions , that must hold true before a client may
execute the function. In addition, the function may also specify any conditions
that hold true after it completes its operation. This is the “contract” of the
function.

---

The name “design by contract” was coined by Bertrand Meyer and its princi-
ples trace back to predicate logic and algorithmic analysis.

• Preconditions specify the valid values of the input parameters and environmental attributes;

• Postconditions specify the output and the (possibly modified) environment;

• Invariants indicate the conditions that must hold true at key points in a function, regardless of the path taken through the function.

For example, a function that computes a square root of a number may specify
that its input parameter be non-negative. This is a precondition. It may also
specify that its output, when squared, is the input value 0.01%. This is a
postcondition; it verifies that the routine operated correctly. A convenient
way to calculate a square root is via “bisection”. At each iteration, this algorithm
gives at least one extra bit (binary digit) of accuracy. This is an invariant
(it might be an invariant that is hard to check, though).

Preconditions, postconditions and invariants are similar in the sense that they
all consist of a test and that a failed test indicates an error in  
the implementation. As a result, you can implement preconditions, postconditions and
invariants with a single construct: the “assertion”. For preconditions, write
assertions at the very start of the routine; for invariants, write an assertion
where the invariant should hold; for post conditions, write an assertion before
each “return” statement or at the end of the function.

In pawn, the instruction is called assert; it is a simple statement that
contains a test. If the test outcome is ”true”, nothing happens. If the outcome is
”false”, the assert instruction terminates the program with a message containing the
details of the assertion that failed.

Assertions are checks that should never fail. Genuine errors, such  
as user input errors, should be handled with explicit tests in the program, and  
not with assertions. As a rule, the expressions contained in assertions should be
free of side effects: an assertion should never contain code that your
application requires for correct operation.

---

`Example square root funczion (usin bisection): 79`

---

This does have the effect, however, that assertions never fire in a  
bug-free program: they just make the code fatter and slower, without any user-visible
benefit. It is not this bad, though. An additional feature of assertions is
that you can build the source code without assertions simply using a flag or option
to the pawn parser. The idea is that you enable assertions during development
and build the “retail version” of the code without assertions. This is a better
approach than removing the assertions, because all assertions are automatically
“back” when recompiling the program —e.g. for maintenance.

During maintenance, or even during the initial development, if you catch a bug
that was not trapped by an assertion, before fixing the bug, you should think
of how an assertion could have trapped this error. Then, add this assertion
and test whether it indeed catches the bug before fixing the bug. By doing
this, the code will gradually become sturdier and more reliable.

• Documentation comments

When programs become larger, documenting the program and the functions
becomes vital for its maintenance, especially when working in a team. The
pawn language tools have some features to assist you in documenting  
thecode in comments. Documenting a program or library in its comments has a
few advantages —for example: documentation is more easily kept up to date
with the program, it is efficient in the sense that programming comments now
double as documentation, and the parser helps your documentation efforts in
generating syntax descriptions and cross references.

Every comment that starts with three slashes
(“/// ”) followed by white-space, or that starts with a slash and two stars (“//_/_ ”)
followed by white-space is a
special documentation comment. The pawn compiler extracts documentation
comments and optionally writes these to a “report” file. See the application
documentation, or appendix B, how to enable the report generation.

As an aside, comments that start with “/_” must still be closed with “_/”.
Single line documentation comments (“///”) close at the end of the line.

The report file is an XML file that can subsequently be transformed to HTML
documentation via an XSL/XSLT stylesheet, or be run through other tools to
create printed documentation. The syntax of the report file is compatible with
that of the “.Net” developer products —except that the pawn compiler stores
more information in the report than just the extracted documentation strings.
The report file contains a reference to the “smalldoc.xsl” stylesheet.

---

`Comment syntax: 97`

---

The example below illustrates documentation comments in a simple script that
has a few functions. You may write documentation comments for a function
above its declaration or in its body. All documentation comments that appear
before the end of the function are attributed to the function. You can  
also
add documentation comments to global variables and global constants —these
comments must appear above the declaration of the variable or constant. Fig-
ure 2 shows part of the output for this (rather long) example. The style
of the
output is adjustable in the cascading style sheet (CSS-file) associated with the
XSLT transformation file.

Listing: weekday.p

```c

/**

- This program illustrates Zeller’s congruence algorithm to calculate

- the day of the week given a date.

*/

/**

- <summary>

-        The  main  program:  asks  the  user  to  input  a  date  and  prints

  on

-        what  day  of  the  week  that  date  falls.

- </summary>

*/
main()
{
    new day, month, year
    if (readdate(day, month, year))
    {
        new wkday = weekday(day, month, year)
        printf "The date %d-%d-%d falls on a ", day, month, year
        switch (wkday)
        {
            case 0:
            print "Saturday"
            case 1:
            print "Sunday"
            case 2:
            print "Monday"
            case 3:
            print "Tuesday"
            case 4:
            print "Wednesday"
            case 5:
            print "Thursday"
            case 6:
            print "Friday"
        }
    }
    else
        print "Invalid date"
    print "\n"
}

/**

- <summary>

-      The  core  function  of  Zeller’s  congruence  algorithm.  The  function

-      works  for  the  Gregorian  calender.

- </summary>

-

- <param  name="day">

-      The  day  in  the  month,  a  value  between  1  and  31.

- </param>

- <param  name="month">

-      The  month:  a  value  between  1  and  12.

- </param>

- <param  name="year">

-      The  year  in  four  digits.

- </param>

-

- <returns>

-      The  day  of  the  week,  where  0  is  Saturday  and  6  is  Friday.

- </returns>

-

- <remarks>

-      This  function  does  not  check  the  validity  of  the  date;  when

  the

-      date  in  the  parameters  is  invalid,  the  returned  "day  of  the

  week"

-      will  hold  an  incorrect  value.

-      <p/>

-      This  equation  fails  in  many  programming  languages,  notably  most

-      implementations  of  C,  C++  and  Pascal,  because  these  languages

  have

-      a  loosely  defined  "remainder"  operator.  Pawn,  on  the  other

  hand,

-      provides  the  true  modulus  operator,  as  defined  in  mathematical

-      theory  and  as  was  intended  by  Zeller.

- </remarks>

*/

weekday(day, month, year)
{
/**

- <remarks>

-      For  Zeller’s  congruence  algorithm,  the  months  January  and

-      February  are  the  13th  and  14th  month  of  the  <em>preceding</em>

-      year.  The  idea  is  that  the  "difficult  month"  February  (which

-      has  either  28  or  29  days)  is  moved  to  the  end  of  the  year.

- </remarks>

*/

    if (month <= 2)
        month += 12, --year

    new j = year % 100
    new e = year / 100
    return (day + (month+1)*26/10 + j + j/4 + e/4 - 2*e) % 7
}

/**

- <summary>

-      Reads  a  date  and  stores  it  in  three  separate  fields.  tata

- </summary>

-

- <param  name="day">

-      Will  hold  the  day  number  upon  return.

- </param>

- <param  name="month">

-      Will  hold  the  month  number  upon  return.

- </param>

- <param  name="year">

-      Will  hold  the  year  number  upon  return.

- </param>

-

- <returns>

-      <em>true</em>  if  the  date  is  valid,  <em>false</em>  otherwise;

-      if  the  function  returns  <em>false</em>,  the  values  of

-      <paramref  name="day"/>,  <paramref  name="month"/>  and

-      <paramref  name="year"/>  cannot  be  relied  upon.

- </returns>

*/

bool: readdate(&day, &month, &year)
{
    print "Give a date (dd-mm-yyyy): "
    day = getvalue(\_,’-’,’/’)
    month = getvalue(\_,’-’,’/’)
    year = getvalue()
    return 1 <= month <= 12 && 1 <= day <= daysinmonth(month,year)
}

/**

- <summary>

-      Returns  whether  a  year  is  a  leap  year.

- </summary>

-

- <param  name="year">

-      The  year  in  4  digits.

- </param>

-

- <remarks>

-      A  year  is  a  leap  year:

-      <ul>

-          <li>  if  it  is  divisable  by  4,  </li>

-          <li>  but  <strong>not</strong>  if  it  is  divisable  by  100,

</li>

-          <li>  but  it  <strong>is</strong>  it  is  divisable  by  400.

</li>

-      </ul>

- </remarks>

*/

bool: isleapyear(year)

return year % 400 == 0 || year % 100 != 0 && year % 4 == 0

/**

- <summary>

-      Returns  the  number  of  days  in  a  month  (the  month  is  an

  integer

-      in  the  range  1  ..  12).  One  needs  to  pass  in  the  year  as

  well,

-      because  the  function  takes  leap  years  into  account.

- </summary>

-

- <param  name="month">

-      The  month  number,  a  value  between  1  and  12.

- </param>

- <param  name="year">

-      The  year  in  4  digits.

- </param>

*/

daysinmonth(month, year)
{
    static daylist[] = { 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 }
    assert 1 <= month <= 12
    return daylist[month-1] + \_:(month == 2 && isleapyear(year))
}

```

The format of the XML file created by “.Net” developer products is  
documented in the Microsoft documentation. The pawn parser creates a mini-
mal description of each function or global variable or constant that is used  
in a project, regardless of whether you used documentation comments on that
function/variable/constant. The parser also generates few tags of its own:

| name       | info                                                                                                                                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| attribute  | Attributes for a function, such as “native” or “stock”.                                                                                                                                                                            |
| automaton  | The automaton that the function belongs to (if any).                                                                                                                                                                               |
| dependency | The names of the symbols (other functions, global variables and/global constants) that the function requires. If desired, a call tree can be constructed from the dependencies.                                                    |
| param      | Function parameters. When you add a parameter description in a documentation comment, this description is combined with the auto-generated content for the parameter.                                                              |
| paraminfo  | Tags and array or reference information on a parameter.                                                                                                                                                                            |
| referrer   | All functions that refer to this symbol; i.e., all functions that use or call this variable/function. This information is sufficient to serve as a “cross-reference” —the “referrer” tree is the inverse of the “dependency” tree. |

---

![fig2](https://i.ibb.co/VmQS0fL/image.png)

###### Figure 2: Documentation generated from the source code

| name       | info                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stacksize  | The estimated number of cells that the function will allocate on the stack and heap. This stack usage estimate excludes the stack requirements of any functions that are “called” from the function to which the documentation applies. For example, function readdate is documented as taking 6 cells on the stack, but it also calls daysinmonth which takes 4 additional cells —and in turn calls isleapyear. To calculate the total stack requirements for function readdate, the call tree should be considered. In addition to the local variables and function parameters, the compiler also uses the stack for storing intermediate results in complex expressions. The stack space needed for these intermediate results are also excluded from this report. In general, the required overhead for the intermediate results is not cumulative (over all functions), which is why it would be inaccurate to add a “safety margin” to every function. For the program as a whole, a safety margin would be highly advised. See appendix B (page 168. for the -v option which can tell you the maximum estimate stack usage, based on the call tree. |
| tagname    | The tag of the constant, variable, function result or function parameter(s).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| transition | The transitions that the function provokes and their conditions —see the section of automatons on page 38.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

---

All text in the documentation comment(s) is also copied to each  
function,
variable or constant to which it is attached. The text in the documentation
comment is copied without further processing —with one exception, see below.
As the rest of the report file is in XML format, and the most suitable way to
process XML to on-line documentation is through an XSLT processor (such as
a modern browser), you may choose to do any formatting in the documentation
comments using HTML tags. Note that you will often need to explicitly close
any HTML tags; the HTML standard does not require this, but XML/XSLT
processors usually do. The pawn toolkit comes with an example XSLT file

(with a matching style sheet) which supports the following XML/HTML tags:

| name                          | info                                                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<code> </code>`              | Preformatted source code in a monospaced font; although the “&”, “<” and “>” must be typed as “&amp;”, “&lt;” and “&rt;” respectively.             |
| `<example> </example>`        | Text set under the sub-header “Example”.                                                                                                           |
| `<param name="..."> </param>` | A parameter description, with the parameter name appearing inside the opening tag (the “name=” option) and the parameter description following it. |
| `<paramref name="..." />`     | A reference to a parameter, with the parameter name appearing inside the opening tag (the “name=” option).                                         |
| `<remarks> </remarks>`        | Text set under the sub-header "Remarks”.                                                                                                           |
| `<returns> </returns>`        | Text set under the sub-header “Returns”.                                                                                                           |
| `<seealso> </seealso>`        | Text set under the sub-header “See also”.                                                                                                          |
| `<summary> </summary>`        | Text set immediately below the header of the symbol.                                                                                               |
| `<section> </section>`        | Sets the text in a header. This should only be used in documentation that is not attached to a function or a variable.                             |
| `<subsection> </subsection>`  | Sets the text in a sub-header. This should only be used in documentation that is not attached to a function or a variable.                         |

---

The following additional HTML tags are supported for general purpose formatting text inside any of the above sections:

| name             | info                                                                                                                                                                 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<c> </c>`       | Text set in a monospaced font.                                                                                                                                       |
| `<em> </em>`     | Text set emphasized, usually in italics.                                                                                                                             |
| `<p> </p>`       | Text set in a new paragraph. Instead of wrapping <p> and </p> around every paragraph, inserting <p/> as a separator between two paragraphs produces the same effect. |
| `<para> </para>` | An alternative for <p> </p>.                                                                                                                                         |
| `<ul> </ul>`     | An unordered (bulleted) list.                                                                                                                                        |
| `<ol> </ol>`     | An ordered (numbered) list.                                                                                                                                          |
| `<li> </li>`     | An item in an ordered or unordered list.                                                                                                                             |

---

As stated, there is one exception in the processing of documentation  
comments: if your documentation comment contains a `<param ...>` tag (and a
matching `</param>`), the pawn parser looks up the parameter and combines
your description of the parameter with the contents that it has automatically
generated.

### • Warnings and errors

The big hurdle that I have stepped over is how to actually compile the code
snippets presented in this chapter. The reason is that the procedure depends
on the system that you are using: in some applications there is a “Make” or
“Compile script” command button or menu option, while in other environments
you have to type a command like “sc myscript” on a command prompt. If
you are using the standard pawn toolset, you will find instructions of how to
use the compiler and run-time in the companion booklet “The pawn booklet
— Implementor’s Guide”.

Regardless of the differences in launching the compile, the phenomenon that
results from launching the compile are likely to be very similar  
between all systems:

• either the compile succeeds and produces an executable program —that may or may not run automatically after the compile;

• or the compile gives a list of warning and error messages.

---

• Mistakes happen and the pawn parser tries to catch as many of them as it
can. When you inspect the code that the pawn parser complains about, it
may on occasion be rather difficult for you to see why the code is erroneous
(or suspicious). The following hints may help:

• Each error or warning number is numbered. You can look up the error message with this number in appendix A, along with a brief description on what the message really means.

• If the pawn parser produces a list of errors, the first error in this list is a true error, but the diagnostic messages below it may not be errors at all. After the pawn parser sees an error, it tries to step over it and complete the compilation. However, the stumbling on the error may have confused the pawn parser so that subsequent legitimate statements are misinterpreted and reported as errors too. When in doubt, fix the first error and recompile.

• The pawn parser checks only the syntax (spelling/grammar), not the semantics (i.e. the “meaning”) of the code. When it detects code that does not comply to the syntactical rules, there may actually be different ways in which the code can be changed to be “correct”, in the syntactical sense of the word —even though many of these “corrections” would lead to nonsensical code. The result is, though, that the pawn parser may have difficulty to precisely locate the error: it does not know what you meant to write. Hence, the parser often outputs two line numbers and the error is somewhere in the range (between the line numbers).

• Remember that a program that has no syntactical errors (the pawn parser accepts it without error & warning messages) may still have semantical and logical errors which the pawn parser cannot catch. The assert instruction (page 112) is meant to help you catch these “run-time” errors.

---

### • In closing

If you know the C programming language, you will have seen many concepts
that you are familiar with, and a few new ones. If you don’t know C, the pace
of this introduction has probably been quite high. Whether you are new to C

or experienced in C, I encourage you to read the following pages carefully. If
you know C or a C-like language, by the way, you may want to consult the
chapter “Pitfalls” (page 134) first.

This booklet attempts to be both an informal introduction and a (more formal)
language specification at the same time, perhaps succeeding at neither. Since
it is also the standard book on pawn,∗ the focus of this booklet is on
being accurate and complete, rather than being easy to grasp.

The double nature of this booklet shows through in the order in  
which it presents the subjects. The larger conceptual parts of the language, variables
and functions, are covered first. The operators, the statements and general
syntax rules follow later —not that they are less important, but they are easier
to learn, to look up, or to take for granted.

---

###### ∗ It is no longer the only book on Pawn.

---

[Go Back to Contents](00-Contents.md)
