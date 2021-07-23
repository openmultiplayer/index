---
title: ftemp
description: Creates a file in the "tmp", "temp" or root directory with random name for reading and writing.
tags: ["file management"]
---

<LowercaseNote />

## Description

Creates a file in the "tmp", "temp" or root directory with random name for reading and writing. The file is deleted after fclose() is used on the file.

## Examples

```c
// Create a temporary file stream
new File:t_handle = ftemp(),

    // Declare "handle"
    File:handle,

    // Declare "g_char"
    g_char;

// Check, if temporary file stream is open
if (t_handle)
{
    // Success

    // Open "file.txt" in "read only" mode and check, if the file is open
    if (handle = fopen("file.txt", io_read))
    {
        // Get all the characters from "file.txt"
        while((g_char = fgetchar(handle, 0, false)) != EOF)
        {
            // Write character in lowercase into the temporary file stream
            fputchar(t_handle, tolower(g_char), false);
        }

        // Close "file.txt"
        fclose(handle);

        // Set the file pointer of the temporary file stream to the first byte
        fseek(t_handle, _, seek_begin);

        // Open "file1.txt" in "write only" mode, and check, if the file is open
        if (handle = fopen("file1.txt", io_write))
        {
            // Success

            // Get all the characters from the temporary file stream
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Write character into "file1.txt"
                fputchar(handle, g_char, false);
            }

            // Close "file1.txt"
            fclose(handle);

            // Set the file pointer of the temporary file stream to the first byte
            fseek(t_handle, _, seek_begin);
        }
        else
        {
            // Error
            print("Failed to open file \"file1.txt\".");
        }

        // Open "file2.txt" in "write only" mode, and check, if the file is open
        if (handle = fopen("file2.txt", io_write))
        {
            // Success

            // Get all the characters from the temporary file stream
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // Write character into "file2.txt"
                fputchar(handle, g_char, false);
            }

            // Close "file2.txt"
            fclose(handle);
        }
        else
        {
            // Error
            print("Failed to open file \"file2.txt\".");
        }
    }
    else
    {
        // Error
        print("Failed to open file \"file.txt\".");
    }

    // Close the temporary file stream
    fclose(t_handle);
}
else
{
    // Error
    print("Failed to create a temporary file stream.");
}
```

## Notes

:::warning

This function can crash the server when the right directory isn't created.

:::

## Related Functions

- [fopen](fopen): Open a file.
- [fclose](fclose): Close a file.
- [fremove](fremove): Remove a file.
- [fwrite](fwrite): Write to a file.
- [fread](fread): Read a file.
- [fputchar](fputchar): Put a character in a file.
- [fgetchar](fgetchar): Get a character from a file.
- [fblockwrite](fblockwrite): Write blocks of data into a file.
- [fblockread](fblockread): Read blocks of data from a file.
- [fseek](fseek): Jump to a specific character in a file.
- [flength](flength): Get the file length.
- [fexist](fexist): Check, if a file exists.
- [fmatch](fmatch): Check, if patterns with a file name matches.
