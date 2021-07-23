---
title: "Binary"
description: An in depth look at binary and bitwise operators.
---

## Credits

This is from a Tutorial topic in SA-MP Forums. The author is **Kyosaur**.

## What is binary?

Binary is a numeral system that uses two unique symbols to represent numbers. While the more common decimal system uses ten numerals (**base 10**), binary uses only 0 and 1. This may sound useless in every day life, but binary is essential when it comes to computers. Computers at their lowest level perform all of their calculations by manipulating the flow of electricity to indicate on and off states. This is exactly what binary is, just a ton of switches flipped on and off. This is a sort of alien concept to most people, so lets take a look at the decimal and binary system next to each other.

Decimal (base 10)

```c
0
1
2
3
4
5
6
7
8
9
10
11
12
13
```

Binary (Base 2)

```c
0 //0
1 //1
10 //2
11 //3
100 //4
101 //5
110 //6
111 //7
1000 //8
1001 //9
1010 //10
1011 //11
1100 //12
1101 //13
```

Looking at both systems beside one another, you'll notice they behave exactly the same. Once you reach the last available number you have to move on to another place. These places in binary are referred to as bits (**b**inary dig**its**) and are simply powers of two; just as places in the decimal system are powers of 10. To prove this, lets take a look at the number 13 in standard notation.

**NOTE:** '^' is power in these next few examples, not bitwise exclusive (which we'll cover later.)

Decimal (base 10)

```c
13

//which equals

1 * (10^1) + 3 * (10^0)

//which equals

10+3

//which equals

13
```

Binary (base 2)

```c
1101

//which equals

1 * (2^3) + 1 * (2^2) + 0 * (2^1) + 1 * (2^0)

//which equals

8+4+0+1

//which equals

13
```

We can see from the preceding example that if a bit is set to 0, we can ignore it and move on; after all, anything multiplied by 0 is going to be 0. The previous example was a little over complicated and was just me trying to being absolutely clear. When you're converting from binary, all you really have to worry about is adding up the powers of all the bits that are turned on.

Here are 12 powers of 2 just off the top of my head:

```c
4096,2048,1024,512,256,128,64,32,16,8,4,2,1
```

If you know nothing about working with powers, this probably makes no sense to you at all. A power is a number multiplied by itself x amount of times. With this information in mind, the preceding list of powers probably makes more sense; well with the exception of 1. You may be curious why 2 raised to the power of 0 gives a result of 1, all i can say to this is that it just does.

```c
2^1 = 2, 2^3 = 4, 2^4 = 8
```

We can see that when we move to the right, our previous value is multiplied by 2; so its safe to assume that when we move to the left our new value is just the previous number divided by 2. With this in mind you can see how we can end up with 2 to the zeroth power equaling 1. If this isn't satisfying enough, im sure you can find more proof on **\*\***. All that being said, lets take a look at one final example, and lets make it somewhat complicated!

```c
111011001011111000 //242424

//Remember, ignore the bits that arent turned on.

1 * (2^17) = 131072

1 * (2^16) = 65536

1 * (2^15) = 32768

1 * (2^13) = 8192

1 * (2^12) = 4096

1 * (2^9) = 512

1 * (2^7) = 128

1 * (2^6) = 64

1 * (2^5) = 32

1 * (2^4) = 16

1 * (2^3) = 8


131072+65536+32768+8192+4096+512+128+64+32+16+8
=
242424
```

Remember when converting: The first power is 0 so dont make the mistake as seeing the 18th place as 2^18. There are indeed 18 powers, but that is including the power of 0, so 17 is actually our highest power.

### A deeper look at bits

Most programming languages allow different data types which range in the amount of bits that can be used to store information; however pawn is a typeless 32 bit language. This means that pawn will always have 32 bits available for storing information. So what happens when you have to much information? The answer to that question lies with signed and unsigned integers.

#### Signed integers

Have you ever noticed that when an integer in pawn gets to high it turns into a negative? This "wrapping" is due to you go OVER the maximum value in pawn which is:

```c
2^31 - 1 //Power, not bitwise exclusive. Also the -1 is because we count 0 (there ARE 2,147,483,648 values, but that is with 0, So technically 2,147,483,647 is the max).

//which equals

2,147,483,647

//which in binary is

1111111111111111111111111111111 //31 bits- all on
```

You might be wondering why THAT is the max value, and not 2^32-1 (4,294,967,295). This is where signed and unsigned integers come into play. Signed integers have the ability to store negative values, where unsigned integers do not. This might sound like im straying away from the question, but i assure you i am not. The reason the maximum integer isnt 2^32-1 is because the 32nd bit is used as a sort of toggle for negative and positive values. This is called the MSB (Most significant bit) if the MSB is turned on, the number will be negative; if its turned off, the number is positive. Pretty simple, right?

Before i show a few negative values, i need to explain how negative values are represented in pawn. Pawn uses a system called 2's complement to represent negative values, which basically means you flip every single bit in your number and add 1 to the new number in order to make it negative.

Lets take a look at a few negative values while this idea is still in your head:

```c
11111111111111111111111111111111 //all 32 bits turned on

//equals

-1

//and

11111111111111111111111111111110

//equals

-2

//and finally

10000000000000000000000000000000

//equals

-2147483648
```

See, all negative numbers are simply the original positive number with all its bits flipped and increased by one. This is super clear with our last example, as the highest POSITIVE integer is 2147483647.

From this we can see that the number range in pawn is actually:

```c
&#8722;2^31 to +2^31 − 1
```

#### Unsigned integers

There are no such thing as unsigned integers in pawn, but im adding this just so its balanced. The only difference between a signed integer and an unsigned integer is that unsigned integers can not store negative values; Integers still wrap around, but they wrap back to 0, instead of a negative value.

## Binary Operators

Binary operators allow you to manipulate individual bits of a bit pattern. Lets take a look at a list of available bitwise operators.

- Bitwise arithmetic shift: >>, and <<
- Bitwise logical shift: >>>
- Bitwise NOT (aka complement): ~
- Bitwise AND: &
- Bitwise OR: |
- Bitwise XOR (aka exclusive-or): ^

### Bitwise AND

**NOTE:** Not to be confused by the logical AND operator '&&'

A binary AND simply takes the logical AND of the bits in each position of a number in binary form. This sounds a bit confusing, so lets take a look at it in action!

```c
1100 //12
&
0100 //4
=
0100 //4 as they both have "100" in them (which is 4)
```

That was a little easy, lets take a look at a harder one:

```c
10111000 //184
&
01001000 //72
=
00001000 //8
```

Looking at the examples should give you a pretty good idea what this operator does. It compares two bit sets together, if both of them share a bit of 1, the result will have the same bit turned on. If they share no bits at all, then the result is 0.

### Bitwise OR

**NOTE:** Not to be confused by the logical OR operator '||'

Bitwise OR works almost exactly the same as bitwise AND. The only difference between the two is that bitwise OR only needs one of the two bit patterns to have a bit turned on in order for the result to have the same bit turned on. Lets take a look at a couple of examples!

```c
1100 //12
|
0100 //4
=
1100 //12.
```

Lets take a look at one more example.

```c
10111000 //184
|
01001000 //72
=
11111000 //248
```

I think this is pretty self explanatory, if either of the numbers have a bit turned on the resulting number will also have that bit turned on.

### Bitwise XOR

This operator is a little similar to the bitwise OR operator, but there is a bit of a difference. Lets look at the same example used in the bitwise OR section, and see if you can spot the difference.

```c
1100 //12
^
0100 //4
=
1000 //8.
```

and finally:

```c
10111000 //184
^
01001000 //72
=
11110000 //240
```

### Bitwise NOT

This operator flips every bit in the bit pattern, turning all 1's to 0's and vise versa.

```c
~0
=
11111111111111111111111111111111 //-1

//and

~100 //4
=
11111111111111111111111111111011 //-5

//and

~1111111111111111111111111111111 //2147483647 (not to be confused with -1, which has 32 bits, not 31)
=
10000000000000000000000000000000 //-2147483648 (32nd bit turned on)
```

If you dont understand why the negative values are sort of "backwards" please read the section about signed integers.

### Bit Shifting

Bit shifting does exactly what you would imagine it does; it shifts the bits in a number towards a certain direction. If you remember earlier in the article i mentioned that PAWN has a specific memory range (32 bits that can be used for storage). What happens when you shift a number past that range? The answer to this question lies in what shifting operator you are using, and what direction you are shifting in.

**NOTE:** In the following examples, all binary numbers will be written out in full (all 32 bits) to avoid any confusions.

#### Arithmetic shifts

#### Right shift

All bits in a number are shifted x amount of times to the right when using this operator. Lets takes a quick look at a simple example.

```c
00000000000000000000000000001000  //8
>>
2

=

00000000000000000000000000000010 //2
```

You can see from the preceding example that every bit has moved to the right by two places, and two zeros were added on the left side as padding. These two zeros are actually the value of the MSB (Most significant bit) and are very important when it comes to signed integer shifting. The reason the MSB is used as padding is so we keep the sign of the number that is being shifted. Lets take a look at the same example, except lets make it negative.

```c
11111111111111111111111111111000 //-8
>>
2

=

11111111111111111111111111111110 //-2
```

Clearly this behaves exactly the same as the previous example, except the left bits used for padding are ones; which proves that the padding of right arithmetic shift is the value of the MSB.

#### Left shift

This is the exact opposite of the right arithmetic shifting operator. It shifts all the bits in a number to the left x amount of times. Lets look at an example.

```c
00000000000000000000000000001000  //8
<<
2

=

00000000000000000000000000100000 //32
```

The only difference between the left and right arithmetic shift (besides the direction of the shift) would be the way it handles padding. With the right arithmetic shift, the padding is the value of the MSB (Most significant bit), but with the left arithmetic shift the value is just 0. This is because there is no relevant information like a number's sign to keep track of.

```c
11111111111111111111111111111000 //-8
<<
2

=

11111111111111111111111111100000 //-32
```

See? Even though the padding is always 0, the sign of the number is still kept. The only thing you really have to worry about is shifting to far. If you shift a positive number past the highest possible number, it will become negative and vise versa with negative values (you'll eventually hit 0).

#### Logical Shifts

##### Right Shift

This is the converse to the arithmetic left shift. The best way to describe it would be a hybrid between the two arithmetic shifts. Lets take a look at it in action!

```c
00000000000000000000000000001000  //8
>>>
2

=

00000000000000000000000000000010 //2
```

The bits in the number 8 where shifted 2 times to the right. So how is this any different from the arithmetic right shift? The answer is the padding. With the arithmetic right shift, the padding is the value of the MSB, but with the logical right shift the padding is just 0 (just as it is with the arithmetic left shift). This means that it will not keep the number of the sign, and our result will always be positive. To prove this, lets shift a negative number!

```c
11111111111111111111111111111000 //-8
>>>
2

=

00111111111111111111111111111110 //1073741822
```

That proves that we wont get any negative values while using the logical right shift!

##### Left shift

There is no logical left shift, as it would do exactly the same as the arithmetic left shift. I just added this to avoid confusion of any sort, and also to keep the section balanced.
