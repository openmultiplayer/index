---
title: HTTP
description: Sends a threaded HTTP request.
tags: []
---

<VersionWarn version='SA-MP 0.3b' />

## Description

Sends a threaded HTTP request.

| Name       | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| index      | ID used to differentiate requests that are sent to the same callback (useful for playerids) |
| type       | The type of request you wish to send.                                                       |
| url[]      | The URL you want to request. (Without 'http://')                                            |
| data[]     | Any POST data you want to send with the request.                                            |
| callback[] | Name of the callback function you want to use to handle responses to this request.          |

## Returns

1 on success, 0 on failure

## Definitions

```c
// HTTP requests
#define HTTP_GET                               (1) // Sends a regular HTTP request.
#define HTTP_POST                              (2) // Sends a HTTP request with POST data.
#define HTTP_HEAD                              (3) // Sends a regular HTTP request, but ignores any response data - returning only the response code.
// HTTP error response codes
// These codes compliment ordinary HTTP response codes returned in 'response_code'
// (10x) (20x OK) (30x Moved) (40x Unauthorised) (50x Server Error)
#define HTTP_ERROR_BAD_HOST                    (1)
#define HTTP_ERROR_NO_SOCKET                   (2)
#define HTTP_ERROR_CANT_CONNECT                (3)
#define HTTP_ERROR_CANT_WRITE                  (4)
#define HTTP_ERROR_CONTENT_TOO_BIG             (5)
#define HTTP_ERROR_MALFORMED_RESPONSE          (6)
```

## Examples

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
    // In this callback "index" would normally be called "playerid" ( if you didn't get it already:) )
    new
        buffer[ 128 ];
    if (response_code == 200) //Did the request succeed?
    {
        //Yes!
        format(buffer, sizeof(buffer), "The URL replied: %s", data);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
    else
    {
        //No!
        format(buffer, sizeof(buffer), "The request failed! The response code was: %d", response_code);
        SendClientMessage(index, 0xFFFFFFFF, buffer);
    }
}
```

## Notes

:::tip

As well as the response codes listed above, there are also all of the typical HTTP responses such as 404 (Page not found), 500 (Server error) or 403 (forbidden)

:::

## Related Functions
