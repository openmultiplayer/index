# General syntax

---

**Format**

    Identifiers, numbers and tokens are separated by spaces, tabs, carriage
    returns and “form feeds”. Series of one or more of these separators are
    called white space.

**Optional semicolons**

    Semicolons (to end a statement) are optional if they occur at the end
    of a line. Semicolons are required to separate multiple statements on
    a single line. An expression may still wrap over multiple lines, but
    postfix operators (++, -- and char) must appear on the same line as their operand.

**Comments**

    Text between the tokens /_ and _/ (both tokens may be at the same
    line or at different lines) and text behind // (up to the end of the line)
    is a programming comment. The parser treats a comment as white
    space. Comments may not be nested.

    A comment that starts with “/\*_ ” (two stars and white-space behind
    the second star) and ends with “_/” is a documentation comment.
    A comment that starts with “/// ” (three slashes and white-space
    behind the third slash) is also a documentation comment. The parser
    may treat documentation comments in a special way; for example, it
    may construct on-line help from it.

**Identifiers**

    Names of variables, functions and constants. Identifiers consist of the
    characters a. . . z, A. . . Z, 0. . . 9, _ or @; the first character may not be
    a digit. The characters @ and _ by themselves are not valid identifiers,

    i.e. “_Up” is a valid identifier, but “_” is not.

    pawn is case sensitive.

    A parser may truncate an identifier after a maximum length. The
    number of significant characters is implementation defined, but should
    be at least 16 characters.

**Reserved words (keywords)**

| Statements | Operators | Directives  | Other    |
| ---------- | --------- | ----------- | -------- |
| assert     | char      | #assert     | const    |
| break      | defined   | #define     | enum     |
| case       | sizeof    | #else       | forward  |
| continue   | state     | #elseif     | native   |
| default    | tagof     | #emit       | new      |
| do         |           | #endif      | operator |
| else       |           | #endinput   | public   |
| exit       |           | #endscript  | static   |
| for        |           | #error      | stock    |
| goto       |           | #file       |          |
| if         |           | #if         |          |
| return     |           | #include    |          |
| sleep      |           | #line       |          |
| state      |           | #pragma     |          |
| switch     |           | #section    |          |
| while      |           | #tryinclude |          |
|            |           | #undef      |          |

Next to reserved words, pawn also has several predefined constants,
you cannot use the symbol names of the predefined constants for vari-
able or function names.

**Constants (literals)**

**Integer numeric constants**
. **binary**
0b followed by a series of the digits 0 and 1.
. **decimal**
a series of digits between 0 and 9.
. **hexadecimal**
0x followed by a series of digits between 0 and 9 and the letters a to f.

    In all number radices, an underscore may be used to sepa-
    rate groups of (hexa-)decimal digits. Underscore characters
    between the digits are ignored.

**Rational number constants**

A rational number is a number with a fractional part. A ra-
tional number starts with one or more digits, contains a dec-
imal point and has at least one digit following the decimal
point. For example, “12.0” and “0.75” are valid rational num-
bers. Optionally, an exponent may be appended to the rational
number; the exponent notation is the letter “e” (lower case)
followed by a signed integer numeric constant. For example,
“3.12e4” is a valid rational number with an exponent.

Support for rational numbers must be enabled with #pragma
rational directive. Depending on the options set with this
directive, the rational number represents a floating point or a
fixed point number.

**Character constants**

A single ASCII character surrounded by single quotes is a char-
acter constant (for example: ’a’, ’7’, ’\$’). Character con-
stants are assumed to be numeric constants.

| Escape sequences |     |                                            |
| ---------------- | --- | ------------------------------------------ |
| ’\a’             |     | Audible alarm (beep)                       |
| ’\b’             |     | Backspace                                  |
| ’\e’             |     | Escape                                     |
| ’\f’             |     | Formfeed                                   |
| ’\n’             |     | Newline                                    |
| ’\r’             |     | Carriage Return                            |
| ’\t’             |     | Horizontal tab                             |
| ’\v’             |     | Vertical tab                               |
| ’\\’             | \   | the escape character                       |
| ’\’’             | ’   | single quote                               |
| ’\"’             | "   | double quote                               |
| ’\%              | %   | percent sign                               |
| ’\ddd;’          |     | character code with decimal code “ddd”     |
| ’\xhhh;’         |     | character code with hexadecimal code “hhh” |

The semicolon after the ddd; and xhhh; codes is optional.
Its purpose is to give the escape sequence sequence an explicit
termination symbol when it is used in a string constant.

The backslash (“\”) is the default “escape” character. You can
set a different escape character with the #pragma ctrlchar
directive (page 120).

**String constants**

String constants are assumed to be arrays with a size that is
sufficient to hold all characters plus a terminating ’\0’.
Each string is stored at a unique position in memory; there is no
elimination of duplicate strings.

An unpacked string is a series of zero or more ASCII characters
surrounded by double quotes. Each array element contains a
single character. An unpacked string can hold characters in a
multi-byte character set, such as Unicode or UCS-4.

**unpacked string constant:**

    "the quick brown fox..."

A packed string literal follows the syntax for an unpacked
string, but a “!” precedes the first double quote.

**packed string constant:**

    !"...packed and sacked the lazy dog"

In the case of a packed string, the parser packs as many char-
acters in a cell as will fit. A character is not addressable as a
single unit, instead each element of the array contains multiple
characters. The first character in a “pack” occupies the highest
bits of the array element. In environments that store memory
words with the high byte at the lower address (Big Endian,
or Motorola format), the individual characters are stored in
the memory cells in the same order as they are in the string.
A packed string ends with a zero character and the string is
padded (with zero bytes) to a multiple of cells.

A packed string can only hold characters from a single-byte
character set, such as ascii or one of the extended ascii sets
from the ISO 8859 norm.

Escape sequences may be used within strings. See the section
on character constants (page 99) for a list of escape sequences.

There is an alternative syntax for “plain strings”. In a plain
string, every character is taken as-is and escape sequences
are not recognized. Plain strings are convenient to store file/
resource names, especially in the case where the escape charac-
ter is also used as a special character by the operating system
or host application.

The syntax for a plain string is the escape character followed by
the string in double quotes. The backslash (“\”) is the default

“escape” character. You cannot enter escape sequences in a
plain string: all characters will be taken literally.

**plain string constant:**

    \"C:\all my work\novel.rtf"

In the above example, the occurrences of “\a” and “\n” do
not indicate escape sequences, but rather the literal character
pairs “\” and “a”, and “\” and “n”.

A packed plain string has both the “!” and the escape character
prefixing the opening double quote. Both strings below are

**packed plain strings:**

    !\"C:\all my work\novel.rtf"

    \!"C:\all my work\novel.rtf"

**Array constants**

A series of numeric constants between braces is an array con-
stant. Array constants can be used to initialize array variables
with (see page 65) and they can be passed as function argu-
ments (see page 71).

**Symbolic constants**

A source file declares symbolic constants with the const and the enum
instructions. The const keyword declares a single constant and the
enum defines a list of —usually— sequential constants sharing the same tag name.

**const** _identifier = constant expression_

Creates a symbolic constant with the value of the constant
expression on the right hand of the assignment operator. The
constant can be used at any place where a literal number is
valid (for example: in expressions, in array declarations and in
directives like “#if” and “#assert”).

**enum** _name (increment) { constant list }_

The enum instruction creates a series of constants with incre-
menting values. The constant list is a series of identifiers sep-
arated by commas. Unless overruled, the first constant of an
enum list has the value 0 and every subsequent constant has
the value of its predecessor plus 1.

Both the value of a constant and the increment value can be
set by appending the value to the constant’s identifier. To set
a value, use

name = value

in the constant list. To set the increment, use:

name [ increment ]

The increment value is reset to 1 after every constant symbol
declaration in the constant list.

If both an increment and a value should be set for a constant,
the increment (“[. . . ]” notation) should precede the value (“=”
notation.

The symbols in the constant list may have an explicit tag,
which should precede the symbol name.

The name token that follows the enum keyword is optional. If it
is included, and if the symbol names does not have an explicit
tag, this name is used as the tag name for every symbol in the
constant list. In addition, the enum command creates an extra
constant with name for the constant name and the tag name.
The value of the last constant is the value of the last symbol in
the constant list plus the increment value of that last constant.

The increment token that follows the optional name token is
also optional. If included, it specifies a different post-increment
rule. By default, an enum increments the value of every succe-
sive constant with 1, but you may specify a different rule with
the syntax “(operator constant)”, where operator must be +=,

\*= or <<=. The += operator creates an additive increment, the

\*= and <<= create a multiplicative increment. The constant
may be a literal value or a symbolic constant. The increment
rule must be enclosed in parentheses. If no increment rule is
specified, the parenthese may be omitted as well.

A symbolic constant that is defined locally, is valid throughout the
block. A local symbolic constant may not have the same name as
a variable (local or global), a function, or another constant (local or
global).

**Predefined constants**

| Name     | Description                                                                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cellbits | The size of a cell in bits; usually 32.                                                                                                                                                                                                                          |
| cellmax  | The largest valid positive value that a cell can hold; usually 2147483647.                                                                                                                                                                                       |
| cellmin  | The largest valid negative value that a cell can hold; usually -2147483648.                                                                                                                                                                                      |
| charbits | The size of a packed character in bits; usually 8.                                                                                                                                                                                                               |
| charmax  | The largest valid packed character value; usually a packed character is 8-bit and the maximum valid value is thus 255.                                                                                                                                           |
| charmin  | The smallest valid character value, for both packed and unpacked values; currently set to zero (0).                                                                                                                                                              |
| debug    | The debug level: 2 if the parser creates full symbolic information plus run-time bounds checking, 1 if the parser generates run-time checking only (assertions and array bounds checks), and 0 (zero) if all debug support and run-time checking was turned off. |
| false    | 0 (this constant is tagged as bool:)                                                                                                                                                                                                                             |
| \_\_Pawn | The version number of the pawn compiler in Binary Coded Decimals (BCD) —that is, for version 2.8.1 the constant is “0x281”.                                                                                                                                      |
| true     | 1 (this constant is tagged as bool:)                                                                                                                                                                                                                             |
| ucharmax | The largest unpacked character value, its value depends on the size of a cell. A typical use for this constant is in checking whether a string is packed or unpacked, see page 137.                                                                              |

**Tag names**

A tag consists of an identifier followed by a colon. There may be no white space between the identifier and the colon.

**Predefined tag names**

| Name   | Description                                                                                 |
| ------ | ------------------------------------------------------------------------------------------- |
| bool:  | For “true/false” flags. The predefined constants true and false have this tag.              |
| Fixed: | Rational numbers typically have this tag when fixed point support is enabled (page 121).    |
| Float: | Rational numbers typically have this tag when floating point support is enabled (page 121). |

---

`Optional semicolons: 122`

`Predefined constants: 102`

`Rational numbers are also called “real numbers” or “floating point numbers”`

`#pragma rational: 121`

`The syntaxes for packed literal strings and unpacked literal strings can be swapped with the “#pragma pack” directive, see page 121`

`Examples: 21, 26`

`Examples: 9, 21`

`Identifiers: 97`

`See page 68 for examples of the “enum” constant declarations`

`See page 26 for an example of a custom increment rule`

`Identifiers: 97`

---

[Go Back to Contents](00-Contents.md)
