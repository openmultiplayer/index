---
title: RedirectDownload
description: Preusmjerite preuzimanje prilagođenog AddCharModel ili AddSimpleModel uređaja na određenu HTTP web stranicu.
tags: []
---

:::note

This function was added in SA-MP 0.3.DL R1 and neće raditi u ranijim verzijama!

:::

## Deskripcija

Preusmjerite preuzimanje prilagođenog AddCharModel ili AddSimpleModel uređaja na određenu HTTP web stranicu.

## Parameters

| Ime      | Deskripcija                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | ID igrača koji je zatražio preuzimanje prilagođenih modela. |
| url[]    | URL za preusmjeravanje preuzimanja.                         |

## Return Values

- 1: Funkcija uspješno izvršena.
- 0: Funkcija neuspješno izvršena.

## Primjer upotrebe iz dl_redirect filterskripte

```c
new baseurl[] = "https://files.sa-mp.com/server";

public OnPlayerRequestDownload(playerid, type, crc)
{
    if (!IsPlayerConnected(playerid))
    {
        return 0;
    }

    new
        fullURL[256],
        fileName[64],
        foundFileName = 0;

    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)
    {
        foundFileName = FindTextureFileNameFromCRC(crc, fileName, sizeof fileName);
    }
    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)
    {
        foundFileName = FindModelFileNameFromCRC(crc, fileName, sizeof fileName);
    }

    if (foundFileName)
    {
        format(fullURL, sizeof fullURL, "%s/%s", baseurl, fileName);
        RedirectDownload(playerid, fullURL);
    }

    return 0;
}
```

## Srodne Funkcije

- [AddCharModel](AddCharModel): Dodaje novi prilagođeni model za preuzeti.
- [AddSimpleModel](AddSimpleModel): Dodaje novi prilagođeni model objekta za preuzeti.
- [AddSimpleModelTimed](AddSimpleModelTimed): Dodaje novi prilagođeni model objekta za preuzeti.
- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Pozvano kada igrač dovrši preuzimanje prilagođenih modela.
