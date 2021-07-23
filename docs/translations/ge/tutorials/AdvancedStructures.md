---
title: "Advanced Structures"
---

## Array manipulation

### Finding an empty slot properly

This example shows how to find an empty slot in an array using standard coding practices.

```c
new
    gMyArray[10];

stock FindEmptySlot()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray)) return -1;
    return i;
}
```

This basic example assumes an array slot is empty if its value is 0. The loop loops through all values in the array (could also be done with a constant) as long as the values are not 0. When it reaches one which is 0 the while condition will fail and the loop ends without using a break as is common practice but discouraged in situations like this. This function also returns -1 if a free slot is not found, which would need to be checked at the other end. More commonly you would use the found id straight away:

```c
MyFunction()
{
    new
        i = 0;
    while (i < sizeof (gMyArray) && gMyArray[i])
    {
        i++;
    }
    if (i == sizeof (gMyArray))
    {
        printf("No free slot found");
        return 0;
    }
    printf("Slot %d is empty", i);
    // Use the found slot in your code for whatever
    return 1;
}
```

Obviously you would replace the "gMyArray[i]" expression with your own indication of a slot in use.

### List

#### Introduction

Lists are a very useful type of structure, they're basically an array where the next piece or relevant data is pointed to by the last piece.

Example:

Say you have the following array:

```c
3, 1, 64, 2, 4, 786, 2, 9
```

If you wanted to sort the array you would end up with:

```c
1, 2, 2, 3, 4, 9, 64, 786
```

If however you wanted to leave the data in the original order but still know the numbers in order for some reason (it's just an example), you have a problem, how are you meant to have numbers in two orders at once? This would be a good use of lists. To construct a list from this data you would need to make the array into a 2d array, where the second dimension was 2 cells big, the first dimension containing the original number, the other containing the index of the next largest number. You would also need a separate variable to hold the index of the lowest number, so your new array would look like:

```c
start = 1
3, 1, 64, 2, 4, 786, 2, 9
4, 3, 5,  6, 7, -1,  0, 2
```

The next index associated with 786 is -1, this is an invalid array index and indicates the end of the list, i.e. there are no more numbers. The two 2's could obviously be either way round, the first one in the array is the first on in the list too as it's the more likely one to be encountered first.

The other advantage of this method of sorting the numbers is adding more numbers is a lot faster. If you wanted to add another number 3 to the sorted array you would need to first shift at least 4 numbers one slot to the right to make space, not terrible here but very slow in larger arrays. With the list version you could just append the 3 to the end of the array and modify a single value in the list;

```c
start = 1
3, 1, 64, 2, 4, 786, 2, 9, 3
8, 3, 5,  6, 7, -1,  0, 2, 4
^ modify this value        ^ next highest slot
```

None of the other numbers have moved so none of the other indexes need updating, just make the next lowest number point to the new number and make the new number point the number the next lowest used to be pointing to. Removing a value is even easier:

```c
start = 1
3, 1, 64, X, 4, 786, 2, 9, 3
8, 6, 5,  6, 7, -1,  0, 2, 4
   ^ Changed to jump over the removed value
```

Here the first 2 has been removed and the number which pointed to that number (the 1) has been updated to point to the number the removed number was pointing to. In this example neither the removed number's pointer nor number have been removed, but you cannot possibly get to that slot following the list so it doesn't matter, it is effectively removed.

#### Types

The lists in the examples above were just basic single lists, you can also have double lists where every value points to the next value and the last value, these tend to have a pointer to the end of the list too to go backwards (e.g. to get the numbers in descending order):

```c
start = 1
end = 5
value: 3, 1,  64, 2, 4, 786, 2, 9, 3
next:  8, 3,  5,  6, 7, -1,  0, 2, 4
last:  6, -1, 7,  1, 8, 2,   3, 4, 0
```

You have to be careful with these, especially when you have more than one of any value, that the last pointer points to the number who's next pointer goes straight back again, e.g this is wrong:

```c
2,  3, 3
1,  2, -1
-1, 2, 0
```

The 2's next pointer points to the 3 in slot one, but that 3's last pointer doesn't go back to the two, both lists are in order on their own (as the two threes can be either way round) but together they are wrong, the correct version would be:

```c
2,  3, 3
1,  2, -1
-1, 0, 2
```

Both of those lists start and end on the end two numbers, the back list in the wrong example started on the middle number.

The other type of list is the looping one where the last value points back to the first. The obvious advantage to this is that you can get to any value from any other value without knowing in advance whether the target is before or after the start point, you just need to be careful not to get into an infinite loop as there's no explicit -1 end point. These lists do still have start points. You can also do double looping lists where you have a next and last list, both of which loop round:

```c
start = 1
end = 5
3, 1,  64, 2, 4, 786, 2, 9, 3
8, 3,  5,  6, 7, 1,   0, 2, 4
6, 5,  7,  1, 8, 2,   3, 4, 0
```

#### Mixed lists

Mixed lists are arrays containing multiple lists at once. An example could be an array of values, sorted by a list, with another list linking all unused slots so you know where you can add a new value. Example (X means unused (free) slot):

```c
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X, 45
sort:  4,        8, 13, 7,      11, 9,  0,      -1,    5
free:      2, 6,            10,             12,     -1
```

Obviously the two lists never interact so both can use the same slot for their next value:

```c
sortedStart = 3
unusedStart = 1
value: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X,  45
next:  4,  2, 6, 8, 13, 7,  10, 11, 9,  0,  12, -1, -1, 5
```

#### Code

Before you start the code you need to decide what sort of list is best suited for your application, this is entirely based on application can't easily be covered here. All these examples are mixed lists, one list for the required values, one for unused slots.

This example shows how to write code for a list sorted numerically ascending.

```c
#define NUMBER_OF_VALUES (10)

enum E_DATA_LIST
{
    E_DATA_LIST_VALUE,
    E_DATA_LIST_NEXT
}

new
    gListData[NUMBER_OF_VALUES][E_DATA_LIST],
    gUnusedStart = 0,
    gListStart = -1; // Starts off with no list

// This function initializes the list
List_Setup()
{
    new
        i,
        size = NUMBER_OF_VALUES;
    size--;
    for (i = 0; i < size; i++)
    {
        // To start with all slots are unused
        gListData[i][E_DATA_LIST_NEXT] = i + 1;
    }
    // End the list
    gListData[size][E_DATA_LIST_NEXT] = -1;
}

// This function adds a value to the list (using basic sorting)
List_Add(value)
{
    // Check if there are free slots in the array
    if (gUnusedStart == -1) return -1;
    new
        pointer = gListStart,
        last = -1,
        slot = gUnusedStart;
    // Add the value to the array
    gListData[slot][E_DATA_LIST_VALUE] = value;
    // Update the empty list
    gUnusedStart = gListData[slot][E_DATA_LIST_NEXT];
    // Loop through the list till we get to bigger/same size number
    while (pointer != -1 && gListData[pointer][E_DATA_LIST_VALUE] < value)
    {
        // Save the position of the last value
        last = pointer;
        // Move on to the next slot
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // If we got here we ran out of values or reached a larger one
    // Check if we checked any numbers
    if (last == -1)
    {
        // The first number was bigger or there is no list
        // Either way add the new value to the start of the list
        gListData[slot][E_DATA_LIST_NEXT] = gListStart;
        gListStart = slot;
    }
    else
    {
        // Place the new value in the list
        gListData[slot][E_DATA_LIST_NEXT] = pointer;
        gListData[last][E_DATA_LIST_NEXT] = slot;
    }
    return slot;
}

// This function removes a value from a given slot in the array (returned by List_Add)
List_Remove(slot)
{
    // Is this a valid slot
    if (slot < 0 || slot >= NUMBER_OF_VALUES) return 0;
    // First find the slot before
    new
        pointer = gListStart,
        last = -1;
    while (pointer != -1 && pointer != slot)
    {
        last = pointer;
        pointer = gListData[pointer][E_DATA_LIST_NEXT];
    }
    // Did we find the slot in the list
    if (pointer == -1) return 0;
    if (last == -1)
    {
        // The value is the first in the list
        // Skip over this slot in the list
        gListStart = gListData[slot][E_DATA_LIST_NEXT];
    }
    else
    {
        // The value is in the list
        // Skip over this slot in the list
        gListData[last][E_DATA_LIST_NEXT] = gListData[slot][E_DATA_LIST_NEXT];
    }
    // Add this slot to the unused list
    // The unused list isn't in any order so this doesn't matter
    gListData[slot][E_DATA_LIST_NEXT] = gUnusedStart;
    gUnusedStart = slot;
    return 1;
}
```

### Binary Trees

#### Introduction

Binary trees are a very fast method of searching for data in an array by using a very special list system. The most well known binary tree is probably the 20 questions game, with just 20 yes/no questions you can have over 1048576 items. A binary tree, as its name implies, is a type of tree, similar to a family tree, where every item has 0, 1 or 2 children. They are not used for ordering data like a list but sorting data for very efficient searching. Basically you start with an item somewhere near the middle of the ordered list of objects (e.g. the middle number in a sorted array) and compare that to the value you want to find. If it's the same you've found your item, if it's greater you move to the item to the right (not immediately to the right, the item to the right of the middle item would be the item at the three quarter mark), if it's less you move left, then repeat the process.

**Example**

```c
1 2 5 6 7 9 12 14 17 19 23 25 28 33 38
```

You have the preceding ordered array and you want to find what slot the number 7 is in (if it's in at all), in this example it's probably more efficient to just loop straight through the array to find it but that's not the point, that method increases in time linearly with the size of the array, a binary search time increases linearly as the array increases exponentially in size. I.e. an array 128 big will take twice as long to search straight through as an array 64 big, but a binary search 128 big will only take one check more than a binary search 64 big, not a lot at all.

If we construct a binary tree from the data above we get: ![Binarytree](https://sampwiki.blast.hk/wiki/Image:Binarytree.GIF)

If you read left to right, ignoring the vertical aspect you can see that the numbers are in order. Now we can try to find the 7.

The start number is 14, 7 is less than 14 so we go to the slot pointed to by the left branch of 14. This brings us to 6, 7 is bigger than 6 so we go right to 9, then left again to 7. This method took 4 comparisons to find the number (including the final check to confirm that we are on 7), using a straight search would have taken 5.

Lets say there is no 7, we would end up with this binary tree: ![Binarytree-7-less](https://sampwiki.blast.hk/wiki/Image:Binarytree-7-less.GIF)

This, unlike the example above, has a single child number (the 9), as well as 2 and 0 child numbers. You only get a perfect tree when there are (2^n)-1 numbers (0, 1, 3, 7, 15, 31 ...), any other numbers will give a not quite full tree. In this case when we get to the 9, where the 7 will be, we'll find there is no left branch, meaning the 7 doesn't exist (it cannot possibly be anywhere else in the tree, think about it), so we return -1 for invalid slot.

#### Balanced and unbalanced

The trees in the examples above are called balanced binary trees, this means as near as possible all the branches are the same length (obviously in the second there aren't enough numbers for this to be the case but it's as near as possible). Constructing balanced trees is not easy, the generally accepted method of constructing almost balanced trees is putting the numbers in in a random order, this may mean you end up with something like this: ![Binarytree-uneven](https://sampwiki.blast.hk/wiki/Image:Binarytree-uneven.GIF)

Obviously this tree is still valid but the right side is much larger than the left, however finding 25 still only takes 7 comparisons in this compared to 12 in the straight list. Also, as long as you start with a fairly middle number the random insertion method should produce a fairly balanced tree. The worst possible thing you can do is put the numbers in in order as then there will be no left branches at all (or right branches if done the other way), however even in this worst case the binary tree will take no longer to search than the straight list.

**Modification**

#### Addition

Adding a value to a binary tree is relatively easy, you just follow the tree through, using the value you want to add as a reference untill you reach an empty branch and add the number there. E.g. if you wanted to add the number 15 to our original balanced tree it would end up on the left branch of the 17. If we wanted to add the number 8 to the second balanced tree (the one without the 7) it would end up in the 7's old slot on the left of the 9.

#### Deletion

Deleting a number from a binary tree can be hard or it can be easy. If the number is at the end of a branch (e.g. 1, 5, 7, 12 etc in the original tree) you simply remove them. If a number only has one child (e.g. the 9 in the second example) you simply move that child (e.g. the 12) up into their position (so 6's children would be 2 and 12 in the new second example with 9 removed). Deletion only gets interesting when a node has two children. There are at least four ways of doing this:

The first method is the simplest computationally. Basically you choose one of the branches (left or right, assume right for this explanation) and replace the node you've removed with the first node of that branch (i.e. the right child of the node you've removed). You then go left through the new branch till you reach the end and place the left branch there. E.g. if you removed the 14 from the original exampe you would end up with 25 taking its place at the top of the tree and 6 attached to the left branch of 17. This method is fast but ends up with very unbalanced trees very quickly.

The second method is to get all the numbers which are children of the node you just removed and rebuild a new binary tree from them, then put the top of that tree into the node you've just removed. This keeps the tree fairly well balanced but is obviously slower.

The third method is to combine the two methods above and rebuild the tree inline, this is more complex to code but keeps the tree balanced and is faster than the second method (though no-where near as fast as the first).

The final menthod listed here is to simply set a flag on a value saying it's not used any more, this is even faster than the first method and maintains the structure but means you can't re-use slots unless you can find a value to replace it with later.
