---
title: Common Issues
---

## Server instantly crashes when started

Most commonly it's an error in your server.cfg file or your gamemode is missing. Check the server_log.txt file and the reason should be located at the bottom. If not, check crashinfo.txt file. The better solution to find out what is causing the crash is using the Crash detect plugin by Zeex/0x5A656578 [click for link](http://forum.sa-mp.com/showthread.php?t=262796 "http://forum.sa-mp.com/showthread.php?t=262796") which will give more information like line numbers, function names, parameter values, etc. If the script is compiled in debug mode (-d3 flag) to make compiler put extra information about all that stuff into the output .amx.

## Server is not working - firewall is disabled

You will need to forward your ports to allow players to join your server. You can forward your ports using the PF Port Checker. Download it from: www.portforward.com If the ports are not forwarded that means you have to open them in your router. You can check the router list at [http://portforward.com/english/routers/port_forwarding/routerindex.htm](http://portforward.com/english/routers/port_forwarding/routerindex.htm "http://portforward.com/english/routers/port_forwarding/routerindex.htm")

It has all the information on how to forward ports.

## 'Packet was modified'

The error commonly shown as:

```
[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>
```

happens when a player times out or is currently having connection issues.

## 'Warning: client exceeded messageslimit'

The error commonly shown as:

```
Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec
```

happens when number of messages per second a client sends to the server exceeds.

## 'Warning: client exceeded ackslimit'

The error commonly shown as:

```
Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec
```

happens when acks limit exceeds.

## 'Warning: client exceeded messageholelimit'

The error commonly shown as:

```
Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x
```

happens when message hole limit exceeds.

## 'Warning: Too many out-of-order messages'

The error commonly shown as:

```
Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)
```

Happens when 'out of order messages' reuses messageholelimit setting.

For more information about this, refer to [this](http://wiki.sa-mp.com/wiki/Controlling_Your_Server#RCON_Commands)

## Players constantly getting "Unacceptable NickName" error but it is valid

If you are sure you use an acceptable name and the server runs on Windows then try to change the compatibility option of the samp-server.exe to Windows 98 and it should be fixed after a server restart.

Windows servers with high up time may also cause this issue to occur. This has been noticed of around 50 days of server up time. To resolve it, a reboot is required.

## `MSVCR___.dll`/`MSVCP___.dll` not found

This problem regularly occurs on Windows servers when trying to load a plugin that was developed using a higher version of the Visual C++ runtime than is currently installed on your computer. To fix this, download the appropriate Microsoft Visual C++ runtime libraries. Note that the SA-MP server is 32 bit, therefore you'll also need to download the 32 bit (x86) version of the runtime, regardless of architecture. The version of the runtime you specifically require is denoted by the numbers in the filename (see the table below), although it does not hurt to install all of them. These libraries do not stack, or in other words: you won't get the runtimes for the 2013 and earlier versions if you only install the 2015 version.

| Version number | Runtime                                       |
| -------------- | --------------------------------------------- |
| 10.0           | Microsoft Visual C++ 2010 x86 Redistributable |
| 11.0           | Microsoft Visual C++ 2012 x86 Redistributable |
| 12.0           | Microsoft Visual C++ 2013 x86 Redistributable |
| 14.0           | Microsoft Visual C++ 2015 x86 Redistributable |
