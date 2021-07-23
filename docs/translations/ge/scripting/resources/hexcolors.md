---
title: Hex Colors
description: This deals with the color representation in hexadecimal in SAMP.
sidebar_label: Hex Colors
---

## What is hex?

The hexadecimal numeral system, or commonly known just as Hex, is a numeral system made up of 16 unique symbols (this is also known as base 16). You're probably wondering how this numeral system can have 16 symbols when our beloved decimal system (base 10) only has 10 symbols (0-9). Well the answer is quiet simple, let's take a look at both systems:

### Decimal (base 10)

```c
01
2
3
4
5
6
7
8
9
```

### Hexadecimal (base 16)

```c
01
2
3
4
5
6
7
8
9
A //10
B //11
C //12
D //13
E //14
F //15
```

Since there are no more available numbers, hex uses letters from the alphabet. Don't be scared by this, you can simply view them as place holders who's value is +1 of the previous number. This sounds very confusing and may even look pretty scary, but you will get used to it in no time at all.

Now let's take a look a few bigger numbers.

### Decimal (base 10)

```c
255
```

### Hexadecimal (base 16)

```c
FF
```

The number 255 is pretty understandable, but what is 'FF'? Let's take a look at both in their exponential notation.

:::caution **Note** | '^' is to the power of in this case, not the bitwise exclusive operator. :::

### Decimal (base 10)

```c
2 * (10^2) + 5 * (10^1) + 5 * (10^0)

//which equals

200+50+5

//which equals

255
```

Hex is exactly the same! The only difference is that it works with powers of 16 (Hence the base 10/16).

### Hexadecimal (base 16)

```c
F * (16^1) + F * (16^0)

//which equals

15 * (16^1) + 15 * (16^0)

//which equals

240+15
```

## When and how to use hex.

There isn't really a sole use for hex, you can use it when ever you want; though it's mostly used for color defines (We'll take a look at this later). Some people use hex as a visual aid to make things look more clearly (Y_Less) for example:

:::caution **Note** | This is a complicated example, don't worry if you don't understand it. :::

```c
var = b & 0x04
```

That makes it very clear that I want the 4 high bits of the low byte of b, on the other hand:

```c
var = b & 4
```

Isn't very friendly to the eyes at all.

Notice how '04' has '0x' in front of it. This is a constant symbol in pawn that allows the use of hexadecimal (like 0b is for binary).

## Hex colors

Hex colors follow this format:

```c
RR - Two values for the red (Where FF is max, and 00 is the lowest).
GG - Two values for the green (Where FF is max, and 00 is the lowest).
BB - Two values for the blue (Where FF is max, and 00 is the lowest).
AA - Two values for the transparency (Where FF is max, and 00 is the lowest).
```

Let's take a look at a few colors, starting with the basics and moving into the combinations.

```c
//basics

0x00000000 - Black
0xFF0000FF - Bright red.
0x00FF00FF - Bright green.
0x0000FFFF - Bright blue.
0xFFFFFFFF - White

//combinations

0xFFFF00FF - Bright yellow
0xFF00FFFF - Bright purple
0x00FFFFFF - Bright cyan
```

These are just the basic colors/combination, if you're looking for other colors / are too lazy to convert, you are better using a converter like this one:
