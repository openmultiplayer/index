# Functions

---

A function declaration specifies the name of the function and, between paren-
theses, its formal parameters. A function may also return a value. A function
declaration must appear on a global level (i.e. outside any other functions) and
is globally accessible.

If a semicolon follows the function declaration (rather than a statement), the
declaration denotes a forward declaration of the function.

The return statement sets the function result. For example, function sum (see below)
has as its result the value of both its arguments added together. The
return expression is optional for a function, but one cannot use the value of
a function that does not return a value.

Listing: sum function

```c

sum(a, b)
return a + b

```

Arguments of a function are (implicitly declared) local variables for that function.
The function call determines the values of the arguments.

Another example of a complete definition of the function leapyear
(which returns true for a leap year and false for a non-leap year):

Listing: leapyear function

```c

leapyear(y)
return y % 4 == 0 && y % 100 != 0 || y % 400 == 0

```

The logical and arithmetic operators used in the leapyear example are covered
on pages 108 and 104 respectively.

Usually a function contains local variable declarations and consists of a com-
pound statement. In the following example, note the assert statement to
guard against negative values for the exponent.

Listing: power function (raise to a power)

```c

power(x, y)
{
    /* returns x raised to the power of y */
    assert y >= 0
    new r = 1
    for (new i = 0; i < y; i++)
        r *= x
    return r
}

```

A function may contain multiple return statements —one usually does this
to quickly exit a function on a parameter error or when it turns  
out that the function has nothing to do. If a function returns an array,  
all return statements must specify an array with the same size and the same dimensions.

---

`The preferred way to declare forward functions is at page 82`

`“assert” statement: 112`

---

• Function arguments (call-by-value versus call-by-reference)

The “faculty” function in the next program has one parameter which it uses
in a loop to calculate the faculty of that number. What deserves attention is
that the function modifies its argument.

Listing: faculty.p

```c

/* Calculation of the faculty of a value */

main()
{
    print "Enter a value: "
    new v = getvalue()
    new f = faculty(v)
    printf "The faculty of %d is %d\n", v, f
}

faculty(n)
{
    assert n >= 0

    new result = 1
    while (n > 0)
        result *= n--

    return result
}

```

Whatever (positive) value that “n” had at the entry of the while
loop in function faculty, “n” will be zero at the end of the loop. In the case of the
faculty function, the parameter is passed “by value”, so the change of “n”
is local to the faculty function. In other words, function main passes “v” as
input to function faculty, but upon return of faculty, “v” still has the same
value as before the function call.

Arguments that occupy a single cell can be passed by value or by reference.
The default is “pass by value”. To create a function argument that is passed
by reference, prefix the argument name with the character &.

Example:

Listing: swap function

```c

swap(&a, &b)
{
    new temp = b
    b = a
    a = temp
}

```

To pass an array to a function, append a pair of brackets to the  
argument name. You may optionally indicate the size of the array; doing so improves
error checking of the parser.

Example:

Listing: addvector function

```c

addvector(a[], const b[], size)
{
    for (new i = 0; i < size; i++)
        a[i] += b[i]
}

```

Arrays are always passed by reference. As a side note, array b in the above
example does not change in the body of the function. The function argument
has been declared as const to make this explicit. In addition to improving
error checking, it also allows the pawn parser to generate more efficient code.

To pass an array of literals to a function, use the same syntax as for  
array initiallers: a literal string or the series of array indices enclosed in braces
(see page 99; the ellipsis for progressive initiallers cannot be used). Literal
arrays can only have a single dimension.

The following snippet calls addvector to add five to every element of the array “vect”:

Listing: addvector usage

```c

new vect[3] = { 1, 2, 3 }

addvector(vect, {5, 5, 5}, 3)

/* vect[] now holds the values 6, 7 and 8 */

```

The invocation of function printf with the string "Hello world\n" in the first
ubiquitous program is another example of passing a literal array to a function.

---

`Another example is function JulianToDate at page 13`

`Constant variables: 64`

`“Hello world” program: 5`

---

### • Calling functions

When inserting a function name with its parameters in a statement or  
expression, the function will get executed in that statement/expression.  
The statement that refers to the function is the “caller” and the function itself,
at that point, is the “callee”: the one being called.

The standard syntax for calling a function is to write the  
function’s name, followed by a list with all explicitly passed parameters between parentheses.
If no parameters are passed, or if the function does not have any, the pair of
parentheses behind the function name are still present. For example, to try
out the power function, the following program calls it thus:

Listing: example program for the power function

```c

main()
{
    print "Please give the base value and the power to raise it to:"
    new base = getvalue()
    new power = getvalue()

    new result = power(base, power)
    printf "%d raised to the power %d is %d", base, power, result
}

```

A function may optionally return a value. The sum, leapyear and power
functions all return a value, but the swap function does not. Even if a
function returns a value, the caller may ignore it.

For the situation that the caller ignores the function’s return value, there is
an alternative syntax to call the function, which is also illustrated
by the preceding example program calls the power function. The parentheses around
all function arguments are optional if the caller does not use the return value.

In the last statement, the example program reads

`printf "%d raised to the power %d is %d", base, power, result`

rather than

`printf("%d raised to the power %d is %d", base, power, result)`

which does the same thing.

The syntax without parentheses around the parameter list is called the “pro-
cedure call” syntax. You can use it only if:

- the caller does not assign the function’s result to a variable and does not use it in an expression, or as the “test expression” of an if statement for example;

- the first parameter does not start with an opening paranthesis;

- the first parameter is on the same line as the function name, unless you use named parameters (see the next section).

As you may observe, the procedure call syntax applies to cases where a function
call behaves rather as a statement, like in the calls to print and printf in the
preceding example. The syntax is aimed at making such statements appear less
cryptic and friendlier to read, but not that the use of the syntax is optional.

As a side note, all parentheses in the example program presented in this section
are required: the return values of the calls to getvalue are stored  
in two variables, and therefore an empty pair of parentheses must follow the function
name. Function getvalue has optional parameters, but none are passed in this example program.

---

`Function power: 70`

`Functions sum & leapyear: 70`

`Function swap: 71`

---

### • Named parameters versus positional parameters

In the previous examples, the order of parameters of a function call was im-
portant, because each parameter is copied to the function argument with the
same sequential position. For example, with the function weekday (which
uses Zeller’s congruence algorithm) defined as below, you would call  
weekday(12,31,1999) to get the week day of the last day of the preceding century.

Listing: weekday function

```c

weekday(month, day, year)
{
    /* returns the day of the week: 0=Saturday, 1=Sunday, etc. */
    if (month <= 2)
        month += 12, --year
    new j = year % 100
    new e = year / 100
    return (day + (month+1)*26/10 + j + j/4 + e/4 - 2*e) % 7
}

```

Date formats vary according to culture and nation. While the format month/
day/year is common in the United States of America, European  
countries often use the day/month/year format, and technical publications sometimes
standardize on the year/month/day format (ISO/IEC 8824). In other words,
no order of arguments in the weekday function is “logical” or “conventional”.
That being the case, the alternative way to pass parameters to a function is
to use “named parameters”, as in the next examples (the three function calls are equivalent):

Listing: weekday usage —positional parameters

```c

new wkday1 = weekday( .month = 12, .day = 31, .year = 1999)

new wkday2 = weekday( .day = 31, .month = 12, .year = 1999)

new wkday3 = weekday( .year = 1999, .month = 12, .day = 31)

```

With named parameters, a period (“.”) precedes the name of the  
function argument. The function argument can be set to any expression that is valid
for the argument. The equal sign (“=”) does in the case of a named
parameter not indicate an assignment; rather it links the expression that follows the
equal sign to one of the function arguments.

One may mix positional parameters and named parameters in a function call
with the restriction that all positional parameters must precede any named
parameters.

### • Default values of function arguments

A function argument may have a default value. The default value for a function
argument must be a constant. To specify a default value, append the equal
sign (“=”) and the value to the argument name.

When the function call specifies an argument placeholder instead of a valid ar-
gument, the default value applies. The argument placeholder is the underscore
character (“\_”). The argument placeholder is only valid for function arguments
that have a default value.

The rightmost argument placeholders may simply be stripped from the function
argument list. For example, if function increment is defined as:

Listing: increment function —default values

```c

increment(&value, incr=1) value += incr

```

the following function calls are all equivalent:

Listing: increment usage

```c

increment(a)
increment(a, \_)
increment(a, 1)

```

Default argument values for passed-by-reference arguments are useful to make
the input argument optional. For example, if the function divmod is designed
to return both the quotient and the remainder of a division operation through
its arguments, default values make these arguments optional:

Listing: divmod function —default values for reference parameters

```c

divmod(a, b, &quotient=0, &remainder=0)
{
    quotient = a / b
    remainder = a % b
}

```

With the preceding definition of function divmod, the following function calls
are now all valid:

Listing: divmod usage

```c

new p, q

divmod(10, 3, p, q)
divmod(10, 3, p, \_)
divmod(10, 3, \_, q)
divmod(10, 3, p)
divmod 10, 3, p, q

```

Default arguments for array arguments are often convenient to set a default
string or prompt to a function that receives a string argument. For example:

Listing: print error function

```c

print_error(const message[], const title[] = "Error: ")
{
    print title
    print message
    print "\n"
}

```

The next example adds the fields of one array to another array, and by default
increments the first three elements of the destination array by one:

Listing: addvector function, revised

```c

addvector(a[], const b[] = {1, 1, 1}, size = 3)
{
    for (new i = 0; i < size; i++)
    a[i] += b[i]
}

```

---

`Public functions do not support default argument values; see page 83`

---

### • sizeof operator & default function arguments

A default value of a function argument must be a constant, and its value is
determined at the point of the function’s declaration. Using the  
“sizeof” operator to set the default value of a function argument is a special case: the
calculation of the value of the sizeof expression is delayed to the point of the
function call and it takes the size of the actual argument rather than that of
the formal argument. When the function is used several times in a program,
with different arguments, the outcome of the “sizeof” expression is potentially
different at every call —which means that the “default value” of the function
argument may change.

Below is an example program that draws ten random numbers in the range of
0–51 without duplicates. An example for an application for drawing random
numbers without duplicates is in card games —those ten numbers could repre-
sent the cards for two “hands” in a poker game. The virtues of the algorithm
used in this program, invented by Robert W. Floyd, are that it is efficient and
unbiased —provided that the pseudo-random number generator is unbiased as well.

Listing: randlist.p

```c

main()
{
    new HandOfCards[10]
    FillRandom(HandOfCards, 52)

    print "A draw of 10 numbers from a range of 0 to 51 \
        (inclusive) without duplicates:\n"
    for (new i = 0; i < sizeof HandOfCards; i++)
        printf "%d ", HandOfCards[i]
}

FillRandom(Series[], Range, Number = sizeof Series)
{
    assert Range >= Number          /* cannot select 50 values
                                     * without duplicates in the
                                     * range 0..40, for example */
    new Index = 0
    for (new Seq = Range - Number; Seq < Range; Seq++)
    {
        new Val = random(Seq + 1)
        new Pos = InSeries(Series, Val, Index)
        if (Pos >= 0)
        {
            Series[Index] = Series[Pos]
            Series[Pos] = Seq
        }
        else
            Series[Index] = Val
        Index++
    }
}

InSeries(Series[], Value, Top = sizeof Series)
{
    for (new i = 0; i < Top; i++)
        if (Series[i] == Value)
            return i
    return -1
}

```

Function main declares the array HandOfCards with a size of ten cells and then
calls function FillRandom with the purpose that it draws ten positive random
numbers below 52. Observe, however, that the only two parameters that main
passes into the call to FillRandom are the array HandsOfCards, where  
the random numbers should be stored, and the upper bound “52”. The number of
random numbers to draw (“10”) is passed implicitly to FillRandom.

The definition of function FillRandom below main specifies for its third param-
eter “Number = sizeof Series”, where “Series” refers to the first parameter
of the function. Due to the special case of a “sizeof default value”, the
default value of the Number argument is not the size of the formal argument Series,
but that of the actual argument at the point of the function call: HandOfCards.

Note that inside function FillRandom, asking the “sizeof” the function ar-
gument Series would (still) evaluate in zero, because the Series array  
is declared with unspecified length (see page 109 for the behaviour of sizeof).
Using sizeof as a default value for a function argument is a specific case. If
the formal parameter Series were declared with an explicit size, as in
Series[10], it would be redundant to add a Number argument with the array
size of the actual argument, because the parser would then enforce that both
formal and actual arguments have the size and dimensions.

---

`“sizeof ” operator 109`

`“random” is a proposed core function, see page 124`

`Array declarations: 64`

`Tag names: 68`

---

### • Arguments with tag names

A tag optionally precedes a function argument. Using tags improves  
the compile-time error checking of the script and it
serves as “implicit documenta-
tion” of the function. For example, a function that computes the square root

of an input value in fixed point precision may require that the input parameter
is a fixed point value and that the result is fixed point as well. The function
below uses the fixed point extension module, and an approximation algorithm
known as “bisection” to calculate the square root. Note the use of tag overrides
on numeric literals and expression results.

Listing: sqroot function —strong tags

```c

Fixed: sqroot(Fixed: value)
{
    new Fixed: low = 0.0
    new Fixed: high = value
    while (high - low > Fixed: 1)
    {
        new Fixed: mid = (low + high) >> 1
        if (fmul(mid, mid) < value)
            low = mid
        else
            high = mid
    }
    return low
}

```

With the above definition, the pawn parser issues a diagnostic if one calls the
sqroot function with a parameter with a tag different from “Fixed:”, or when
it tries to store the function result in a variable with a “non-Fixed:” tag.

The bisection algorithm is related to binary search, in the sense that it
continuously halves the interval in which the result must lie. A “successive substi-
tution” algorithm like Newton-Raphson, that takes the slope of the function’s
curve into account, achieves precise results more quickly, but at the cost that
a stopping criterion is more difficult to state. State of the art algorithms
for computing square roots combine bisection and Newton-Raphson algorithms.

In the case of an array, the array indices can be tagged as well. For example,
a function that creates the intersection of two rectangles may be written as:

Listing: intersection function

```c

intersection(dest[rectangle], const src1[rectangle], const src2[rectangle])
{
    if (src1[right] > src2[left] && src1[left] < src2[right]
    && src1[bottom] > src2[top] && src1[top] < src2[bottom])
    {
        \* there is an intersection, calculate it using the "min" and
         *"max" functions from the "core" library, see page 124. */

        dest[left] = max(src1[left], src2[left])
        dest[right] = min(src1[right], src2[right])
        dest[top] = max(src1[top], src2[top])
        dest[bottom] = min(src1[bottom], src2[bottom])
        return true
    }
    else
    {
        /* "src1" and "src2" do not intersect */
        dest = { 0, 0, 0, 0 }
        return false
    }
}

```

---

`Fixed point arithmetic: 90; see also the application note “Fixed Point Support Library”`

`For the “rectangle” tag, see page 68`

---

### • Variable arguments

A function that takes a variable number of arguments, uses the “ellipsis” oper-
ator (“...”) in the function header to denote the position of the first variable
argument. The function can access the arguments with the predefined func-
tions numargs, getarg and setarg (see page 124).

Function sum returns the summation of all of its parameters.
It uses a variable length parameter list.

Listing: sum function, revised

```c

sum(...)
{
    new result = 0
    for (new i = 0; i < numargs(); ++i)
        result += getarg(i)
    return result
}

```

This function could be used in:

Listing: sum function usage

```c

new v = sum(1, 2, 3, 4, 5)

```

A tag may precede the ellipsis to enforce that all subsequent parameters have the same tag, but otherwise there is no error
checking with a variable argument list and this feature should therefore be used with caution.

The functions getarg and setarg assume that the argument is passed “by
reference”. When using getarg on normal function parameters (instead of
variable arguments) one should be cautious of this, as neither the compiler nor
the abstract machine can check this. Actual parameters that are passed
as part of a “variable argument list” are always passed by reference.

---

`Tag names: 68`

---

### • Coercion rules

If the function argument, as per the function definition (or its declaration),
is a “value parameter”, the caller can pass as a parameter to the function:

- a value, which is passed by value;

- a reference, whose dereferenced value is passed;

- an (indexed) array element, which is a value.

If the function argument is a reference, the caller can pass to the function:

- a value, whose address is passed;

- a reference, which is passed by value because it has the type that the function expects;

- an (indexed) array element, which is a value.

If the function argument is an array, the caller can pass to the function:

- an array with the same dimensions, whose starting address is passed;

- an (indexed) array element, in which case the address of the element is passed.

### • Recursion

A faculty example function earlier in this chapter used a simple loop. An
example function that calculated a number from the Fibonacci series also used
a loop and an extra variable to do the trick. These two functions are the most
popular routines to illustrate recursive functions, so by implementing  
these as iterative procedures, you might be inclined to think that pawn does not support recursion.

Well, pawn does support recursion, but the calculation of faculties and of Fi-
bonacci numbers happen to be good examples of when not to use recursion.
Faculty is easier to understand with a loop than it is with recursion.  
Solving Fibonacci numbers by recursion indeed simplifies the problem, but at the
cost of being extremely inefficient: the recursive Fibonacci calculates the same
values over and over again.

The program below is an implementation of the famous “Towers of Hanoi” game in a recursive function:

Listing: hanoi.p

```c

/* The Towers of Hanoi, a game solved through recursion */

main()
{
    print "How many disks: "
    new disks = getvalue()
    move 1, 3, 2, disks
}

move(from, to, spare, numdisks)
{
    if (numdisks > 1)
        move from, spare, to, numdisks-1
    printf "Move disk from pillar %d to pillar %d\n", from, to
    if (numdisks > 1)
        move spare, to, from, numdisks-1
}

```

---

`“faculty”: 71`

`“fibonacci”: 11`

`There exists an intriguing iterative solution to the Towers of Hanoi.`

---

### • Forward declarations

For standard functions, the current “reference implementation” of the pawn
compiler does not require functions to be declared before their first use.∗  
Userdefined operators are special functions, and unlike standard functions  
theymust be declared before use. In many cases it is convenient to put the
implementation of a user-defined operator in an include file, so that the implementation and declaration precedes any
call/invocation. Sometimes, it may however be required (or convenient) to declare a user- defined operator first
and implement it elsewhere. A particular use of this technique is to implement
“forbidden” user-defined operators.

To create a forward declaration, precede the function name and its parame-
ter list with the keyword forward. For compatibility with early versions of
pawn, and for similarity with C/C⁺⁺, an alternative way to forwardly declare
a function is by typing the function header and terminating it with a semicolon
(which follows the closing parenthesis of the parameter list).

The full definition of the function, with a non-empty body, is
implemented elsewhere in the source file (except for forbidden user-defined operators).

State classifiers are ignored on forward declarations.

---

###### ∗ Other implementations of the Pawn language (if they exist) may use “single pass” parsers, requiring functions to be defined before use.

---

`Forbidden userdefined operators: 92`

---

### • State classifiers

All functions except native functions may optionally have a state attribute.
This consists of a list of state (and automata) names between angle brackets
behind the function header. The names are separated by commas. When the
state is part of a non-default automaton, the name of the automaton and a
colon separator must precede the state; for example, “parser:slash” stands
for the state slash of the automaton parser.

If a function has states, there must be several “implementations” of the function in the source code.
All functions must have the same function header (excluding the state classifier list).

As a special syntax, when there are no names between the angle brackets, the
function is linked to all states that are not attributed to other
implementations of the function. The function that handles “all states not handled elsewhere”
is the so-called fall-back function.

### • Public functions, function main

A stand-alone program must have the function main. This function is  
the starting point of the program. The function main may not have arguments.

A function library need not to have a main function, but it must have it either
a main function, or at least one public function. Function main is the primary
entry point into the compiled program; the public functions are  
alternative entry points to the program. The virtual machine can start execution with
one of the public functions. A function library may have a main function to
perform one-time initialization at startup.

To make a function public, prefix the function name with the keyword public.
For example, a text editor may call the public function “onkey” for every key
that the user typed in, so that the user can change (or reject) keystrokes. The
onkey function below would replace every “~” character (code 126 in the ISO
Latin-1 character set) by the “hard space” code in the ANSI character table:

Listing: onkey function

```c

public onkey(keycode)
{
    if (key==’~’)
        return 160 /* replace ~ by hard space (code 160 in Latin-1) */
    else
        return key /* leave other keys unaltered */
}

```

---

`Example: 40`

---

Functions whose name starts with the “@” symbol are also public. So
an alternative way to write the public function onkey function is:

Listing: @onkey function

```c

@onkey(keycode)
    return key==’~’ ? 160 : key

```

The “@” character, when used, becomes part of the function name; that is, in
the last example, the function is called “@onkey”. The host application decides
on the names of the public functions that a script may implement.

Arguments of a public function may not have default values. A public func-
tion interfaces the host application to the pawn script. Hence, the arguments
passed to the public function originate from the host application, and the host
application cannot know what “default values” the script writer plugged for
function arguments —which is why the pawn parser flags the use of default
values for arguments of public functions as an error. The issue of default
values in public function arguments only pops up in the case that you wish to call public functions from the script itself.

### • Static functions

When the function name is prefixed with the keyword static, the scope of the
function is restricted to the file that the function resides in.

The static attribute can be combined with the “stock” attribute.

### • Stock functions

A “stock” function is a function that the pawn parser must “plug into” the
program when it is used, and that it may simply “remove” from the program
(without warning) when it is not used. Stock functions allow a compiler or
interpreter to optimize the memory footprint and the file size of a (compiled)
pawn program: any stock function that is not referred to, is completely skipped
—as if it were lacking from the source file.

A typical use of stock functions, hence, is in the creation of a set of
“library” functions. A collection of general purpose functions, all marked as “stock” may
be put in a separate include file, which is then included in any pawn  
script. Only the library functions that are actually used get “linked” in.

To declare a stock function, prefix the function name with the keyword stock.
Public functions and native functions cannot be declared “stock”.

When a stock function calls other functions, it is usually a good practice to
declare those other functions as “stock” too —with the exception of  
native functions. Similarly, any global variables that are used by a stock
function should in most cases also be defined “stock”. The removal of unused (stock)
functions can cause a chain reaction in which other functions and global vari-
ables are not longer accessed either. Those functions are then removed as well,
thereby continuing the chain reaction until only the functions that are used,
directly or indirectly, remain.

---

`Default values of function arguments: 75`

`Public variables can be declared “stock”`

`Stock variables: 63`

---

### • Native functions

A pawn program can call application-specific functions through a “native function”.
The native function must be declared in the pawn program by means
of a function prototype. The function name must be preceded by the keyword native.

Examples:

```c

native getparam(a[], b[], size)

native multiply_matrix(a[], b[], size)

native openfile(const name[])

```

The names “getparam”, “multiply_matrix” and “openfile” are the internal
names of the native functions; these are the names by which the  
functions are known in the pawn program. Optionally, you may also set an external
name for the native function, which is the name of the function as the “host application” knows it.
To do so, affix an equal sign to the function prototype followed by the external name. For example:

```c

native getparam(a[], b[], size) = host_getparam

native multiply_matrix(a[], b[], size) = mtx_mul

```

When a native function returns an array, the dimensions and size of the ar-
ray must be explicitly declared. The array specification occurs between  
the function name and the parameter list. For example:

```c

enum rect { left, top, right, bottom }
native intersect[rect](src1[rect], src2[rect])

```

Unless specified explicitly, the external name is equal to the internal name of
a native function. One typical use for explicit external names is to set a
symbolic name for a user-defined operator that is implemented as a native function.

See the “Implementor’s Guide” for implementing native functions in C/C++(on the “host application” side).

Native functions may not have state specifiers.

---

`An example of a native user-defined operator is on page 89`

---

### • User-defined operators

The only data type of pawn is a “cell”, typically a 32-bit number or bit
pattern.

Tags: 68 The meaning of a value in a cell depends on the particular application —it need
not always be a signed integer value. pawn allows to attach a “meaning” to a cell with its “tag” mechanism.

Based on tags, pawn also allows you to redefine operators for cells  
with a specific purpose. The example below defines a tag “ones” and an  
operator to add two “ones” values together (the example also implements  
operators for subtraction and negation). The example was inspired by the checksum
algorithm of several protocols in the TCP/IP protocol suite: it simulates one’s
complement arithmetic by adding the carry bit of an arithmetic overflow back
to the least significant bit of the value.

Listing: ones.p

```c

forward ones: operator+(ones: a, ones: b)
forward ones: operator-(ones: a, ones: b)
forward ones: operator-(ones: a)

main()
{
    new ones: chksum = ones: 0xffffffff
    print "Input values in hexadecimal, zero to exit\n"

    new ones: value
    do
    {
        print ">> "
        value = ones: getvalue(.base=16)
        chksum = chksum + value
        printf "Checksum = %x\n", chksum
    }
    while (value)
}

stock ones: operator+(ones: a, ones: b)
{
    const ones: mask = ones: 0xffff                 /* word mask */
    const ones: shift = ones: 16                    /* word shift */

    /* add low words and high words separately */
    new ones: r1 = (a & mask) + (b & mask)
    new ones: r2 = (a >>> shift) + (b >>> shift)

    new ones: carry
    restart:                                        /* code label (goto target) */

    \* add carry of the new low word to the high word, then
    * strip it from the low word */

    carry = (r1 >>> shift)
    r2 += carry
    r1 &= mask

    \* add the carry from the new high word back to the low
    * word, then strip it from the high word */

    carry = (r2 >>> shift)
    r1 += carry
    r2 &= mask

    \* a carry from the high word injected back into the low
    * word may cause the new low to overflow, so restart in that case */

    if (carry)
        goto restart
    return (r2 << shift) | r1
}

stock ones: operator-(ones: a)
    return (a == ones: 0xffffffff) ? a : ~a

stock ones: operator-(ones: a, ones: b)
    return a + -b

```

The notable line in the example is the line “chksum = chksum + value” in
the loop in function main. Since both the variables chksum and value have
the tag ones, the “+” operator refers to the user-defined operator  
(instead of the default “+” operator). User-defined operators are merely a notational
convenience. The same effect is achieved by calling functions explicitly.

The definition of an operator is similar to the definition of a function, with
the difference that the name of the operator is composed by the keyword “opera-
tor” and the character of the operator itself. In the above example, both the
unary “-” and the binary “-” operators are redefined. An operator function
for a binary operator must have two arguments, one for an unary  
operator must have one argument. Note that the binary “-” operator adds the two val-
ues together after inverting the sign of the second operand. The subtraction

operator thereby refers to both the user-defined “negation” (unary “-”) and addition operators.

A redefined operator must adhere to the following restrictions:

- A user-defined operator must be declared before use (this is in contrast to “normal” functions): either put the implementation of the user-defined operator above the functions that use it, or add a forward declaration near the top of the file.

- Only the following operators may be redefined: +, -, \*, /, %, ++, --, ==, !=, <, > , <=, >=, ! and =. That is, the sets of arithmetic and relational operators can be overloaded, but the bitwise operators and the logical operators cannot. The = and ! operators are a special case.

- You cannot invent new operators; you cannot define operator “#” for example.

- The precedence level and associativity of the operators, as well as their “arity” remain as defined. You cannot make an unary “+” operator, for example.

- The return tag of the relational operators and of the “!” operator must be “bool:”.

- The return tag of the arithmetic operators is at your choosing, but you cannot redefine an operator that is identical to another operator except for its return tag. For example, you cannot make both `alpha: operator+(alpha: a, alpha: b)` and `beta: operator+(alpha: a, alpha: b)` (The assignment operator is an exception to this rule.)

- PAWN already defines operators to work on untagged cells, you cannot redefine the operators with only arguments without tags.

- The arguments of the operator function must be non-arrays passed by value. You cannot make an operator work on arrays.

In the example given above, both arguments of the binary operators have the
same tag. This is not required; you may, for example, define a  
binary “+” operator that adds an integer value to a “ones:” number.

Au fond, the operation of the pawn parser is to look up the tag(s)
of the operand(s) that the operator works on and to look up whether a user-defined
operator exists for the combination of the operator and the tag(s). However,
the parser recognizes special situations and provides the following features:

The parser recognizes operators like “+=” as a sequence of “+” and  
“=” and it will call a user-defined operator “+” if available and/or a user-defined
operator “=”. In the example program, the line “chksum = chksum + value”
might have been abbreviated to “chksum += value”.

The parser recognizes commutative operators (“+”, “\*”, “==”, and “!=”)
and it will swap the operands of a commutative operator if that produces
a fit with a user-defined operator. For example, there is usually no need to implement both

`ones:operator+(ones:a, b)`

and

`ones:operator+(a, ones:b)`

(implementing both functions is valid, and it is useful in case the user-defined
operator should not be commutative).

- Prefix and postfix operators are handled automatically. You only need to define one user operator for the “++” and “--” operators for a tag.

- The parser calls the “!” operator implicitly in case of a test without explicit comparison. For example, in the statement “if (var) ...” when “var” has tag “ones:”, the user-defined operator “!” will be called for var. The “!” operator thus doubles as a “test for zero” operator. (In one’s complement arithmetic, both the “all-ones” and the “all-zeros” bit patterns represent zero.)

- The user-defined assignment operator is implicitly called for a function argument that is passed “by value” when the tag names of the formal and the actual arguments match the tag names of the left and right hand sides of the operator. In other words, the pawn parser simulates that “pass by value” happens through assignment. The user-defined operator is not called for function arguments that are passed “by reference”.

- If you wish to forbid an operation, you can “forward declare” the operator without ever defining it (see page 82). This will flag an error when the user-defined operator is invoked. For example, to forbid the “%” operator (remainder after division) on floating point values, you can add the line: `forward Float: operator%(Float: a, Float: b)`

User-defined operators can optionally be declared “stock” or “native”. In the case of a native operator function, the definition should include an external name. For example (when, on the host’s side, the native function is called float_add):

Listing: native operator+ function

```c

native Float: operator+(Float: val, Float: val) = float_add

```

The user-defined assignment operator is a special case, because it is an
operator that has a side effect. Although the operator has the appearance of a binary
operator, its “expression result” is the value at the right hand —the assignment
operator would be a “null”-operator if it weren’t for its side-effect. In pawn
a user-defined assignment operator is declared as:

Listing: operator= function

```c

ones: operator=(a)

return ones: ( (a >= 0) ? a : ~(-a) )

```

The user-defined “=” operator looks like a unary operator in this
definition, but it is a special case nevertheless. In contrast to the other
operators, the tag of the return value for the user-defined operator is important: the pawn
parser uses the tags of the argument and the return value to find a matching user-defined operator.

The example function above is a typical application for a user-defined assign-
ment operator: to automatically coerce/convert an untagged value to a tagged
value, and to optionally change the memory representation of the value in the
process. Specifically, the statement “new ones:A = -5” causes the user-defined
operator to run, and for the constant -5 the operator will return “~(- -5)”, or ~5, or −6.∗

---

`Tags: 68`

`Forward declaration: 82`

`“Call by value” versus “call by reference”: 71`

`Native functions: 85`

`Rational literals: 98`

`#pragma rational: 121`

---

### • Floating point and fixed point arithmetic

pawn only has intrinsic support for integer arithmetic (the -domain: “whole
numbers”, both positive and negative). Support for floating point arithmetic
or fixed point arithmetic must be implemented through (native) functions.
User operators, then, allow a more natural notation of expressions with fixed or floating point numbers.

The pawn parser has support for literal values with a fractional part, which it
calls “rational numbers”. Support for rational literals must be enabled explic-
itly with a #pragma. The #pragma indicates how the rational numbers must
be stored —floating point or fixed point. For fixed point rational values, the
#pragma also specifies the precision in decimals. Two examples for the #pragma are:

```c

#pragma rational Float /* floating point format */
#pragma rational Fixed(3) /* fixed point, with 3 decimals */

```

---

###### ∗ Modern CPUs use two’s complement integer arithmetic. For positive values, the bitwise representation of a value is the same in one’s complement and two’s complement, but the representations differ for negative values. For instance, the same bit pattern that means -5 in one’s complement stands for -6 in two’s complement.

---

Since a fixed point value must still fit in a cell, the number of decimals
has a direct influence of the range of a fixed point value. For a fixed point value
with 3 decimals, the range would be −2, 147, 482 . . . + 2, 147, 482.

The format for a rational number may only be specified once for the entire
pawn program. In an implementation one typically chooses either  
floating point support or fixed point support. As stated above, for the actual imple-
mentation of the floating point or fixed point arithmetic, pawn requires the
help of (native) functions and user-defined operators. A good place to put
the #pragma for rational number support would be in the include file that  
also defines the functions and operators.

The include file † for fixed point arithmetic contains definitions like:

```c

native Fixed: operator\*(Fixed: val1, Fixed: val2) = fmul
native Fixed: operator/(Fixed: val1, Fixed: val2) = fdiv

```

The user-defined operators for multiplication and division of two fixed
point numbers are aliased directly to the native functions fmul and fdiv. The host
application must, then, provide these native functions.

Another native user-defined operator is convenient to transform an integer to
fixed point automatically, if it is assigned to a variable tagged as “Fixed:”:

```c

native Fixed: operator=(oper) = fixed

```

With this definition, you can say “new Fixed: fract = 3” and the value
will be transformed to 3.000 when it is stored in variable fract. As explained
in the section on user-defined operators, the assignment operator also runs for
function arguments that are passed by value. In the expression “new Fixed:
root = sqroot(16)” (see the implementation of function sqroot on page 79),
the user-defined assignment operator is called on the argument 16.

For adding two fixed point values together, the default “+” operator is suffi-
cient, and the same goes for subtraction. Adding a normal (integer) number
to a fixed point number is different: the normal value must be scaled before
adding it. Hence, the include file implements operators for that purpose too:

###### † See the application note “Fixed Point Support Library” for where to obtain the include file.

Listing: additive operators, commutative and non-commutative

```c

stock Fixed: operator+(Fixed: val1, val2)
    return val1 + fixed(val2)

stock Fixed: operator-(Fixed: val1, val2)
    return val1 - fixed(val2)

stock Fixed: operator-(val1, Fixed: val2)
    return fixed(val1) - val2

```

The “+” operator is commutative, so one implementation handles both cases.
For the “-” operator, both cases must be implemented separately.

Finally, the include file forbids the use of the modulus operator (“%”) on fixed
point values: the modulus is only applicable to integer values:

Listing: forbidden operators on fixed point values

```c

forward Fixed: operator%(Fixed: val1, Fixed: val2)
forward Fixed: operator%(Fixed: val1, val2)
forward Fixed: operator%(val1, Fixed: val2)

```

Because of the presence of the (forward) declaration of the operator, the pawn
parser will attempt to use the user-defined operator rather than the default
“%” operator. By not implementing the operator, the parser will subsequently issue an error message.

---

`User-defined operators: 86`

---

[Go Back to Contents](00-Contents.md)
