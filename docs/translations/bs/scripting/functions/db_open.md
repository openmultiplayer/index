---
title: db_open
description: Funkcija se koristi za otvaranje veze s datotekom baze podataka SQLite, koja se nalazi u folderu `/scriptfiles`.
keywords:
  - sqlite
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Funkcija se koristi za otvaranje veze s datotekom baze podataka SQLite, koja se nalazi u folderu `/scriptfiles`.

| Ime   | Deskripcija           |
| ----- | --------------------- |
| Ime[] | Ime datoteke databaze |

## Returns

Returna/vraća indeks (počinje sa 1) konekecije databaze.

## Primjeri

```c
static DB:gDBConnectionHandle;

// ...

public OnGameModeInit()
{
    // ...

    // Kreiramo konekciju za databazu
    gDBConnectionHandle = db_open("example.db");

    // Ako konekcija za databazu postoji
    if (gDBConnectionHandle)
    {
        // Uspješno kreirana konekcija do databaze
        print("Uspješno stvorena veza s bazom podataka \"example.db\".");
    }
    else
    {
        // Neuspješno kreirana konekcija do databaze
        print("Otvaranje veze s bazom podataka nije uspjelo \"example.db\".");
    }

    // ...

    return 1;
}

public OnGameModeExit()
{
    // Zatvori konekciju sa databazom ako je otvorena
    if (db_close(gDBConnectionHandle))
    {
        // Dodatno čišćenje
        gDBConnectionHandle = DB:0;
    }

    // ...

    return 1;
}
```

## Zabilješke

:::warning

Stvorit će novu datoteku baze podataka SQLite, ako ne postoji datoteka baze podataka SQLite s istim imenom datoteke. Zatvorite vezu SQLite baze podataka pomoću [db_close](db_close)!

:::

## Srodne Funkcije

- [db_close](b_close): Zatvori konekciju do SQLite databaze.
- [db_query](db_query): Upitajte SQLite bazu podataka.
- [db_free_result](db_free_result): Oslobodite memoriju rezultata iz db_query.
- [db_num_rows](db_num_rows): Dobijte broj redaka u rezultatu.
- [db_next_row](db_next_row): Pređi na sljedeći red.
- [db_num_fields](db_num_fields): Dobij broj polja u rezultatu.
- [db_field_name](db_field_name): Return/vraća ime polja na posebnom indexu.
- [db_get_field](db_get_field): Preuzmite sadržaj polja iz db_query.
- [db_get_field_assoc](db_get_field_assoc): Dobij sadržaj polja kao string s navedenim imenom polja.
- [db_get_field_int](db_get_field_int): Dobijte sadržaj polja kao cijeli broj iz db_query.
- [db_get_field_assoc_int](db_get_field_assoc_int): Dobijte sadržaj polja kao cijeli broj s navedenim imenom iz trenutnog reda rezultata.
- [db_get_field_float](db_get_field_float): Dobijte sadržaj polja kao float broj s navedenim imenom iz trenutnog reda rezultata.
- [db_get_field_assoc_float](db_get_field_assoc_float): Dobij sadržaj polja kao float broj s navedenim imenom polja.
- [db_get_mem_handle](db_get_mem_handle): Dobij memorijski upravitelj za vezu SQLite databaze koja je otvorena s `db_open`.
- [db_get_result_mem_handle](db_get_result_mem_handle): Dobiva memorijski upravitelj za vezu SQLite databaze koja je dodijeljena sa s `db_query`.
- [db_debug_openfiles](db_debug_openfiles): Dobiva broj otvorenih konekcija/veza databaza u svrhu otklanjanja pogrešaka.
- [db_debug_openresults](db_debug_openresults): Dobiva broj rezultata otvorene databaze.
