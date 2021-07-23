---
title: Connection status
description: Connection status to be used with NetStats_ConnectionStatus.
---

## Description

Connection status to be used with [NetStats_ConnectionStatus](../functions/NetStats_ConnectionStatus).

## Often used

| ID  | State                                     | Meaning                                                                                                      |
| --- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 0   | NO_ACTION                                 | unknown                                                                                                      |
| 1   | DISCONNECT_ASAP                           | playerid still exists but [OnPlayerDisconnect](../callbacks/OnPlayerDisconnect) have already been called. |
| 2   | DISCONNECT_ASAP_SILENTLY                  | unknown                                                                                                      |
| 3   | DISCONNECT_ON_NO_ACK                      | unknown                                                                                                      |
| 4   | REQUESTED_CONNECTION                      | connection request "cookie" has been sent for this ID                                                        |
| 5   | HANDLING_CONNECTION_REQUEST               | unknown                                                                                                      |
| 6   | UNVERIFIED_SENDER                         | unknown                                                                                                      |
| 7   | SET_ENCRYPTION_ON_MULTIPLE_16_BYTE_PACKET | unknown                                                                                                      |
| 8   | CONNECTED                                 | playerid is connected to the server                                                                          |
