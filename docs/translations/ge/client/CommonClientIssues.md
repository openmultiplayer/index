---
title: Common Issues
---

## Contents

## Client

### I get the error "San Andreas cannot be found"

San Andreas Multiplayer is **not** a stand-alone program! It adds multiplayer functionality to San Andreas, and thus you need GTA San Andreas for the PC - it also needs to be **EU/US v1.0**, other versions such as v2.0 or Steam and Direct2Drive versions will not work. [Click here to download a patch to downgrade your GTA: SA version to 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### I can not see any servers in SA:MP browser

First off, ensure you are following the procedures set out in the [Quick-start guide](https://wiki.sa-mp.com/wiki/Getting_Started). If you have followed what it says, and still cannot see any servers, you must allow SA:MP access through your firewall. Unfortunately, due to the large amount of available firewall software, we can not offer further support on this - we suggest looking at the manufacturers website or trying a Google search. Also make sure you have the latest SA:MP version!

### Singleplayer loads instead of SA:MP

:::warning

You are not supposed to see the singleplayer options (new game, load game, etc) - SA:MP should load by itself and not present these options. If you see "new game", singleplayer has loaded, not San Andreas Multiplayer.

:::

Singleplayer can load for 2 reasons; you have installed SA:MP to the wrong folder or you have the wrong version of San Andreas. If you have the wrong version you can downgrade your game using the GTA San Andreas downgrader. Click [here](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) to download it.

Sometimes the single player menu will be shown, but SA:MP will in fact have loaded properly. To fix this you simply need to select an item on the menu, then hit the escape key to exit out of it. SA:MP will then proceed to load.

### I get "Unacceptable Nickname" when connecting to a server

Ensure you are not using any disallowed characters in your name (use 0-9, a-z, \[\], (), \$, @, ., \_ and = only), and that your name is no longer than 20 characters. This also could be caused when a player is on a server with the same name as you (which can happen if you reconnect to a server quickkly after timing out or crashing). A Windows server running SA:MP with an uptime greater than 50 days can sometimes cause this bug.

### Screen sticks at "Connecting to IP:Port..."

The server could be offline, or if you can't connect to any server, disable your firewall and see if it works. If it does, you will need to reconfigure your firwall. It could also be that you are running an outdated version of SA:MP - you can find new versions [here](http://sa-mp.com/download.php).

### I have a modified GTA: San Andreas and SA:MP won't load

If it won't load then remove your mods.

### When launching GTA with SA:MP it won't start

Delete the gta_sa.set file from your userfiles folder and make sure you don't have any cheats/mods.

### The game crashes when a vehicle explodes

If you have 2 monitors then there are 3 ways to solve this:

1. Disable your 2dr monitor when you play sa-mp. (Maybe not so smart if you like to have the monitor on.)
2. Set your Visual FX quality to low. (Esc > Options > Display Setup > Advanced)
3. Rename your GTA San Andreas folder (e.g. to "GTA San Andreas2") (This often works, however sometimes it may stop working again so you need to rename it to something else.)

### My mouse doesn't work after exiting the pause menu

If your mouse seems to be frozen ingame while it (partially) works in the pause menu, then you should disable the multicore option [sa-mp.cfg](/web/20190421141207/https://wiki.sa-mp.com/wiki/Sa-mp.cfg "Sa-mp.cfg") (set it to 0). Continuously tapping Escape until the mouse responds again may also work, but it is not as neat a solution.

### The file dinput8.dll is missing

This is possibly arises when DirectX is not properly installed, try re-installing it - don't forget to restart your PC. If the problem still arises, just go at C:\\Windows\\System32 and copy paste the dinput.dll file to the root directory of your GTA San Andreas. That would solve it.

### I cannot see other player's nametags!

Please be aware that some servers may have nametags globally disabled. Otherwise, this problem often occurs on computers with Intel HD integrated graphics processors (which aren't really meant for gaming, anyway). Unfortunately, the exact cause is unknown and there doesn't seem to be a universal fix available at present time either. A long term fix would be to install a dedicated graphics card in your computer, if this is possible and if your budget allows it.
