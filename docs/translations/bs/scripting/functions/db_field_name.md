---
title: db_field_name
description: Vraća ime polja u navedenom indeksu.
keywords:
  - sqlite
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Vraća ime polja u navedenom indeksu.

| Ime               | Deskripcija                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| DBResult:dbresult | Rezultat za dobivanje podataka; returnovao/vratio [db_query] (db_query). |
| field             | Indeks polja za dobivanje imena.                                         |
| result[]          | Rezultat.                                                                |
| maxlength         | Maksimalna dužina polja.                                                 |

## Returns

Returns 1 if result set handle is valid, otherwise 0.

## Primjeri

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    // ...

    // Kreiramo konekciju za databazu
    gDBConnectionHandle = db_open("example.db");

    // Ako konekcija za databazu postoji
    if (gDBConnectionHandle)
    {
        // Izaberite prvi unos u tabeli "join_log"
        new DBResult:db_result_set = db_query(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");

        // Ako je upravitelj skupa rezultata važeći
        if (db_result_set)
        {
            // Dobijte broj polja iz skupa rezultata
            new columns = db_num_fields(db_result_set);

            // Dodijelite malo memorije za pohranu imena polja
            new field_name[32];

            // Prelistajte sve indekse stupaca
            for (new column_index; index < column_index; index++)
            {
                // Pohranite ime indeksiranog imena stupca u "field_name"
                db_field_name(db_result_set, index, field_name, sizeof field_name);

                // Ispiši "field_name"
                printf("Field name at index %d: \"%s\"", index, field_name);
            }

            // Oslobađa skup rezultata
            db_free_result(db_result_set);
        }
    }
    else
    {
        // Neuspješno kreiranje konekcije do databaze
        print("Otvaranje veze s bazom podataka nije uspjelo \"example.db\".");
    }
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
