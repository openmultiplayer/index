# Assorted tips

---

### • Working with characters and strings

Strings can be in packed or in unpacked format. In the packed format, each
cell will typically hold four characters (in common implementations, a cell is
32-bit and a character is 8 bit). In this configuration, the first character
in a “pack” of four is the highest byte of a cell and the fourth character is in the
lowest byte of each cell.

A string must be stored in an array. For an unpacked string, the array must
be large enough to hold all characters in the string plus a terminating zero
cell. That is, in the example below, the variable ustring is defined as having five
cells, which is just enough to contain the string with which it is initialized:

Listing: unpacked string

```c

new ustring[5] = "test"

```

In a packed string, each cell contains several characters and the string
ends with a zero character. The char operator helps with declaring the array size
to contain the required number of characters . The example below will allocate
enough cells to hold five packed characters. In a typical implementation, there
will be two cells in the array.

Listing: packed string

```c

new pstring[5 char] = !"test"

```

In other words, the char operators divides its left operand by the number of
bytes that fit in a cell and rounds upwards. Again, in a typical implementation,
this means dividing by four and rounding upwards.

You can design routines that work on strings in both packed and unpacked for-
mats. To find out whether a string is packed or unpacked, look at the first
cell of a string. If its value is either negative or higher than the maximum possible
value of an unpacked character, the string is a packed string. Otherwise it
is an unpacked string.

The code snippet below returns true if the input string is packed and false otherwise:

Listing: ispacked function

```c

bool: ispacked(string[])
    return !(0 <= string[0] <= ucharmax)

```

An unpacked string ends with a full zero cell. The end of a packed string is
marked with only a zero character. Since there may be up to four characters
in a 32-bit cell, this zero character may occur at any of the four positions in
the “pack”. The { } operator extracts a character from a cell in an
array. Basically, one uses the cell index operator (“[ ]”) for unpacked strings and
the character index operator (“{ }”) to work on packed strings.

For example, a routine that returns the length in characters of any  
string (packed or unpacked) is:

Listing: my strlen function

```c

my_strlen(string[])
{
    new len = 0
    if (ispacked(string))
        while (string{len} != EOS)              /* get character from pack */
            ++len
    else
        while (string[len] != EOS)              /* get cell */
            ++len
    return len
}

```

If you make functions to work exclusively on either packed or unpacked strings,
it is a good idea to add an assertion to enforce this condition:

Listing: strupper function

```c

strupper(string[])
{
    assert ispacked(string)

    for (new i=0; string{i} != EOS; ++i)
        string{i} = toupper(string{i})
}

```

Although, in preceding paragraphs we have assumed that a cell is 32  
bits wide and a character is 8 bits, this should not be relied upon. The
size of a cell is implementation defined; the maximum and minimum values are  
in the predefined constants cellmax and cellmin. There are similar predefined
constants for characters. One may safely assume, however, that both the size
of a character in bytes and the size of a cell in bytes are powers of two.

The char operator allows you to determine how many packed characters fit in
a cell. For example:

```c

#if     4 char == 1
    /* code that assumes 4 packed characters per cell */
#elseif 4 char == 2
    /* code that assumes 2 packed characters per cell */
#elseif 4 char == 4
    /* code that assumes 1 packed character per cell */
#else
    #assert 0 /* unsupported cell/character size */
#endif

```

### • Internationalization

Programming examples in this manual have used the English language for
all output (prompts, messages, . . . ), and a Latin character set. This
is not necessarily so; one can, for example, modify the first “hello world” program on page 5 to:

Listing: “hello world” in Greek

```c

main()
    printf "˙  ˙\n"

```

PAWN has basic support for non-Latin alphabets, but it only accepts non-Latin
characters in strings and character constants. The PAWN language
requires that all keywords and symbols (names of functions, variables, tags and other
elements) be encoded in the ascii character set.

For languages whose required character set is relatively small, a common solu-
tion is to use an 8-bit extended ascii character set (the ascii character set is
7-bit, holding 128 characters). The upper 128 codes of the extended set con-

tain glyphs specific for the language. For Western European languages, a well
known character set is “Latin-1”, which is standardized as ISO 8859-1 —the
same set also goes by the name “codepage 1252”, at least for Microsoft Win-
dows.∗ Codepages have been defined for many languages; for example, ISO
8859-2 (“Latin-2”) has glyphs used in Central and Eastern Europe, and ISO
8859-7 contains the Greek alphabet in the upper half of the extended ascii set.

Unfortunately, codepage selection can by confusing, as vendors of operating
systems typically created their own codepages irrespective of what  
already existed. As a result, for most character sets there exist multiple incompatible codepages

---

###### ∗ Codepage 1252 is not exactly the same as Latin-1; Microsoft extended the standardized set to include glyphs at code positions that Latin-1 marks as “reserved”.

---

For example, codepage 1253 for Microsoft Windows also encodes
the Greek alphabet, but it is incompatible with ISO 8859-7. When writing
texts in Greek, it now becomes important to check what encoding is  
used, because many Microsoft Windows applications support both.

When the character set for a language exceeds 256 glyphs, a codepage does
not suffice. Traditionally, the codepage technique was extended by reserving
special “shift” codes in the base character set that switch to a new set of
glyphs. The next character then indicates the specific glyph. In effect, the glyph is
now identified by a 2-byte index. On the other hand, some characters (especially
the 7-bit ascii set) can still be indicated by a single byte. The  
“Shift-JIS” standard, for the Japanese character set, is an example for the variable length encoding.

Codepages become problematic when interchanging documents or data with
people in regions that use a different codepage, or when using different
languages in the same document. Codepages that use “shift” characters compli-
cate the matter further, because text processing must now take into account
that a character may take either one or two bytes. Scanning through a string
from right to left may even become impossible, as a byte may either indicate a
glyph from the base set (“unshifted”) or it may be a glyph from a shifted set
-in the latter case the preceding byte indicates the shift set, but the meaning
of the preceding character depends on the character before that.

The ISO/IEC 10646 “Universal Character Set” (UCS) standard has the ambi-
tious goal to eventually include all characters used in all the written
languages in the world, using a 31-bit character set. This solves both of the problems
related to codepages and “shifted” character sets. However, the ISO/IEC body
could not produce a standard in time, and therefore a consortium of mainly
American software manufacturers started working in parallel on a simplified
16-bit character set called “Unicode”. The rationale behind Unicode was that

it would encode abstract characters, not glyphs, and that therefore 65,536 would
be sufficient.† In practice, though, Unicode does encode glyphs and not long
after it appeared, it became apparent that 65,536 code points would not be
enough. To counter this, later Unicode versions were extended with multiple
“planes” and special codes that select a plane. The combination of a  
plane selector and the code pointer inside that plane is called a “surrogate pair”.

---

###### † If Unicode encodes characters, an “Unicode font” is a contradictio in terminis —because a font encodes glyphs.

---

The first 65,536 code points are in the “Basic Multilingual Plane” (BMP) and
characters in this set do not need a plane selector.

Essentially, the introduction of surrogate pairs in the Unicode  
standard is equivalent to the shift codes of earlier character sets —and it carries some of
the problems that Unicode was intended to solve. The UCS-4 encoding by
ISO/IEC 10646 does not have/need surrogate pairs.

Support for Unicode/UCS-4 in (host) applications and operating systems has
emerged in two different ways: either the internal representation of characters
is multi-byte (typically 16-bit, or 2-byte), or the application stores strings
internally in UTF-8 format, and these strings are converted to the proper glyphs
only when displaying or printing them. Recent versions of Microsoft Windows
use Unicode internally; The Plan-9 operating system pioneered the UTF-8 en-
coding approach, which is now widely used in Unix/Linux. The  
advantage of UTF-8 encoding as an internal representation is that it is physically an 8-
bit encoding, and therefore compatible with nearly all existing databases, file
formats and libraries. This circumvents the need for double entry-points for
functions that take string parameters —as is the case in Microsoft Windows,
where many functions exist in an “A”nsi and a “W”ide version. A disadvantage of UTF-8
is that it is a variable length encoding, and many in-memory
string operations are therefore clumsy (and inefficient). That said, with the
appearance of surrogate pairs, Unicode has now also become a variable length
encoding.

The PAWN language requires that its keywords and symbols names are in ascii,
and it allows non-ascii characters in strings. There are five ways that a host
application could support non-ascii characters in strings and character
literals:

1 Support codepages: in this strategy the entire complexity of choosing the
correct glyphs and fonts is delegated to the host application. The codepage
support is based on codepage mapping files with a file format of the “cross
mapping tables” distributed by the Unicode consortium.

2 Support Unicode or UCS-4 and let the PAWN compiler convert scripts that
were written using a codepage to “wide” characters: for this strategy, you
need to set #pragma codepage or use the equivalent compiler option. The
compiler will only correctly translate characters in unpacked strings.

3 Support Unicode or UCS-4 and let the PAWN compiler convert scripts encoded
in UTF-8 to “wide” characters: when the source file for the PAWN
compiler is in UTF-8 encoding, the compiler expands characters to Unicode/UCS-4 in unpacked strings.

4 Support UTF-8 encoding internally (in the host application) and write the
source file in UTF-8 too: all strings should now be packed strings to avoid
the compiler to convert them.

For most internationalization strategies, as you can see, the host application
needs to support Unicode or UCS-4. As a side note, the PAWN compiler does not
generate Unicode surrogate pairs. If characters outside the BMP are needed

and the host application (or operating system) does not support the full UCS-4
encoding, the host application must split the 32-bit character cell provided
by the PAWN compiler into a surrogate pair.

The PAWN compiler accepts a source file as an UTF-8 encoded text file —see
page 168. When the source file is in UTF-8 encoding, “wide” characters in
an unpacked string are stored as multi-byte Unicode/UCS-4 characters; wide
characters in a packed string remain in UTF-8 encoding. To write  
source files in UTF-8 encoding, you need, of course, a (programmer’s) editor  
that supports UTF-8. Codepage translation does not apply for files that  
are in UTF-8 encoding.

For an occasional Unicode character in a literal string, an alternative is that
you use an escape sequence. As Unicode character tables
are usually documented with hexadecimal glyph indices, the xhhh; sequence is probably the  
more convenient specification of a random Unicode character. For example,  
the escape sequence “\x2209” stands for the “6∈” character.

There is a lot more to internationalization than just basic support for extended
character sets, such as formatting date & time fields, reading order
(left-to-right or right-to-left) and locale-driven translation of system messages. The
PAWN toolkit delegates these issues to the host application.

### • Working with tags

The tag name system was invented to add a “usage checking” mechanism to PAWN.
A tag denotes a “purpose” of a value or variable, and the PAWN compiler
issues a diagnostic message when the tag of an expression does not match the
required tag for the context of the expression.

Many modern computer languages offer variable types, where a type specifies
the memory layout and the purpose of the variable. The programming language

then checks the type equivalence; the pascal language is very strict at checking
type equality, whereas the C programming language is more forgiving. The
PAWN language does not have types: all variables have the size and the layout
of a cell, although bit representations in the cell may depend on the purpose
of the variable. In summary:

- a type specifies the memory layout and the range of variables and function results

- a tagname labels the purpose of variables, constants and function results

Tags in PAWN are mostly optional. A program that was “fortified” with tag
names on the variable and constant declarations will function identically when
all tag names are removed. One exception is formed by user-defined operators:
the PAWN compiler uses the tags of the operands to choose between any user-
defined operators and the standard operator.

The snippet below declares three variables and does three assignments, two of
which give a “tag mismatch” diagnostic message:

Listing: comparing apples to oranges

```c

new apple:elstar                /* variable "elstar" with tag "apple" */
new orange:valencia             /* variable "valencia" with tag "orange" */
new x                           /* untagged variable "x" */

elstar = valencia               /* tag mismatch */
elstar = x                      /* tag mismatch */
x = valencia                    /* ok */

```

The first assignment causes a “tag mismatch” diagnostic as it assigns an “or-
ange” tagged variable to a variable with an “apple” tag. The second assignment
puts the untagged value of x into a tagged variable, which causes again a di-
agnostic. When the untagged variable is on the left hand of the assignment
operator, as in the third assignment, there is no warning or error message. As
variable x is untagged, it can accept a value of any weak tag.

The same mechanism applies to passing variables or expressions to functions
as function operands —see page 78 for an example. In short, when a function
expects a particular tag name on an argument, you must pass an expression/
variable with a matching tag to that function; but if the function expects an
untagged argument, you may pass in arguments with any weak tag.

On occasion, it is necessary to temporarily change the tag of an expression.
For example, with the declarations of the previous code snippet, if you would
wish to compare apples with oranges (recent research indicates that comparing
apples to oranges is not as absurd than popular belief holds), you could use:

```c

if (apple:valencia < elstar)
    valencia = orange:elstar

```

The test expression of the if statement (between parentheses) compares the
variable valencia to the variable elstar. To avoid a “tag mismatch” diagnos-
tic, it puts a tag override apple: on valencia —after that, the expressions
on the left and the right hands of the > operator have the same tag
name: “apple:”. The second line, the assignment of elstar to valencia, overrides
the tag name of elstar or orange: before the assignment. In an assignment,
you cannot override the tag name of the destination; i.e., the left hand of
the = operator. It is an error to write “apple:valencia = elstar”. In the as-
signment, valencia is an “lvalue” and you cannot override the tag name of an
lvalue.

As shown earlier, when the left hand of an assignment holds an
untagged variable, the expression on the right hand may have any weak tag name. When
used as an lvalue, an untagged variable is compatible with all weak tag names.
Or rather, a weak tag is silently dropped when it is assigned to an untagged
variable or when it is passed to a function that expects an untagged argument.
When a tag name indicates the bit pattern of a cell, silently dropping a weak
tag can hide errors. For example, the snippet below has an error that is not
immediately obvious:

Listing: bad way of using tags

```c

#pragma rational float

new limit = -5.0
new value = -1.0

if (value < limit)
    printf("Value %f below limit %f\n", value, limit)
else
    printf("Value above limit\n")

```

Through the “#pragma rational”, all rational numbers receive the “float”
tag name and these numbers are encoded in the 4-byte IEEE 754 format. The
snippet declares two variables, limit and value, both of which are untagged
(this is the error). Although the literal values -5.0 and -1.0 are implicitly
tagged with float:, this weak tag is silently dropped when the values  
get assigned to the untagged symbols limit and value. Now, the if statement
compares value to limit as integers, using the built-in standard < operator
(a user-defined operator would be more appropriate to compare two IEEE 754
encoded values). When run, this code snippet tells us that “Value -1.000000
below limit -5.000000” —which is incorrect, of course.

To avoid such subtle errors to go undetected, one should use strong tags. A
strong tag is merely a tag name that starts with an upper case letter, such
as Float: instead of float:. A strong tag is never automatically “dropped”,
but it may still be explicitly overridden. Below is a modified code snippet
with the proposed adaptations:

Listing: strong tags are safer

```c

#pragma rational Float

new Float:limit = -5.0
new Float:value = -1.0

if (value < limit)
    printf("Value %f below limit %f\n", _:value, _:limit)
else
    printf("Value above limit\n")

```

Forgetting the Float: tag name in the declaration of the variables  
limit or value immediately gives a “tag mismatch” diagnostic, because the literal
values -5.0 and -1.0 now have a strong tag name.

printf is a general purpose function that can print strings and values in
various formats. To be general purpose, printf accepts arguments with any weak tag
name, be it apple:’s, orange:’s, or something else. The printf
function does this by accepting untagged arguments —weak tags are dropped when an
untagged argument is expected. Strong tags, however, are never dropped, and
in the above snippet (which uses the original definition of printf), I
needed to put an empty tag override, “\_:”, before the variables value and limit in
the first printf call.

There is an alternative to untagging expressions with strong tag names in gen-
eral purpose functions: adjust the definition of the function to accept both
all weak tags and a selective set of strong tag names. The PAWN language supports
multiple tag names for every function arguments. The original definition of printf (from the file console.inc) is:

```c

native printf(const format[], ...);

```

By adding both a Float: tag and an empty tag in front of the ellipsis (“...”),
printf will accept arguments with the Float: tag name, arguments without
a tag name and arguments that have a weak tag name. To specify plural tag
names, enclose all tag names without their final colon between braces with a
comma separating the tag names (see the example below). It is necessary to
add the empty tag specification to the list of tag names, because printf would
otherwise only accept arguments with a Float: tag name. Below is the new
definition of the function printf:

```c

native printf(const format[], {Float, \_}: ...);

```

Plural tags allow you to write a single function that accepts cells with a pre-
cisely specified subset of tags (strong and/or weak). While a function argument
may accept being passed actual arguments with diverse tags, a variable can
only have a single tag —and a formal function argument is a local variable in
the body of the function. In the presence of plural tags, the formal function
argument takes on the tag that is listed first.

On occasion, you may want to check which tag an actual function argument
had, when the argument accepts plural tags. Checking the tag of the formal
argument (in the body of the function) is of no avail, because it will always
have the first tag in the tag list in the declaration of the function argument.
You can check the tag of the actual argument by adding an extra argument
to the function, and set its default value to be the “tagof” of the argument
in question. Similar to the sizeof operator, the tagof operator has a special
meaning when it is applied in a default value of
a function argument: the expression is evaluated at the point of the function call,
instead of at the function definition.
This means that the “default value” of the function argument is
the actual tag of the parameter passed to the function.

Inside the body of the function, you can compare the tag to known tags by,
again, using the tagof operator.

### • Concatenating lines

PAWN is a free format language, but the parser directives must be on a single line.
Strings may not run over several lines either. When this is inconvenient,
you can use a backslash character (“\”) at the end of a line to “glue” that
line with the next line.

For example:

```c

#define             max_path max_drivename + max_directorystring + \
                    max_filename + max_extension

```

You also use the concatenation character to cut long literal strings over
multiple lines. Note that the “\” eats up all trailing white space that comes after it
and leading white space on the next line. The example below prints “Hello
world” with one space between the two words (because there is a space between
”Hello” and the backslash):

```c

print("Hello \
      world")

```

### • A program that generates its own source code

An odd, slightly academic, criterion to quantify the “expressiveness” of a pro-
gramming language is size of the smallest program that, upon execution, re-
generates its own source code. The rationale behind this criterion  
is that the shorter the self-generating program, the more flexible and expressive the
language must be. Programs of this kind have been created for many program-
ming languages —sometimes surprisingly small, as for languages that have a
built-in reflective capabilities.

Self-generating programs are called “quines”, in honour of the  
philosopher Willard Van Orman Quine who wrote self-creating phrases in natural language.
The work of Van Orman Quine became well known through the books “G¨odel,
Escher, Bach” and “Metamagical Themas” by Douglas Hofstadter.

The PAWN quine is in the example below; it is modelled after the famous “C”
quine (of which many variations exist). At 77 characters, it is amongst the
smallest versions for the class of imperative programming languages, and the
size can be reduced to 73 characters by removing four “space” characters that
were left in for readability.

Listing: quine.p

```c

    new s[]="new s[]=%c%s%c; main() printf s,34,s,34"; main() printf s,34,s,34

```

---

`See the separate application note for proposed native functions that operate on both packed and unpacked strings`

`EOS: predefined constant to mark the End Of String; it has the value ’\0’`

`Predefined constants: 102`

`Packed & unpacked strings: 99`

`Escape sequence: 99`

`Tag names: 68`

`User-defined operators: 86`

`More tag name rules: 68`

`lvalue (definition of ~): 104`

`Directives: 77`

`Directives: 117`

---

[Go Back to Contents](00-Contents.md)
