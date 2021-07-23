# Pitfalls: differences from C

---

- PAWN lacks the typing mechanism of C. PAWN is an “integer-only” variety of C; there are no structures or unions, and floating point support must be implemented with user-defined operators and the help of native functions.

- The accepted syntax for rational numbers is stricter than that of floating point values in C. Values like “.5” and “6.” are acceptable in C, but in PAWN one must write “0.5” and “6.0” respectively. In C, the decimal period is optional if an exponent is included, so one can write “2E8”; PAWN does not accept the upper case “E” (use a lower case “e”) and it requires the decimal point: e.g. “2.0e8”. See page 98 for more information.

- PAWN does not provide “pointers”. For the purpose of passing function arguments by reference, PAWN provides a “reference” argument, (page 71). The “placeholder” argument replaces some uses of the NULL pointer (page 75).

- Numbers can have hexadecimal, decimal or binary radix. Octal radix is not supported. See “Constants” on page 98. Hexadecimal numbers must start with “0x” (a lower case “x”), the prefix “0X” is invalid.

- Escape sequences (“\n”, “\t”, etc.) are the same, except for “\ddd” where “ddd” represent three decimal digits, instead of the octal digits that C/C++ uses. The backslash (“\”) may be replaced with another symbol; see #pragma ctrlchar on page 120 —notably, previous versions of PAWN used the caret (“^”) as the escape character.

- Cases in a switch statement are not “fall through”. Only a single instruction may (and must) follow each case label. To execute multiple instructions, you must use a compound statement. The default clause of a switch statement must be the last clause of the switch statement. More on page 115. In C/C++, switch is a “conditional goto”, akin to Fortran’s calculated labels. In PAWN, switch is a structured “if”.

- A break statement breaks out of loops only. In C/C⁺⁺, the break statement also ends a case in a switch statement. Switch statements are implemented differently in PAWN (see page 115).

- PAWN supports “array assignment”, with the restriction that both arrays must have the same size. For example, if “a” and “b” are both arrays with 6 cells, the expression “a = b” is valid. Next to literal strings, PAWN also supports literal arrays, allowing the expression “a = {0,1,2,3,4,5}” (where “a” is an array variable with 6 elements).

- _char_ is an operator, not a type. See page 110 and the tips on page 137.

- _defined_ is an operator, not a preprocessor directive. The defined operator in PAWN operates on constants (with const and enum), global variables, local variables and functions.

- The _sizeof_ operator returns the size of a variable in “elements”, not in “bytes”. An element may be a cell or a sub-array. See page 109 for details.

- The empty instruction is an empty compound block, not a semicolon (page 112). This modification avoids a frequent error.

- The compiler directives differ from C’s preprocessor commands. Notably, the #define directive is incompatible with that of C/C⁺⁺, and #ifdef and #ifndef are replaced by the more general #if directive (see “Directives” on page 117). To create numeric constants, see also page 101; to create string constants, see also page 93.

- Text substitutions (preprocessor macros; see the #define directive) are not matched across lines. That is, the text that you want to match and replace with a #define macro must appear on a single line. The definition of a #define macro must also appear on a single line.

- The direction for truncation for the operator “/” is always towards the smaller value, where -2 is smaller than -1. The “%” operator always gives a positive result, regardless of the signs of the operands. See page 104.

- There is no unary “+” operator, which is a “no-operation” operator anyway.

- Three of the bitwise operators have different precedence than in C. The precedence levels of the “&”, “^” and | operators is higher than the rela- tional operators (Dennis Ritchie explained that these operators got their low precedence levels in C because early C compilers did not yet have the logical “&&” and || operators, so the bitwise “&” and | were used instead).

- The “extern” keyword does not exist in PAWN; the current implementation of the compiler has no “linking phase”. To create a program from several source files, add all source files the compilers command line, or create one main project script file that “#include’s” all other source files. The PAWN compiler can optimize out functions and global variables that you do not use. See pages 63 and 84 for details.

- In most situations, forward declarations of functions (i.e., prototypes) are not necessary. PAWN is a two-pass compiler, it will see all functions on the first pass and use them in the second pass. User-defined operators must be declared before use, however.

If provided, forward declarations must match exactly with the function def-
inition, parameter names may not be omitted from the prototype or differ
from the function definition. PAWN cares about parameter names in pro-
totypes because of the “named parameters” feature. One uses prototypes
to call forwardly declared functions. When doing so with named param-
eters, the compiler must already know the names of the parameters (and
their position in the parameter list). As a result, the parameter names in a
prototype must be equal to the ones in the definition.

---

[Go Back to Contents](00-Contents.md)
