---
title: db_get_field_assoc_float
description: Dobiva sadržaj polja kao float broj s navedenim imenom polja.
keywords:
  - sqlite
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobiva sadržaj polja kao float broj s navedenim imenom polja.

| Ime               | Deskripcija                               |
| ----------------- | ----------------------------------------- |
| DBResult:dbresult | Rezultat iz kojeg se mogu dobiti podaci.  |
| field[]           | Naziv polja iz kojeg ćete dobiti podatke. |

## Returns

Dohvaćena vrijednost kao float broj.

## Example

```c
// examples.inc

// ...

Float:Examples_CalculateSum(DB:dbConnectionHandle)
{
    // Vrijednost varijable s povratom
    new Float:ret;

    // Skup rezultata rezultata baze podataka
    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");

    // Ako je zbir rezultata rezultata baze podataka valjan
    if (db_result_set)
    {
        // Radi operacije
        do
        {
            // Dodajte vrijednost iz polja "primjer" u varijablu povratne vrijednosti
            ret += db_get_field_assoc_float(db_result_set, "value");
        }

        // Dok bi se mogao preuzeti sljedeći red
        while (db_next_row(db_result_set));

        // Oslobodi rezultat
        db_free_result(db_result_set);
    }

    // Vrati izračunati zbroj
    return ret;
}
```

```c
// mode.pwn

// ...

#include <examples>

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
        printf("Izracunata suma: %f", Examples_CalculateSum(gDBConnectionHandle));
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

Upotreba nevaljanog upravitelja databaze koja nije nula srušit će vaš server! Nabavite važeći upravitelj databazom pomoću [db_open] (db_open).

:::

## Srodne Funkcije

- [db_open](db_open): Otvori konekciju do SQLite databaze.
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
- [db_get_mem_handle](db_get_mem_handle): Dobij memorijski upravitelj za vezu SQLite databaze koja je otvorena s `db_open`.
- [db_get_result_mem_handle](db_get_result_mem_handle): Dobiva memorijski upravitelj za vezu SQLite databaze koja je dodijeljena sa s `db_query`.
- [db_debug_openfiles](db_debug_openfiles): Dobiva broj otvorenih konekcija/veza databaza u svrhu otklanjanja pogrešaka.
- [db_debug_openresults](db_debug_openresults): Dobiva broj rezultata otvorene databaze.
