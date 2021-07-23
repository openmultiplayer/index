---
title: db_field_name
description: Returns the name of the field at the specified index.
keywords:
  - sqlite
---

<LowercaseNote />

## Description

Returns the name of a field at a particular index.

| Name              | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| DBResult:dbresult | The result to get the data from; returned by [db_query](db_query). |
| field             | The index of the field to get the name of.                         |
| result[]          | The result.                                                        |
| maxlength         | The max length of the field.                                       |

## Returns

Returns 1 if result set handle is valid, otherwise 0.

## Examples

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // Create a connection to a database
    gDBConnectionHandle = db_open("example.db");

    // If connection to the database exists
    if (gDBConnectionHandle)
    {
        // Select first entry in table "join_log"
        new DBResult:db_result_set = db_query(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // If result set handle is valid
        if (db_result_set)
        {
            // Get the number of fields from result set
            new columns = db_num_fields(db_result_set);

            // Allocate some memory for storing field names
            new field_name[32];

            // Iterate through all column indices
            for (new column_index; index < column_index; index++)
            {
                // Store the name of the i indexed column name into "field_name"
                db_field_name(db_result_set, index, field_name, sizeof field_name);

                // Print "field_name"
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            // Frees the result set
            db_free_result(db_result_set);
        }
    }
    else
    {
        // Failed to create a connection to the database
        print("Failed to open a connection to database \"example.db\".");
    }
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
- [db_get_field](db_get_field): Get content of field with specified ID from current result row
- [db_get_field_assoc](db_get_field_assoc): Get content of field with specified name from current result row
- [db_get_field_int](db_get_field_int): Get content of field as an integer with specified ID from current result row
- [db_get_field_assoc_int](db_get_field_assoc_int): Get content of field as an integer with specified name from current result row
- [db_get_field_float](db_get_field_float): Get content of field as a float with specified ID from current result row
- [db_get_field_assoc_float](db_get_field_assoc_float): Get content of field as a float with specified name from current result row
- [db_get_mem_handle](db_get_mem_handle): Get memory handle for an SQLite database that was opened with db_open.
- [db_get_result_mem_handle](db_get_result_mem_handle): Get memory handle for an SQLite query that was executed with db_query.
- [db_debug_openfiles](db_debug_openfiles): The function gets the number of open database connections for debugging purposes.
- [db_debug_openresults](db_debug_openresults): The function gets the number of open database results.
