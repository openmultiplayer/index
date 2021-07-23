---
title: "Controlling a Server"
descripion: Useful commands for controlling a server.
---

## Changing Gamemode

### Running a custom/downloaded gamemode

- Open the directory you installed the server to (eg: /Rockstar Games/GTA San Andreas/server)
- Take the downloaded/compiled .amx file and place it in the gamemodes folder where you installed the server
- Use RCON to change the mode as described above (2.1)
- Alternatively you can add the new mode to a rotation, also described above (2.3)

### Using Filterscripts

The same as running a custom gamemode, except:

- Place the .amx in a folder called `filterscripts`
- Add the following to server.cfg: `filterscripts <scriptname>`

## Passwording your server

- If you want to add a password so only your friends can join, add this to [server.cfg](server.cfg):

```
password whatever
```

- This will make your server password-protected with the password set as 'whatever' - change it to whatever you want.
- You can also change the password while ingame by using `/rcon password newpasswordhere`
- You can remove the password by using `/rcon password 0`, or by restarting the server.

## Using RCON

### Logging In

You can log in either while ingame by typing `/rcon login password` or out of game by using the RCON mode in the [Remote Console](RemoteConsole).

The password is the same as what you set it as in [server.cfg](server.cfg)

### Adding Bans

##### samp.ban

samp.ban is the file used for storing bans, including the following information about the ban:

- IP
- Date
- Time
- Name (Name of person or a reason, see [BanEx](../../functions/BanEx))
- Type of ban

To add a ban, simply add a line like so:

```
IP_HERE [28/05/09 | 13:37:00] PLAYER - BAN REASON
```

Where `IP_HERE` is, is where you put the IP you would like to ban.

##### Ban() function

The [Ban](../scripting/functions/Ban) function can be used to ban a player from a script. The [BanEx](../scripting/functions/BanEx) function will add an optional reason like so:

```
13.37.13.37 [28/05/09 | 13:37:00] Cheater - INGAME BAN
```

##### RCON ban command

The RCON ban command, executed by typing /rcon ban in-game or typing "ban" in the console, is used to ban a specific player that is on your server, to ban an IP see the next section.

Simply type:

```
# Ingame:
/rcon ban PLAYERID

# Console:
ban PLAYERID
```

##### banip

The RCON banip command, executed by typing /rcon banip in-game or typing "banip" in the console, is used to ban a specific IP address, to ban a player on your server by ID, see the previous section. Will accept wildcards for rangebans.

Simply type:

```
# Ingame:
/rcon banip IP

# Console:
banip IP
```

### Removing Bans

Once somebody is banned, there are two ways to unban them.

- Remove from samp.ban
- The RCON `unbanip` command

#### samp.ban

samp.ban can be found in your sa-mp server directory, it contains lines with the following information about each ban:

- IP
- Date
- Time
- Name (Name of person or a reason (see [BanEx](../scripting/functions/BanEx)))
- Type of ban (INGAME, IP BAN etc,)

Examples:

```
127.8.57.32 [13/06/09 | 69:69:69] NONE - IP BAN
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

To unban them, simply remove the line, then execute the RCON reloadbans command to make the server re-read samp.ban.

#### unbanip

The RCON unbanip command can be used in-game or from the server console (black box). To unban an ip, simply type `/rcon unbanip IP_HERE` in-game or `unbanip IP_HERE` in the console.

Example:

```
13.37.13.37 [28/05/09 | 13:37:00] Kyeman - INGAME BAN
```

```
# Ingame:
/rcon unbanip 13.37.13.37

# Console
unbanip 13.37.13.37
```

To unban them, simply use the `unbanip` command, then execute the RCON `reloadbans` command to make the server re-read samp.ban.

#### reloadbans

`samp.ban` is a file that holds the information for the IP's that are currently banned from the server. This file is read when the server is started, so if you unban an IP/person you MUST type the RCON `reloadbans` command to make the server read `samp.ban` again and allow them to join the server.

### RCON Commands

Type cmdlist for commands (or, varlist for variables) making use of the RCON in-game (`/rcon cmdlist`).

These are the functions that you as admin can use:

| Command                           | Description                                                                                                                                           |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/rcon cmdlist`                   | Shows a list with commands.                                                                                                                           |
| `/rcon varlist`                   | Shows a list with the current variables.                                                                                                              |
| `/rcon exit`                      | Closes the server.                                                                                                                                    |
| `/rcon echo [text]`               | Shows the `[text]` in the console of the server (NOT the client-console in-game).                                                                     |
| `/rcon hostname [name]`           | change the hostname text (_example: /rcon hostname my server_).                                                                                       |
| `/rcon gamemodetext [name]`       | change the gamemode text (_example: /rcon gamemodetext my gamemode_).                                                                                 |
| `/rcon mapname [name]`            | change the map name text (_example: /rcon mapname San Andreas_).                                                                                      |
| `/rcon exec [filename]`           | Executes the file which contains server cfg (_example: /rcon exec blah.cfg_).                                                                         |
| `/rcon kick [ID]`                 | Kick the player with the given ID (_example: /rcon kick 2_).                                                                                          |
| `/rcon ban [ID]`                  | Ban the player with the given ID (_example: /rcon ban 2_).                                                                                            |
| `/rcon changemode [mode]`         | This command will change the current gamemode to the given one (_example: if you want to play sftdm: /rcon changemode sftdm_).                        |
| `/rcon gmx`                       | Will load the next gamemode in [server.cfg](server.cfg).                                                                                              |
| `/rcon reloadbans`                | Reloads the `samp.ban` file where the banned IP addresses are stored. Should be used after unbanning and IP address.                                  |
| `/rcon reloadlog`                 | Reloads the `server_log.txt`. Useful for automatic log rotation. Can be triggered by sending the `SIGUSR1` signal to the server (Linux server only).  |
| `/rcon say`                       | shows a message to the players in the client-console (example: `/rcon say hello` will show as `Admin: hello`).                                        |
| `/rcon players`                   | Shows the players that are in the server (with their name, IP & ping).                                                                                |
| `/rcon banip [IP]`                | Ban the given IP (_example: /rcon banip 127.0.0.1_).                                                                                                  |
| `/rcon unbanip [IP]`              | Unban the given IP (_example: /rcon unbanip 127.0.0.1_).                                                                                              |
| `/rcon gravity`                   | Changes the gravity (_example: /rcon gravity 0.008_).                                                                                                 |
| `/rcon weather [ID]`              | Changes the weather (_example: /rcon weather 1_).                                                                                                     |
| `/rcon loadfs`                    | Loads the given filterscript (_example: /rcon loadfs adminfs_).                                                                                       |
| `/rcon weburl [server url]`       | Changes the server URL in the masterlists/SA-MP client                                                                                                |
| `/rcon unloadfs`                  | Unload the given filterscript (_example: /rcon unloadfs adminfs_).                                                                                    |
| `/rcon reloadfs`                  | Reloads the given filterscript (_example: /rcon reloadfs adminfs_).                                                                                   |
| `/rcon rcon\_password [PASSWORD]` | Change the rcon's password                                                                                                                            |
| `/rcon password [password]`       | Sets/resets the server password                                                                                                                       |

**The following commands are only available in 0.3z R2 and above**:

| Command                           | Description                                                                                          |
| --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `/rcon messageslimit [count]`     | Change the number of messages per second a client sends to the server. (default 500)                 |
| `/rcon ackslimit [count]`         | Change the limit of acks (default 1000) (Since 0.3z R2-2, default limit is 3000)                     |
| `/rcon messageholelimit [count]`  | Change the limit of message holes (Also available in 0.3z R1) (default 3000)                         |
| `/rcon playertimeout [limit m/s]` | Change the time in milliseconds until a player timeouts when not sending any packets. (default 1000) |
| `/rcon language [language]`       | Change the server language (_example: /rcon language English_). Shown in server browser.             |

The above four limits/counts are just made to avoid several tools which can attack any SA-MP server by freezing it or crashing. So, simply, just set them according to your server. The default values are default, if you see any wrong kicks, just increase the values as soon as possible so that the innocent players won't get kicked by it. [Read more here](https://web.archive.org/web/20190426141744/http://forum.sa-mp.com/showpost.php?p=2990193&postcount=47)/

### Related Callbacks and Functions

The following callbacks and functions might be useful, as they're related to this article in one way or another.

#### Callbacks

- [OnRconLoginAttempt](../scripting/callbacks/OnRconLoginAttempt): Called when an attempt to login to RCON is made.

#### Functions

- [IsPlayerAdmin](../scripting/functions/IsPlayerAdmin): Checks if a player is logged into RCON.

- [SendRconCommand](../scripting/functions/SendRconCommand): Sends an RCON command via the script.
