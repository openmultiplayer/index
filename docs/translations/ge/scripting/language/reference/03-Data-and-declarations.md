# Data and declarations

---

PAWN is a typeless language. All data elements are of type “cell”, and a cell
can hold an integral number. The size of a cell (in bytes) is system dependent
—usually, a cell is 32-bits.

The keyword new declares a new variable. For special declarations, the keyword
new is replaced by static, public or stock (see below). A simple variable
declaration creates a variable that occupies one “cell” of data memory. Unless
it is explicitly initialized, the value of the new variable is zero.

A variable declaration may occur:

- at any position where a statement would be valid —local variables;

- at any position where a function declaration (native function declarations) or a function implementation would be valid —global variables;

- in the first expression of a for loop instruction —also local variables.

**Local declarations**

`A local declaration appears inside a compound statement. A local variable can only be accessed from within the compound statement, and from nested compound statements. A declaration in the first expression of a for loop instruction is also a local declaration.`

**Global declarations**

`A global declaration appears outside a function and a global variable is accessible to any function. Global data objects can only be initialized with constant expressions.`

---

`“for” loop: 113`

`Compound statement: 112`

---

### • State variable declarations

A state variable is a global variable with a state classifier appended at the end.
The scope and the lifespan of the variable are restricted to the states that are
listed in the classifier.

State variables may not be initialized. In contrast to normal variables (which
are zero after declaration —unless explicitly initialized), state variables
hold an indeterminate value after declaration and after first entering a state in its
classifier. Typically, one uses the state entry function(s) to properly
initialize the state variable.

### • Static local declarations

A local variable is destroyed when the execution leaves the compound block
in which the variable was created. Local variables in a function  
only exist during the run time of that function. Each new run of the function creates
and initializes new local variables. When a local variable is  
declared with the keyword static rather than new, the variable remains in existence after
the end of a function. This means that static local variables provide private,
permanent storage that is accessible only from a single function (or compound
block). Like global variables, static local variables can only be initialized
with constant expressions.

### • Static global declarations

A static global variable behaves the same as a normal global variable, except
that its scope is restricted to the file that the declaration resides in. To
declare a global variable as static, replace the keyword new by static.

### • Stock declarations

A global variable may be declared as “stock”. A stock declaration is one that
the parser may remove or ignore if the variable turns out not to be used in the program.

Stock variables are useful in combination with stock functions. A public vari-
able may be declared as “stock” as well —declaring public variables as “public
stock” enables you to declare al public variables that a host application pro-
vides in an include file, with only those variables that the script actually
uses winding up in the P-code file.

### • Public declarations

Global “simple” variables (no arrays) may be declared “public” in two ways:

- declare the variable using the keyword public instead of new;

- start the variable name with the “@” symbol.

Public variables behave like global variables, with the addition that the host
program can also read and write public variables. A (normal) global variable
can only be accessed by the functions in your script —the host  
program is unaware of them. As such, a host program may require that you declare a
variable with a specific name as “public” for special purposes —such as the
most recent error number, or the general program state.

---

`Symbolic constants: 101`

`Stock functions: 84`

---

• Constant variables

It is sometimes convenient to be able to create a variable that is initialized
once and that may not be modified. Such a variable behaves much like a symbolic
constant, but it still is a variable.

To declare a constant variable, insert the keyword const between the keyword
that starts the variable declaration —new, static, public or stock— and the
variable name.

Examples:

```c

new const address[4] = { 192, 0, 168, 66 }

public const status           /* initialized to zero */

```

Three typical situations where one may use a constant variable are:

- To create an “array” constant; symbolic constants cannot be indexed.

- For a public variable that should be set by the host application, and only by the host application. See the preceding section for public variables.

- A special case is to mark array arguments to functions as const. Array arguments are always passed by reference, declaring them as const guards against unintentional modification. Refer to page 72 for an example of const function arguments.

---

`See also “multidimensional arrays”, page 66`

---

### • Arrays (single dimension)

The syntax name[constant] declares name to be an array of “constant” el-
ements, where each element is a single cell. The name is a placeholder of an
identifier name of your choosing and constant is a positive non-zero value;
constant may be absent. If there is no value between the brackets, the num-
ber of elements is set equal to the number of initiallers
—see the example below.

The array index range is “zero based” which means that the first element is at
name[0] and the last element is name[constant-1].

### • Initialization

Data objects can be initialized at their declaration. The initialler of a
global data object must be a constant. Arrays, global or local, must also be
initialized with constants.

Uninitialized data defaults to zero.
Examples:

Listing: good declaration

```c

new i = 1
new j                                   /* j is zero */
new k = ’a’                             /* k has character code for letter ’a’ */

new a[] = {1,4,9,16,25}                 /* a has 5 elements */
new s1[20] = {’a’,’b’}                  /* the other 18 elements are 0 */

new s2[] = "Hello world..."             /* a unpacked string */

```

Examples of invalid declarations:

Listing: bad declarations

```c

new c[3] = 4                            /* an array cannot be set to a value */
new i = "Good-bye"                      /* only an array can hold a string */
new q[]                                 /* unknown size of array */
new p[2] = { i + j, k - 3 }             /* array initiallers must be constants */

```

---

`Constants: 98`

---

### • Progressive initiallers for arrays

The ellipsis operator continues the progression of the initialisation
constants for an array, based on the last two initialized elements. The ellipsis operator
(three dots, or “...”) initializes the array up to its declared size.

Examples:

Listing: array initializers

```c

new a[10] = { 1, ... }                  /* sets all ten elements to 1 */
new b[10] = { 1, 2, ... }               /* sets: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */
new c[8] = { 1, 2, 40, 50, ... }        /* sets: 1, 2, 40, 50, 60, 70, 80, 90 */
new d[10] = { 10, 9, ... }              /* sets: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */

```

### • array initialization and enumerations

The array size may be set with a constant that represents an  
enumeration: an example of this is the “priority queue” sample program at page 21. When
individual fields of the enumeration have a size, the associated array elements
are interpreted as sub-arrays, on occasion. For an example of this behaviour,
see the rpn calculator program at page 30.

The sub-array syntax applies as well to the initialization of an “enumerated”
array. Referring again to the “priority queue” sample program, to initialize a
“message” array with fixed values, the syntax is:

Listing: array initializers

```c

enum message /* declaration copied from "QUEUE.P" */
    {
        text[40 char],
        priority
    }

new msg[message] = { !"new message", 1 }

```

The initialler consists of a string (a literal array) and a value; these go
into the fields “text” and “priority” respectively.

### • Multi-dimensional arrays

Multi-dimensional arrays are arrays that contain references to the sub-arrays.∗
That is, a two-dimensional array is an “array of single-dimensional arrays”.
Below are a few examples of declarations of two-dimensional arrays.

Listing: Two-dimensional arrays

```c

new a[4][3]
new b[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
new c[3][3] = { { 1 }, { 2, ...}, { 3, 4, ... } }
new d[2][5] = { !"agreement", !"dispute" }
new e[2][] = { "OK", "Cancel" }
new f[][] = { "OK", "Cancel" }

```

---

###### ∗ The current implementation of the Pawn compiler supports only arrays with up to two dimensions.

---

As the last two declarations (variable “e” en “f”) show, the final dimension
of an array may have an unspecified length, in which case the length of each
sub-array is determined from the related initializer. Every sub-array may have
a different size; in this particular example, “e[1][5]” contains the letter ”l”
from the word “Cancel”, but “e[0][5]” is invalid because the length of the
sub-array “e[0]” is only three cells (containing the letters “O”, “K” and a
zero terminator).

The difference between the declarations for arrays “e” and “f” is that in we
let the compiler count the number of initializers for the major dimension —
“sizeof f” is 2, like “sizeof e” (see the next section on the sizeof operator).

### • Arrays and the sizeof operator

The sizeof operator returns the size of a variable in “elements”. For a simple
(non-compound) variable, the result of sizeof is always 1, because an element
is a cell for a simple variable.

An array with one dimension holds a number of cells and the sizeof operator
returns that number. The snippet below would therefore print “5” at  
the display, because the array “msg” holds four characters (each in one cell) plus a zero-terminator:

Listing: sizeof operator

```c

new msg[] = "Help"
printf("%d", sizeof msg);

```

With multi-dimensional arrays, the sizeof operator can return the number
of elements in each dimension. For the last (minor) dimension, an  
element will again be a cell, but for the major dimension(s), an element is a sub-array.
In the following code snippet, observe that the syntax sizeof matrix refers
to the major dimension of the two-dimensional array and the syntax sizeof
matrix[] refers to the minor dimension of the array. The values that
this snippet prints are 3 and 2 (for the major and minor dimensions respectively):

Listing: sizeof operator and multidimensional arrays

```c

new matrix[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }
printf("%d %d", sizeof matrix, sizeof matrix[]);

```

The application of the sizeof operator on multi-dimensional arrays is especially convenient when used as a default value for function arguments.

---

`Default function arguments and sizeof: 77`

---

### • Tag names

A tag is a label that denotes the objective of —or the meaning of— a variable,
a constant or a function result. Tags are optional, their only purpose is to
allow a stronger compile-time error checking of operands in expressions, of function
arguments and of array indices.

A tag consists of a symbol name followed by a colon; it has the same syntax as a label. A tag precedes
the symbol name of a variable, constant or function.

In an assignment, only the right hand of the “=” sign may be tagged.
Examples of valid tagged variable and constant definitions are:

Listing: tag names

```c

new bool:flag = true            /* "flag" can only hold "true" or "false" */

const error:success = 0
const error:fatal= 1
const error:nonfatal = 2

error:errno = fatal

```

The sequence of the constants success, fatal and nonfatal could more con-
veniently be declared using an enum instruction, as illustrated below.  
The enumeration instruction below creates four constants, success, fatal, non-
fatal and error, all with the tag error.

Listing: enumerations

```c

enum error {
    success,
    fatal,
    nonfatal,
}

```

A typical use of “tagged” enum’s is in conjunction with arrays. If every field
of an array has a distinct purpose, you can use a tagged enum to declare the size
of an array and to add tag checking to the array usage in a single step:

Listing: enumerations and arrays

```c

enum rectangle
{
    left,
    top,
    right,
    bottom
}

new my_rect[rectangle] /* array is declared as having 4 cells */

my_rect[left] = 10
my_rect[top] = 5
my_rect[right] = 30
my_rect[bottom] = 12

for (new i = 0; rectangle:i < rectangle; ++i)
    my_rect[rectangle:i] *= 2

```

After the declaration of “my_rect” above, you can access the second field of
my_rect with “my_rect[top]”, but saying “my_rect[1]” will give a parser
diagnostic (a warning or error message). A tag override (or a tag cast) adjusts
a function, constant or variable to the desired tag name. The for loop at the
last two lines in the preceding example depicts this: the loop variable i
is a plain, untagged cell, an it must be cast to the tag rectangle before using it
as an index in the array my_rect. Note that the enum construct has created
both a constant and a tag with the name “rectangle”.

Tag names introduced so far started with a lower case letter; these are “weak”
tags. Tag names that start with an upper case letter are “strong” tags. The
difference between weak and strong tags is that weak tags may, in a few circum-
stances, be dropped implicitly by the pawn parser —so that a weakly tagged
expression becomes an untagged expression. The tag checking mechanism verifies the following situations:

- When the expressions on both sides of a binary operator have a different tag, or when one of the expressions is tagged and the other is not, the compiler issues a “tag mismatch” diagnostic. There is no difference between weak and strong tags in this situation.

- There is a special case for the assignment operator: the compiler issues diagnostic if the variable on the left side of an assignment operator has a tag, and the expression on the right side either has a different tag or is untagged. However, if the variable on the left of the assignment operator is untagged, it accepts an expression (on the right side) with a weak tag. In other words, a weak tag is dropped in an assignment when the lvalue is untagged.

- Passing arguments to functions follows the rule for assignments. The compiler issues a diagnostic when the formal parameter (in a function definition) has a tag and the actual parameter (in the function call) either is untagged or has a different tag. However, if the formal parameter is untagged, it also accepts a parameter with any weak tag.

- An array may specify a tag for every dimension, see the “my_rect” example above. Tag checking array indices follows the rule of binary operator tag checking: there is no difference between weak and strong tags.

---

`Label syntax: 112`

`“enum” statement: 101`

`“lvalue”: the variable on the left side in an assignment, see page 104`

---

[Go Back to Contents](00-Contents.md)
