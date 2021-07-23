---
title: String Manipulation
description: Beginner friendly tutorial about everything string manipulation.
---

## Introduction

### Tutorial description

Hello everyone, it surely is a nice quiet night, or at least it is at the composition of this tutorial. So, hey, what about tagging along to both enrich and/or engage with the main focus of this article, this is and as the title suggests, going to be focused on “_String manipulation_” in pawn, we will go through the absolute intermediate stuff that everybody should be aware of to some sort of advanced, clever and effective tips.

### What is string formatting?

In general, formatting a text is the act of manipulating it to visually improve its readability, be it changing the font’s family, color, weight and so on.

Strings being an array of characters (_alphabets, numbers, symbols_), which we wouldn’t specifically call a text on itself but is referred as such when displayed, can be processed with the same approach, but unfortunately, SA-MP’s interpretation of pawn does not allow for much (_yet? Maybe never_), generally speaking changing the color is as far as we can get, yes, you can still change/customize the font, but that’s client-sided only, and yes, [GTA San Andreas](https://www.rockstargames.com/sanandreas/) (_the parent game_) does provide some extra fonts, but that only works on [textdraws](../scripting/resources/textdraws) and [gametext](../scripting/functions/GameTextForPlayer), this does cause limitations concerning text presentation, but hey, it’s been over a decade now, and we survived just fine.

### String declaration

As I said before, strings are basically arrays of characters, so they are used the same way arrays are, and so as we would create an array, we would do for strings following this format; `string_name[string_size]`.

:::info

**string_name**: the name of the character array (_e.g. string, str, message, text...etc. as long as it’s a valid variable name (begins with a character or an underscore)_).

**string_size**: the maximum characters this string would have.

:::

```cpp
// declaring a string of 5 characters
new str_1[5];

// declaring a string of 100 characters
new str_2[100];
```

You can also predefine constant values so you can use them multiple times as string sizes.

```cpp
// declaring a constant
#define STRING_SIZE 20

// declaring a string with the size of STRING_SIZE's value
new str_3[STRING_SIZE];
```

:::note

On compilation time, the compiler will replace all occurrences of `STRING_SIZE` with the value `20`, this method is both time-saving and more readable on most cases, keep in mind that the value you assign to the `STRING_SIZE` constant must be an integer or else it will give a compilation error.

:::

In addition to predefined constants, you can perform basic operations, the modulo operator (`%`) however will give compilation errors if used, you can still get away with division calculations (`/`) but keep in mind, dividing by `0` will trigger errors, the bonus here is all floating results will be automatically rounded for you.

```cpp
// declaring a constant
#define STRING_SIZE 26

// declaring strins with the use of the STRING_SIZE constant and some calculations
new
  str_4[STRING_SIZE + 4],
  str_5[STRING_SIZE - 6],
  str_6[STRING_SIZE * 2],
  str_7[9 / 3];
```

Theoretically, you can create somewhat ridiculously huge arrays, but SA-MP puts few restrictions on the length of strings you can work with, depending on what you’re working on, it limits the number of characters you can normally output.

#### Length limits

SA-MP limits characters that can be stored in a single string and keeps scripters from going overboard with working with text, luckily, it’s not as bad as it might seem, the list below breaks down some of these limits;

|                     |                                                                                                                        |      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---- |
| **Text input**      | The text you input on the chat.                                                                                        | 128  |
| **Text output**     | Text that output on the client's screen.                                                                               | 144  |
| **Name**            | Player nickname / Username.                                                                                            | 24   |
| **Textdraw string** | Pretty self-explanatory.                                                                                               | 1024 |
| **Dialog info**     | The text displayed on all dialogs of the type `DIALOG_STYLE_MSGBOX`, `DIALOG_STYLE_INPUT` and `DIALOG_STYLE_PASSWORD`. | 4096 |
| **Dialog caption**  | The caption/title on top of the dialog.                                                                                | 64   |
| **Dialog input**    | The input box on `DIALOG_STYLE_INPUT` and `DIALOG_STYLE_PASSWORD`.                                                     | 128  |
| **Dialog columnt**  | The characters on each column of `DIALOG_STYLE_TABLIST_HEADER` and `DIALOG_STYLE_TABLIST`.                             | 128  |
| **Dialog row**      | The characters on each column of `DIALOG_STYLE_TABLIST_HEADER`, `DIALOG_STYLE_TABLIST` and `DIALOG_STYLE_LIST`.        | 256  |
| **Chat bubble**     | The chat bubble that displays above the player's name tag.                                                             | 144  |
| **Menu title**      | The GTA San Andreas native menu (_mostly used for shops_) header.                                                      | 31   |
| **Menu item**       | The GTA San Andreas native menu (_mostly used for shops_) item/row.                                                    | 31   |

If somehow these limits have been exceeded, few inconveniences might occur, it can even crash/freeze the server in some cases (_e.g. long textdraw strings_), in some other cases, the text would just truncate like the Menu title (_if it reaches 32 characters, it truncates back to 30_) and items.

Besides the strict limits put on strings, there are many others concerning different stuff, you can view the complete list [here](../scripting/resources/limits).

#### Assigning values

Assigning values to strings can be done via many methods, some assign them upon their creation, others after, there are people who use loops, other use functions, and yes, there are who do this process manually, slot by slot, there is no exact right or wrong way for doing so, some methods are often more effective in few cases than others some are not, at the end of the day all that matters is performance, optimization, and readability.

In most cases you’d want to give a default value to the string upon its creation, you can go through this simply as follows;

```cpp
new
  message_1[6] = "Hello",
  message_2[] = "This is another message";
```

Make sure the string’s size is greater than the number of characters you assigned them for, having a smaller or equal string size to that, will trigger compilation errors, leaving the size slot between the two brackets empty (like on the `message_2` example), will automatically give the array the size of the text you’ve assigned it to plus `1`, in this case, `23 + 1 = 24`, why? It reserves a slot for the null character (_aka the null-terminator_), more on that later, the word “_Hello_” has 5 characters, so in order to store it on a string, it should have 6 cells, 5 cells for the word’s character count, and one for the **null character**.

Let’s take a look at doing the same process slot by slot manually, first, we define a new array, you can determine its size or leave that empty for the compiler to fill, both would work just fine, we will fill the array with characters to create the string “_Hello_”.

```cpp
// Including the string' size on its declaration, or it won't work otherwise
new message_3[6];

message_3[0] = 'H';
message_3[1] = 'e';
message_3[2] = 'l';
message_3[3] = 'l';
message_3[4] = 'o';
message_3[5] = '\0';
```

There, we assigned for each slot on the `message_3` array a character, this won’t work if you were to declare a sting with no definitive size, note that to represent a single character, it ought to be written between two single quotations (`'`), also, notice how we started with slot 0, and it’s only natural, considering how I emphasised on how a string is an array of characters, meaning, that the first slot is always 0, and the last one is its size minus 1 (_the null character does not count_), which in this case is 4, counting from 0 to 4, that makes it 5 characters, with the sixth being the null terminator, more on that comes later.

You can also assign strings numbers which will be viewed as **ASCII** (_a system representing character numerically, it covers 128 characters ranging from 0 to 127, more on that [here](https://en.wikipedia.org/wiki/ASCII)_) code for a character, the same message “_Hello_” can be assigned using _ASCII_ code like this;

```cpp
new message_4[6];

message_4[0] = 72; // ASCII representation of capitalized h, “H”
message_4[1] = 101; // ASCII representation of “e”
message_4[2] = 108; // ASCII representation of “l”
message_4[3] = 108; // ASCII representation of “l”
message_4[4] = 111; // ASCII representation of “o”
message_4[5] = 0; // ASCII representation of the null terminator
```

And yes, you can perform numeric operations with these codes the same you do with normal numbers, after all, the machine views characters as just mere numbers.

```cpp
new message_5[1];
message_5[0] = 65 + 1;
```

If you were to output `message_5[0]`, you would get **B**, weird right? Well, no, not really, you can perform other basic operations (_subtraction, multiplication, division, and even the modulo_), floating numbers will get auto-rounded for you, let’s see how this works.

You have `65 + 1`, that returns `66`, checking the _ASCII_ table, you will find that `66` is the numeric representation of the character “_B_” (_capitalized_). So, the snippet above is basically the same as doing: `message_5[0] = 'B'`;

For reference, use [this ASCII table](http://www.asciitable.com/).

You can also perform the same operation between multiple characters or a mix of both, them and numbers, here are few examples;

```cpp
new message_6[3];

message_6[0] = 'B' - 1; // Which is 66 - 1, returns 65, the numeric representation of “A”
message_6[1] = 'z' - '&'; // Which is 122 - 38, returns 84, the numeric representation of “T”
message_6[2] = '0' + '1'; // Which is 48 + 49, returns the numeric representation of “a”, note that '0' and '1' are not the numbers 0 and 1, but rather characters
```

It might get confusing sometimes if you never knew about the _ASCII_ system, all it takes is some practice, because understanding how it works, is very handy.  
_ASCII_ code is not exclusive to decimal numbers only, you can also use hexadecimal or binary numbers the same way.

```cpp
new numString[4];

numString[0] = 0x50; // The decimal number 80 in hexadecimal, capitalized p, “P”
numString[1] = 0b1000001; // The decimal number 65 in binary, capitalized a, “A”
numString[2] = 0b1010111; // The decimal number 87 in binary, capitalized w, “W”
numString[3] = 0x4E; // The decimal number 78 in hexadecimal, capitalized n, “N”
```

Now let’s see something else, assigning values through loops, it’s literally the same as filling an array through loops, you can use all sorts of looping methods as well, goes as follow;

```cpp
// Let's fill this string with capitalized alphabets
new message_7[26];

// The for loop
for (new i = 0; i < 26; i++)
  message_7[i] = 'A' + i;

// The while loop
while (i++ < 'Z')
  message_7[i - 'A'] = i;

// The do-while loop
new j = 'A';

do {
  message_7[j - 'A'] = j;
}
while (j++ < 'Z');

 // You can even use goto to simulate a loop, but it's not recommended.
```

All three of them will output the same exact string, _ABCDEFGHIJKLMNOPQRSTUVWXYZ_.

If you found the loops above confusing, you might want to take a deeper look into how loops work, more on that can be found [here](../scripting/language/ControlStructures#loops) and [here](https://wiki.alliedmods.net/Pawn_Tutorial#Looping). Notice how I used characters in some logical conditions, like `j++ < 'Z'` that easily translates to `j++ < 90`, again, characters are treated like numbers, don’t feel strange, you’re welcome to check the _ASCII_ table whenever you’d like.

Say, you want to fill a string with a number of one specific character, (e.g. “_AAAAAA_”, “_TTTTTT_”, “_vvvvvv_”, “_666_” (_no, it’s not a coincidence_)), the typical idea that might cross most of the scripters, is hard-coding it, but what about long strings, well, what about using a loop, that’s fine too, but what if I told you there is an even more efficient way, just like you’d fill an array with the same value, you’d do the same for strings.

```cpp
new message_8[100] = {'J', ...};
```

The code above declares a new string called `message_8` with 100 cells (_ranging from 0 to 99_) and gives each slot the value `'J'`, which of course can be used both as a character **J**, or number **74** according to the _ASCII_ system.

One other thing you can do with this is filling the string with characters whom values based on intervals, see the example of the capitalized alphabets from _A_ to _Z_ above? Let’s create the same string using this method.

```cpp
new message_9[26] = {'A', 'B', ...};
```

How easy is that?! this is both more optimized and easy to read, and provides the same results as the 3 examples done using loop methods above, so how does it exactly work? Well, we gave the string initial values, `'A'` and `'B'`, which they respectively are _65_ and _66_, the compiler calculates the interval between the two values, which in this case is _1_, and completes filling the empty cells with values based on that interval until it fills up the whole array, you can put as many initial values as you want, but it will only regard the interval between the last two values, and work based on it, keep in mind that the initial values are treated as _ASCII_ code, so trying to output numeric intervals using this method on a string will result in something inconvenient, say you declared some random string like this;

```cpp
new rand_str[5] = {'1', '5', ...};
```

Ideally, this should have output **151520** (_more specifically “1 5 15 20”_), but instead, it output; **159=A**, which is actually the correct output, why? Because remember, this is _ASCII_ code, '_1_' is _49_ and '_5_' is _53_, the interval between the two is _4 (53 - 49)_, the string accepts 5 characters, we already occupied two cells when we included initial catalog, so that makes it 3 left empty cells that have to be filled respecting the interval of 4, so this is how it goes **[ 49 | 53 | 57 | 61 | 65 ]**, let’s replace each number value with its _ASCII_ code match. **[ '1' | '5' | '9' | '=' | 'A']**, makes more sense huh?!

## The null terminator

I referred to this on early sections of this tutorial, I hope it wasn’t that confusing at first, but even if it was, let’s peal the confusion off already, don’t you worry, it’s nothing hard or even that advances, just a basic fact that you should be aware of, I’ll keep it as short as possible, but if you want a deeper view on this, you can visit [this article](https://en.wikipedia.org/wiki/Null_character).

So, the null terminator (_aka the null character_), is a character present on all strings, its role is to indicate that a string has ended, you can think of it as a period mark (.) anything that comes after this character is not accounted for and completely ignored. You can’t type it using your keyboard, but you can refer to its value while coding, it’s present on the _ASCII_ table though, referred to as _NUL_, represented by the number 0.

In _pawn_, you can type it as its numeric value, or as a character '_\0_'. The backslash there acts as an escaping character, it’s there to tell the machine that that character is the null character with the value of 0 and **NOT** the character `'0'` that has the value `48`.

There is a symbol used in _pawn_, **EOS**, short for **E**nd **O**f **S**tring, it’s a predefined macro for the null terminator, you can set the null terminator in a lot of different ways;

```cpp
message_9[0] = 0;
message_9[0] = '\0';
message_9[0] = 0b; // The decimal number 0 in binary
message_9[0] = 0x00; // The decimal number 0 in hexadecimal
message_9[0] = _:0.0; // The floating number 0.0, we have to prefix it with the detag '_' to avoid compilation errors
message_9[0] = false;
message_9[0] = EOS;
```

As I said earlier on the tutorial, you can ignore assigning the null character, but it’s always there at empty cells, when you declare a new string, all of its cells are automatically occupied by the null terminator, so for instance, if I go ahead and declare this string `text[3]`, all of its cells are assigned the value of `0` by default, here’s a simple visual representation of the string’s content;

|            |      |      |      |
| ---------- | ---- | ---- | ---- |
| Cells      | 0    | 1    | 2    |
| ASCII code | 0    | 0    | 0    |
| Characters | '\0' | '\0' | '\0' |

Here is another example of a pre-filled string.

```cpp
new text_1[8] = "Hello";
```

Here's the string's content per cell;

|            |     |     |     |     |     |      |      |      |
| ---------- | --- | --- | --- | --- | --- | ---- | ---- | ---- |
| Cells      | 0   | 1   | 2   | 3   | 4   | 5    | 6    | 7    |
| ASCII code | 72  | 101 | 108 | 108 | 111 | 0    | 0    | 0    |
| Characters | 'H' | 'e' | 'l' | 'l' | 'o' | '\0' | '\0' | '\0' |

If you, for instance, wanted to delete the content of this string, you can simply do so using one of the three examples below;

```cpp
text_1[0] = 0;
text_1[0] = EOS;
text_1[0] = '\0';
```

Passing the string through an X-Ray scan will print out the following;

|            |      |     |     |     |     |      |      |      |
| ---------- | ---- | --- | --- | --- | --- | ---- | ---- | ---- |
| Cells      | 0    | 1   | 2   | 3   | 4   | 5    | 6    | 7    |
| ASCII code | 0    | 101 | 108 | 108 | 111 | 0    | 0    | 0    |
| Characters | '\0' | 'e' | 'l' | 'l' | 'o' | '\0' | '\0' | '\0' |

If you try to output this string, everything beyond the slot number 0 will be ignored, and thus labeled as an empty string, even the `strlen` function will return 0 as it depends on the placement of the null character to retrieve the string’s length.

## String manipulation functions

When it comes to working with multiple chunks of text, _pawn_ has got you covered, it provides some very basic functions that do the job efficiently, no need to create your own when you’ve got native support that assures speed and optimization.

These are some natively supported functions (_taken from string.inc_);

```cpp
native strlen(const string[]);
native strpack(dest[], const source[], maxlength=sizeof dest);
native strunpack(dest[], const source[], maxlength=sizeof dest);
native strcat(dest[], const source[], maxlength=sizeof dest);
native strmid(dest[], const source[], start, end, maxlength=sizeof dest);
native bool: strins(string[], const substr[], pos, maxlength=sizeof string);
native bool: strdel(string[], start, end);
native strcmp(const string1[], const string2[], bool:ignorecase=false, length=cellmax);
native strfind(const string[], const sub[], bool:ignorecase=false, pos=0);
native strval(const string[]);
native valstr(dest[], value, bool:pack=false);
native bool: ispacked(const string[]);
native uudecode(dest[], const source[], maxlength=sizeof dest);
native uuencode(dest[], const source[], numbytes, maxlength=sizeof dest);
native memcpy(dest[], const source[], index=0, numbytes, maxlength=sizeof dest);
```

We will take a closer look at few of them, the ones are more often used.

- The `strlen` function (this and `sizeof` are completely different things), that takes a string as a parameter, returns the length of that string (the number of characters it has), but pay attention as this is a bit tricky on how it works, I’ve said it earlier in the tutorial, this function depends on the position of the null character to determine the length of the string, so any other valid non-null character that comes after will not be counted, as soon as the first null character is reached, the function returns the number of cells from the beginning to that null character.

- The `strcat` concatenates strings with each other, it takes 3 parameters.

  ```cpp
  new str_dest[12] = "Hello", str_source[7] = " World";
  strcat(str_dest,str_source);
  ```

  If we were to output `str_dest`, it will show **Hello World**, the two strings were added to each other, and the result was stored in `str_dest`, _“Hello” + “ World” = “Hello World”_, notice how we included that space in the second string, yes, spaces are character themselves, according to the _ASCII_ table, their value is `32`, hadn't we add the space, the resulting string would have been **HelloWorld**.

- The `strval` function will convert a string to a number, for instance, the following string, `"2017"` will be converted to the number `2017`, this works on signed and unsigned numbers, if the string has no numeric characters, the function will return `0`, the same happens if the string has a numeric character but begins with non-numeric ones, if a string begins with numeric characters but includes non-numeric characters as well, the numeric characters will still get retrieved and converted, here are some use cases;

  ```cpp
  strval("2018"); // Returns “2018”.
  strval("-56"); // Returns “-56”.
  strval("17.39"); // Returns “17”, the floating number 17.39 was auto floored for us.
  strval("no number here"); // Returns “0”.
  strval("6 starts"); // Returns “6”.
  strval("here we go, 2018"); // Returns “0”.
  strval("2017 ended, welcome 2018"); // Returns “2017”.
  ```

:::tip

There are many community-made libraries you can download that have to do with string manipulation, I can’t think of a better include than [strlib](https://github.com/oscar-broman/strlib).

:::

### The format function

This is probably the most used string-related function in the community, very simple and user-friendly, all it does, is format chunks of text and pieces them together, it can be implemented in various situations, like linking variables and strings together, embedding colors, adding line-breaks... etc.

```cpp
format(output[], len, const format[], {Float, _}:...)
```

The format function takes as parameters the output array, its size (_number of its cells_), the formatting string (_this can be pre-stored on another array, or directly assigned from inside the function_), and finally some optional parameters, those can be variables from different types. Let’s use this function to assign a value to an empty string.

```cpp
new formatMsg[6];
format(formatMsg, 6, "Hello");
```

The output of `formatMsg` is **Hello**, keep in mind that this is a bad way of assigning values to strings, mostly because of its speed, there are better methods for doing this, we already discussed some of them on early stages of this tutorial.

Remember to always put the correct array size, otherwise, it will still work, but it delivers some unwanted behavior, the format function will over-flow your array size, and trust me on that, you don’t want that to happen, if you don’t want to bother putting the correct string size every time you want to work with this function, you can simply use the `sizeof` function (_it’s not a function per se, but rather a compiler directive_), we’ve seen earlier a function called `strlen` that returns the number of characters a string has (_excluding and stopping at the null-character_), but this one, returns the array’s size, in other words, the number of cells this array has, be them filled with valid character or not, in this case, 6.

```cpp
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), "Hello");
```

Text must always be included in double quotation marks, however, there is an uncommon way of inputting text, that’s rarely ever used, it uses the Number sign `#` symbol, and works as follows:

```cpp
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), #Hello);
```

It supports spaces, escaped characters, and you can even use the mix of both double quotations and the number sign;

```cpp
new formatMsg[6];
format(formatMsg, sizeof(formatMsg), "Hello "#World);
```

The code above will input **Hello World**, this method of inputting strings is more known to be used with predefined constants. Let’s take a look at this example of using two different predefined constants, one being an integer `2017`, the other being a string `"2018"`.

```cpp
#define THIS_YEAR 2018 // Thisconstant has an integer as its value
#define NEW_YEAR "2019" // This constant has a string as its value

new formatMsg[23];
format(formatMsg, sizeof(formatMsg), "This is "#THIS_YEAR", not"NEW_YEAR);
```

This will output **This is 2018, not 2019**, the reason why I emphasised on the two constants being from different types is the use of the number sign `#`, if the value is **NOT** a string, then you must prefix it with the number sign `#THIS_YEAR` so it will be treated like `"2018"`, or else you’ll get some compilation errors, as for a string value, you can choose to include or omit the number sign, because it will work either way (`NEW_YEAR` is the same as `#NEW_YEAR`). You can only use this to retrieve values from predefined constants, it will not work with regular variables, or arrays/strings, as treating those can be done using placeholders, more on this later.

You can also line up as much double quotations as you want one next to each other, although it doesn’t make sense, as it’s more natural to just write a sentence into a single pair of double quotations, here’s an example of the same sentence written in both concepts;

```cpp
new formatMsg[29];

// One single pair of double quotations
format(formatMsg, sizeof(formatMsg), "This is reality...or is it?!");

// Multiple pairs of double quotations
format(formatMsg, sizeof(formatMsg), "This is reality""...""or is it?!");
```

Both will output the same sentence, **This is reality... or is it?!**.

## Optimization tips

Now, that we’ve seen some basic stuff about string declaration, manipulation ...etc. some of us would just jump into practicing with no regards to some general guidelines followed by the community if only more people cared about readability, optimization, and performance the world would have been a better place. a code that compiles fine, doesn’t mean it works fine, most bugs come from those little things we overlooked or created in such a way that they wouldn’t interact friendly with other systems. a well-written code will survive the ordeal of time, how? You can always come back to it, and debug, fix, review it with ease, optimization will reflect result on the performance too, always try to get the best of your machine, and optimized code is the way to go.

The first thing that must be brought up, and that personally triggers me, is seeing how large strings are being created when not nearly half of the cells declared are even used, only declare strings the size you’ll use, extra cells will only task more memory, let’s take a look at a supposedly unoptimized way of declaring a string.

```cpp
new badString[100];
badString ="Hello :)";
```

We declared a string with _100 cells_, _1 cell_ takes up _4 bytes_, let’s do some basic math, _100 \* 4 = 400_ bytes, that’s roughly _0.0004 Megabyte_, nothing for today’s standards I know, but supposedly, on a huge script, obviously you will have to use more than one string, _60_, _70_, heck _100_ more strings? (_possibly more_), those tiny numbers will stack up on each other resulting in a much bigger number, and cause you serious trouble later on, and believe me when I tell you, the string we declared doesn’t come as near to looking stupid when compared to the likes of those with a size five times bigger or more.

What I come across more, something that’s stereotypically vague, is the usage of the mysterious string size -256-, just why people? Why?

Keep in mind the limits SA-MP puts when dealing with strings, where does the _256-long_ string come into play? What are you going to do with a string this long (_except for formatting a dialog/textdraw string_)? The maximum string input is _128è characters long, that’s half the size, \_512 bytes_ just went into waste, say what? You intended to use it for output, not input? That’s still way too large, output strings are not to pass _144_ characters, see where I’m going? Let’s try and see how we’d correct our fault, we have this sentence, “Good string”, it contains _11_ characters (_the space is counted as a character too_) + _1_ for the null terminator (_got to always have this dude in mind_), that makes it _12_ characters in total.

```cpp
new goodString[12];
goodString="Good string";
```

See how we preserved memory? A mere **48** bytes, and no extra weigh that would cause trouble later, feels much better.

But hey, what if I told you, you can get an even more optimized code, that’s right, have you ever heard of **packed strings**? A string is typically formed from multiple cells, and as we said earlier, each cell represents 4 bytes, so strings are made up of multiple sets of _4 bytes_. A single character takes up 1 byte, and each cell allows only a single character to be stored, meaning, that on each cell 3 bytes go to waste,

```cpp
new upkString[5];
upkString = "pawn";
```

The string above takes up 5 cells (_that is approximately 20 bytes_), can be narrowed down to only 8 bytes, a mere 2 cells.

```cpp
new pkString_1[5 char];

pkString_1 = !"pawn";
// or
pkString_1 = !#pawn;
```

That’s simply how it works, you declare a string with the size that it would normally take (_counting the null-terminator of course_), then suffix it with the with keyword `char`, each character will be stored in bytes rather than cells, meaning that every cell will have 4 characters stored, remember that when assigning values to packed strings, prefix them with an exclamation mark `!`, this, however, doesn’t apply for a single character.

This is an approximate visual representation of `upkString`'s content;

|            |                      |                      |                      |                      |                   |
| ---------- | -------------------- | -------------------- | -------------------- | -------------------- | ----------------- |
| Cell       | 0                    | 1                    | 2                    | 3                    | 4                 |
| Bytes      | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3        | 0 . 1 . 2 . 3     |
| Characters | \0 . \0 . \0 . **p** | \0 . \0 . \0 . **a** | \0 . \0 . \0 . **w** | \0 . \0 . \0 . **n** | \0 . \0 . \0 . \0 |

And this is what `pkString_1` would be like in the second example;

|            |                               |                   |
| ---------- | ----------------------------- | ----------------- |
| Cell       | 0                             | 1                 |
| Bytes      | 0 . 1 . 2 . 3                 | 0 . 1 . 2 . 3     |
| Characters | **p** . **a** . **w** . **n** | \0 . \0 . \0 . \0 |

You can also access a packed string’s indexers, as follows;

```cpp
new pkString_2[5 char];

pkString_2{0} = 'p';
pkString_2{1} = 97; // ASCII code for the character “a”.
pkString_2{2} = 0b1110111; // The decimal number 199 in binary, translates to the character “w”.
pkString_2{3} = 0x6E; // The decimal number 110 in hexadecimal, translates to the character “n”.
pkString_2{4} = EOS; // EOS (End Of String), has the value of 0, which is the ASCII code for \0 (NUL), the null character.
```

The result will be the same as `pkString_1` in this case, as you can see, _ASCII_ code is still being taken into considerations, take notes that when accessing indexers on packed strings, we use **curly brackets** instead of **brackets**. That means we’re indexing the bytes themselves, and not the cells.

:::info

In spite of their effectiveness in preserving memory, SA-MP’s implementation of pawn doesn’t 100% support packed strings, but you can still use them in infrequently used strings/arrays.

:::

## String output

#### Console

##### `print`

The following function is probably the most basic function in not only pawn but a lot of other programming languages too, it simply accepts one parameter and outputs it on the console.

```cpp
print("Hello world");
```

```
Hello world
```

You can also pass predeclared strings or predefined constants as well as merging multiple of them together, or use the number sign `#` too, much like we used to do with the format function, but keep in mind, that doesn’t include multiple parameters, we can only pass one and only parameter.

```cpp
#define HAPPY_STRING "I'm happy today" // String constant.
#define NEW_YEAR 2019 // Integer constant.
new stylishMsg[12] = "I'm stylish";

print(HAPPY_STRING);
print(stylishMsg);
print(#2019 is beyond the horizon);
print("I'm excited for "#NEW_YEAR);
print("What ""about"" you""?");
```

```
I'm happy today
I'm stylish
2019 is beyond the horizon
I'm excited for 2019
What about you?
```

Notice how we used the number symbol here the same way we did with the format function, if the value is an integer, you prefix it with `#` so it’s treated as a string.

Also keep in mind that the `print` function does support packed strings, however only accepts string type variables (_array of characters_), passing anything that’s not an array, a string (_be it between double quotations or prefixed by the number symbol_) will give compilation errors, so doing any of the following will not work;

```cpp
// Case 1
new _charA = 'A';
print(_charA);

// Case 2
new _charB = 66;
print(_charB);

// Case 3
print('A');

// Case 4
print(66);
```

Let’s see how we can fix that;

```cpp
// Case 1
new _charA[2] = "A";
print(_charA);
```

We change the single quotation mark to the double quotation mark and give the array two cells, one of the A character, and the second one for the null terminator because anything between the double quotation marks is a string, the output is **A**.

```cpp
// Case 2
new _charB[2] = 66;
print(_charB);
```

We change the `_charB` to an array with one cell and set the cell labelled 0 to the value of `66`, which translates to **B** according to the _ASCII_ table, the output is **B**, we preserve an additional cell for the null-terminator (_how much is there so it's not funny anymore?_).

```cpp
// Case 3
print("A");
```

Not much can be said, all it took is switching from the single quotation marks to a pair of double quotation marks.

As for the fourth case, there’s not much we can do while working with the `print` function, but it can simply be resolved using another similar function, called...

##### `printf`

Short for “_print formatted_”, I can simply put, this is a more diverse version of the previous `print` function, more specifically, it’s like a combination between the `format` function and the `print` function, meaning that it also prints characters on the server’s console, but with the benefit of formatting the output text.

Unlike `print`, `printf` accepts multiple parameters, and with different types too, however it does not support packed strings, in order to expand on its functionality, we use these sequences called “_format specifiers_”, more on them later, outputting anything more than **1024** characters will <u>crash the server</u>, so take notes on that.

```cpp
#define RANDOM_STRING "Vsauce"
#define RANDOM_NUMBER 2018

printf("Hey "RANDOM_STRING", Micheal here! #"#RANDOM_NUMBER);
```

Notice how we similarly to the `print` and the `format` functions, we nested those strings into one, which outputs the following;

```
Hey Vsauce, Micheal here! #2018
```

The `printf` function as I said before, really shines when **format specifiers** are used, it’s what distinguishes it and sets it apart, you can attach as many variables as you want, and output simple and complex strings with ease, we will have a much deeper look on that when we’re introduced to those specifiers later on.

#### Client messages

Apart from the other doll texts you can print on the server’s console, who are mainly used for debugging, there are messages that are printed on the client’s screen, on the chat section, those ones can be formatted the same way too, but they also support color embedding, which makes for a wonderful presentation for texts (_if used correctly of course_).

Keep in mind the that SA-MP’s restrictions on displaying strings apply for this type of messages too, being like the previous ones, limited to smaller than _144 characters_, or else the message won’t be sent, sometimes they will even crash some commands.

There are two functions that natively print text on the client’s screen, the only difference between them is the scoop, the first takes three parameters, the id of the player you want to print the text on their screen, the text’s color, and the text itself.

```cpp
SendClientMessage(playerid, color, const message[])
```

Say, you want to send a text to the player whose id’s 1, telling them “Hello there!”;

```cpp
SendClientMessage(1, -1, "Hello there!");
```

Simple, just like that, the player with the ID of 1 will be sent a text saying **Hello there!**, the `-1` is the color parameter, in this case, it’s the color **white**, more on colors later.

Obviously, you can also pass an array of characters, formatted strings...etc. And as we saw with other function, you can use the number sign `#`.

```cpp
#define STRING_MSG "today"
new mornMsg[] = "Hello!";

SendClientMessage(0, -1, mornMsg);
SendClientMessage(0, -1, "How are you ",STRING_MSG#?);
```

As you can see at the example above, this will send the player with the id _0_ two messages colored in white, the first messages will say “_Hello!_”, and the second will say, “_How are you today?_”, pretty similar to how other functions work. Keep in mind that predefined constant integers must be prefixed with the `#` symbol.

```cpp
#define NMB_MSG 3
SendClientMessage(3, -1, "It's "#NMB_MSG" PM");
```

Pretty self-explanatory, the text will be sent to the player with the id _3_, colored in white, saying “_It’s 3 PM_”.

Now that you know how to send someone a message, you can use the same approach to send the same message to everyone, child’s play really, you can just put the function in a loop that goes through all connected players, and risk showing your code in public and call it a day, but hey, there is already a native function that does the exact same thing, the same rules apply, the only thing that differ between the two is a slight change in their syntax.

```cpp
SendClientMessageToAll(color, const message[]);
```

pretty self-explanatory too, exposed by its name, now let’s send everyone on the server a greeting message.

```cpp
SendClientMessageToAll(-1, "Hello everyone!");
```

Just like that, you can play with it the same way you do with its other sibling, two toys from the same brand really, just try not to bypass the 144 characters limit.

#### Textdraws

One of SA-MP’s most powerful functionalities, just unleash your imagination, textdraws are basically graphic shapes/texts/sprites/preview models...etc. that can be displayed on clients’ screens, they make the UI especially much more lively and interactive (_to an extent_). But hey, there are limitations here too, for example, you cannot display a string that’s more than 1024 characters long, to be honest, that’s more than enough. Nothing special can be said here, even with their wide functionality, strings that can be displayed are poor on formatting, you can’t do as much as you could with other output functions, it feels a little narrow when it comes to this, but it certainly does make up for the lack of formatting with other exciting stuff, more on textdraws [here](../scripting/resources/textdraws).

#### Dialogs

Dialogs can be thought of as “_message boxes_”, they, of course, come in different types, accept few different inputs, and more importantly, accept all types of formatting that a normal string does, with makes them much easier to use than textdraw. There are limitations concerning them too, like string sizes and being able to only synchronously display them on the client’s screen, SA-MP only provides one native function for dealing with dialogs, and honestly, that would be one of your last concerns, as the lone function does its job, and does it efficiently, more on dialogs [here](../scripting/functions/ShowPlayerDialog).

### Color interpretation

#### Client messages and dialogs

##### RGBA

**RGBA** (_short for red green blue alpha_), is a simple use of the **RGB** model with an extra channel, the alpha channel, basically, a form of representing colors digitally, by mixing variations of red, green, blue and alpha (_opacity_), more on that [here](https://en.wikipedia.org/wiki/RGBA_color_space).

In SA-MP’s implementation of pawn, we use hexadecimal numbers to represent these color spaces, red, green, blue and alpha are noted by 2 bits each, resulting in an 8 bits long hexadecimal number, for example; (_FF0000FF = red_), (_00FF00FF = green_), (_0000FFFF = blue_), (_000000FF = black_), (_FFFFFFFF = white_), here’s a clearer visualization on this notation:

> <span style={{ color: 'red' }}>FF</span><span style={{ color: 'green' }}>FF</span><span style={{ color: 'blue' }}>FF</span><span style={{ color: 'grey' }}>FF</span>

A lot of programming/scripting languages prefix hexadecimal numbers with the number sign `#`, In pawn, however, we prefix them with `0x`, so the following hexadecimal number _8060C1FF_, becomes _0x8060C1FF_.

We can, of course, use decimal numbers to represent colors, but it’s much clearer to use the hexadecimal notation, as it’s the more readable between the two, let’s look the following example;

```cpp
// Representing the color white with decimal numbers
SendClientMessageToAll(-1, "Hello everyone!");

// Representing the color white with hexadecimal numbers
SendClientMessageToAll(0xFFFFFFFF, "Hello everyone!");

// A client message colored in white will be sent to everybody
```

Keep in mind that assigning all bits to the same value will result in variations of shades of grey (_no pun intended_), assigning the alpha channel to 0 will make the text invisible.

:::tip

It’s possible to format texts with multicolor simultaneously, but for that, we embed the simpler **RGB** notation.

:::

##### RGB

This is exactly like the **RGBA** color spaces, but with no alpha channel, just a mixture of red, green and blue, noted as a hexadecimal number of 6 bits, in pawn, this notation is used mostly to embed colors into texts, simply wrap your 6 bits hexadecimal number between a pair of curly brackets, and you’re set up to go, for example; (**{FF0000} = red**), (**{00FF00} = green**), (**{0000FF} = blue**), (**{000000} = black**), (**{FFFFFF} = white**), here’s a clearer visualization on this notation: `{FFFFFF}`. Let’s look at this quick example here;

```cpp
SendClientMessageToAll(0x00FF00FF, "I'm green{000000}, and {FF0000}I'm red");
```

This will send the following message to everyone (_and I'm no Italian_):

> <span style={{color: '#00ff00ff'}}>I’m green</span><span style={{color: '#ffffff'}}>, and </span><span style={{color: '#ff0000'}}>I’m red</span>

Keep in mind that the hexadecimal notation is case insensitive, so typing `0xFFC0E1FF` is the same as typing `0xfFC0e1Ff`, the same goes for embedded colors, `{401C15}` is the same as `{401c15}`.

Sometimes, working with colors can prove to be quite the labor, It’s not that easy to go around remembering all of those long hexadecimal numbers like no big deal, You should always have a reference to go back to, there are plenty of online color pickers you can use, you can simply google “_color picker_”, and choose between thousands of them, let me do that on you if you don’t mind, [here’s a simple tool](https://www.webpagefx.com/web-design/color-picker/) that I recommend using when working with colors.

One of the problems that people find, is managing their workflow, which if done right, it facilitates the work pacing, and makes it less painful to work around your projects, while color picker tools are of a great help, you can still waste plenty of time going on and off to it every time you need to pick a color, the frustration of that can be as annoying as a pizza with pineapples, luckily, you can take advantage of predefined constants, and define your most used colors for later usage, here’s a simple example;

```cpp
#define COLOR_RED 0xFF0000FF
#define COLOR_GREEN 0xFF0000FF
#define COLOR_BLUE 0xFF0000FF

SendClientMessageToAll(COLOR_RED, "I'm a red text");
SendClientMessageToAll(COLOR_GREEN, "I'm a green text");
SendClientMessageToAll(COLOR_BLUE, "I'm a blue text");
```

The latter can be done on embedded colors too;

```cpp
#define COL_RED "{FF0000}"
#define COL_GREEN {FF0000}
#define COL_BLUE "{FF0000}"

SendClientMessageToAll(-1, ""COL_RED"I'm a red text");
SendClientMessageToAll(-1, "{"COL_GREEN}"I'm a green "COL_BLUE"and blue");
ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Notice", "{"COL_GREEN"}Hello! "COL_RED"what's up?", "Close", "");
```

At compilation time, all predefined constants will be replaced by their values, and thus, this `"COL_RED"I’m a red text` becomes this `”{FF0000}”I’m a red text`, notice how we used two methode to predifne those colors, `RRGGBB` and `{RRGGBB}`, it’ goes into personal preference which methode to go by, personaly, I find defining them as `RRGGBB` much cleared, as the usages of curly brackets is present, and thus makes it noticable that we’re embedding a color.

That was the general approach on color embedding with dialog and client messages strings, it is possible to use colors within text in client messages, dialogs, 3D text labels, object material texts and vehicle number plates, but hey, SA-MP has also texdraws and gametexts functionalities, however those don’t support the RGB notation, and thus, adding colors is done differently.

#### Textdraws and Gametexts

as mentioned above, **RGB** notation is not supported, but luckily, we have other ways to work around this problem, for textdraws, you can use the native [TextDrawColor](../scripting/functions/TextDrawColor) function to change the textdraw's color, but this the same to textdraw as **RGBA** color spaces are to client messages and dialogs, they can’t be embedded, for that, we use special combination of characters to refer to colors and few other symbols, you can see them [here](../scripting/resources/gametextstyles).

|                |        |
| -------------- | ------ |
| \~r\~          | Red    |
| \~g\~          | Green  |
| \~b\~          | Blue   |
| \~w\~ or \~s\~ | White  |
| \~p\~          | Purple |
| \~l\~          | Black  |
| \~y\~          | Yellow |

So, embedding colors can go in like this: **\~w\~Hello this is \~b\~blue \~w\~and this is \~r\~red**

You can use another combination of characters to play with color mixes, **\~h\~**, it makes a certain color lighter, here are few examples:

|                                |                |
| ------------------------------ | -------------- |
| \~r\~\~h\~                     | Lighter red    |
| \~r\~\~h\~\~h\~                | Red pink       |
| \~r\~\~h\~\~h~\~h\~            | Dark red       |
| \~r\~\~h\~~h~~h~~h\~           | Light red pink |
| \~r\~\~h\~\~h\~\~h\~\~h\~\~h\~ | Pink           |
| \~g\~\~h\~                     | Light green    |

You can find more information about this [here](../scripting/resources/colorslist).

### The escape character

#### Description

The escape character is a character in which when prefixed to some character or number, it creates its own constant character, in most programming/scripting languages like pawn, the backslash is used as the escape character (`\`), a combination of this and some other character/number will result in an [escape sequence](https://en.wikipedia.org/wiki/Escape_sequence) which has a certain meaning, you can find more about escape character [here](https://en.wikipedia.org/wiki/Escape_character).

#### Escape sequences

Escape sequences make it easier to express certain characters in the source code of your script, here is a table containing the escape sequences used in pawn:

|                                              |              |
| -------------------------------------------- | ------------ |
| Audible beep (on server machines)            | `\a` or `\7` |
| Backspace                                    | `\b`         |
| Escape                                       | `\e`         |
| Form feed                                    | `\f`         |
| New line                                     | `\n`         |
| Carriage return                              | `\r`         |
| Horizontal tab                               | `\t`         |
| Vertical tab                                 | `\v`         |
| Backslash                                    | `\\`         |
| Single quote                                 | `\'`         |
| Double quote                                 | `\"`         |
| Character code with decimal values "ddd"     | `\ddd;`      |
| Character code with hexadecimal values "hhh" | `\xhhh;`     |

Let’s look at each one of them, after all, the best way to learn these sort of stuff rests within practicing them.

- **The “Audible beep” escape sequence - `\a`**

Audible beep or a bell code (_sometimes bell character_) is a device control code originally sent to ring a small electromechanical bell on tickers and other teleprinters and teletypewriters to alert operators at the other end of the line, often of an incoming message.

Using this on a computer will result in sending a bell/notification sound in the background, it can be used in some creative ways, to notify and/or alert users on certain activities, the escape sequence that represents it is `\a` (or `\7` noted as decimal code), fire off your pawn text editor, and write the following code;

```cpp
print("\a");
```

Upon executing the samp-server.exe, you will hear a beep notification sound, you can also use the decimal code;

```cpp
print("This is a beep \7");
```

- **The “Backspace” escape sequence - `\b`**

This escape sequence is noted as `\b`, it simply moves your cursor backward, most people would expect it to act like the backspace button on your typical keyboard, but not entirely, it only moves the carriage one position backward without erasing what’s written there.

This one doesn’t have that much usability in pawn unless you were clever enough to milk something useful out of it, here’s how it works.

```cpp
print("Hello 2018");
```

This will print **Hello 2018** in the console, the cursor remains on the null character’s position, more clearly, like this:

```
Hello 2018
          ^
```

As you can see, the cursor stops after the last visible character of the string, which is normal, now, let’s add a backspace escape sequence;

```cpp
print("Hello 2018\b");
```

That will result in;

```
Hello 2018
         ^
```

As you can see, the cursor is exactly in the position of the last visible character of the string, which is _8_, this is the same as toggling on the insert mode on your keyboard, now, let’s add some sorcery to this.

```cpp
print("Hello 2018\b9");
```

If you guessed it right, yes, this will print **Hello 2019**, so, let’s see how this works, the machine will process the string character by character, until it reaches the backspace escape sequence, then it moves the carriage one position backwards, which selects whatever character there, in this case 8, then, it inserts 9 in its place.

```
Hello 2019
         ^
```

The carriage is going to move backward as long as there is a backspace escape sequence in your string.

```cpp
print("Hello 2018\b9\b\b\b");
```

```
Hello 2019
       ^
```

The cursor will stop at the first character’s position if the amount of backspace escape sequence exceeded that of the number of characters between the position of the first character (yes, arrays start at 0, head to [r/programmerhumor](https://www.reddit.com/r/ProgrammerHumor/) for some good memes) and the initial position of the cursor.

```cpp
print("Hi\b\b\b\b\b\b\b\b\b\b\b\b\b\b");
```

Will always result in this;

```
Hi
^
```

- **The “Escape” escape sequence - `\e`**

With the hexadecimal value of 1B in _ASCII_, it’s used for common non-standard code, let’s look for some programming languages like C as an example; a sequence such as `\z` is not a valid escape sequence according to the C standard. The C standard requires such invalid escape sequences to be diagnosed (the compiler must print an error message). Notwithstanding this fact, some compilers may define additional escape sequences, with implementation-defined semantics. An example is the `\e` escape sequence, represents the escape character. It wasn't however added to the C standard repertoire because it has no meaningful equivalent in some character sets.

- **The “Form feed” escape sequence - `\f`**

Form feed is a page breaking _ASCII_ code. It forces the printer to eject the current page and to continue printing at the top of another. Often, it will also cause a carriage return, this doesn’t make any noticeable change in the _SA-MP_’s debugging console.

- **The “New line” escape sequence - `\n`**

The new line (also referred to as line ending, end of line (_EOL_), line feed, or line break) escape sequence is an _ASCII_ code that’s noted as `/n` with the decimal value of 10, it’s something that’s commonly used, text editors are inserting this character every time we press the Enter button on our keyboards. Here’s a simple message with a line break:

```cpp
print("Hello, this is line 1\nAnd this is line 2");
```

That will simply output:

```
Hello, this is line 1
And this is line 2
```

Multiple line brakes are achievable of course;

```cpp
print("H\n\n\ne\n\n\nl\nl\n\no");
```

```
H


e


l
l

o
```

This works differently when dealing with files, however, depending on your operating system, like for instance, in windows, a line break is typically a **CR** (_carriage return_) + **LF** (_line feed_), you can learn more about the differences [here](https://en.wikipedia.org/wiki/Newline).

- **The “Carriage return” escape sequence - `\r`**

The carriage return is an _ASCII_ code that’s often associated with the line feed, but it can serve as its own thing by itself, it simply moves the carriage to the beginning of the current line, equivalent of a specific case we discussed using multiple backspaces (`\b`) escape sequence, let’s look at the following example, without using this escape sequence, this is the normal output we would get:

```cpp
print("Hello");
```

```
Hello
     ^
```

The arrow represents the position of the cursor, which is placed after the last visible character of the string, again, that’s the normal expected behavior, now let’s add the carriage return into the mix:

```cpp
print("Hello\r");
```

```
Hello
^
```

The cursor is shifted to the beginning of the line, selecting the first character **“H”**, now inserting anything will change **“H”** to whatever we input, and then move to the next character while remaining on the insert mode:

```cpp
print("Hello\rBo");
```

```
Hello
^
```

As we’ve seen on the line feed section, line breaks work differently across different operating systems, windows, for instance, use a carriage return followed by a line feed to perform a line break, just like the classic typewriters.

- **The “Horizontal tab” escape sequence - `\t`**

Tabulation is something we use every day, from text/code indentation, to table display, that tabulator key that lays at the very side of your keyboard really is a time saver, it was such a pain and so much time consuming to excessively use many spaces, but this one cuts the cake easily, not only is it usefully practically, it really is strongly present in the field of programming, it’s noted as `\t`, people would argue on how many spaces a tab is worth, most would say it’s worth 4 spaces, but there are who say it’s worth 8 spaces, someone demonic creature would even prefer spaces to tabs, but that's another talk on inself, let as observe this simple example:

```cpp
print("Hello\tWorld");
```

```
Hello    World
```

Here is another one with multiple tabulations:

```cpp
print("Hello\t\t\t\t\tWorld");
```

```
Hello                    World
```

- **The “Vertical tab” escape sequence - `\v`**

During the old typewriter era, this had a more popular use, it was used to move to the next line vertically, but now, this is no longer the case, it doesn’t have any noticeable usage nowadays, and that includes modern printers and even programming languages, and pawn is no exception.

- **\_The “Backslash” escape sequence - `\*`**

As we’ve seen, the backslash is regarded as the escape character, so whenever the program spots it, it thinks of it as a starting point of some escape sequence, it doesn’t look at it as an independent character, and thus, will either give a compilation error (_if it wasn’t followed by a valid character_), or will not print it, in pawn’s case, the compilator will raise an error (_error 027: invalid character constant_). Luckily, we can solve this problem by escaping out backslash, and that’s done by prefixing yet another backslash to it:

```cpp
print("Hello \\ World");
```

```
Hello \ World
```

:::caution ­Warning

The output will disregard the first backslash, and print the second, as the first is escaping the second and tricking the program into viewing it as a raw character. A backslash can only escape one character at a time, so doing the following will raise a compilation error.

:::

```cpp
print("Hello \\\ World");
```

Think of it as pairs of backslashes, everyone is escaping the one after, and thus, it should always result in an even number of backslashes;

```cpp
print("Hello \\\\\\ \\ World");
```

```
Hello \\\ \ World
```

As you surely noticed, escape sequences are never printed, they only serve as instructions that express certain events, if we want to force them into being printed, we can escape their escape character (`\`), then the program will not look at them as escape sequence:

```cpp
print("This is the escape sequence responsible for tabulation: \\t");
```

The first backslash escapes the second, and then it gets printed, then the **t** character is left alone, and thus regarded as an independent character:

```
This is the escape sequence responsible for tabulation: \t
```

- **The “Single quote” escape sequence - `\'`**

This is hardly present when writing pawn code, I myself haven’t found myself using this in any coding situation, in other languages that treat text between single quotation marks as a string make great use of this to limit the confusion that happens when nesting single quotation marks into each other, it really makes no difference in pawn, here’s a simple example;

```cpp
print("Single quote '");
// or
print("Single quote \'");
```

Either way, the output will be the same:

```
Single quote: '
```

The only use I can think of concerning this is setting a variable the character “**'**”, so obviously doing the following will cause a compilation error;

```cpp
new chr = ''';
```

Simply because the compiler will regard the first pair of single quotes as one entity, and the second as an unclosed quotation sequence, so to fix that, we will have to escape the middle one;

```cpp
new chr = ''\';
```

- **The “Double quote” escape sequence - `\"`**

Unlike the single quotation mark, this one can cause problems when it comes to nesting them together, pawn treats anything between double quotations as a string, so what if you want to input a double quotation mark in your string, that will confuse the program, it wouldn’t know what each quotation mark is for, let’s take this as an example for instance:

```cpp
print("Hello "world");
```

As soon as the compilator spots the first quotation marks, it will treat everything that comes after as part of one string, and end up the process as soon as it hits another quotation mark, and thus, the compiler will pick up **“Hello “** as a string and will view **World”** as some none-sense filling up the holes of your code. To solve this, we need to escape the double quotation mark we want to print:

```cpp
print("Hello \"world");
```

Now, the compiler will treat the second quotation mark as an escape sequence as it’s prefixed by an escape character (**\\**):

```
Hello "world
```

Let’s add another quotation mark just for the heck of it:

```cpp
print("Hello \"world\"");
```

```
Hello "world"
```

It couldn’t be simpler.

Throughout this section, we’ve seen how we can represent escape sequences by prefixing the escape character (`\\`) to a certain character, but that’s just one way to note those values, among other ways, we will take a look on two others;

- **Escape sequences with character code (decimal code) - `\ddd;`**

It doesn’t change anything about the escape sequences, it’s just a different way to express them, using decimal _ASCII_ codes, for instance, if you want to print A, but note it decimally, you can type it’s decimal _ASCII_ code like the following:

```cpp
print("\65;");
```

This doesn’t concern only alphanumeric characters, but also other ones, like the audible beep (`\a`), with its decimal value `7`, can be represented according to this notation as `\7`;

The semicolon mark is optional and can be dropped, but it’s always better to go with the original approach, its purpose is to give the escape sequence an explicit termination symbol when it is used in a string constant.

- **Escape sequences with character code (decimal code) - `\xhhh;`**

Similar to the decimal _ASCII_ notation, we can also use the hexadecimal format, the character **A**, can either be written as `\65`;** or `\x41`;**, The _semi-colon_ can be omitted if you want, this applies both here and on the decimal notation.

```cpp
print("\x41;");
```

```
A
```

You can find all of those values by simply googling “**ASCII table**”, and what’s cool about it is that it’s free.

#### Custom escape character

If you noticed, I’ve kept calling repeating the “**escape character**” multiple times throughout the last section where I could have referred to it simply as “**the backslash**”, or even shorted, (`\`), the reason for that is because the escape character is not an absolute constant character, but rather, it can be changed preferably, you can have it as _@, ^, \$_ and so on, by default it’s a backslash, but how it stays is only determined by you.

n order to change it, we use the pre-processor directive `pragma`, this particular directive accepts different parameters, for each their specific task, and there is one that's responsible on setting the escape character which we will be focusing on, it's `ctrlchar`.

```cpp
#pragma ctrlchar '$'

main()
{
	print("Hello $n World");
	print("This is a backslash: \\");
	print("The his a dollar sign: $$");
}
```

```
Hello
 World
This is a backslash: \
This is a dollar sign: $
```

As you can see the line feed is noted as `$n` instead of `\n` now, and the backslash is no longer regarded as the escape character, and consequently, the dollar sign requires being escaped by another dollar sign.

You can’t, however, change this to (`-`), but anything else is an acceptable practice, but it’s never ever accepted ethically, just how silly is this `#pragma ctrlchar '6'`, huh? Absolute mad lad.

This portion here has absolutely nothing to do with escape sequences, but it is used in formatting textdraws and gametext, it’s better to put it here than anywhere else;

|       |                                                                                                               |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| `~u~` | Up arrow (gray)                                                                                               |
| `~d~` | Down arrow (gray)                                                                                             |
| `~<~` | Left arrow (gray)                                                                                             |
| `~>~` | Right arrow (gray)                                                                                            |
| `]`   | Displays a `*` symbol (only in text style 3, 4, and 5)                                                        |
| `~k~` | keyboard key mapping (e.g. `~k~~VEHICLE_TURRETLEFT~` and `~k~~PED_FIREWEAPON~`). Look here for a list of keys |

keyboard key mapping (e.g. `~k~~VEHICLE_TURRETLEFT~` and `~k~~PED_FIREWEAPON~`). Look here for a list of keys

### Format specifier

#### Description

Placeholders or specifiers are characters escaped by a percent sign (`%`), the indicate the relative position and the output type of certain parameters, they serve as their name suggests “_Placeholders”_, they save a place for data that will later replace them inside the string, there are different types of specifiers, and they even follow a specific formula;

```
%[flags][width][.precision]type
```

The attributes between brackets are all optional and are up to you-the-user to either keep them or not, what really defines a specifier the wide known format of **%type**, the type part is replaced by a character to represent a certain output type; (_integer, float... etc_).

Placeholders are only used on functions that accept parameters, thus functions like print will have no effect, an alternative to it is the more advanced `printf`.

Let us look at the different output types that can be used:

|               |                                                 |
| ------------- | ----------------------------------------------- |
| **Specifier** | **Meaning**                                     |
| `%i`          | Integer (_whole number_)                        |
| `%d`          | Integer (_whole number_)                        |
| `%s`          | String                                          |
| `%f`          | Floating-point number (`Float: tag`)            |
| `%c`          | ASCII character                                 |
| `%x`          | Hexadecimal number                              |
| `%b`          | Binary number                                   |
| `%%`          | Literal `'%'`                                   |
| `%q`          | Escape a text for SQLite. (_Added in 0.3.7 R2_) |

- **The integer specifiers - `%i` and `%d`**

Let’s wrap the both together, in pawn, these two specifiers do the same exact thing, both output integers, even though `%i` stands for integer and `%d` stands for decimal, they are a synonym to the same thing.

In other languages, however, the difference lays not in the output, but rather the input with functions like `scanf`, where `%d` scans an integer as a signed decimal, and %i defaults to decimal but also allows hexadecimal (_if preceded by `0x`_) and octal (_if preceded by `0`_).

The usages of these two specifiers go as follows:

```cpp
printf("%d is here", 2018);
printf("%d + %i = %i", 5, 6, 5 + 6);
```

```
printf("%d is here", 2018);
printf("%d + %i = %i", 5, 6, 5 + 6);
```

The output also supports pre-defined constants, variables, and functions too.

```cpp
#define CURRENT_YEAR 2018
new age = 19;

printf("It’s %d", CURRENT_YEAR);
printf("He is %d years old", age);
printf("Seconds since midnight 1st January 1970: %d", gettime());
```

```
It's 2018
He is 19 years old
Seconds since midnight 1st January 1970: 1518628594
```

As you can see, any value we pass in the parameters of the `printf` function is being replaced by its respective placeholder, and remember, **order matters**, your placeholders should follow the same order as your parameters in the call, and always use the correct specifier type, not doing so, will not result in an error, but it may output in some unwanted results, but in some cases, those unwanted results are what we want.

What do you think will happen if we tried to print a float or a string using an integer specifier? Let’s find out;

```cpp
printf("%d", 1.12);
printf("%d", "Hello");
printf("%d", 'H');
printf("%d", true);
```

```
1066359849
72
72
1
```

How odd, totally unexpected, but not necessarily useless, this exact behavior is taken advantage of in so many situations.

First of all, let’s see why did `1.12` output _1066359849_, well, that's something called undefined behavior, you can learn more about this [here](https://en.wikipedia.org/wiki/Undefined_behavior).

Trying to output a string using an integer specifier will give its first character’s _ASCII_ code, in this case, the character H’s code, 72, the same happens to the output of a single character. And finally, outputting a Boolean will give 1 if it’s true, and 0 if it’s false.

Strings are arrays in themselves, so outputting an array here will give the value of the first slot in that array, how it’s going to be output depends on which type it is (_integer, float, character, boolean_).

- **The string specifiers - `%s`**

This specifier, as it stands for string, is responsible for outputting strings (_obviously_):

```cpp
printf("Hello, %s!", "World");
```

```
Hello, world!
```

Let’s also output non-string values using this too:

```cpp
printf("%s", 103);
printf("%s", true);
printf("%s", 'H');
printf("%s", 1.12);
```

```
g

H
)
```

The number `103` was treated as the _ASCII_ code for _g_, and thus _g_ was printed, same goes for the strange symbol below it, the character with the value true, a.k.a _1_ was printed, more simply, the character `'H'` was printed as it is, but hey, what happened to the floating number `1.12`? remember the **undefined behavior**? Yeah, `1.12` resulted in a huge integer, which kept overflowing (its value divided by _255_) times, until it resulted in a number between _0_ and _254_, in this case, _40_, which is the _ASCII_ code of the character _(_.

Again, just like the integer specifier, this accepts pre-defined constants, variables, and functions:

```cpp
#define NAME "Max"
new message[] = “Hello there!”;

printf("His name is %s", NAME);
printf("Hey, %s", message);
printf("%s work", #Great);
```

```
His name is Max
Hey, Hello there!
Great work
```

- **The float specifiers - `%f`**

This specifier -short for float-, as its name suggests, it outputs floating numbers, on earlier sections, we tried to output floating numbers using the integer specifier, and then we got that undefined behavior, but now, that we know about this specifier, we can safely output floats with no problems;

```cpp
printf("%f", 1.235);
printf("%f", 5);
printf("%f", 'h');
```

The _1.235_ floating number got output just fine, with the addition of some padding, however, the rest of all output _0.000000_, basically _0_, that’s because the `%f` specifier will only output floating numbers, in other words, numbers that have no fixed number of digits before and after the decimal point; that is, the decimal point can float.

To fix that issue, we simply add the fractional part:

```cpp
printf("%f", 5.0);
printf("%f", 'h' + 0.0);
```

```
5.000000
104.000000
```

Although the `%f` is the most commonly used floating placeholder, the `%h` specifier does pretty much the same:

```cpp
printf("%h", 5.0);
```

```
5.000000
```

- **The character specifiers - `%c`**

This specifier, short for character, works like the string placeholder, but it only outputs a single character, let’s observe the following example:

```cpp
printf("%c", 'A');
printf("%c", "A");
printf("%c", "Hello");
printf("%c", 105);
printf("%c", 1.2);
printf("%c", true);
```

```
A
A
H
i
s
```

As you can see, passing a string will output only the first character and passing a number will output the character whose _ASCII_ code matches that number (_Booleans are converted to 0 and 1 respectively_).

- **The hexadecimal specifiers - `%x`**

The following specifier outputs the value we pass as a hexadecimal number, simply put, a conversation of numbers from a given base to base 16.

```cpp
printf("%x", 6);
printf("%x", 10);
printf("%x", 255);
```

```
6
A
FF
```

Just like the cases we saw on earlier sections, passing values other than integers will convert them to their respective integer values, and output them as hexadecimal numbers;

```cpp
printf("%x", 1.5);
printf("%x", 'Z');
printf("%x", "Hello");
printf("%x", true);
```

```
3FC00000
5A
48
1
```

The first value `1.5`, will result in an undefined behavior upon its conversion to an integer (_1069547520_), then the resulting integer will be output as a hexadecimal (_3FC00000_), The `'Z'` character, will have its _ASCII_ value (90) converted to hexadecimal (5A). The string `"Hello"` will only have its first character (H) with the _ASCII_ value of (72) converted to hexadecimal (48). And `true` outputs (1) as a hexadecimal, which is converts to (1), (false will output 0).

- **The binary specifiers - `%b`**

The following specifier, short for “_binary_” is used to print passed values as binary numbers, passing characters will convert its _ASCII_ code into binary, and so is the case for strings where only the first character is regarded, Booleans are regarded as true and false respectively, float numbers fall under the case of undefined behavior, as for integers and hexadecimal, they are converted to binary and output.

```cpp
printf("%b", 0b0011);
printf("%b", 2);
printf("%b", 2.0);
printf("%b", 0xE2);
printf("%b", 'T');
printf("%b", "Hello");
printf("%b", true);
```

```
11
10
1000000000000000000000000000000
11100010
1010100
1001000
1
```

- **The literal `%`**

Much like the default escaping character (`\`), the compiler views (`%`) as a special character, and thus treats the sequence as a placeholder, as long as there is a character after the (`%`) it’s regarded as a specifier even if it’s not valid, let’s observe these two cases;

```cpp
printf("%");
printf("Hello %");
printf("% World");
printf("Hello % World");
```

```
%
Hello %
 World
Hello  World
```

As you can see, having (`%`) alone as an individual sequence will have it output, but not the same happens when it’s followed by space or any other character, thus it results in outputting a space character. To trespass this problem, we escape it using another percent sign as follows;

```cpp
printf("This is a percent sign %%, we just had to escape it!");
```

```
This is a percent sign %, we just had to escape it!
```

Of course, this only concerns functions that support formatting, such as `printf` and `format`, for example, trying to output a percent sign using the `print` function will not require you to escape it.

- **The `%q` specifier**

This one doesn’t hold any big importance in our main topic, it’ widely used to escape sensitive strings when working with _SQLite_, and trust me, nobody wants to fall under the [Bobby table](http://bobby-tables.com/about) case.

Back when we introduced the placeholders, we reference a specific formula concerning them, as a reminder, here it is;

```
%[flags][width][.precision]type
```

So far, we have only talked about the `%` sign and the type filed, the others are optional, but each one is effective on different cases, you can include them to better control how your values are treated when they are output.

- **The width filed**

This one is responsible for specifying the minimum character output, it can be omitted if needed, you just have to type its value as a numeric integer, let’s look at some examples;

```cpp
printf("%3d", 5555);
printf("%3d", 555);
printf("%3d", 55);
printf("%3d", 5);
```

```
5555
555
 55
  5
```

We instructed the specifier to lock the output to 3 characters or more, at first, outputting 4 and 3 characters number long went fine, but the characters shorter than 3 characters were left padded with spaces to even the output width. There is also the ability to have dynamic width values, for that, we use the asterisk sign (`*`).

```cpp
printf("%*d", 5, 55);
```

```
     55
```

First, we pass the width’s value which was `5`, then the value we want to output `55`, so the placeholder outputs a minimum of 5 characters, that’s 5 minus 2, which gives us 3 spaces of padding.

- **The flags field**

This one works really well with the width field, as the width specifies the minimum characters to outputs, this one pads the emptiness left behind with whatever you tell it to. In case there were to spaces left behind, there won’t be any pad.

```cpp
printf("%3d", 55);
printf("%5x", 15);
printf("%2f", 1.5)
```

```
055
0000F
01.500000
```

The first number 55, is short on one character because of the width of the decimal parameter, so it’s padded by one 0. As for 15, it’s converted to its respective hexadecimal value _F_, and padded with 4 0’s to validate the width of its placeholder. Notice how only the number before the decimal point was padded. The use of dynamic width values remains here too, we just have to include the asterisk, pass a value, and watch the magic happen;

```cpp
printf("%0*d", 5, 55);
```

```
00055
```

- **The precision field**

The Precision field usually specifies a maximum limit on the output, depending on the particular formatting type. For floating point numeric types, it specifies the number of digits to the right of the decimal point that the output should be rounded. For the string type, it limits the number of characters that should be output, after which the string is truncated.

```cpp
printf("%.2f", 1.5);
printf("%.*f", 10, 1.5);
printf("%.5s", "Hello world!");
printf("%.*s", 7, "Hello world!");
```

```
1.50
1.5000000000
Hello
Hello w
```

As you can see, dynamic precision values can be used both with the float and the string placeholders.

A really cool trick we can pull off thanks to the precision field is get substrings, now, now, there are plenty of methods we can use to do that, and that without regarding the native [strfind](../scripting/functions/strfind) function, and let’s not forget the amazing functions we got at **Slice**’s [strlib](https://github.com/oscar-broman/strlib) include.

Let’s see how we can get the same result using only the precision field.

```cpp
substring(const source[], start = 0, length = -1)
{
	new output[256];

	format(output, sizeof(output), "%.*s", length, source[start]);
	return output;
}
```

Let’s try to decipher this chunk of code, we simply pass the source string, (the string we are going to extract from), a starting position (the slot we are going to start extracting at), and the length of the characters we want to extract.

Our return value will be formatted according to the following placeholder `%.*s`, we are including the precision field, and using it to determine a dynamic value that’s going to be the length of extracted characters, then we provide a starting point for the extraction by adding `source[start]` which skips starting from the first slot to the slot number `start` that we passed in the function’s parameters.

Let’s call the function and see how it goes from here:

```cpp
new message1[] = "Hello!", message2[] = "I want an apple!";

print(substring(.source = message1, .start = 1, .length = 3));
print(substring(.source = message2, .start = 7, .length = 8));
```

```
ell
an apple
```

Simple right? Trivia bonus, passing a _negative value_ as the extraction length will result in outputting all the characters in your source string starting from the **start** slot. In the other hand, passing 0 as the extraction length returns a null value.

Let’a take a look on these cases:

```cpp
new message3[] = "Arrays start at 1, says the Lua developer!";

print(substring(message3)); // start = 0 by default, length = -1 by default
print(substring(message3, .length = 6)); // start = 0 by default, length = 6
print(substring(message3, 7, 10)); // start = 7, length = 10
print(substring(message3, strlen(message3) - 14)); // start = 28, length = -1 by default
print(substring(message3, strlen(message3) - 14, 3)); // start = 28, length = 3
```

```
Arrays start at 1, says the Lua developer!
Arrays
start at 1
Lua developer!
Lua
```

#### Usage

Putting all what we’ve seen so far to action, we can format our strings pretty match in anyway, so far we’ve worked in mainly in the console, utilizing the `print` and `printf` functions to output our data, well, mainly `printf` that is, thanks to its native support for formatting strings on the go, hence the f on the function’s name.

But in the real world, most people don’t like looking at terminals, they are just too scary, and complicated to the average user, and as you all know, _client messages_ show up on the game’s screen, and not the console, however, those cannot be formatted on the go, they are more like a print function one might say, to bypass this limitation, we utilize and other very effective function, called `format`, we won’t go deeper on its definition, as we have already gone through explaining it on earlier parts, (refer to [this](../scripting/functions/format)), but, here is a reminder of its syntax;

```cpp
format(output[], len, const format[], {Float,_}: ...}
```

Let’s take a look at these examples;

**Example 1**: _Player name – Assuming there is some play on the server with the id of 9 called Player1_:

```cpp
// MAX_PLAYER_NAME is a predefined constant with the value of 24, we add 1 to take into account the null terminator, thanks to Pottus for pointing that out.
new playerName[MAX_PLAYER_NAME + 1], output[128], playerid = 9;

GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
format(output, sizeof(output), "[Info]: the player with the id of %d is called {EE11CC}%s.", playerid, playerName);SendClientMessageToAll(0, output);
```

> [Info]: the player with the id of 9 is called <span style={{color: '#ee11cc'}}>Player1</span>.

Simply enough, we just get the player name and start formatting out the string, the `%d` placeholder is responsible on displaying the `playerid` variables, which holds the value `9`, the `%s` placeholder displays the `playerName` string that has the player name in it thanks to the `GetPlayerName` function.

We then show the formatted string to everyone on the server using the `SendClientMessageToAll` function, notice that the `0` value on its first parameter indicating the color black, which is going to be the message’s color, the embedded hex value `{FFFF00}` is what resulted in the player name to be yellow.

**Example 2**: _In-game Clock – Displaying the current time in game_:

```cpp
new output[128], hours, minutes, seconds;

gettime(hours, minutes, seconds);
format(output, sizeof(output), "It's %02d:%02d %s", hours > 12 ? hours - 12 : hours, minutes, hours < 12 ? ("AM") : ("PM"));
SendClientMessageToAll(0, output);
```

Again, we just utilized the `gettime` function to store the hours, minutes and seconds on their variables respectively, then put them all together into a nicely formatted string, we took advantage of the width field `%02d` to pad the values between 0 and 9 with another zero to evade outputs like (“_It’s 5:9 PM_”), as you can see.

> It’s 06 :17 PM

**Example 3**: _Death message - Outputting a message when a player dies, having the players names colored in their respective colors_:

```cpp
public OnPlayerDeath(playerid, killerid, reason)
{
    // MAX_PLAYER_NAME is a predefined constant with the value of 24, we add 1 to take into account the null terminator, thanks to Pottus for pointing that out.
    new message[144], playerName[MAX_PLAYER_NAME + 1], killerName[MAX_PLAYER_NAME + 1];

    GetPlayerName(playerid, playerName, MAX_PLAYER_NAME);
    GetPlayerName(killerid, killerName, MAX_PLAYER_NAME);

    format(message, sizeof(message), "{%06x}%s {000000}killed {%06x}%s", GetPlayerColor(killerid) >>> 8, killerName, GetPlayerColor(playerid) >>> 8, playerName);
    SendClientMessageToAll(0, message);

    return 1;
}
```

Given the following list of connected players:

|        |                                                 |
| ------ | ----------------------------------------------- |
| **ID** | **Player**                                      |
| 0      | <span style={{color: 'red'}}>Compton</span>     |
| 1      | <span style={{color: 'grey'}}>Dark</span>       |
| 5      | <span style={{color: 'red'}}>Player1</span>     |
| 6      | <span style={{color: 'blue'}}>Bartolomew</span> |
| 11     | <span style={{color: 'grey'}}>unban_pls</span>  |

Say, `playerid` `0` killed `playerid` `6`, the formatted messages should spell “**{FF0000}Compton {000000}killed > {0000FF}Bartolomew**”, which will send the following client message to everybody on the server:

> <span style={{color: 'red'}}>Compton</span> ­ <span style={{color: '#000000'}}>killed</span> ­ <span style={{color: 'blue'}}>Bartolomew</span>

I apologize if I had you confused by using [bitwise logical shift](https://en.wikipedia.org/wiki/Logical_shift), it was simply used here in order to turn the decimal number returned by the `GetPlayerColor` function into a hexadecimal number representing a color, the shift itself is utilized to omit the -alpha- space, for more about this, I highly recommend checking out [this tutorial](Binary) by **Kyosaur**.

#### Custom specifiers

Working with the formatting specifiers we've gone through so far is sufficient, you can literally do all sort of stuff with those magnificent tools, but nothing is stopping us from asking for me, how greedy of us. All thanks to **Slice** after being influenced by [sscanf](https://github.com/maddinat0r/sscanf), he came up with an amazing include, [formatex](https://github.com/Southclaws/formatex), which added several new specifiers to use, which really eased a lot of every-day pawn stuff. But that wasn't it, you can also create your own specifiers to suit your needs, and as cool as it might sound, the process is very easy.

Just for testing purposes, let's make something silly, something as basic as giving a string as an input, and return it on the form of a link (_https://www.string.com_);

```cpp
FormatSpecifier<'n'>(output[], const param[]) {
	format(output, sizeof(output), "https://www.%s.com", param);
}
```

As simple as that, and thus, the mighty `%n` specifier (short for Newton because it's very cool and rocket-science complicated 😉 was born, let's test this champ out:

```cpp
printf("%n", "samp");
```

> https://www.samp.com

:::note

Don't let this example gatekeep or limit your expectations for what is possible to achieve with custom specifiers, there are better examples at the main release page, [please go check it out](https://github.com/Southclaws/formatex/blob/master/README.md).

:::

### External links

#### Similar tutorials

- [String formatting](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=265433) by [krogsgaard20](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=126724)
- [Understanding Strings](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=284112) by [\[HiC\]TheKiller](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=23565)
- [How to use strcmp](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=199796) by [Ash.](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=78597)
- [Beginner's Guide: Single/Two/Multi-dimensional Arrays](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=318212) by [iPLEAOMAX](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=122705)
- [Tips and Tricks](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=216730) by [Slice](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=23640)
- [Code optimization](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=571550) by [Misiur](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=55934)
- [Packed strings](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=480529) by Emmet\_
- [IRC string formatting](https://github.com/myano/jenni/wiki/IRC-String-Formatting) by [myano](https://github.com/myano)
- [String manupilation](https://web.archive.org/web/20190424140855/https://www.compuphase.com/pawn/String_Manipulation.pdf) by [CompuPhase](https://web.archive.org/web/20190424140855/http://www.compuphase.com/)
- [Pawn-lang](https://github.com/pawn-lang/compiler/blob/master/doc/pawn-lang.pdf)
- [An in-depth look at binary and binary operators](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=177523) by [Kyosaur](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=23990)

#### Related includes/plugins/contributers

- [Westie](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=56481)'s [strlib](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=85697)
- [Slice](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=23640)'s [strlib](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=362764)
- [Slice](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=23640)'s [formatex](https://github.com/Southclaws/formatex)
- [corne](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/member.php?u=98345)'s [y_stringhash](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=571305)
- [Y-Less](https://github.com/Y-Less)'s [sscanf](https://web.archive.org/web/20190424140855/http://forum.sa-mp.com/showthread.php?t=570927)

#### References

- [GTA San Andreas](http://www.rockstargames.com/sanandreas/)
- [Textdraw](../scripting/resources/textdraws#what-is-a-textdraw)
- [Gametext](../scripting/functions/GameTextForPlayer)
- [Limitations](../scripting/resources/limits)
- [ASCII](https://en.wikipedia.org/wiki/ASCII)
- [ASCII table](http://www.asciitable.com/)
- [Pawn Tutorial](https://wiki.alliedmods.net/Pawn_Tutorial)
- [Control Structures](../scripting/language/ControlStructures)
- [Null character](https://en.wikipedia.org/wiki/Null_character)
- [RGBA color space](https://en.wikipedia.org/wiki/RGBA_color_space)
- [Color picker](https://www.webpagefx.com/web-design/color-picker/)
- [TextDrawColor](../scripting/functions/TextDrawColor)
- [Gametext styles](../scripting/resources/gametextstyles)
- [Color list](../scripting/resources/colorslist)
- [Escape sequence](https://en.wikipedia.org/wiki/Escape_sequence)
- [r/programmerhumor](https://www.reddit.com/r/ProgrammerHumor/)
- [Newline](https://en.wikipedia.org/wiki/Newline)
- [Undefined behavior](https://en.wikipedia.org/wiki/Undefined_behavior)
- [Bobby table](http://bobby-tables.com/about)
- [strfind](../scripting/functions/strfind)
- [format](../scripting/functions/format)
- [Bitwise logical shift](https://en.wikipedia.org/wiki/Logical_shift)
