---
title: HTTP
description: Šalje navojni HTTP zahtjev.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

## Deskripcija

Šalje navojni HTTP zahtjev.

| Ime        | Deskripcija                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| index      | ID koji se koristi za razlikovanje zahtjeva koji se šalju na isti povratni poziv/callback (korisno za playids) |
| type       | Tip zahtjeva koji želite poslati.                                                                              |
| url[]      | URL koji želite zatražiti. (Bez 'http://')                                                                     |
| data[]     | Sve POST podatke koje želite poslati sa zahtjevom.                                                             |
| callback[] | Ime funkcije povratnog poziva/callbacka koju želite koristiti za obradu odgovora na ovaj zahtjev.              |

## Returns

1 pri uspjehu, 0 pri grešci

## Definicije

```c
// HTTP requests
#define HTTP_GET                               (1) // Šalje običan HTTP zahtjev.
#define HTTP_POST                              (2) // Šalje HTTP zahtjev s POST podacima.
#define HTTP_HEAD                              (3) // Šalje običan HTTP zahtjev, ali zanemaruje sve podatke o odgovoru - vraća samo kod odgovora.
// HTTP kodovi odgovora na greške
// Ovi kodovi dopunjuju uobičajene HTTP kodove odgovora vraćene u 'response_code'
// (10x) (20x OK) (30x Pomjereno) (40x Neovlašteno) (50x Server Error)
#define HTTP_ERROR_BAD_HOST                    (1)
#define HTTP_ERROR_NO_SOCKET                   (2)
#define HTTP_ERROR_CANT_CONNECT                (3)
#define HTTP_ERROR_CANT_WRITE                  (4)
#define HTTP_ERROR_CONTENT_TOO_BIG             (5)
#define HTTP_ERROR_MALFORMED_RESPONSE          (6)
```

## Primjeri

```c
forward MyHttpResponse(index, response_code, data[]);

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/hello",cmdtext,true))
    {
        HTTP(playerid, HTTP_GET, "kc.gd/hello.txt", "", "MyHttpResponse");
        return 1;
    }
    return 0;
}

public MyHttpResponse(index, response_code, data[])
{
    // U ovom povratnom pozivu "index" bi se obično zvao "playerid" (ako ga već niste dobili :))
    new
        buffer[ 128 ];
    if (response_code == 200) //Da li je zahtjev uspio?
    {
        //Da!
        format(buffer, sizeof(buffer), "URL je odgovorio: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        //Ne!
        format(buffer, sizeof(buffer), "Zahtjev nije uspio! Šifra odgovora bila je: %d", response_code);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
}
```

## Zabilješke

:::tip

Kao i gore navedeni kodovi odgovora, postoje i svi tipični HTTP odgovori kao što su 404(Stranica nije pronađena), 500(Greška servera) ili 403(zabranjena)

:::

## Srodne Funkcije
