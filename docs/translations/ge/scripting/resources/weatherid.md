---
title: Weather IDs
---

To be used with [SetWeather](../functions/SetWeather) and [SetPlayerWeather](../functions/SetPlayerWeather).

```c
0 = EXTRASUNNY_LA
1 = SUNNY_LA
2 = EXTRASUNNY_SMOG_LA
3 = SUNNY_SMOG_LA
4 = CLOUDY_LA
5 = SUNNY_SF
6 = EXTRASUNNY_SF
7 = CLOUDY_SF
8 = RAINY_SF
9 = FOGGY_SF
10 = SUNNY_VEGAS
11 = EXTRASUNNY_VEGAS (heat waves)
12 = CLOUDY_VEGAS
13 = EXTRASUNNY_COUNTRYSIDE
14 = SUNNY_COUNTRYSIDE
15 = CLOUDY_COUNTRYSIDE
16 = RAINY_COUNTRYSIDE
17 = EXTRASUNNY_DESERT
18 = SUNNY_DESERT
19 = SANDSTORM_DESERT
20 = UNDERWATER (greenish, foggy)
```

There are 21 different weather IDs (0-20), however the game does not feature any range checking for weather IDs and thus you can use weather IDs upto 255. Values higher than 255 or lower than 0 are turned into remainder of the division by 256 (for example, weather ID 300 is the same as ID 44, because 300 % 256 = 44). Weather IDs 0-22 appear to work correctly but other IDs result in strange effects such as pink sky and flashing textures during certain times.

:::note

- Some weathers appear very different at certain times. You can see [here](http://hotmist.ddo.jp/id/weatherhtml) what different weather types look like at different times.

- [GTA San Andreas weather gallery](https://dev.prineside.com/en/gtasa_weather_id/) explains the situation with weather IDs better than any words. You can also use it if you wish to view weathers at certain times and look for problematic weather that cause strange effects

:::
