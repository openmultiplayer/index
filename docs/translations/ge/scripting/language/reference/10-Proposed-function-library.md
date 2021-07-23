# Proposed function library

---

Since PAWN is targeted as an application extension language, most of the
functions that are accessible to PAWN programs will be specific to the  
host application. Nevertheless, a small set of functions may prove useful  
to many environments.

### • Core functions

The “core” module consists of a set of functions that support the  
language itself. Several of the functions are needed to pull arguments out of a variable
argument list (see page 80).

| clamp    |                                                                                                             |  Force a value inside a range |
| -------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------: |
| Syntax   | clamp(value, min=cellmin, max=cellmax)                                                                      |                               |
|          | value                                                                                                       | The value to force in a range |
|          | min                                                                                                         |   The low bound of the range. |
|          | max                                                                                                         |  The high bound of the range. |
| Returns  | value if it is in the range min – max; min if value is lower than min; and max if value is higher than max. |                               |
| See also | max, min                                                                                                    |                               |

| funcidx |                                                                                                                                                                                                                                                           | Return a public funtion index |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------: |
| Syntax  | funcidx(const name[])                                                                                                                                                                                                                                     |                               |
| Returns | The index of the named public function. If no public function with the given name exists, funcidx returns −1.                                                                                                                                             |                               |
| Notes:  | A host application runs a public function from the script by passing the public function’s index to amx_Exec. With this function, the script can query the index of a public function, and thereby return the “next function to call” to the application. |                               |

| getarg   |                                                                                                                                                                                                       |                                         Get an argument |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------: |
| Syntax   | getarg(arg, index=0)                                                                                                                                                                                  |                                                         |
|          | arg                                                                                                                                                                                                   | The argument sequence number, use 0 for first argument. |
|          | index                                                                                                                                                                                                 |              The index, in case arg refers to an array. |
| Returns  | The value of the argument                                                                                                                                                                             |                                                         |
| Notes:   | This function retrieves an argument from a variable argument list. When the argument is an array, the index parameter specifies the index into the array. The return value is the retrieved argument. |                                                         |
| See also | numargs, setarg                                                                                                                                                                                       |                                                         |

| heapspace |                                                                                                                                                                            | Return free heap space |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------: |
| Syntax    | heapspace()                                                                                                                                                                |                        |
| Returns   | The free space on the heap. The stack and the heap occupy a shared memory area, so this value indicates the number of bytes that is left for either the stack or the heap. |                        |
| Notes:    | In absence of recursion, the pawn parser can also give an estimate of the required stack/heap space.                                                                       |                        |

| max      |                                       |                    Return the highest of two numbers |
| -------- | ------------------------------------- | ---------------------------------------------------: |
| Syntax   | max(value1, value2)                   |                                                      |
|          | value1                                |                                                      |
|          | value2                                | The two values for which to find the highest number. |
| Returns  | The higher value of value1 and value2 |                                                      |
| See also | clamp, min                            |                                                      |

| min      |                                       |                    Return the lowest of two numbers |
| -------- | ------------------------------------- | --------------------------------------------------: |
| Syntax   | min(value1, value2)                   |                                                     |
|          | value1                                |                                                     |
|          | value2                                | The two values for which to find the lowest number. |
| Returns  | The lowest value of value1 and value2 |                                                     |
| See also | clamp, max                            |                                                     |

| numargs  |                                                                                                                | Return the number of arguments |
| -------- | -------------------------------------------------------------------------------------------------------------- | -----------------------------: |
| Syntax   | numargs()                                                                                                      |                                |
| Returns  | The number of arguments passed to a function; numargs is useful inside functions with a variable argument list |                                |
| See also | getarg, setarg                                                                                                 |                                |

| random  |                                                                                                                                                                                                                                                                                                                                               |   Return a pseudo-random number |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------: |
| Syntax  | random(max)                                                                                                                                                                                                                                                                                                                                   |                                 |
|         | max                                                                                                                                                                                                                                                                                                                                           | The limit for the random number |
| Returns | A pseudo-random number in the range 0 - max-1                                                                                                                                                                                                                                                                                                 |                                 |
| Notes:  | The standard random number generator of pawn is likely a linear congruential pseudo-random number generator with a range and a period of 2³¹. Linear congruential pseudo-random number generators suffer from serial correlation (especially in the low bits) and it is unsuitable for applications that require high-quality random numbers. |                                 |

| setarg   |                                                                                                                                                                   |                                                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -----------------------------------------------------: |
| Syntax   | setarg(arg, index=0, value)                                                                                                                                       |                                                        |
|          | arg                                                                                                                                                               | The argument sequence number, use 0 for first argument |
|          | index                                                                                                                                                             |              The index, in case arg refers to an array |
|          | value                                                                                                                                                             |                       The value to set the argument to |
| Returns  | true on success and false if the argument or the index are invalid                                                                                                |                                                        |
| Notes:   | This function sets the value of an argument from a variable argument list. When the argument is an array, the index parameter specifies the index into the array. |                                                        |
| See also | getarg, numargs                                                                                                                                                   |                                                        |

| swapchars |                                                                                                 |                  Swap bytes in a cell |
| --------- | ----------------------------------------------------------------------------------------------- | ------------------------------------: |
| Syntax    | swapchars(c)                                                                                    |                                       |
|           | c                                                                                               | The value for which to swap the bytes |
| Returns   | A value where the bytes in parameter "c" are swapped (the lowest byte becomes the highest byte) |                                       |

| tolower  |                                                                                                                                                      |       Convert a character to lower case |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------: |
| Syntax   | tolower(c)                                                                                                                                           |                                         |
|          | c                                                                                                                                                    | The character to convert to lower case. |
| Returns  | The upper case variant of the input character, if one exists, or the unchanged character code of “c” if the letter “c” has no lower case equivalent. |                                         |
| Notes:   | Support for accented characters is platform-dependent                                                                                                |                                         |
| See also | toupper                                                                                                                                              |                                         |

| toupper  |                                                                                                                                                      |       Convert a character to upper case |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------: |
| Syntax   | toupper(c)                                                                                                                                           |                                         |
|          | c                                                                                                                                                    | The character to convert to upper case. |
| Returns  | The lower case variant of the input character, if one exists, or the unchanged character code of “c” if the letter “c” has no upper case equivalent. |                                         |
| Notes:   | Support for accented characters is platform-dependent                                                                                                |                                         |
| See also | tolower                                                                                                                                              |                                         |

---

Properties are general purpose names or values. The property list
routines maintain a list of these name/value pairs that is shared among all abstract
machines. The property list is therefore a way for concurrent abstract machines
to exchange information.

All “property maintenance” functions have an optional “id” parameter. You
can use this parameter to indicate which abstract machine the property belongs
to. (A host application that supports concurrent abstract machines will usually
provide each abstract machine with a unique id.) When querying (or deleting)
a property, the id value that you pass in is matched to the id values of the
list.

A property is identified with its “abstract machine id” plus either a name or  
a value. The name-based interface allows you to attach a value (e.g. the handle
of an object) to a name of your choosing. The value-based interface allows you
to attach a string to a number. The difference between the two is basically the
search key versus the output parameter.

All property maintenance functions have a “name” and a “value” parameter.
Only one of this pair must be filled in. When you give the value, the getprop-
erty function stores the result in the string argument and the setproperty
function reads the string to store from the string argument.

The number of properties that you can add is limited only by available memory.

**getproperty(id=0, const name[]=“”, value=cellmin, string[]=“”)**

    Returns the value of a property when the name is passed in; fills in the
    string argument when the value is passed in. The name string may
    either be a packed or an unpacked string. If the property does not
    exist, this function returns zero.

**setproperty(id=0, const name[]=“”, value=cellmin, const string[]=“”)**

    Add a new property or change an existing property.

**deleteproperty(id=0, const name[]=“”, value=cellmin)**

    Returns the value of the property and subsequently removes it. If the
    property does not exist, the function returns zero.

**existproperty(id=0, const name[]=“”, value=cellmin)**

    Returns true if the property exists and false otherwise.

### • Console functions

For testing purposes, the console functions that read user input and that out-
put strings in a scrollable window or on a standard terminal display are often
convenient. Not all terminal types and implementations may implement all
functions —especially the functions that clear the screen, set foreground and
background colours and control the cursor position, require an extended terminal control.

**getchar(echo=true)**

    Read one character from the keyboard and return it. The function can
    optionally echo the character on the console window.

**getstring(string[], size=sizeof string, bool**

    pack=false): Read a string from the keyboard. Function getstring
    stops reading when either the enter key is typed, or the maximum
    length is reached. The maximum length is in cells (not characters)
    and it includes a terminating nul character. The function can read
    both packed and unpacked strings; when reading a packed string, the
    function may read more characters than the size parameter specifies,
    because each cell holds multiple characters. The return value is the
    number of characters read, excluding the terminating nul character.

**getvalue(base=10, end=‘ r’, ...)**

    Read a value (a signed number) from the keyboard. The getvalue
    function allows you to read in a numeric radix from 2 to 36 (the base
    parameter) with decimal radix by default.

    By default the input ends when the user types the enter key, but
    one or more different keys may be selected (the end parameter and
    subsequent). In the list of terminating keys, a positive number (like
    ’\r’) displays the key and terminates input, and a negative number
    terminates input without displaying the terminating key.

**print(const string[], foreground=-1, background=-1)**

    Prints a simple string on the console. The foreground and background
    colours may be optionally set (but note that a terminal or a host
    application may not support colours). See setattr below for a list of
    colours.

**printf(const format[], ...)**

    Prints a string with embedded codes:

    %b   print a number at this position in binary radix

    %c   a character at this position

    %d   print a number at this position in decimal radix

    %f   print a floating point number at this position (assuming floating
    point support is present)

    %q   print a fixed point number at this position (assuming fixed point
    support is present)

    %r   print either a floating point number or a fixed point number at this
    position, depending on what is available; if both floating point and
    fixed point support is present, %r is equivalent to %f (i.e. printing
    a floating point number)

    %s   print a character string at this position

    %x   print a number at this position in hexadecimal radix

    The printf function works similarly to the printf function of the C language.

**clrscr()**

    Clears the console and sets the cursor in the upper left corner.

**clreol()**

    Clears the line at which the cursor is, from the position of the cursor
    to the right margin of the console. This function does not move the
    cursor.

**gotoxy(x=1, y=1)**

    Sets the cursor position on the console.
    The upper left corner is at (1,1).

**setattr(foreground=-1, background=-1)**

    Sets foreground and background colours for the text written onto the
    console. When either of the two parameters is negative (or absent), the
    respective colour setting will not be changed. The colour value must
    be a value between zero and seven, as per the ANSI Escape sequences, ISO 6429.

    Predefined constants for the colours are black (0), red (1),
    green (2), yellow (3), blue (4), magenta (5), cyan (6) and white (7).

### • Date/time functions

Functions to get and set the current date and time, as well as a millisecond
resolution “event” timer are described in an application note entitled “Time
Functions Library” that is available separately.

### • File input/output

Functions for handling text and binary files, with direct support for UTF-8 text
files, is described in an application note entitled “File I/O Support Library”
that is available separately.

### • Fixed point arithmetic

The fixed-point decimal arithmetic module for pawn is described in an appli-
cation note entitled “Fixed Point Support Library” that is available
separately.

### • Floating point arithmetic

The floating-point arithmetic module for pawn is described in an application
note entitled “Floating Point Support Library” that is available separately.

### • String manipulation

A general set of string manipulation functions, operating on both packed and
unpacked strings, is described in an application note entitled “String Manipu-
lation Library” that is available separately.

### • DLL call interface

The version of the abstract machine that is build as a Dynamic Link Library
for Microsoft Windows has a general purpose function to call a function from
any DLL in memory. Two companion functions load a DLL from disk into
memory and unload it. The functions have been set up so that it is possible to
run the same compiled script in both 16-bit and 32-bit versions of Microsoft Windows.

All string parameters may be in both packed or unpacked form.

**calldll(const dllname[], const function[], const typestr[], ...)**

    Parameter dllname is the module name of the DLL, typically this is the
    same as the filename. If the DLL cannot be found, calldll tries again
    after appending “16” or “32” to the filename, depending on whether
    you run the 16-bit or the 32-bit version of the abstract machine. For
    example, if you set dllname to “USER”, calldll connects to USER in
    the 16-bit version of the abstract machine and to USER32 in the 32-bit
    version.

    Parameter function is the name of the function in the DLL. In the
    16-bit version of, this name is case insensitive, but in the 32-bit version
    of Microsoft Windows, names of exported functions are case sensitive.
    In the 32-bit version of the abstract machine, if function cannot be
    found, calldll appends an upper case “A” to the name and tries again

    —many functions in 32-bit Windows exist in two varieties: ANSI and
    “Wide”, and these functions are suffixed with an “A” or a “W” respec-
    tively. So if function is “MessageBox”, calldll will call MessageBox
    in the 16-bit version of Windows and MessageBoxA in the 32-bit ver-
    sion.

    The string parameter typestr indicates the number of arguments that
    the function (in the DLL) takes and what the types are. For every
    argument, you add one letter to the typestr string:

    h   a Windows “handle” (HWND, HDC, HPALETTE, HMEM, etc.)

    i   an integer with a “native size” (16-bit or 32-bit, depending on the
    “bitness” of the abstract machine).

    l   a 32-bit integer

    p   a packed string

    s   an unpacked string

    w   a 16-bit unsigned integer

    When the letter is in lower case, the corresponding parameter is passed
    “by value”; when it is in upper case, it is passed “by reference”. The
    difference between packed and unpacked strings is only relevant when
    the parameter is passed by reference.

**loaddll(const dllname[])**

    Loads the specified DLL into memory (or increments its usage count
    it were already loaded). The name in parameter dllname may contain
    a full path. If no path is specified, Microsoft Windows searches in its
    system directories for the DLL. Similarly to the calldll function, this

    function appends “16” or “32” to the DLL name if the DLL cannot
    be found, and then tries again.

**freedll(const dllname[])**

    Decrements the DLL’s usage count and, if the count becomes zero,
    removes the DLL from memory. The name in parameter dllname may
    contain a full path, but the path information is ignored. Similarly to
    the calldll function, this function appends “16” or “32” to the DLL
    name if the DLL cannot be found, and then tries again.

**iswin32()**

    Returns true if the abstract machine is the 32-bit version (running in
    a 32-bit version of Microsoft Windows); returns false if the abstract
    machine is the 16-bit version (running either on Windows 3.1x or on
    any later version of Microsoft Windows).

---

`amx_Exec: see the “Implementor’s Guide”`

---

[Go Back to Contents](00-Contents.md)
