---
title: SHA256_PassHash
description: Hashes a password using the SHA-256 hashing algorithm.
tags: ["encryption"]
---

<VersionWarn version='SA-MP 0.3.7 R1' />

## Description

Hashes a password using the SHA-256 hashing algorithm. Includes a salt. The output is always 256 bits in length, or the equivalent of 64 Pawn cells.

| Name         | Description                                        |
| ------------ | -------------------------------------------------- |
| password[]   | The password to hash.                              |
| salt[]       | The salt to use in the hash.                       |
| ret_hash[]   | The returned hash in uppercase hexadecimal digest. |
| ret_hash_len | The returned hash maximum length.                  |

## Returns

The hash is stored in the specified array.

## Examples

```c
public OnGameModeInit()
{
    new MyHash[64 + 1]; // + 1 to account for the required null terminator
    SHA256_PassHash("test", "78sdjs86d2h", MyHash, sizeof MyHash);
    printf("Returned hash: %s", MyHash); // Returned hash: CD16A1C8BF5792B48142FF6B67C9CB5B1BDC7260D8D11AFBA6BCDE0933A3C0AF
    return 1;
}
```

## Notes

:::tip

The returned hash has zero padding (i.e. possible prefix 00ABCD123...).

:::

:::tip

The salt is appended to the end of the password, meaning password 'foo' and salt 'bar' would form 'foobar'. The salt should be random, unique for each player and at least as long as the hashed password. It is to be stored alongside the actual hash in the player's account.

:::

:::warning

This function is not binary-safe. Using binary values on password and salt might give unexpected result.

:::

## Related Functions
