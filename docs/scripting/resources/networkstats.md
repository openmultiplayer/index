---
title: Network Stats
description: Information seen when holding down F5 when connected to a server.
tags: []
---

| Data                                                     | **Description**                                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Download Rate                                            | The rate at which data is being downloaded from the server.                          |
| Upload Rate                                              | The rate at which data is being uploaded to the server.                              |
| Vehicles                                                 | The number of vehicles that are streamed in for the client.                          |
| Vehicle Models                                           | The number of different vehicle models that are streamed in for the client.          |
| Vehicle Models Loaded                                    | The number of (pre-)loaded vehicle models.                                           |
| RWObjects                                                | Number of rendered objects.                                                          |
| PedSlotsUsed                                             | Number of ped slots used (NPCs/players use a 'ped' slot).                            |
| ObjectSlotsUsed                                          | Object slots used.                                                                   |
| OnFoot Send Rate                                         | The rate (in MS) at which on-foot data is being synced. Can be set in server.cfg.    |
| Streaming Mem (Memory) Used (Also shows total allowance) | The amount of streaming memory being used, and total available.                      |
| Messages in Send buffer                                  | The number of network messages waiting to be sent.                                   |
| Messages sent                                            | The number of network messages sent.                                                 |
| Btyes sent                                               | The amount of data (in bytes) sent.                                                  |
| Acks sent                                                | The number of acks sent (acknowledge receipt of a packet).                           |
| Acks in send buffer                                      | Number of acks waiting to be sent (acknowledge receipt of a packet).                 |
| Messages waiting for ack                                 | Number of messages that are waiting to be acknowledged as received.                  |
| Messages resent                                          | Number of messages resent after a lack of acknowledge. Client is trying to reconnect after 109 messages resent.|
| Bytes resent                                             | The amount of data resent (in bytes).                                                |
| Packetloss                                               | The percentage of packets that were sent but never received by the other end (lost). |
| Messages received                                        | The number of network messages received from the server.                             |
| Bytes received                                           | The amount of data received (in bytes).                                              |
| Acks received                                            | Number of acks received (acknowledge receipt of a packet).                           |
| Duplicate acks received                                  | Number of duplicate (already received) acks received.                                |
