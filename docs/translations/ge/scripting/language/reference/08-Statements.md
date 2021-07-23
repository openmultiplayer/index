# Statements

---

A statement may take one or more lines, whereas one line may contain two or
more statements.

Control flow statements (if, if–else, for, while, do–while and switch) may be nested.

**Statement label**

    A label consists of an identifier followed by a colon (“:”).
    A label is a “jump target” of the goto statement.

    Each statement may be preceded by a label.
    There must be a statement after the label; an empty statement is allowed.

    The scope of a label is the function in which it is declared
    (a goto statement cannot therefore jump out off the current function to another function).

**Compound statement**

    A compound statement is a series of zero or more statements
    surrounded by braces ({ and }). The final brace (}) should not be followed by a semicolon.
    Any statement may be replaced by a compound statement.
    A compound statement is also called a block.
    A compound statement with zero statements is a special case,
    and it is called an “empty statement”.

**Expression statement**

    Any expression becomes a statement when a semicolon (“;”) is appended to it.
    An expression also becomes a statement when only white space
    follows it on the line and the expression cannot be extended over the next line.

**Empty statement**

    An empty statement performs no operation and consists of a
    compound block with zero statements; that is, it consists of the tokens “{ }”.
    Empty statements are used in control flow statements
    if there is no action (e.g. while (!iskey()) {}) or when defining a label just
    before the closing brace of a compound statement.
    An empty statement does not end with a semicolon.

**assert** _expression_

    Aborts the program with a run-time error
    if the expression evaluates to logically “false”.

**break**

    Terminates and exits the smallest enclosing do,
    for or while statement from any point within the loop
    other than the logical end. The break statement moves program control
    to the next statement outside the loop.

**continue**

    Terminates the current iteration of the smallest enclosing do,
    for or while statement and moves program control to the condition part of the loop.
    If the looping statement is a for statement,
    control moves to the third expression in the for statement
    (and thereafter to the second expression).

**do** _statement_ **while** ( _expression_ )

    Executes a statement before the condition part (the while clause) is evaluated.
    The statement is repeated while the condition is logically “true”.
    The statement is at least executed once.

**exit** _expression_

    Abort the program. The expression is optional, but it must start
    on the same line as the exit statement if it is present.
    The exit instruction returns the expression value (plus the expression tag)
    to the host application, or zero if no exit expression is present.
    The significance and purpose of exit codes is implementation defined.

**for** ( _expression 1_ ; _expression 2_ ; _expression 3_ ) _statement_

    All three expressions are optional.

    *expression 1*
        Evaluated only once, and before entering the loop.
        This expression may be used to initialize a variable.
        This expression may also hold a variable declaration, using the new syntax.
        A variable declared in this expression exists only in the for loop.

    *expression 2*
        Evaluated before each iteration of the loop and
        ends the loop if the expression results to logically “false”.
        If omitted, the result of expression 2 is assumed to be logically “true”.

    *expression 3*
        Evaluated after each execution of the statement.
        Program control moves from expression 3 to expression 2
        for the next (conditional) iteration of the loop.
        The statement for( ; ; ) is equivalent with while (true).

**goto** _label_

    Moves program control (unconditionally) to the statement that follows the specified label.
    The label must be within the same function as the
    goto statement (a goto statement cannot jump out of a function).

**if** ( _expression_ ) _statement 1_ **else** _statement 2_

    Executes statement 1 if the expression results to logically “true”.
    The else clause of the if statement is optional.
    If the expression results to logically “false” and an else clause exists,
    the statement associated with the else clause (statement 2) executes.

    When if statements are nested and else clauses are present,
    a given else is associated with the closest preceding if statement in the same block.

**return** _expression_

    Terminates the current function and moves program control
    to the statement following the calling statement.
    The value of the expression is returned as the function result.
    The expression may be an array variable or a literal array.

    The expression is optional, but it must start on the same line
    as the return statement if it is present.
    If absent, the value of the function is zero.

**sleep** _expression_

    Abort the program, but leave it in a re-startable state.
    The expression is optional. If included, the sleep instruction
    returns the expression value (plus the expression tag)
    to the host application. The significance and purpose
    of exit codes/tags is implementation defined;
    typically, an application uses the sleep instruction to allow for
    light-weight multitasking of several concurrent pawn programs,
    or to implement “latent” functions.

**state** ( _expression_ ) **automaton** :_name_

    Changes the current state in the specified automaton.
    The expression between parentheses is optional; if it is absent,
    the parentheses must be omitted as well.
    The name of the automaton is optional as well,
    when changing the state of the default, anonymous, automaton;
    if the automaton name is absent, the colon (“:”) must be omitted as well.

    Below are two examples of unconditional state changes. The first is for the default automaton:

```

state handshake

```

    and the second for a specific automaton:

```

state gps:handshake

```

    Often, whether or not a state changes depends on parameters of the event or the condition of the automaton as a whole.
    Since conditional state changes are so frequent,
    the condition may be in the state instruction itself.
    ∗ The condition follows the keyword state, between parentheses.
    The state will only change if the condition is logically “true”.

    The state instruction causes an implied call to the
    entry function for the indicated state —if such entry function exists.

**switch** ( _expression_ ) { _case list_ }

    Transfers control to different statements within the switch body depending
    on the value of the switch expression.
    The body of the switch statement is a compound statement,
    which contains a series of “case clauses”.

    Each “case clause” starts with the keyword case followed by a constant list and one statement.
    The constant list is a series of expressions, separated by comma’s,
    that each evaluates to a constant value.
    The constant list ends with a colon. To specify a “range” in the constant list,
    separate the lower and upper bounds of the range with a double period (“..”).
    An example of a range is: “case 1..9:”.

    The switch statement moves control to a “case clause” if the value of one of the
    expressions in the constant list is equal to the switch expression result.

    The “default clause” consists of the keyword default and a colon.
    The default clause is optional, but if it is included, it must be the last clause in the switch body.
    The switch statement moves control to the “default clause” is executed
    if none of the case clauses match the expression result.

    Example:

---

###### ∗ The alternative is to fold unconditional state changes in the common if–else construct.

---

```c

switch (weekday(12,31,1999))
{
    case 0, 1:              /* 0 == Saturday, 1 == Sunday */
        print("weekend")
    case 2:
        print("Monday")
    case 3:
        print("Tuesday")
    case 4:
        print("Wednesday")
    case 5:
        print("Thursday")
    case 6:
        print("Friday")
    default:
        print("invalid week day")
}

```

**while** ( _expression_ ) _statement_

    Evaluates the expression and executes the statement
    if the expression result yields logically “true”.
    After the statement has executed, program control returns to the expression again.
    The statement is thus executed while the expression is true.

---

`Identifiers: 97`

`Example: 11 (assert)`

`Example: 21 (break)`

`Example: 27 (do while)`

`Examples: 9, 11, 21 (for)`

`Variable declarations: 62 (for)`

`Example: 7 (if else)`

`Examples: 11, 21 (return)`

`See page 40 for examples of conditional state changes (state automaton)`

`“entry” functions: 44 (state automaton)`

`Examples: 7, 21, 26 (while)`

---

[Go Back to Contents](00-Contents.md)
