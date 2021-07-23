# Operators and expressions

---

### • Notational conventions

The operation of some operators depends on the specific kinds of operands.
Therefore, operands are notated thus:

| Operators | Usage                                                                   |
| --------- | ----------------------------------------------------------------------- |
| e         | any expression;                                                         |
| v         | any expression to which a value can be assigned (“lvalue” expressions); |
| a         | an array;                                                               |
| f         | a function;                                                             |
| s         | a symbol —which is a variable, a constant or a function.                |

### • Expressions

An expression consists of one or more operands with an operator. The operand
can be a variable, a constant or another expression. An expression followed by
a semicolon is a statement.

Listing: examples of expressions

```c

v++
f(a1, a2)
v = (ia1 * ia2) / ia3

```

### • Arithmetic

| Sign   | Description                                                                                                                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| +      | e1 + e2                                                                                                                                                                                                     |
|        | Results in the addition of e1 and e2                                                                                                                                                                        |
| -      | e1 - e2                                                                                                                                                                                                     |
|        | Results in sthe subtraction of e1 and e2                                                                                                                                                                    |
|        | -e                                                                                                                                                                                                          |
|        | Results in the arithmetic negation of a (two’s complement).                                                                                                                                                 |
| \*     | e1 \* e2                                                                                                                                                                                                    |
|        | Results in the multiplication of e1 and e2.                                                                                                                                                                 |
| /      | e1 / e2                                                                                                                                                                                                     |
|        | Results in the division of e1 by e2. The result is truncated to the nearest integral value that is less than or equal to the quotient. Both negative and positive values are rounded down, i.e. towards −∞. |
| %      | e1 % e2                                                                                                                                                                                                     |
|        | Results in the modulus (remainder of the division) of e1 by e2. The modulus is always a positive value.                                                                                                     |
| ++     | v++                                                                                                                                                                                                         |
|        | increments v by 1; the result if the expression is the value of v before it is incremented.                                                                                                                 |
|        | ++v                                                                                                                                                                                                         |
|        | increments v by 1; the result if the expression is the value of v after it is incremented.                                                                                                                  |
| --     | v--                                                                                                                                                                                                         |
|        | decrements v by 1; the result if the expression is the value of v before it is decremented.                                                                                                                 |
|        | --v                                                                                                                                                                                                         |
|        | decrements v by 1; the result if the expression is the value of v after it is decremented.                                                                                                                  |
| Notes: | The unary + is not defined in pawn                                                                                                                                                                          |
|        | The operators ++ and -- modify the operand. The operand must be an lvalue.                                                                                                                                  |

### • Bit manipulation

| Sign | Description                                                                                                                                                           |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| ~    | ~e                                                                                                                                                                    |
|      | results in the one’s complement of e.                                                                                                                                 |
| >>   | e1 >> e2                                                                                                                                                              |
|      | results in the arithmetic shift to the right of e1 by e2 bits. The shift operation is signed: the leftmost bit of e1 is copied to vacant bits in the result.          |
| >>>  | e1 >>> e2                                                                                                                                                             |
|      | results in the logical shift to the right of e1 by e2 bits. The shift operation is unsigned: the vacant bits of the result are filled with zeros.                     |
| <<   | e1 << e2                                                                                                                                                              |
|      | results in the value of e1 shifted to the left by e2 bits; the rightmost bits are set to zero. There is no distinction between an arithmetic and a logical left shift |
| &    | eq & e2                                                                                                                                                               |
|      | results in the bitwise logical “and” of e1 and e2.                                                                                                                    |
|      |                                                                                                                                                                       | e1  | e2  |
|      | results in the bitwise logical “or” of e1 and e2.                                                                                                                     |
| ^    | e1 ^ e2                                                                                                                                                               |
|      | results in the bitwise “exclusive or” of e1 and e2.                                                                                                                   |

### • Assignment

The result of an assignment expression is the value of the left operand after the assignment. The left operand may not be tagged.

| Sign | Description                                                                                                                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |
| =    | v = e                                                                                                                                                                                             |
|      | assigns the value of e to variable v.                                                                                                                                                             |
|      | If “v” is an array, it must have an explicit size and “e” must be an array of the same size; “e” may be a string or a literal array.                                                              |
| Note | the following operators combine an assignment with an arithmetic or a bitwise operation; the result of the expression is the value of the left operand after the arithmetic or bitwise operation. |
| +=   | v += e                                                                                                                                                                                            |
|      | increments v with a.                                                                                                                                                                              |
| -=   | v -= e                                                                                                                                                                                            |
|      | decrements v with e                                                                                                                                                                               |
| \*=  | v \*= e                                                                                                                                                                                           |
|      | multiplies v with e                                                                                                                                                                               |
| /=   | v /= e                                                                                                                                                                                            |
|      | divides v by e.                                                                                                                                                                                   |
| %=   | v %= e                                                                                                                                                                                            |
|      | assigns the remainder of the division of v by e to v.                                                                                                                                             |
| >>=  | v >>= e                                                                                                                                                                                           |
|      | shifts v arithmetically to the right by e bits.                                                                                                                                                   |
| >>>= | v >>>= e                                                                                                                                                                                          |
|      | shifts v logically to the right by e bits.                                                                                                                                                        |
| <<=  | v <<= e                                                                                                                                                                                           |
|      | shifts v to the left by e bits.                                                                                                                                                                   |
| &=   | v &= e                                                                                                                                                                                            |
|      | applies a bitwise “and” to v and e and assigns the result to v.                                                                                                                                   |
|      | =                                                                                                                                                                                                 | v   | = e |
|      | applies a bitwise “or” to v and e and assigns the result to v.                                                                                                                                    |
| ^=   | v ^= e                                                                                                                                                                                            |
|      | applies a bitwise “exclusive or” to v and e and assigns the                                                                                                                                       |
|      | result to v.                                                                                                                                                                                      |

### • Relational

A logical “false” is represented by an integer value of 0; a logical “true” is represented by any value other than 0. Value results of relational expressions are either 0 or 1, and their tag is set to “bool:”.

| Sign  | Description                                                                                                                                                                      |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ==    | e1 == e2                                                                                                                                                                         |
|       | results in a logical “true” if e1 is equal to e2.                                                                                                                                |
| !=    | e1 != e2                                                                                                                                                                         |
|       | results in a logical “true” if e1 differs from e2.                                                                                                                               |
| Note: | the following operators may be “chained”, as in the expression “e1 <= e2 <= e3”, with the semantics that the result is “1” if all individual comparisons hold and “0” otherwise. |
| <     | e1 < e2                                                                                                                                                                          |
|       | results in a logical “true” if e1 is smaller than e2.                                                                                                                            |
| <=    | e1 <= e2                                                                                                                                                                         |
|       | results in a logical “true” if e1 is smaller than or equal to e2.                                                                                                                |
| >     | e1 > e2                                                                                                                                                                          |
|       | results in a logical “true” if e1 is greater than e2.                                                                                                                            |
| >=    | e1 >= e2                                                                                                                                                                         |
|       | results in a logical “true” if e1 is greater than or equal to e2.                                                                                                                |

### • Boolean

A logical “false” is represented by an integer value of 0; a logical “true” is represented by any value other than 0. Value results of Boolean expressions are either 0 or 1, and their tag is set to “bool”.

| Sign | Description                                                                                                                                    |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- |
| !    | !e                                                                                                                                             |
|      | results to a logical “true” if e was logically “false”.                                                                                        |
|      |                                                                                                                                                |     | e1  |     | e2  |
|      | results to a logical “true” if either e1 or e2 (or both) are logically “true”. The expression e2 is only evaluated if e1 is logically “false”. |
| &&   | e1 && e2                                                                                                                                       |
|      | results to a logical “true” if both e1 and e2 are logically “true”.                                                                            |
|      | The expression e2 is only evaluated if e1 is logically “true”.                                                                                 |

### • Miscellaneous

| Sign    | Description                                                                                                                                                                                                                                                                                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []      | a[e]                                                                                                                                                                                                                                                                                                                                                                        |
|         | array index: results to cell e from array a.                                                                                                                                                                                                                                                                                                                                |
| {}      | a{e}                                                                                                                                                                                                                                                                                                                                                                        |
|         | array index: results to character e from “packed” array a.                                                                                                                                                                                                                                                                                                                  |
| ()      | f(e1,e2,...eN)                                                                                                                                                                                                                                                                                                                                                              |
|         | results to the value returned by the function f. The function is called with the arguments e1, e2, . . . eN. The order of evaluation of the arguments is undefined (an implementation may choose to evaluate function arguments in reversed order).                                                                                                                         |
| ? :     | e1 ? e2 : e3                                                                                                                                                                                                                                                                                                                                                                |
|         | results in either e2 or e3, depending on the value of e1. The conditional expression is a compound expression with a two part operator, “?” and “:”. Expression e2 is evaluated if e1 is logically “true”, e3 is evaluated if e1 is logically “false”.                                                                                                                      |
| :       | tagname: e                                                                                                                                                                                                                                                                                                                                                                  |
|         | tag override; the value of the expression e does not change, but its tag changes. See page 68 for more information.                                                                                                                                                                                                                                                         |
| ,       | e1, e2                                                                                                                                                                                                                                                                                                                                                                      |
|         | results in e2, e1 is evaluated before e2. If used in function argument lists or a conditional expression, the comma expression must be surrounded by parentheses.                                                                                                                                                                                                           |
| defined | defined s                                                                                                                                                                                                                                                                                                                                                                   |
|         | results in the value 1 if the symbol is defined. The symbol may be a constant (page 98), or a global or local variable.                                                                                                                                                                                                                                                     |
|         | The tag of this expression is bool:.                                                                                                                                                                                                                                                                                                                                        |
| sizeof  | sizeof s                                                                                                                                                                                                                                                                                                                                                                    |
|         | results in the size in “elements” of the specified variable. For simple variables and for arrays with a single dimension, an element is a cell. For multi-dimensional arrays, the result is the number of array elements in that dimension —append [] to the array name to indicate a lower/more minor dimension. If the size of a variable is unknown, the result is zero. |
|         | When used in a default value for a function argument, the expression is evaluation at the point of the function call, instead of in the function definition.                                                                                                                                                                                                                |
| state   | state s                                                                                                                                                                                                                                                                                                                                                                     |
|         | where “s” is the name of a state that is optionally prefixed with the automaton name, this operator results in the value 1 if the automatons is in the indicated state and in 0 otherwise.                                                                                                                                                                                  |
|         | The tag of this expression is bool:.                                                                                                                                                                                                                                                                                                                                        |
| tagof   | tagof s                                                                                                                                                                                                                                                                                                                                                                     |
|         | results in the a unique number that represents the tag of the variable, the constant, the function result or the tag label.                                                                                                                                                                                                                                                 |
|         | When used in a default value for a function argument, the expression is evaluation at the point of the function call, instead of in the function definition.                                                                                                                                                                                                                |
| char    | e char                                                                                                                                                                                                                                                                                                                                                                      |
|         | results the number of cells that are needed to hold a packed array of e characters.                                                                                                                                                                                                                                                                                         |

### • Operator precedence

The table beneath groups operators with equal precedence, starting with the
operator group with the highest precedence at the top of the table.

If the expression evaluation order is not explicitly established by parentheses,
it is determined by the association rules. For example: a*b/c is
equivalent with (a*b)/c because of the left-to-right association, and a=b=c is equivalent with a=(b=c).

| Sign                               | Description                                  |               |
| ---------------------------------- | -------------------------------------------- | ------------- | ------------- | ------------- |
| ()                                 | function call                                | left-to-right |
| []                                 | array index (cell)                           |               |
| {}                                 | array index (character)                      |               |
| !                                  | logical not                                  | right-to-left |
| ~                                  | one's complement                             |               |
| -                                  | two's complement                             |               |
| ++                                 | increment                                    |               |
| --                                 | decrement                                    |               |
| :                                  | tag override                                 |               |
| char                               | convert number of packed characters to cells |               |
| defined                            | symbol definition status                     |               |
| sizeof                             | symbol size in "elements"                    |               |
| state                              | automaton/state condition                    |               |
| tagof                              | unique number for the tag                    |               |
| \*                                 | multiplication                               | left-to-right |
| /                                  | division                                     |               |
| %                                  | modulus                                      |               |
| +                                  | addition                                     | left-to-right |
| -                                  | subtraction                                  |               |
| >>                                 | shift right                                  | left-to-right |
| >>>                                | logical shift right                          |               |
| <<                                 | shift left                                   |               |
| &                                  | bitwise and                                  | left-to-right |
| ^                                  | bitwise exclusive or                         | left-to-right |
|                                    |                                              | bitwise or    | left-to-right |
| <                                  | smaller than                                 | left-to-right |
| <=                                 | smaller than or eaqual to                    |               |
| >                                  | greater than                                 |               |
| >=                                 | greater than or eaqual to                    |               |
| ==                                 | equality                                     | left-to-right |
| !=                                 | inequality                                   |               |
| &&                                 | logical and                                  | left-to-right |
|                                    |                                              |               | logical or    | left-to-right |
| ? :                                | conditional                                  | right-to-left |
| =                                  | assignment                                   | right-to-left |
| \*= /= %= += -= >>= >>>= <<= &= ^= | =                                            |               |               |
| ,                                  | comma                                        | left-to-right |

---

`Tag names: 68`

`Example: 77`

`See also page 114 for state specifiers`

---

[Go Back to Contents](00-Contents.md)
