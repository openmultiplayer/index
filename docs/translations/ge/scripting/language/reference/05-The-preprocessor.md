# The preprocessor

---

The first phase of compiling a pawn source file to the executable  
P-code is “preprocessing”: a general purpose text filter that modifies/cleans up the text
before it is fed into the parser. The preprocessing phase removes comments,
strips out “conditionally compiled” blocks, processes the compiler directives
and performs find-&-replace operations on the text of the source file. The
compiler directives are summarized on page 117 and the text substitution
(“find-&-replace”) is the topic of this chapter.

The preprocessor is a process that is invoked on all source lines immediately
after they are read. No syntax checking is performed during the text substitu-
tions. While the preprocessor allows powerful tricks in the pawn language, it
is also easy to shoot yourself in the foot with it.

In this chapter, I will refer to the C/C⁺⁺ language on several occasions because
pawn’s preprocessor is similar to the one in C/C++. That said, the pawn
preprocessor is incompatible with the C/C⁺⁺ preprocessor.

The #define directive defines the preprocessor macros. Simple macros are:

```c

#define maxsprites          25
#define CopyRightString     "(c) Copyright 2004 by me"

```

In the pawn script, you can then use them as you would use constants. For
example:

```c

#define maxsprites          25
#define CopyRightString     "(c) Copyright 2004 by me"
main()
{
    print( Copyright )
    new sprites[maxsprites]
}

```

By the way, for these simple macros there are equivalent pawn constructs:

```c

const maxsprites = 25

stock const CopyRightString[] = "(c) Copyright 2004 by me"

```

These constant declarations have the advantage of better error checking and
the ability to create tagged constants. The syntax for a string  
constant is an array variable that is declared both “const” and “stock”. The  
const attribute prohibits any change to the string and the stock attribute makes
the declaration “disappear” if it is never referred to.

Substitution macros can take up to 10 parameters. A typical use for parame-
terized macros is to simulate tiny functions:

Listing: the “min” macro

```c

#define min(%1,%2) ((%1) < (%2) ? (%1) : (%2))

```

If you know C/C⁺⁺, you will recognize the habit of enclosing each argument
and the whole substitution expression in parentheses.

If you use the above macro in a script in the following way:

Listing: bad usage of the “min” macro

```c

new a = 1, b = 4
new min = min(++a,b)

```

the preprocessor translates it to:

```c

new a = 1, b = 4
new min = ((++a) < (b) ? (++a) : (b))

```

which causes “a” to possibly be incremented twice. This is one of the traps
that you can trip into when using substitution macros (this particular problem
is well known to C/C++ programmers). Therefore, it may be a good idea to
use a naming convention to distinguish macros from functions. In C/C⁺⁺ it is
common practice to write preprocessor macros in all upper case.

To show why enclosing macro arguments in parentheses is a good idea, consider
the macro:

```c

#define ceil_div(%1,%2) (%1 + %2 - 1) / %2

```

This macro divides the first argument by the second argument, but rounding
upwards to the nearest integer (the divide operator, “/”, rounds downwards).
If you use it as follows:

```c

new a = 5
new b = ceil_div(8, a - 2)

```

the second line expands to “new b = (8 + a - 2 - 1) / a - 2”,
which, considering the precedence levels of the pawn operators, leads to “b”  
being set to zero (if “a” is 5). What you would have expected from looking at the
macro invocation is eight divided by three (“a - 2”), rounded upwards —
hence, that “b” would be set to the value 3. Changing the macro to enclose
each parameter in parentheses solves the problem. For similar reasons, it is
also advised to enclose the complete replacement text in parentheses. Below
is the ceil_div macro modified accordingly:

```c

#define ceil_div(%1,%2) ( ((%1) + (%2) - 1) / (%2) )

```

The pattern matching is subtler than matching strings that look like function
calls. The pattern matches text literally, but accepts arbitrary text where the
pattern specifies a parameter. You can create patterns like:

Listing: macro that translates a syntax for array access to a function call

```c

#define Object[%1] CallObject(%1)

```

When the expansion of a macro contains text that matches other macros, the
expansion is performed at invocation time, not at definition time. Thus the code:

```c

#define a(%1)       (1+b(%1))
#define b(%1)       (2\*(%1))
new c = a(8)

```

will evaluate to “new c = (1+(2\*(8)))”, even though the macro “b” was not
defined at the time of the definition of “a”.

The pattern matching is constrained to the following rules:

- There may be no space characters in the pattern. If you must match a space, you need to use the “\32;” escape sequence. The substitution text, on the other hand, may contain space characters. Due to the matching rules of the macro pattern (explained below), matching a space character is rarely needed.

- As evidenced in the preceding line, escape sequences may appear in the pattern (they are not very useful, though, except perhaps for matching a literal “%” character).

- The pattern may not end with a parameter; a pattern like “set:%1=%2” is illegal. If you wish to match with the end of a statement, you can add a semicolon at the end of the pattern. If semicolons are optional at the end of each statement, the semicolon will also match a newline in the source.

- The pattern must start with a letter, an underscore, or an “@” character The first part of the pattern that consists of alphanumeric characters (plus the “\_” and/“@”) is the “name” or the “prefix” of the macro. On the defined operator and the #undef directive, you specify the macro prefix.

- When matching a pattern, the preprocessor ignores white space between nonalphanumeric symbols and white space between an alphanumeric symbol and a non-alphanumeric one, with one exception: between two identical symbols, white space is not ignored. Therefore: `the pattern abc(+-) matches “abc ( + - )” the pattern abc(--) matches “abc ( -- )”` but does not match `“abc(- -)”`

- There are up to 10 parameters, denoted with a “%” and a single digit (1 to 9 and 0). The order of the parameters in a pattern is not important.

- The #define symbol is a parser directive. As with all parser directives, the pattern definition must fit on a single line. You can circumvent this with a “\” on the end of the line. The text to match must also fit on a single line.

Note that in the presence of (parameterized) macros, lines of source code may
not be what they appear: what looks like an array access may be “prepro
cessed” to a function call, and vice versa.

A host application that embeds the pawn parser may provide an option to let
you check the result of text substitution through macros. If you are using the
standard pawn toolset, you will find instructions of how to use the compiler
and run-time in the companion booklet “The pawn booklet — Implementor’s Guide”.

---

`Operator precedence: 110`

`Directives: 117`

---

[Go Back to Contents](00-Contents.md)
