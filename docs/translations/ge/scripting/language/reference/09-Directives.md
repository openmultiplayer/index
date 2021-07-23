# Directives

---

All directives must appear first on a line (they may be preceded by white space,
but not by any other characters). All directives start with the character # and
the complete instruction may not span more than one line.

**#assert** _constant expression_

    Issues a compile time error if the supplied constant expression evalu-
    ates to zero. The #assert directive is most useful to guard against
    implementation defined constructs on which a program may depend,
    such as the cell size in bits, or the number of packed characters per cell.

**#define** _pattern replacement_

    Defines a text substitution macro. The pattern is matched to all lines
    read from the source files; the sections that match are replaced by
    the replacement texts. The pattern and the replacement texts may
    contain parameters, denoted by “%0” to “%9”. See page 93 for details
    and examples on text substitution.

**#emit** _opcode, parameters_

    The #emit directive serves as an inline assembler. It is currently used
    only for testing the abstract machine.

**#endinput & #endscript**

    Closes the current file and thereby ignores
    all the text below the #endinput directive.
    The directive #endscript is a synonym for #endinput.

**#error**

    message: Signals a “user error” with the specified message. User er-
    rors are fatal errors and they serve a similar purpose as the #assert
    directive.

**#file** _name_

    Adjusts the name for the current file. This directive is used implicitly
    by the text preprocessor; there is usually no need to set a filename
    explicitly.

**#if** _constant expression_, #elseif, #else, #endif

    Portions of a program may be parsed or be ignored depending on cer-
    tain conditions. The pawn parser (compiler or interpreter) generates
    code only for those portions for which the condition is true.

    The directive #if must be followed by a constant expression. To check
    whether a variable or constant is defined, use the defined operator.

    Zero or more #elseif directives may follow the initial #if directive.
    These blocks are skipped if any of the preceding #if or #elseif blocks
    were parsed (i.e. not skipped). As with the #if directive, a constant
    expression must follow the #elseif expression.

    The #else causes the parser to skip all lines up to #endif if the pre-
    ceding #if or any of the preceding #elseif directives were “true”, and
    the parses these lines if all preceding blocks were skipped. The #else
    directive may be omitted; if present, there may be only be one #else
    associated with each #if.

    The #endif directive terminates a program portion that is parsed con-
    ditionally. Conditional directives can be nested and each #if directive
    must be ended by an #endif directive.

**#include** _filename_ or _< filename >_

    Inserts the contents of the specified file at the current position within
    the current file. A filename between angle brackets (“<” and “>”)
    refers to a system file; the pawn parser (compiler or interpreter) will
    search for such files only in a preset list of directories and not in the
    “current” directory. Filenames that are unquoted or that appear in
    double quotes are normal include files, for which a pawn parser will
    look in the currect directory first.

    The pawn parser first attempts to open the file with the specified
    name. If that fails, it tries appending the extensions “.inc”, “.p”
    and “.pawn” to the filename (in that order). The proposed default
    extension of include files is “.inc”.

    When the file can be opened successfully, the #include directive de-
    fines a constant with the name “_inc_” plus the base name of the
    file (the filename without path and extension) and the value 1. If
    the constant already exists, the #include directive skips opening and
    including the file, thus preventing a double inclusion. To force a dou-
    ble include, remove the constant definition with the #undef directive
    before the second inclusion of the file.

**#line** _number_

    The current line number (in the current file). This directive is used
    implicitly by the text preprocessor; there is usually no need to set the
    line number explicitly.

**#pragma** _extra information_

    A “pragma” is a hook for a parser to specify additional settings, such
    as warning levels or extra capabilities. Common #pragmas are:

    **#pragma** align

        Aligns the next declaration to the offset set with the alignment
        compiler option. Some (native) functions may perform better
        with parameters that are passed by reference when these are on
        boundaries of 8, 16, or even 32 bytes. Alignment requirements
        are dependent of the host applications.

        Putting the #pragma align line in front of a declaration of a
        global or a static variable aligns this variable to the bound-
        ary set with the compiler option. Note that this #pragma
        aligns only the variable that immediately follows the #pragma.
        The alignment of subsequent variables depends on the size and
        alignment of the variables that precede it. For example, if a
        global array variable of 2 cells is aligned on a 16-byte boundary
        and a cell is 4 bytes, the next global variable is located 8 bytes
        further.

        Putting the #pragma align line in front of a declaration of
        a function will align the stack frame of that function to the
        boundary specified earlier, with the result that the first local,
        non-“static”, variable is aligned to that boundary. The align-
        ment of subsequent variables depends on the size and align-
        ment of the variables that precede it. In practice, to align a
        local non-static variable, you must align the function’s stack
        frame and declare that variable before any other variables.

    **#pragma** amxlimit *value*

        Sets the maximum size, in bytes, that the compiled script may
        grow to. This pragma is useful for (embedded) environments
        where the maximum size of a script is bound to a hard upper
        limit.

        If there is no setting for the amount of RAM for the data and
        stack (see the pragma amxram), this refers to the total memory
        requirements; if the amount of RAM is explicitly set, this value

        only goves the amount of memory needed for the code and the
        static data.

    **#pragma** amxram *value*

        Sets the maximum memory requirements, in bytes, for data
        and stack that a compiled script may have. This value is is
        useful for (embedded) environments where the maximum data
        size of a script is bound to a hard upper limit. Especially in

        the case where the pawn script runs from ROM, the sizes for
        the code and data sections need both to be set.

    **#pragma** codepage *name/value*

        The pawn parser can translate characters in unpacked strings
        and character constants to Unicode/UCS-4 “wide” characters.
        This #pragma indicates the codepage that must be used for
        the translation. See the section “Internationalization” on page

        139 for details and required extra resources for the codepage
        translation.

    **#pragma** compress *value*

        The pawn parser may write the generated P-code in compact
        or plain (“non-compact”) encoding. The default depends on
        the parser configuration (and, perhaps, user settings). This
        #pragma allows the script writer to override the default and

        force compact encoding (when value is non-zero) or to force
        plain encoding (when value is zero). Especially toggling com-
        pact encoding off (forcing plain encoding) is useful, because

        the pawn parser may be unable to compile a particular script
        in “compact encoding” mode.

    **#pragma** ctrlchar *character*

        Defines the character to use to indicate the start of a “escape sequence”.
        By default, the control character is “\”.

        For example

        `#pragma ctrlchar ’\$’**`

        You may give the new value for the control character as a char-
        acter constant (between single quotes) or as a decimal or hex-
        adecimal value. When you omit the value of the new control
        character, the parser reverts to the default control character.

    **#pragma dynamic** *value*

        Sets the size, in cells, of the memory block for dynamic data
        (the stack and the heap) to the value specified by the expres-
        sion. The default size of the dynamic data block is implemen-
        tation defined. An implementation may also choose to grow
        the block on an as-needed basis (see the host program’s docu-
        mentation, or the “Implementor’s Guide” for details).

    **#pragma library** *name*

        Sets the name of the (dynamically linked) extension module
        that contains required native functions. This #pragma should
        appear above native function declarations that are part of the
        extension module.

        The library name parameter may be absent, in which case
        any subsequent native function declarations are not associated
        with any extension module.

        The scope of this #pragma runs from the line at which it ap-
        pears until the end of the file in which it appears. In typical
        usage, a #pragma library line will appear at the top of an
        include file that declares native functions for an extension mod-
        ule, and the scope of the library “link” ends at the end of that
        include file.

    **#pragma pack** *value*

        If value is zero, packed literal strings start with “!"” (exclama-
        tion point + double quote) and unpacked literal strings with
        only a double quote (“"”), as described in this manual at page 99.
        If value is non-zero, the syntax for packed and unpacked
        literal strings is swapped: literal strings that start with a dou-
        ble quote are packed and literal strings that start with “!"”
        are unpacked.

    **#pragma rational** *tagname(value)*

        Enables support for rational numbers. The tagname is the
        name of the tag that rational numbers will have; typically one
        chooses the names “Float:” or “Fixed:”. The presence of
        value in parentheses behind tagname is optional: if it is omit-
        ted, a rational number is stored as a “floating point” value
        according to the IEEE 754 norm; if it is present, a rational
        number is a fixed precision number (“scaled integer”) with the
        specified number of decimals.

    **#pragma semicolon** *value*

        If value is zero, no semicolon is required to end a statement if
        that statement is last on a line. Semicolons are still needed to
        separate multiple statements on the same line.

        When semicolons are optional (the default), a postfix operator
        (one of “++”, “--” and “char”) may not be the first token on
        a line, as they will be interpreted as prefix operators.

    **#pragma tabsize** *value*

        The number of characters between two consecutive tab posi-
        tions. The default value is 8. You may need to set the tab
        size to avoid warning 217 (loose indentation) if the source code
        is indented alternately with spaces and with tab characters.
        Alternatively, by setting the “tabsize” #pragma to zero, the
        parser will no longer issue warning 217.

    **#pragma unused** *symbol,...*

        Marks the named symbol as “used”. Normally, the pawn
        parser warns about unused variables and unused local con-
        stants. In most situations, these variables and constants are
        redundant, and it is better to remove them for the sake of code

        clarity. Especially in the case of local constants, it may, how-
        ever, be better (or required) to keep the constant definitions.
        This #pragma then permits to mark the symbol (variable or
        constant) as “used”, and avoid a parser warning.

        The #pragma must appear after the symbol declaration —but
        it need not appear immediately after the declaration.

        Multiple symbol names may appear in a single #pragma; the
        symbols must be separated by commas.

**#section** _name_

    Starts a new section for the generated code. Any variables and func-
    tions that are declared “static” are only visible to the section to
    which they belong. By default, each source file is a separate section
    and there is only one section per file.

    With the #section directive, you can create multiple sections in a

    source file. The name of a section is optional, if it is not set, a unique
    identifier for the source file is used for the name of the section.

    Any declared section ends automatically at the end of the file.

**#tryinclude** _filename_ or _< filename >_

    This directive behaves similarly as the #include directive, but it does
    not give an error when the file to include does not exist —i.e., try to
    include but fail silently on error.

**#undef** _name_

    Removes a text substitution macro or a numeric constant declared
    with const. The “name” parameter must be the macro “prefix” —the
    alphanumeric part of the macro. See page 93 for details and examples
    on text substitution.

---

`See also “Predefined constants” on page 102`

`Escape character: 99`

`Rational number support: 98`

`Warning messages: 161`

---

[Go Back to Contents](00-Contents.md)
