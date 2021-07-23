---
title: db_get_result_mem_handle
description: Gets the memory handle for a SQLite database result set that was allocated with `db_query`.
keywords:
  - sqlite
---

<LowercaseNote />

<VersionWarn version='SA-MP 0.3.7 R1' />

## Description

The function gets the memory handle for a SQLite database result set that was allocated with [db_query](db_query).

| Name  | Description                                                |
| ----- | ---------------------------------------------------------- |
| DB:db | The index of the query (returned by [db_query](db_query)). |

## Returns

Returns the memory handle of the database result set handle.

## Examples

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Successfully created a connection to the database
        new DBResult:result_set = db_query("SELECT * FROM `examples`");
        print("Successfully created a connection to database \"example.db\".");
        if (result_set)
        {
            printf("Database connection memory handle: 0x%x", db_get_result_mem_handle(result_set));
            db_free_result(result_set);
        }
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Close the connection to the database if connection is open
    if (db_close(gDBConnectionHandle))
    {
        // Extra cleanup
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Notes

:::warning

Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using [db_query](db_query).

:::

## Related Functions

- [db_open](db_open): Open a connection to an SQLite database
- [db_close](db_close): Close the connection to an SQLite database
- [db_query](db_query): Query an SQLite database
- [db_free_result](db_free_result): Free result memory from a db_query
- [db_num_rows](db_num_rows): Get the number of rows in a result
- [db_next_row](db_next_row): Move to the next row
- [db_num_fields](db_num_fields): Get the number of fields in a result
- [db_field_name](db_field_name): Returns the name of a field at a particular index
- [db_get_field](db_get_field): Get content of field with specified ID from current result row
- [db_get_field_assoc](db_get_field_assoc): Get content of field with specified name from current result row
- [db_get_field_int](db_get_field_int): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
- [db_get_field_float](db_get_field_float): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](db_get_field_assoc_float): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](db_get_mem_handle): Get memory handle for an SQLite database that was opened with db_open.
- [db_debug_openfiles](db_debug_openfiles): The function gets the number of open database connections for debugging purposes.
- [db_debug_openresults](db_debug_openresults): The function gets the number of open database results.
