---
title: Plugin Development Guide
description: A guide to developing plugins
---

## Introduction

I decided to create this topic to address issues and questions that are frequently asked about plugin development. I'm no where near an expert when it comes to C/++, or the plugin SDK, i am simply sharing what i have come to learn over my time of developing plugins. Hopefully once this topic is done it will become more of a group project with other users contributing information that i might not know, or have forgotten to include. This is a pretty big topic to try and cover, so i will need assistance.

## This is not a C/++ help forum

People seem to be very confused when it comes to this post. I've seen a lot of people ask completely valid questions regarding the plugin SDK who end up with multiple "This is not a C/++ help forum!" quotes. Just because someone is expected to know the languages **doesn't** mean they're not allowed to ask questions about the actual SDK! There is a difference between asking what a pointer is, and asking something like how to create callbacks!

With that being said there are excellent sites and forums dedicated to teaching and answering questions about C/++. Here are a few that i have used:

These sites have excellent tutorials to learn from:

cprogramming.com

cplusplus.com

learncpp.com

If you get stuck on a C/++ issue you can use one of these forums to ask for assistance:

dreamincode.net

stackoverflow.com

## FAQ

### Quick Questions

**Question:** How are plugins made?

- **Answer:** Plugins are made in C/++ using the plugin SDK. This FAQ assumes you know C/++ already, and will provide some information on the actual SDK later on in the article.

**Question:** Can i create a plugin in a programming language other than C/++?

- **Answer:** It's possible in theory. There have been attempts at porting the SA-MP plugin SDK to the programming language D, which supports C's application binary interface. While I've never seen a fully working plugin written in D, this example has shed light on the possibility of writing plugins in languages that support C/++. There also has been talk about the possibility of bindings, but i've yet to see any backing on this.

**Question:** How can i get my plugin to be multiplatform (Available on linux and windows)?

- Answer: Linux and windows are two different operating systems which both have their own differing API's and implementations. Getting your code to work on both platforms means you have to use platform independent code or a sort of framework that handles everything having to do with platforms FOR you. After you're sure your code doesn't rely on any one API, you simply have to compile your code in your desired environment (once again, this guide assumes you know how to do this).

**Question:** Can my plugin use memory hacking?

- Answer: To be honest this is a sort of grey area. Using memory hacking to hook callbacks or call functions seems to be completely acceptable. Anything that modifies the servers memory seems to be off limits (See This). If your planing on making a plugin that needs to use memory hacking for anything other callback hooking or function calling, ask permission before hand and get approval before posting; That honestly is the best way to find out!

**Question:** Is it possible to make a plugin that **\_\_\_\_\_\_** ?

- **Answer:** In most cases any idea is completely possible to implement. It may require a stand alone application that communicates to the plugin, but its likely possible. Questions like these should **not** be posted. You heard the answer, now move on! This is not a plugin request section. Hopefully there will be a day when there is enough plugin creators to have a section or sticky topic for requests (This guide is designed to introduce and help new plugin developers, so lets hope).

**Question:** What IDE/Compiler should i use for **\_\_\_\_\_\_** ?

- **Answer:** That is completely up to you! I personally will be using VC++ 2010 express as my windows IDE and Compiler, and plan on using g++ for my Linux compiler. Just mess around with different options and see which one you like the best!

**Question:** What is a module definition file (.def)?

- **Answer:** A module definition file is a special file in the Visual Studio IDE that provides the linker with information about the program that's being linked. When it comes to writing plugins for SA-MP we only really use the "EXPORTS" statement which provides information about our exported functions. We'll be looking at this statement later in the article.

**Question:** When i release a plugin, does it have to have the source with it?

- **Answer:** If you're releasing something on this forum it **always** has to have the source with it. Plugins are no exception (unless the plugin is approved by a developer to be posted without a source - maybe an anti-cheat?).

## Getting started

You would be shocked how many times i get asked "How do i get started with plugin development?". I decided to add this entire section to answer that question! Just because you know the language doesn't mean you know your way around the IDE after all; I think that's especially true when it comes to VC++ 2010. Visual studio can be a very intimidating place to new users. I hardly think its fair to just hand you the plugin SDK without showing you around first! Messing with property pages/the linker can easily scare people away, so I'm going to guide you through it.

**Note:** If you chose to use a different IDE/compiler that targets Windows, you're out of luck! It seems that the only way to successfully export functions is to use a module definition file (.DEF). I've tried to include an alternative method in this article using \_\_declspec(dllexport), but this simply didn't work due to the \_\_stdcall calling convention mangling the exported function's names (See: [Here](https://pastebin.com/y3xkVY70)).

Here are the downloads you'll need for this section:

**Visual C++ 2010 express:** [Free download](https://visualstudio.microsoft.com/vs/express/)

**Plugin SDK (Plain):** [Download](https://github.com/Zeex/samp-plugin-sdk)

- The first thing we want to do is create a new project. Select file->new->project to do just that.

- Once you create a new project its going to ask you what type of project you're creating. Select Win32 project, enter a project name, and press OK to continue.

- Once your project setting are taken care of this dialog should appear. Press next to continue.
- After you clicked continue you should see this dialog popup asking for your application type and settings. For the type select DLL (Dynamic-link library) and for the settings select empty project. Once you're done press the finish button at the bottom.

- The next thing we want to do is go to our solution explorer. The solution explorer is normally on the left side of the IDE. If you accidentally disabled it you can enable it once again by pressing CTRL+ALT+L or by selecting view->other windows->solution explorer. Once you find the solution explorer right click the project name (In this example its "Test") and select properties.

- Once you see the property pages navigate to Configuration properties->Linker->Input on the left side. Once you're there you want to add a module definition file. You can name this file anything you like as long as it has a ".def" extension at the end of it; People normally name def files after their project. Once you've named your definition file press OK.

- Now all we have to do is add our files (this includes our definition file!). To add a file to your project navigate to the solution explorer again, right click the project name, click add, and then select new item. In this example we'll be adding our definition file. Since there isnt an option for definition files, just pick a source file (.cpp) and type the name of the module definition file you decided on (Note: Make sure you include the ".def" extension, other wise a ".cpp" extension will be added!). After this is done add a source file for the project the same way (except dont add an extension). Most people use the name "Main" for there main source file.

- Before we can start adding anything to our two currently empty files, we have to actually add the SDK to the project. If you haven't already, download the SDK from the link that was provided in the beginning of this section. Once its downloaded, extract the SDK folder into your current project's directory. Note This part is optional: I personally like to create filters to organize all our files and code. A filter is an organizational tool in visual studio that creates folders in your project, but doesn't create corresponding Windows folders (its recommended to create matching window folders). To create a filter right click your project in the solution explorer->add->New Filter and select a name for your filter (Name it SDK in this case).

- The next step is to add all the SDK files to our current project. To add existing files to a project simply right click the folder or project you wish to add them to and select add -> Existing item. You'll want to add everything that is inside the SDK folder in your project directory (Note: You can select multiple files by holding Ctrl while clicking the files to add). For folder consistency we're gonna create another filter inside the SDK filter, and name it amx. You'll of course want to add all the contents of the SDK\amx\ folder into the amx filter.

Now it's time to get this plugin compiled! You should have a module definition file and a source file open if you followed the instructions correctly; If not, go back a few steps and follow the instructions carefully. Go ahead and copy and paste the following information into their corresponding files. Don't worry if you don't understand any of it, we'll be addressing it all in the next section.

### Source file (\*.cpp)

```cpp
#include "SDK\amx\amx.h"
#include "SDK\plugincommon.h"


typedef void (*logprintf_t)(char* format, ...);
logprintf_t logprintf;
extern void *pAMXFunctions;


cell AMX_NATIVE_CALL HelloWorld(AMX* amx, cell* params)
{
    logprintf("This was printed from the Test plugin! Yay!");
    return 1;
}

PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports()
{
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData)
{
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t) ppData[PLUGIN_DATA_LOGPRINTF];

    logprintf(" * Test plugin was loaded.");
    return true;
}

PLUGIN_EXPORT void PLUGIN_CALL Unload()
{
    logprintf(" * Test plugin was unloaded.");
}

AMX_NATIVE_INFO PluginNatives[] =
{
    {"HelloWorld", HelloWorld},
    {0, 0}
};

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    return amx_Register(amx, PluginNatives, -1);
}


PLUGIN_EXPORT int PLUGIN_CALL AmxUnload( AMX *amx )
{
    return AMX_ERR_NONE;
}
```

### Module definition file (\*.def)

```cpp
EXPORTS
      Supports
      Load
      Unload
      AmxLoad
      AmxUnload
```

## Examining the code

In this section we'll be taking a look at some of the defines, structures, and functions that the SA-MP plugin SDK has to offer. You should have a comfortable understanding of C/++ before proceeding, as i will **just** be explaining SDK related information once we hit the coded segments. From here on out, there wont be any hand holding!

### The module definition file

Before we take a look at the code, we're gonna check out the module definition file we created in the previous section. First of all, what exactly is a module definition file? We know its a visual studio exclusive feature, but what exactly does it do? Its simple! A module definition file provides information to the linker about the code that is being linked. There are a lot of rules and statements that can be used in these files, but we're just gonna talk about one, the EXPORTS statement.

#### What is "**EXPORTS**"

Exports is a statement that allows us to... well, export stuff to our application! Why do we do this? Because we have to, its as simple as that. The functions we export are entry points in our DLL file. Applications can only touch the functions in our DLL that we export; if we don't export them they remain private to the DLL file. We don't want that now, do we? No. So we export everything that that application is going to be directly accessing.

#### Exported functions

There are currently 6 functions that need to be exported. We use 5 of them inside of our project that we've been setting up. Don't worry about the `PLUGIN_EXPORT`, and `PLUGIN_CALL` definitions you see in the function declarations. We will be covering these along with some other important definitions (marked by green text) later in the article.

| Functions            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Supports()**       | This function tells the server what capabilities our plugin will have based on what it returns. Generally we only use 3 support flags in plugins: **SUPPORTS_VERSION**, **SUPPORTS_AMX_NATIVES**, and **SUPPORTS_PROCESS_TICK**.                                                                                                                                                                                                                                                                         |
| **Load(void\*\*)**   | The Load function is pretty straight forward. This is called when the plugin is loaded and gets passed an array of addresses that the plugin will use to function. The two indexes we typically use are **PLUGIN_DATA_AMX_EXPORTS**, and **PLUGIN_DATA_LOGPRINTF**.                                                                                                                                                                                                                                      |
| **Unload()**         | Unload is called when the plugin is unloaded (server is shutdown).                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **AmxLoad(AMX\*)**   | This is called when a new AMX instance is loaded into the server. This will be called for every filterscript/gamemode! Because of this it isn't a good idea to store a single AMX instance for the entire plugin, instead use a queue/list/vector. In this function we also register our custom native functions we wish to provide PAWN with.                                                                                                                                                           |
| **AmxUnload(AMX\*)** | This function is called when ever an AMX instance is unloaded. If you store AMX instances, make sure you remove them. Otherwise you'll have instances to non-existing gamemodes/filterscripts.                                                                                                                                                                                                                                                                                                           |
| **ProcessTick()**    | ProcessTick is a function that gets called on every iteration of the server's loop. People generally use this function as a method of managing time by keeping track of the amount of ticks that have passed. The SA-MP server is said to have a sleep time of 5ms, so if 50 ticks go by you have an idea of the elapsed time (5 \* 50 = 250ms). **Note:** Anyone who uses threads in their plugins and require PAWN interaction needs to use this function to ensure PAWN isnt busy doing another task! |

### Defines and structures

Now comes the fun part, we get to take a look at the code! You'll probably notice right off the bat that we're using a ton of defines and structures through our little example from the previous section. If you haven't ever developed a SA-MP plugin before, these can appear very confusing and even intimidating. We'll be shedding some light on these defines and structures in this section.

| Defines/Structures          | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **cell**                    | A "cell" is a typedef that is simply there for portability. PAWN offers support for 16bit, 32bit, and 64bit integers. The typedef "cell" will always be the correct size while "int" might not be. Generally with SA-MP plugins, this typedef will always be a 32bit integer. **Note:** There is also a "ucell" typedef for unsigned integers, but this is hardly used.                                                 |
| **AMX_NATIVE_CALL**         | This defines the calling convention that our native functions will use. At the moment its defined to nothing, so the default will be used.                                                                                                                                                                                                                                                                              |
| **AMX**                     | The name of this structure should be pretty clear, its an AMX instance. This structure has tons of information relating to the data segments along with tons of other amx related information. This structure must be present in all native function declarations along with a cell pointer to the passed parameters; Without this info we dont know what script is calling our native, nor do we know what was passed. |
| **PLUGIN_EXPORT**           | This is defined as "PLUGIN_EXTERN_C".                                                                                                                                                                                                                                                                                                                                                                                   |
| **PLUGIN_EXTERN_C**         | If using a C++ compiler this is defined as "extern "C"". This is for compatibility with C. C++ offers things like function overloading so additional information like the number/size of arguments is stored with the function's name, this is refered to as "name mangling". When this define is used, it tells C++ to use C-style linkage and thus avoids C++ name mangling.                                          |
| **PLUGIN_CALL**             | This define tells C/++ what calling convention to use for our exported functions. If you use a compiler targeting windows, this is defined as \_\_stdcall. Otherwise its defined as nothing and the default convention is used.                                                                                                                                                                                         |
| **SUPPORTS_VERSION**        | This define is to be used in a bit mask that is returned by our "Supports()" function. This flag is used to check for compatibility with the server.                                                                                                                                                                                                                                                                    |
| **SUPPORTS_AMX_NATIVES**    | This is yet another define that is to be used by our "Supports()" function. Any plugin that uses AMX functions must use this flag! Without this flag you'll get a run time 19 error due to your natives not registering with the server (amx_Register).                                                                                                                                                                 |
| **SUPPORTS_PROCESS_TICK**   | Our last flag for our "Supports()" function. If you're going to be using the "ProcessTick()" function, you have to add this to our "Supports()" function's returned bit mask.                                                                                                                                                                                                                                           |
| **PLUGIN_DATA_AMX_EXPORTS** | This is used as an index to the multidimensional array that gets passed on Load. This particular index holds the AMX function table. All plugins must use this index to assign the address of the function table to pAMXFunctions.                                                                                                                                                                                      |
| **PLUGIN_DATA_LOGPRINTF**   | Yet another index that is to be used with the multidimensional array that gets passed on Load. This index holds the address of the logprintf function which prints information and saves said information to the server's log file. If your plugin uses this function you must use this index to assign the address to the logprintf function pointer.                                                                  |
| **AMX_NATIVE_INFO**         | This struct is used in conjunction with amx_Register. It contains a string that holds your new native's name, and a pointer to it's address.                                                                                                                                                                                                                                                                            |

There are a few other important definitions that relate to AMX function errors, but they're already documented inside of the amx header. So instead of reinventing the wheel, I'm just going to post the enum with all the error codes and their corresponding comments. **Note:** Every amx function, with the exception of amx_NativeInfo, returns one of these error codes if a problem was encountered.

```cpp
enum
{
  AMX_ERR_NONE,
  /* reserve the first 15 error codes for exit codes of the abstract machine */
  AMX_ERR_EXIT,         /* forced exit */
  AMX_ERR_ASSERT,       /* assertion failed */
  AMX_ERR_STACKERR,     /* stack/heap collision */
  AMX_ERR_BOUNDS,       /* index out of bounds */
  AMX_ERR_MEMACCESS,    /* invalid memory access */
  AMX_ERR_INVINSTR,     /* invalid instruction */
  AMX_ERR_STACKLOW,     /* stack underflow */
  AMX_ERR_HEAPLOW,      /* heap underflow */
  AMX_ERR_CALLBACK,     /* no callback, or invalid callback */
  AMX_ERR_NATIVE,       /* native function failed */
  AMX_ERR_DIVIDE,       /* divide by zero */
  AMX_ERR_SLEEP,        /* go into sleepmode - code can be restarted */
  AMX_ERR_INVSTATE,     /* invalid state for this access */

  AMX_ERR_MEMORY = 16,  /* out of memory */
  AMX_ERR_FORMAT,       /* invalid file format */
  AMX_ERR_VERSION,      /* file is for a newer version of the AMX */
  AMX_ERR_NOTFOUND,     /* function not found */
  AMX_ERR_INDEX,        /* invalid index parameter (bad entry point) */
  AMX_ERR_DEBUG,        /* debugger cannot run */
  AMX_ERR_INIT,         /* AMX not initialized (or doubly initialized) */
  AMX_ERR_USERDATA,     /* unable to set user data field (table full) */
  AMX_ERR_INIT_JIT,     /* cannot initialize the JIT */
  AMX_ERR_PARAMS,       /* parameter error */
  AMX_ERR_DOMAIN,       /* domain error, expression result does not fit in range */
  AMX_ERR_GENERAL,      /* general error (unknown or unspecific error) */
};
```

## Amx functions

The amx functions are very well documented documented inside of the PAWN implementers guide, which can be found here. Instead of reinventing the wheel and explaining all the functions in my own words, im simply going to copy them here from the implementers guide, and make them a bit more presentable; I believe this will make the content much more accessible. With that said, this section will be mostly a reference for the next section which is focused on something that the implementers guide lacks, example code. Note: I will only be covering the functions that i think are vital for plugins (for now). Anything else can be found in the implementers guide, just make sure you use the version i linked to in this section!

### Key

\+ => Not Available

## amx_Allot

\- Reserve heap space in the abstract machine

### Syntax

```cpp
int amx_Allot(AMX *amx, int cells, cell *amx_addr, cell **phys_addr);
```

| Parameter    | Description                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **amx**      | The abstract machine.                                                                                                                                                    |
| **cells**    | The number of cells to reserve.                                                                                                                                          |
| **amx_addr** | The address of the allocated cell as the pawn program (that runs in the abstract machine) can access it. phys_addr The address of the cell for C/C++ programs to access. |

**Notes:** In earlier releases of pawn, arrays and strings had to be passed to a script after explicitly allocating memory for it on the amx stack. In the current release, this functionality has been largely replaced by the functions amx_PushArray and amx_PushString. A pawn function can only access memory inside its abstract machine. If a parameter is to be passed “by reference” to a pawn function, one must pass the address of that parameter to amx_Exec. In addition, that address itself must be within the address range of the abstract machine too. An added complexity is that the abstract machine uses addresses that are relative to the data section of the abstract machine, and the host program uses address relative to the environment that the operating system gives it.

amx_Allot allocates memory cells inside the abstract machine and it returns two addresses. The amx_addr parameter is the address of the variable relative to the “data section” of the abstract machine; this is the value you should pass to amx_Exec (via amx_Push). Pa- rameter phys_addr holds the address relative to the host program’s address space. So a C/C++ program can use this address and write into the allocated memory. After amx_Exec returns, you may inspect the memory block (the pawn function called by amx_Exec may have written into it) and finally release it by calling amx_Release.

**See also:** [amx_Exec](#amx_Exec), [amx_PushArray](#amx_PushArray), [amx_PushString](#amx_PushString), [amx_Release](#amx_Release)

## amx_ctof

\- Cast “cell” to “float”

### Syntax

```cpp
[float] amx_ctof([cell] c);
```

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| **c**     | The value to cast from “cell” type to “float”. |

**Returns:** The same bit pattern, but now as a floating point type.

**Notes:** This macro casts a “cell” type into a “float” type without changing the bit pattern. A normal type cast in C/C++ changes the memory representation of the expression so that its numeric value in IEEE 754 format comes closest to the original integer value. The pawn parser and abstract machine store floating point values in a cell — when retrieving a floating point value from a cell, the bit pattern must not be changed.

**See also:** [amx_ftoc](#amx_ftoc)

## amx_Exec

\- Run code

### Syntax

```cpp
  int amx_Exec(AMX *amx, long *retval, int index);
```

| Parameter  | Description                                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**    | The abstract machine from which to call a function.                                                                                                                                                                                           |
| **retval** | Will hold the return value of the called function uponreturn. This parameter may be NULL if you are notinterested in the return value.                                                                                                        |
| **index**  | An index into the “public function table”; it indicatesthe function to execute. See amx_FindPublic formoreinformation. Use AMX_EXEC_MAIN to start executingat the main function, and AMX_EXEC_CONT to continueexecution from a “sleep state”. |

**Notes:** This function runs the script, starting at the indicated function. It calls the callback function for any native function call that the code in the amx makes. amx_Exec assumes that all native functions are correctly initialized with amx_Register.

**See also:** [amx_FindPublic](#amx_FindPublic), [amx_Register](#amx_Register)

## amx_FindPublic

\- Return the index of a public function

### Syntax

```cpp
int amx_FindPublic(AMX *amx, char *funcname, int *index);
```

| Parameter    | Description                                                                  |
| ------------ | ---------------------------------------------------------------------------- |
| **amx**      | The abstract machine.                                                        |
| **funcname** | The name of the public function to find.                                     |
| **index**    | Upon return, this parameter holds the index of therequested public function. |

**See also:** [amx_Exec](#amx_Exec), amx_FindNative+, amx_FindPubVar+, amx_GetPublic+, amx_NumPublics+

## amx_ftoc

\- Cast “float” to “cell”

### Syntax

```cpp
[cell] amx_ftoc([float] f);
```

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| **f**     | The value to cast from “float” type to “cell”. |

**Returns:** The same bit pattern, but now as a “cell” type.

**Notes:** This macro casts a “float” type into a “cell” type without changing the bit pattern. A normal type cast in C/C++ changes the memory representation of the expression so that its numeric value in integer format is the integral (truncated) value of the original rational value. The pawn parser and abstract machine store floating point values in a cell —when storing a floating point value in a cell, the bit pattern must not be changed.

**See also:** [amx_ctof](#amx_ctof)

## amx_GetAddr

\- Resolve an AMX address

### Syntax

```cpp
int amx_GetAddr(AMX *amx,cell amx_addr,cell **phys_addr);
```

| Parameter     | Description                                                                                                                                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**       | The abstract machine.                                                                                                                                                                          |
| **amx_addr**  | The address relative to the abstract machine.                                                                                                                                                  |
| **phys_addr** | A pointer to the variable that will hold the memoryaddress of the indicated cell. If the amx_addr parame-ter is not a valid address inside the abstract machine,phys_addr will be set to NULL. |

**Notes:** This function returns the memory address of an address in the abstract machine. One typically uses this function in an extension module, because it allows you to access variables inside the abstract machine.

## amx_GetString

\- Retrieve a string from the abstract machine

### Syntax

```cpp
int amx_GetString(char *dest, cell *source, int use_wchar, size_t size);
```

| Parameter     | Description                                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dest**      | A pointer to a character array of sufficient size to holdthe converted source string.                                                                                         |
| **source**    | A pointer to the source string. Use amx_GetAddr toconvert a string address in the amx to the physicaladdress.                                                                 |
| **use_wchar** | A non-zero value interprets the dest argument as apointer to “wide characters” —i.e. wchar_t, regard-less of its char type. This allows the function to storeUnicode strings. |
| **size**      | The maximum number of characters to store in dest,including the terminating zero byte. If the string inthe source is longer, the string in dest will be trun-cated.           |

**Notes:** This function converts both packed strings and unpacked strings from the “pawn” format to the “C format. When retrieving an unpacked string with parameter use_wchar set to zero, the function may truncate characters from wide characters to 8-bit ASCII/ANSI.

**See also:** [amx_SetString](#amx_SetString)

## amx_Push

\- Pass a numeric argument “by-value”

### Syntax

```cpp
int amx_Push(AMX *amx, cell value);
```

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| **amx**   | The abstract machine.                     |
| **value** | The value to pass to the public function. |

**Notes:** Any parameters to a public function must be pushed to the function before calling amx_Exec. If a public function has multiple arguments, the arguments must be pushed int reverse order.

**See also:** [amx_Exec](#amx_Exec), [amx_PushArray](#amx_PushArray), [amx_PushString](#amx_PushString)

## amx_PushArray

\- Pass an argument or array “by-reference”

### Syntax

```cpp
int amx_PushArray(AMX *amx, cell *amx_addr, cell **phys_addr, const cell array[], int numcells);
```

| Parameter     | Description                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **amx**       | The abstract machine.                                                                                                                                                    |
| **amx_addr**  | The address of the allocated cell as the pawn program (that runs in the abstract machine) can access it, needed to release the memory block. This parameter may be NULL. |
| **phys_addr** | The address of the cell for C/C++ programs to access. This parameter may be NULL.                                                                                        |
| **array**     | The array of values to pass to the public function. A single cell that must be passed by-reference is regarded as a single-cell array.                                   |
| **numcells**  | The number of elements in the array.                                                                                                                                     |

**Notes:** Any parameters to a public function must be pushed to the function before calling amx_Exec. If a public function has multiple arguments, the arguments must be pushed int reverse order. The function allocates memory for the array inside the “heap” of the abstract machine. This memory must be freed with amx_Release. See function amx_Allot for details on the parameters amx_addr and phys_addr.

**See also:** [amx_Exec](#amx_Exec), [amx_Push](#amx_Push), [amx_PushString](#amx_PushString), [amx_Release](#amx_Release)

## amx_PushString

\- Pass a string argument

### Syntax

```cpp
int amx PushString(AMX *amx, cell *amx_addr, cell **phys_addr, const char *string, int pack, int use_wchar);
```

| Parameter     | Description                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**       | The abstract machine.                                                                                                                                                            |
| **amx_addr**  | The address of the allocated cell as the pawn program (that runs in the abstract machine) can access it, needed to release the memory block. This parameter may be NULL.         |
| **phys_addr** | The address of the cell for C/C++ programs to access. This parameter may be NULL.                                                                                                |
| **string**    | The string to pass to the public function.                                                                                                                                       |
| **pack**      | Non-zero to convert the source string to a packed string in the abstract machine, zero to convert the source string to a cell string.                                            |
| **use_wchar** | A non-zero value interprets the string argument as a pointer to “wide characters” i.e. wchar_t, regardless of its char type. This allows the function to accept Unicode strings. |

**Notes:** Any parameters to a public function must be pushed to the function before calling amx_Exec. If a public function has multiple arguments, the arguments must be pushed int reverse order. The function allocates memory for the array inside the “heap” of the abstract machine. This memory must be freed with amx_Release. See function amx_Allot for details on the parameters amx_addr and phys_addr. When you pass in an Unicode string and request a packed format in the abstract machine (i.e. both pack and use_wchar are true), the characters are truncated to 8-bits.

**See also:** [amx_Exec](#amx_Exec), [amx_Push](#amx_Push), [amx_PushArray](#amx_PushArray), [amx_Release](#amx_Release), [amx_SetString](#amx_SetString)

## amx_Register

\- Make native functions known

### Syntax

```cpp
int amx Register(AMX *amx, AMX NATIVE INFO *list, int number);
```

| Parameter  | Description                                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**    | The abstract machine.                                                                                                                                                                              |
| **list**   | An array with structures where each structure holdsa pointer to the name of a native function and a function pointer. The list is optionally terminated with astructure holding two NULL pointers. |
| **number** | The number of structures in the list array, or -1 if thelist ends with a structure holding two NULL pointers.                                                                                      |

**Notes:** On success, this function returns 0 (AMX_ERR_NONE). If this function returns the error code AMX_ERR_NOTFOUND, one or more native functions that are used by the pawn program are not found in the provided list. You can call amx_Register again to register additional function lists.

To check whether all native functions used in the compiled script have been registered, call amx_Register with the parameter list set to NULL. This call will not register any new native functions, but still return AMX_ERR_NOTFOUND if any native function is unregistered.

**See also:** amx_NativeInfo+

## amx_Release

\- Free heap space in the abstract machine

### Syntax

```cpp
int amx Release(AMX *amx,cell amx_addr);
```

| Parameter    | Description                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **amx**      | The abstract machine.                                                                                                                                                     |
| **amx_addr** | The address of the allocated cell as the pawn program (that runs in the abstract machine) sees it. This value is returned by amx_Allot, amx_PushArray and amx_PushString. |

**Notes:** amx_Allot allocates memory on the heap in ascending order (the heap grows upwards). amx_Release frees all memory above the value of the input parameter amx_addr. That is, a single call to amx_Release can free multiple calls to amx_Allot if you pass the amx_addr value of the first allocation.amx_PushArray and amx_PushString use amx_Allot internally, so the same procedure applies to these functions as well.

**See also:** [amx_Allot](#amx_Allot), [amx_PushArray](#amx_PushArray), [amx_PushString](#amx_PushString)

## amx_SetString

\- Store a string in the abstract machine

### Syntax

```cpp
int amx SetString(cell *dest, char *source, int pack, int use_wchar, size_t size);
```

| Parameter     | Description                                                                                                                                                                                         |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **dest**      | A pointer to a character array in the amx where the converted string is stored. Use amx_GetAddr to convert a string address in the amx to the physical address.                                     |
| **source**    | A pointer to the source string.                                                                                                                                                                     |
| **pack**      | Non-zero to convert the source string to a packed string in the abstract machine, zero to convert the source string to a cell string.                                                               |
| **string**    | The string to pass to the public function.                                                                                                                                                          |
| **use_wchar** | A non-zero value interprets the string argument as a pointer to “wide characters” i.e. wchar_t, regardless of its char type. This allows the function to accept Unicode strings.                    |
| **size**      | The maximum number of cells to store in dest, including the terminating zero byte or cell. If the string in the source is longer than can fit in the number of cells in dest, it will be truncated. |

**Notes:** When you pass in an Unicode string and request a packed format in the abstract machine (i.e. both pack and use_wchar are true), the characters are truncated to 8-bits.

**See also:** [amx_GetString](#amx_GetString)

## amx_StrLen

\- Get the string length in characters

### Syntax

```cpp
int amx_StrLen(const cell *cstring, int *length);
```

| Parameter   | Description                                             |
| ----------- | ------------------------------------------------------- |
| **cstring** | The string in the abstract machine.                     |
| **length**  | This parameter will hold the string length upon return. |

**Notes:** This function determines the length in characters of the string, not including the zero-terminating character (or cell). A packed string occupies less cells than its number if characters. If the cstring parameter is NULL, the length parameter is set to zero (0) and the function returns with an error code. For converting unpacked strings to UTF-8, function amx_UTF8Len may be more convenient.

**See also:** [amx_GetAddr](#amx_GetAddr), [amx_GetString](#amx_GetString), [amx_SetString](#amx_SetString), [amx_StrParam](#amx_StrParam), amx_UTF8Len+

## amx_StrParam

\- Get a string parameter from an abstract machine

### Syntax

```cpp
amx_StrParam([AMX*] amx, int] param, [char*] result);
```

| Parameter  | Description                                     |
| ---------- | ----------------------------------------------- |
| **amx**    | The abstract machine.                           |
| **param**  | The parameter number.                           |
| **result** | A variable that will hold the result on return. |

**Notes:** This macro allocates a block of memory (with alloca) and copies a string parameter (to a native function) in that block. See page 56 for an example of using this macro.

**See also:** [amx_GetAddr](#amx_GetAddr), [amx_GetString](#amx_GetString), [amx_StrLen](#amx_StrLen)

## Amx function examples

In an attempt at avoiding huge text walls, I've decided to add comments to the code explaining what I'm doing instead of typing it out in the topic. It's probably a good idea to have the wiki article open as a reference while reading the examples.

### Registering natives

Every single function we provide PAWN with has to be registered so the abstract machine can be aware of its existence. So i think its probably a good idea to start off with amx_Regester! Luckily we actually already used an example of registering a native one of our previous sections, so I'll be using that example again and adding some comments.

```cpp
//An array of the functions we wish to register with the abstract machine.
AMX_NATIVE_INFO PluginNatives[] =
{
    //Here we specify our native functions information and terminate the array with two null values.
    {"HelloWorld", HelloWorld},
    {0, 0}
};

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    //Here we register our natives to the abstract machine. Note how we're using -1. Normally this would have to be the number of
    //functions we're registering, but since we terminated the array with two null values, we can specify -1.
    return amx_Register(amx, PluginNatives, -1);
}
```

- ### Getting a string and its length

```cpp
//This function demonstrates: how to get a string (and its length) from PAWN.
//PAWN native: native PrintPawnString(const str[]);
cell AMX_NATIVE_CALL PrintPawnString(AMX* amx, cell* params)
{
    int
        len = NULL,
        ret = NULL;

    cell *addr  = NULL;

    //Get the address of our string param (str) and then get its length
    amx_GetAddr(amx, params[1], &addr);
    amx_StrLen(addr, &len);

    //if the length of input isnt 0
    if(len)
    {
        //We increase len because we want to make room for the terminating null char when we allocate memory.
        //Also because GetString's size parameter counts the null chracter, we have to specify the length
        //of the string + 1; otherwise our string will be truncated to make room for the null char (we'd lose 1 character).
        len++;

        //Allocate memory to hold our string we're passing (str) and then "get" the string using our allocated memory to store it.
        char* text = new char[ len ];
        amx_GetString(text, addr, 0, len);

        //Use logprintf to print out string (text). We dont use std::cout because it doesnt write to the server log (only the console).
        logprintf(text);

        //Deallocate our memory...
        delete[] text;
    }
    return 1;
}
```

### Alternative way to get a string

I decided to add this section because i know people are going to be tempted by the simplicity of it, and i think they should know the risks and problems that can come from it.

```cpp
//This function demonstrates: an alternative method to getting strings from pawn- and the possible risks that come with it.
//PAWN native: native PrintPawnString2(const str[]);
cell AMX_NATIVE_CALL PrintPawnString2(AMX* amx, cell* params)
{
    //This method is NOT recomended as the amx_StrParam macro uses the alloca function which is NOT a standard in C, OR C++.
    //Using this method comes with risks of overflowing the stack (If you allocate large amounts of memory) and also
    //gives you the risk of bugs (this function is machine AND compiler dependent- some implementations are said to be bugged).

    char* text = NULL;
    amx_StrParam(amx, params[1], text);

    //Check if text is null
    if(text != NULL)
    {
        //Use logprintf to print out string (text). We dont use std::cout because it doesnt write to the server log (only the console).
        logprintf(text);
    }
    return 1;

```

### How to set a string

```cpp
//This function demonstrates: how to modify a PAWN string.
//PAWN native: native SetPawnString(str[], len = sizeof(str));
cell AMX_NATIVE_CALL SetPawnString(AMX* amx, cell* params)
{
    const string message = "This is a string from C/++!!";
    cell* addr = NULL;

    //Get the address of our string parameter (str) and store our message
    amx_GetAddr(amx, params[1], &addr);
    amx_SetString(addr, message.c_str(), 0, 0, params[2]);
    return 1;
}
```

### Casting and returning floats

```cpp
//This function demonstrates: how to cast a float to a PAWN float, and return it.
//PAWN native: native Float:ReturnPawnFloatVal();
cell AMX_NATIVE_CALL ReturnPawnFloatVal(AMX* amx, cell* params)
{
    //Since PAWN is a typeless language it stores everything as a 32bit integer and relies on tags to handle special data.
    //A floating point number is no exception to this; It's a still 32bit int, but it has a Float tag to show that it shouldnt
    //be treated like an regular integer. So how do we convert a float to an 32bit integer (for PAWN) without losing data?
    //The answer is the amx_ftoc macro!

    //The macro amx_ftoc type casts a float into a cell while preserving its bit pattern (amx_ctof does the inverse).
    const float f = 22.624f;
    return amx_ftoc(f);
}
```

### Passing parameters by reference

```cpp
//This function demonstrates: How to pass parameters by reference.
//PAWN native: native SetPawnReferenceVars(&value1, &Float:value2);
cell AMX_NATIVE_CALL SetPawnReferenceVars(AMX* amx, cell* params)
{
    const int val = 65;
    const float val2 = 84.54f;

    cell* addr[2] = {NULL, NULL};

    //Get the addresses of "value1" and "value2"
    amx_GetAddr(amx, params[1], &addr[0]);
    amx_GetAddr(amx, params[2], &addr[1]);

    //Dereference our pointers and assign our values. Remember to ALWAYS use the macro "amx_ftoc" to convert floats into
    //cells (the appropriate float format for PAWN)!
    *addr[0] = val;
    *addr[1] = amx_ftoc(val2);

    return 1;
}
```

### Getting and modding array values

```cpp
//This function demonstrates: how to get and modify array values.
//PAWN native: native PrintPawnArray(arr[], size = sizeof(arr));
cell AMX_NATIVE_CALL PrintPawnArray(AMX* amx, cell* params)
{
    //Make sure there's something to print...
    if(params[2] > 0)
    {
        cell* addr = NULL;

        //Get the address of the first value in our PAWN array.
        amx_GetAddr(amx, params[1], &addr);

        for(int i = 0, l = params[2]; i < l; i++)
        {
            //This is pretty straight forward: We dereference the addr pointer to get our value to print.
            //You should know this already, but arrays and pointers are almost the same thing, so we can use pointer
            //arithmetic to add an offset OR just use the subscript operator (in the end *(addr+1) and addr[1] are the same).
            logprintf("arr[%d] = %d", i, *(addr + i));

            //If you wanted to modify the array you would just change its value by dereferencing addr and assigning a new value.
            //You should know this as well, im just adding it in for completeness. Here we change the first value of our array
            //to 5 (Note: Since its the first value, no offset it used).

            // *(addr) = 5;
        }
    }
    return 1;
}
```

### Call a callback

```cpp
//This function demonstrates: How to call a callback that is in a PAWN script.
//PAWN native: native EmitPawnCallback();
cell AMX_NATIVE_CALL EmitPawnCallback(AMX* amx, cell* params)
{
    int idx;

    const cell var = 3;
    const cell arr[] = {100, 4, 33};
    const string str = "Some random message from C++.";


    //Pawn callback: forward OnPawnCallbackEmitted(var, arr[], str[]);
    //Find our callback and store its place in the public function table (it's index) into our idx var.
    if(!amx_FindPublic(amx, "OnPawnCallbackEmitted", &idx))
    {
        cell
            ret,
            addr;

        //Here we push our arguments to our function. Note that if the function has multiple arguments you have to push your
        //values in reverse order! Thats why we're pushing the string first, then the array, and finally our integer.

        amx_PushString(amx, &addr, NULL, str.c_str(), NULL, NULL);
        //amx_PushArray(amx, NULL, NULL, arr, sizeof(arr) / sizeof(cell));

        cell
            amx_addr,
            *phys_addr;

        //For some reason amx_PushArray seems to be crashing the server, and i have NO idea why. My usage should be completely
        //valid judging from the implementers guide, and the code itself. Since the function isnt working we'll have to
        //use the old method and allocate the memory, set it, and push it all ourselves. This is pretty straight forward. We
        //allocate memory on the heap using amx_Allot (this returns 2 addresses- one of the location in the abstract machine
        //(amx_addr), and one relative to the actual server's address space (phsy_addr - which we can use in C++)). Once the
        //memory is allocated we use memcpy to copy the memory from our array to our phys_addr address location.
        amx_Allot(amx, sizeof(arr) / sizeof(cell), &amx_addr, &phys_addr);
        memcpy(phys_addr, arr, sizeof(arr));
        amx_Push(amx, amx_addr);

        //Push our integer value
        amx_Push(amx, var);

        //Execute our function using our previously obtained idx var.
        //Note: This function's second parameter is what the callback returned (Can be NULL if you're not interested in return values).
        amx_Exec(amx, &ret, idx);

        //Release our memory that we allocated. The function amx_Alloc allocates memory on the heap in the abstract machine.
        //The functions amx_PushString and amx_PushArray both use this function internally so you have to release the memory every time
        //you use one of those functions. NOTE: We used both amx_PushString and amx_PushArray, and yet we only have ONE release call.
        //This is because memory on the heap is allocated in ascending order! amx_Release release all the memory above a certain point
        //(the second parameter, amx_addr - which is our addr variable). Since it does this we ONLY store the address from the amx_PushString
        //call, as it'll delete everything from that point on.
        amx_Release(amx, addr);

        //Print the return value (for completeness).
        logprintf("EmitPawnCallback NOTE:  OnPawnCallbackEmitted callback returned %d!", ret);

    }
    return 1;
```

## Calling natives and hooking callbacks

Before i get into callback hooking or SA-MP native calling, i thought i should shed light on something first. Some people seem to think that plugins are a replacement for PAWN, this simply isnt the case. Plugins were designed to provide functionality TO PAWN, not to serve as a replacement for it. There are times when developing something as a plugin rather then a PAWN script doesnt make sense- its important to ask yourself if you should really be coding something as a plugin rather then a pawn script.

There are a lot of different methods you can use for both callback hooking and sa-mp native calling. Im only going to be focusing on one method oh each for now though.

### Invoke

Invoke is a SA-MP native function calling method that was created by incognito. You can find it [here](https://github.com/Dystans/SA-MP_Invoke_2.0). Please note that there is a text file in there containing a function with tons of SA-MP native function calls. This is vital for invoke, and must be added to your plugin's include file. Invoke will not work if you dont have a public PAWN function that uses all the SA-MP natives your plugin requires. This function is only so invoke can find the addresses of the natives, and should **never** actually be used anywhere.

#### Getting started

Before we can start calling SA-MP natives, we have to setup Invoke. The first thing we have to do is include it inside of our project, you should remember how to do this from the previous "Getting started" section. Once you have the files added to your project there are just a few simple steps to get Invoke working:

- Include the invoke header.
- Allocate memory for the invoke instance under Load.
- Push back the amx_list member variable every time a new AMX instance is loaded under AmxLoad.
- Every time a script gets unloaded, iterate through Invoke's amx_list, find the unloaded AMX instance, and erase it under AmxUnload.
- Create a native that calls Invoke's "getAddresses" member function for PAWN to use when a filterscript or gamemode is loaded that uses our plugin.

Thats about it for getting invoke setup for your plugin. The only thing left to do is to add the public PAWN function found in the invoke package (the txt file we spoke of earlier) to your plugin's include, and use the native from the last setup step when a script is loaded. Anyone who will be creating plugins for public release, i encourage you to look into THIS post. It allows for a clean seamless "hook" of the OnGameModeInit/OnFilterScriptInit callbacks so you can register SA-MP's native addresses while not forcing the end user to add a function into those callbacks themselves.

**Note:** Im aware that explaining this in text form probably isnt ideal for most newer users; however these are all standard C/++ tasks that you should already be familiar with- and those that arent (ie: creating a native) were already explained! If you're having trouble following along, i suggest getting a bit more familiar with C/++. With that being said though there will be an updated source code file (along with an actual include for our plugin) later on in this article with comments on everything we've learned so far. Look at that updated source file if you have any problems.

#### Adding SA-MP natives

Sadly invoke isnt magic, and does require maintenance to add new natives or remove deprecated ones. The version from the previous section has all the natives from the 0.2.2 version of SA-MP, so its missing all the newer functions. For these two reasons i decided to add this section! If someone is nice enough to add all the missing natives i will update the invoke package and include them in the credits- if not, i suggest adding natives on an as needed basis.

Inside of the invoke header you should see a big array of function names (the array is appropriately called "name") and a lot of static "Native" structure declarations. To add a native you simply have to add its name to the array of names, and declare a Native structure with the appropriate information- name, and parameter specifiers. There are a lot of available parameter specifiers available to use:

```cpp
i = integer
f = float value
s = string
v = reference variable (GetPlayerPos, GetPlayerKeys, etc.)
p = string var (GetPlayerName etc.)
```

**Remember to update the public PAWN function that calls all the natives.** Any time you add a native you need to also add it to said public function.

#### Calling natives

Invoke uses the variadic member function appropriately named "callNative" to call natives. The parameters for this function are a pointer to a Native structure (see previous section) containing info on the native function, and an ellipsis for all the parameters for said native function. The function returns the return value of the native that is being called. Here is an example function that calls multiple natives, with differing parameter types (int, reference, and string var).

```cpp
//This function demonstrates: how to use invoke to call SA-MP natives.
//PAWN native: native WhereIsPlayer(playerid);
cell AMX_NATIVE_CALL WhereIsPlayer(AMX* amx, cell* params)
{
    float
        x = NULL,
        y = NULL,
        z = NULL;

    //Get the player's position (and check to see if he is even connected).
    if(g_Invoke->callNative(&PAWN::GetPlayerPos, params[1], &x, &y, &z))
    {
        char name[24];

        //Get the rest of the player's information (name, interior, and virtualworld) and print it.
        g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);
        int interior = g_Invoke->callNative(&PAWN::GetPlayerInterior, params[1]);
        int virtualworld = g_Invoke->callNative(&PAWN::GetPlayerVirtualWorld, params[1]);

        logprintf("%s is at X: %.2f, Y: %.2f, Z: %.2f (Virtual world: %d, Interior %d).", name, x, y, z, virtualworld, interior);
        return 1;

    }
    return 0;
}
```

### Hooking callbacks

Using the invoke method, there is no 100% transparent hooking method when it comes to callbacks. Plugins that want to hook callbacks that are using invoke have go through PAWN to do so. You can create a native function that you can call inside the PAWN callback you wish to hook, and use that native as a sort of pseudo callback. You can do this in a manner that requires no work on the end user by using the ALS hooking method.

The first step is obviously creating the native (remember to add it to our list of natives to register, and also add it in your include later on). The callback i decided to hook is OnPlayerConnect, so im gonna write a native function that has the same arguments as the callback, and then add the code that requires the callback (in this case a little joke).

```cpp
//This function demonstrates: how to write a native to act as a callback.
//PAWN native: native TEST_Hook_OnPlayerConnnect(playerid);
cell AMX_NATIVE_CALL TEST_Hook_OnPlayerConnnect(AMX* amx, cell* params)
{
    //Get the players name
    char name[24];
    g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);

    //Check if his name is "Mario".
    if(string("Mario") == name)
    {
        //If it is send our funny little message and kick him.
        g_Invoke->callNative(&PAWN::SendClientMessage, params[1], 0xFFFFFFFF, "Sorry {FF0000}Mario, {FFFFFF}but your princess is in another server.");
        g_Invoke->callNative(&PAWN::Kick, params[1]);
    }
    return 1;
}
```

TEST_Hook_OnPlayerConnnect will now act as our plugin's OnPlayerConnect callback. Since our plugin's name is "Test" and its rather short i decided to let that act as our prefix for hooking. You generally want something unique for your prefixes so you dont collide with other people's plugins/includes. **Note:** We still have to call this function from PAWN using the ALS method we spoke of earlier for user convenience. Since Y_Less does a great job of explaining the ALS method, there's really no point for me to go into details about it, i will simply provide hooking example for our TEST_Hook_OnPlayerConnect callback. This should be put in your plugins include file.

```cpp
public OnPlayerConnect(playerid)
{
    TEST_Hook_OnPlayerConnnect(playerid);
    //..

    if(funcidx("TEST_OnPlayerConnect") != -1)
    {
        return CallLocalFunction("TEST_OnPlayerConnect", "d", playerid);
    }
    return 1;
}

#if defined _ALS_OnPlayerConnect
    #undef OnPlayerConnect
#else
    #define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect TEST_OnPlayerConnect

forward TEST_OnPlayerConnect(playerid);
```

## Closing

Some of you experienced plugin developers might be wondering why i didnt include the GDK in the "Calling natives and hooking callbacks" section. I decided to leave it out for two reasons. The first being that i simply do not have that much available time anymore, and couldnt spare any getting used to this new system. The second reason is that the GDK is very experimental and currently is struggling with crashes amongst other problems. Im quite aware of the speed differences between Invoke and GDK, and definitely will add it some time in the future if no one else does (remember, this is suppose to be a community driven thing). I think its best to wait for some more of the issues to be ironed out for now though (zeex is an amazing coder, and im sure he'll iron everything out ).

Also, as i promised, here is the update include/source file with comments on everything we've hopefully learned:

### Plugin include

```cpp
//Anything with the prefix "TEST" should be changed if you called your plugin something
//different. This also goes for the plugin code (TEST_Hook_OnPlayerConnect specifically).
#if defined _TEST_INCLUDED
    #endinput
#endif
#define _TEST_INCLUDED
#pragma library Test

#include <a_samp>

//Example natives
native PrintPawnString(const str[]);
native PrintPawnString2(const str[]);
native SetPawnString(str[], len = sizeof(str));
native Float:ReturnPawnFloatVal();
native SetPawnReferenceVars(&value1, &Float:value2);
native PrintPawnArray(arr[], size = sizeof(arr));
native EmitPawnCallback();
native WhereIsPlayer(playerid);
native TEST_Hook_OnPlayerConnnect(playerid);

//Invoke native
native Invoke_GetAddresses();


//Callback hooks
public OnPlayerConnect(playerid)
{
    TEST_Hook_OnPlayerConnnect(playerid);
    //..

    if(funcidx("TEST_OnPlayerConnect") != -1)
    {
        return CallLocalFunction("TEST_OnPlayerConnect", "d", playerid);
    }
    return 1;
}

#if defined _ALS_OnPlayerConnect
    #undef OnPlayerConnect
#else
    #define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect TEST_OnPlayerConnect

forward TEST_OnPlayerConnect(playerid);

public OnGameModeInit()
{
    Invoke_GetAddresses();
    //..

    if(funcidx("TEST_OnGameModeInit") != -1)
    {
        return CallLocalFunction("TEST_OnGameModeInit", "");
    }
    return 1;
}

#if defined _ALS_OnGameModeInit
    #undef OnGameModeInit
#else
    #define _ALS_OnGameModeInit
#endif
#define OnGameModeInit TEST_OnGameModeInit

forward TEST_OnGameModeInit();


public OnFilterScriptInit()
{
    Invoke_GetAddresses();
    //..

    if(funcidx("TEST_OnFilterScriptInit") != -1)
    {
        return CallLocalFunction("TEST_OnFilterScriptInit", "");
    }
    return 1;
}

#if defined _ALS_OnFilterScriptInit
    #undef OnFilterScriptInit
#else
    #define _ALS_OnFilterScriptInit
#endif
#define OnFilterScriptInit TEST_OnFilterScriptInit

forward TEST_OnFilterScriptInit();


//Public function for invoke
forward InvokeFunction();
public InvokeFunction()
{
    new Float:fVar;
    new Var[ 256 ];
    new iVar;

    // a_samp.inc
    SendClientMessage(0, 0, "");
    SendClientMessageToAll(0, "");
    SendDeathMessage(0, 0, 0);
    GameTextForAll("", 0, 0);
    GameTextForPlayer(0, "", 0, 0);
    GetTickCount();
    GetMaxPlayers();
    SetGameModeText("");
    SetTeamCount(0);
    AddPlayerClass(0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0);
    AddPlayerClassEx(0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0);
    AddStaticVehicle(0, 0.0, 0.0, 0.0, 0.0, 0, 0);
    AddStaticVehicleEx(0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0);
    AddStaticPickup(0, 0, 0.0, 0.0, 0.0);
    ShowNameTags(0);
    ShowPlayerMarkers(0);
    GameModeExit();
    SetWorldTime(0);
    GetWeaponName(0, Var, sizeof( Var ) );
    EnableTirePopping(0);
    AllowInteriorWeapons(0);
    SetWeather(0);
    SetGravity(0.0);
    AllowAdminTeleport(0);
    SetDeathDropAmount(0);
    CreateExplosion(0.0, 0.0, 0.0, 0, 0.0);
    //SetDisabledWeapons();
    EnableZoneNames(0);
    IsPlayerAdmin(0);
    Kick(0);
    Ban(0);
    SendRconCommand("");
    ShowPlayerDialog(0,0,0,"lol","lol","lol","lol");

    // a_players.inc
    SetSpawnInfo(0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0,0);
    SpawnPlayer(0);
    SetPlayerPos(0, 0.0, 0.0, 0.0);
//  SetPlayerPosFindZ(0, 0.0, 0.0, 0.0);
    GetPlayerPos(0, fVar, fVar, fVar);
    SetPlayerFacingAngle(0,0.0);
    GetPlayerFacingAngle(0,fVar);
    SetPlayerInterior(0,0);
    GetPlayerInterior(0);
    SetPlayerHealth(0, 0.0);
    GetPlayerHealth(0, fVar);
    SetPlayerArmour(0, 0.0);
    GetPlayerArmour(0, fVar);
    SetPlayerAmmo(0, 0,0);
    GetPlayerAmmo(0);
    SetPlayerTeam(0,0);
    GetPlayerTeam(0);
    SetPlayerScore(0,0);
    GetPlayerScore(0);
    SetPlayerColor(0,0);
    GetPlayerColor(0);
    SetPlayerSkin(0,0);
    GivePlayerWeapon(0, 0,0);
    ResetPlayerWeapons(0);
    GetPlayerWeaponData(0, 0, iVar, iVar );
    GivePlayerMoney(0,0);
    ResetPlayerMoney(0);
    SetPlayerName(0, "");
    GetPlayerMoney(0);
    GetPlayerState(0);
    GetPlayerIp(0, Var, sizeof( Var ));
    GetPlayerPing(0);
    GetPlayerWeapon(0);
    GetPlayerKeys(0,iVar,iVar,iVar);
    GetPlayerName(0, Var, sizeof( Var ));
    PutPlayerInVehicle(0, 0,0);
    GetPlayerVehicleID(0);
    RemovePlayerFromVehicle(0);
    TogglePlayerControllable(0,0);
    PlayerPlaySound(0, 0, 0.0, 0.0,0.0);
    SetPlayerCheckpoint(0, 0.0, 0.0, 0.0,0.0);
    DisablePlayerCheckpoint(0);
    SetPlayerRaceCheckpoint(0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0);
    DisablePlayerRaceCheckpoint(0);
    SetPlayerWorldBounds(0,0.0,0.0,0.0,0.0);
    SetPlayerMarkerForPlayer(0, 0,0);
    ShowPlayerNameTagForPlayer(0, 0,0);
    SetPlayerMapIcon(0, 0, 0.0, 0.0, 0.0, 0,0);
    RemovePlayerMapIcon(0,0);
    SetPlayerCameraPos(0,0.0, 0.0, 0.0);
    SetPlayerCameraLookAt(0, 0.0, 0.0, 0.0);
    SetCameraBehindPlayer(0);
    AllowPlayerTeleport(0,0);
    IsPlayerConnected(0);
    IsPlayerInVehicle(0,0);
    IsPlayerInAnyVehicle(0);
    IsPlayerInCheckpoint(0);
    IsPlayerInRaceCheckpoint(0);
    SetPlayerTime(0, 0,0);
    TogglePlayerClock(0,0);
    SetPlayerWeather(0,0);
    GetPlayerTime(0,iVar,iVar);
    SetPlayerVirtualWorld(0,0);
    GetPlayerVirtualWorld(0);

    // a_vehicle.inc
    CreateVehicle(0,0.0,0.0,0.0,0.0,0,0,0);
    DestroyVehicle(0);
    GetVehiclePos(0,fVar,fVar,fVar);
    SetVehiclePos(0,0.0,0.0,0.0);
    GetVehicleZAngle(0,fVar);
    SetVehicleZAngle(0,0.0);
    SetVehicleParamsForPlayer(0,0,0,0);
    SetVehicleToRespawn(0);
    LinkVehicleToInterior(0,0);
    AddVehicleComponent(0,0);
    ChangeVehicleColor(0,0,0);
    ChangeVehiclePaintjob(0,0);
    SetVehicleHealth(0,0.0);
    GetVehicleHealth(0,fVar);
    AttachTrailerToVehicle(0, 0);
    DetachTrailerFromVehicle(0);
    IsTrailerAttachedToVehicle(0);
    GetVehicleModel(0);
    SetVehicleNumberPlate(0,"");
    SetVehicleVirtualWorld(0,0);
    GetVehicleVirtualWorld(0);

    ApplyAnimation(0,"","",1.0,0,0,0,0,0);

    // a_objects.inc
    CreateObject(0,0.0,0.0,0.0,0.0,0.0,0.0);
    SetObjectPos(0,0.0,0.0,0.0);
    GetObjectPos(0,fVar,fVar,fVar);
    SetObjectRot(0,0.0,0.0,0.0);
    GetObjectRot(0,fVar,fVar,fVar);
    IsValidObject(0);
    DestroyObject(0);
    MoveObject(0,0.0,0.0,0.0,0.0);
    StopObject(0);
    CreatePlayerObject(0,0,0.0,0.0,0.0,0.0,0.0,0.0);
    SetPlayerObjectPos(0,0,0.0,0.0,0.0);
    GetPlayerObjectPos(0,0,fVar,fVar,fVar);
    GetPlayerObjectRot(0,0,fVar,fVar,fVar);
    SetPlayerObjectRot(0,0,0.0,0.0,0.0);
    IsValidPlayerObject(0,0);
    DestroyPlayerObject(0,0);
    MovePlayerObject(0,0,0.0,0.0,0.0,0.0);
    StopPlayerObject(0,0);

    // Menu's
    CreateMenu("", 0, 0.0, 0.0, 0.0, 0.0);
    DestroyMenu(Menu:0);
    AddMenuItem(Menu:0, 0, "");
    SetMenuColumnHeader(Menu:0, 0, "");
    ShowMenuForPlayer(Menu:0, 0);
    HideMenuForPlayer(Menu:0, 0);
    IsValidMenu(Menu:0);
    DisableMenu(Menu:0);
    DisableMenuRow(Menu:0,0);

    // Textdraw
    TextDrawCreate(0.0,0.0,"");
    TextDrawDestroy(Text:0);
    TextDrawLetterSize(Text:0, 0.0,0.0);
    TextDrawTextSize(Text:0, 0.0,0.0);
    TextDrawAlignment(Text:0, 0);
    TextDrawColor(Text:0,0);
    TextDrawUseBox(Text:0, 0);
    TextDrawBoxColor(Text:0, 0);
    TextDrawSetShadow(Text:0, 0);
    TextDrawSetOutline(Text:0, 0);
    TextDrawBackgroundColor(Text:0,0);
    TextDrawFont(Text:0, 0);
    TextDrawSetProportional(Text:0, 0);
    TextDrawShowForPlayer(0, Text:0);
    TextDrawHideForPlayer(0, Text:0);
    TextDrawShowForAll(Text:0);
    TextDrawHideForAll(Text:0);

    // Others
    funcidx("");
    gettime(iVar,iVar,iVar);
    getdate(iVar,iVar,iVar);
    tickcount(iVar);

    return 1;
}
```

### Plugin source code

```cpp
#include "SDK\amx\amx.h"
#include "SDK\plugincommon.h"

#include "Invoke.h"

#include <string>
#include <vector>

#include <cstdlib>
#include <ctime>


typedef void (*logprintf_t)(char* format, ...);

logprintf_t logprintf;
extern void *pAMXFunctions;


using namespace std;


//This function demonstrates: how to get a string (and its length) from PAWN.
//PAWN native: native PrintPawnString(const str[]);
cell AMX_NATIVE_CALL PrintPawnString(AMX* amx, cell* params)
{
    int
        len = NULL,
        ret = NULL;

    cell *addr  = NULL;

    //Get the address of our string param (str) and then get its length
    amx_GetAddr(amx, params[1], &addr);
    amx_StrLen(addr, &len);

    //if the length of input isnt 0
    if(len)
    {
        //We increase len because we want to make room for the terminating null char when we allocate memory.
        //Also because GetString's size parameter counts the null chracter, we have to specify the length
        //of the string + 1; otherwise our string will be truncated to make room for the null char (we'd lose 1 character).
        len++;

        //Allocate memory to hold our string we're passing (str) and then "get" the string using our allocated memory to store it.
        char* text = new char[ len ];
        amx_GetString(text, addr, 0, len);

        //Use logprintf to print out string (text). We dont use std::cout because it doesnt write to the server log (only the window).
        logprintf(text);

        //Deallocate our memory...
        delete[] text;
    }
    return 1;
}

//This function demonstrates: How to call a callback that is in a PAWN script.
//PAWN native: native EmitPawnCallback();
cell AMX_NATIVE_CALL EmitPawnCallback(AMX* amx, cell* params)
{
    int idx;

    const cell var = 3;
    const cell arr[] = {100, 4, 33};
    const string str = "Some random message from C++.";


    //Pawn callback: forward OnPawnCallbackEmitted(var, arr[], str[]);
    //Find our callback and store its place in the public function table (it's index) into our idx var.
    if(!amx_FindPublic(amx, "OnPawnCallbackEmitted", &idx))
    {
        cell
            ret,
            addr;

        //Here we push our arguments to our function. Note that if the function has multiple arguments you have to push your
        //values in reverse order! Thats why we're pushing the string first, then the array, and finally our integer.

        amx_PushString(amx, &addr, NULL, str.c_str(), NULL, NULL);
        //amx_PushArray(amx, NULL, NULL, arr, sizeof(arr) / sizeof(cell));

        cell
            amx_addr,
            *phys_addr;

        //For some reason amx_PushArray seems to be crashing the server, and i have NO idea why. My usage should be completely
        //valid judging from the implementers guide, and the code itself. Since the function isnt working we'll have to
        //use the old method and allocate the memory, set it, and push it all ourselves. This is pretty straight forward. We
        //allocate memory on the heap using amx_Allot (this returns 2 addresses- one of the location in the abstract machine
        //(amx_addr), and one relative to the actual server's address space (phsy_addr - which we can use in C++)). Once the
        //memory is allocated we use memcpy to copy the memory from our array to our phys_addr address location.
        amx_Allot(amx, sizeof(arr) / sizeof(cell), &amx_addr, &phys_addr);
        memcpy(phys_addr, arr, sizeof(arr));
        amx_Push(amx, amx_addr);

        //Push our integer value
        amx_Push(amx, var);

        //Execute our function using our previously obtained idx var.
        //Note: This function's second parameter is what the callback returned (Can be NULL if you're not interested in return values).
        amx_Exec(amx, &ret, idx);

        //Release our memory that we allocated. The function amx_Alloc allocates memory on the heap in the abstract machine.
        //The functions amx_PushString and amx_PushArray both use this function internally so you have to release the memory every time
        //you use one of those functions. NOTE: We used both amx_PushString and amx_PushArray, and yet we only have ONE release call.
        //This is because memory on the heap is allocated in ascending order! amx_Release release all the memory above a certain point
        //(the second parameter, amx_addr - which is our addr variable). Since it does this we ONLY store the address from the amx_PushString
        //call, as it'll delete everything from that point on.
        amx_Release(amx, addr);

        //Print the return value (for completeness).
        logprintf("EmitPawnCallback NOTE:  OnPawnCallbackEmitted callback returned %d!", ret);

    }
    return 1;
}


//This function demonstrates: an alternative method to getting strings from pawn- and the possible risks that come with it.
//PAWN native: native PrintPawnString2(const str[]);
cell AMX_NATIVE_CALL PrintPawnString2(AMX* amx, cell* params)
{
    //This method is NOT recomended as the amx_StrParam macro uses the alloca function which is NOT a standard in C, OR C++.
    //Using this method comes with risks of overflowing the stack (If you allocate large amounts of memory) and also
    //gives you the risk of bugs (this function is machine AND compiler dependent- some implementations are said to be bugged).

    char* text = NULL;
    amx_StrParam(amx, params[1], text);

    //Check if text is null
    if(text != NULL)
    {
        //Use logprintf to print out string (text). We dont use std::cout because it doesnt write to the server log (only the window).
        logprintf(text);
    }
    return 1;
}

//This function demonstrates: how to modify a PAWN string.
//PAWN native: native SetPawnString(str[], len = sizeof(str));
cell AMX_NATIVE_CALL SetPawnString(AMX* amx, cell* params)
{
    const string message = "This is a string from C/++!!";
    cell* addr = NULL;

    //Get the address of our string parameter (str) and store our message
    amx_GetAddr(amx, params[1], &addr);
    amx_SetString(addr, message.c_str(), 0, 0, params[2]);
    return 1;
}

//This function demonstrates: how to cast a float to a PAWN float.
//PAWN native: native Float:ReturnPawnFloatVal();
cell AMX_NATIVE_CALL ReturnPawnFloatVal(AMX* amx, cell* params)
{
    //Since PAWN is a typeless language it stores everything as a 32bit integer and relies on tags to handle special data.
    //A floating point number is no exception to this; It's a still 32bit int, but it has a Float tag to show that it shouldnt
    //be treated like an regular integer. So how do we convert a float to an 32bit integer (for PAWN) without losing data?
    //The answer is the amx_ftoc macro!

    //The macro amx_ftoc type casts a float into a cell while preserving its bit pattern (amx_ctof does the inverse).
    const float f = 22.624f;
    return amx_ftoc(f);
}

//This function demonstrates: How to pass parameters by reference.
//PAWN native: native SetPawnReferenceVars(&value1, &Float:value2);
cell AMX_NATIVE_CALL SetPawnReferenceVars(AMX* amx, cell* params)
{
    const int val = 65;
    const float val2 = 84.54f;

    cell* addr[2] = {NULL, NULL};

    //Get the addresses of "value1" and "value2"
    amx_GetAddr(amx, params[1], &addr[0]);
    amx_GetAddr(amx, params[2], &addr[1]);

    //Dereference our pointers and assign our values. Remember to ALWAYS use the macro "amx_ftoc" to convert floats into
    //cells (the appropriate float format for PAWN)!
    *addr[0] = val;
    *addr[1] = amx_ftoc(val2);

    return 1;
}

//This function demonstrates: how to get and modify array values.
//PAWN native: native PrintPawnArray(arr[], size = sizeof(arr));
cell AMX_NATIVE_CALL PrintPawnArray(AMX* amx, cell* params)
{
    //Make sure there's something to print...
    if(params[2] > 0)
    {
        cell* addr = NULL;

        //Get the address of the first value in our PAWN array.
        amx_GetAddr(amx, params[1], &addr);

        for(int i = 0, l = params[2]; i < l; i++)
        {
            //This is pretty straight forward: We dereference the addr pointer to get our value to print.
            //You should know this already, but arrays and pointers are almost the same thing, so we can use pointer
            //arithmetic to add an offset OR just use the subscript operator (in the end *(addr+1) and addr[1] are the same).
            logprintf("arr[%d] = %d", i, *(addr + i));

            //If you wanted to modify the array you would just change its value by dereferencing addr and assigning a new value.
            //You should know this as well, im just adding it in for completeness. Here we change the first value of our array
            //to 5 (Note: Since its the first value, no offset it used).

            // *(addr) = 5;
        }
    }
    return 1;
}

//This function demonstrates: setting up invoke (fetching the addresses of our natives).
//PAWN native: native Invoke_GetAddresses();
cell AMX_NATIVE_CALL Invoke_GetAddresses(AMX* amx, cell* params)
{
    return g_Invoke->getAddresses();
}

//This function demonstrates: how to use invoke to call SA-MP natives.
//PAWN native: native WhereIsPlayer(playerid);
cell AMX_NATIVE_CALL WhereIsPlayer(AMX* amx, cell* params)
{
    float
        x = NULL,
        y = NULL,
        z = NULL;

    //Get the player's position (and check to see if he is even connected).
    if(g_Invoke->callNative(&PAWN::GetPlayerPos, params[1], &x, &y, &z))
    {
        char name[24];

        //Get the rest of the player's information (name, interior, and virtualworld) and print it.
        g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);
        int interior = g_Invoke->callNative(&PAWN::GetPlayerInterior, params[1]);
        int virtualworld = g_Invoke->callNative(&PAWN::GetPlayerVirtualWorld, params[1]);

        logprintf("%s is at X: %.2f, Y: %.2f, Z: %.2f (Virtual world: %d, Interior %d).", name, x, y, z, virtualworld, interior);
        return 1;

    }
    return 0;
}

//This function demonstrates: how to write a native to act as a callback.
//PAWN native: native TEST_Hook_OnPlayerConnnect(playerid);
cell AMX_NATIVE_CALL TEST_Hook_OnPlayerConnnect(AMX* amx, cell* params)
{
    //Get the players name
    char name[24];
    g_Invoke->callNative(&PAWN::GetPlayerName, params[1], name);

    //Check if his name is "Mario".
    if(string("Mario") == name)
    {
        //If it is send our funny little message and kick him.
        g_Invoke->callNative(&PAWN::SendClientMessage, params[1], 0xFFFFFFFF, "Sorry {FF0000}Mario, {FFFFFF}but your princess is in another server.");
        g_Invoke->callNative(&PAWN::Kick, params[1]);
    }
    return 1;
}


//This function tells the server what capabilities our plugin will have based on what it returns. Generally we only use 3 support flags
//in plugins: SUPPORTS_VERSION, SUPPORTS_AMX_NATIVES, and SUPPORTS_PROCESS_TICK.
PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports()
{
    //Note: If you're using the ProccessTick function, remember to export it in the .def file!
    return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES | SUPPORTS_PROCESS_TICK;
}

//The Load function is pretty straight forward. This is called when the plugin is loaded and gets passed an array of addresses that the plugin
//will use to function. The two indexes we typically use are PLUGIN_DATA_AMX_EXPORTS, and PLUGIN_DATA_LOGPRINTF.
PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData)
{
    //allocate memory for out g_Invoke instance
    g_Invoke = new Invoke;

    //Assign the addresses of our AMX function table/logprintf function to their corasponding pointers.
    pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
    logprintf = (logprintf_t) ppData[PLUGIN_DATA_LOGPRINTF];

    logprintf("* Test plugin was loaded.");
    return true;
}

//Unload is called when the plugin is unloaded (server shutdown).
PLUGIN_EXPORT void PLUGIN_CALL Unload()
{
    logprintf("* Test plugin was unloaded.");
}

//Our array of native info for amx_Register (function name and address).
AMX_NATIVE_INFO PluginNatives[] =
{
    {"PrintPawnString", PrintPawnString},
    {"PrintPawnString2", PrintPawnString2},
    {"SetPawnString", SetPawnString},
    {"ReturnPawnFloatVal", ReturnPawnFloatVal},
    {"SetPawnReferenceVars", SetPawnReferenceVars},
    {"PrintPawnArray", PrintPawnArray},
    {"EmitPawnCallback", EmitPawnCallback},
    {"WhereIsPlayer", WhereIsPlayer},
    {"Invoke_GetAddresses", Invoke_GetAddresses},
    {"TEST_Hook_OnPlayerConnnect", TEST_Hook_OnPlayerConnnect},
    {0, 0}
};

//This function is called when a new AMX instance is loaded into the server. This will be called for every filterscript/gamemode! Because of this it isnt
//a good idea to store a single AMX instance for the entire plugin, instead use a queue/list/vector. In this function we also register our custom
//native functions we wish to provide PAWN with.
PLUGIN_EXPORT int PLUGIN_CALL AmxLoad( AMX *amx )
{
    //Any time a script is loaded we want to add it to invoke's AMX list, so we push back the list with the instance.
    g_Invoke->amx_list.push_back(amx);
    return amx_Register(amx, PluginNatives, -1);
}

//This function is called when every an AMX instance is unloaded. If you store AMX instances, make sure you remove them. Otherwise you'll have instances to
//non-existing gamemodes/filterscripts.
PLUGIN_EXPORT int PLUGIN_CALL AmxUnload( AMX *amx )
{
    //Every script that is unloaded needs to get removed from our AMX instance list. So we iterate through our list and find the instance that is being
    //unloaded, and we earase it from the list.
    for(list<AMX *>::iterator i = g_Invoke->amx_list.begin(); i != g_Invoke->amx_list.end(); ++i)
    {
        if(*i == amx)
        {
            g_Invoke->amx_list.erase(i);
            break;
        }
    }
    return AMX_ERR_NONE;
}

//ProcessTick is a function that gets called on every iteration of the server's loop. People generally use this function as a method of managing time by
//keeping track of the amount of ticks that have passed. The SA-MP server is said to have a sleep time of 5ms, so if 50 ticks go by you have an idea of
// the elapsed time (5 * 50 = 250ms). Note: Anyone who uses threads in their plugins and require PAWN interaction needs to use this function to ensure
//PAWN isnt busy doing another task!
PLUGIN_EXPORT void PLUGIN_CALL ProcessTick()
{
    static int tick = 0;
    const int NYAN_COUNT = 100;

    tick++;

    //Use the modulo operator to see if NYAN_COUNT ticks have passed (100 tick. 5ms sleep time * 100 ticks = 500ms).
    if(!(tick % NYAN_COUNT))
    {
        //If 100 ticks have passed send our funny little message to everyone.
        const char nyan[] = "{FF0000}NYAN {FFA500}NYAN {FFFF00}NYAN {00FF00}NYAN {0000FF}NYAN {551A8B}NYAN";
        g_Invoke->callNative(&PAWN::SendClientMessageToAll, 0, nyan);
    }
}
```

## Special thanks

**RyDeR`** - For contributing the pictures from his plugin tutorial.

**Incognito** - For Invoke, information about ProcessTick, and for all the help over my time learning C++.

**Zeex/0x5A656578** - For GDK (will be included some time), and for volunteering to answer questions about GDK.

**Y_Less** - For being generally awesome and constantly helping me when ever im completely baffled.

**Techboy123** - For a ton of productive chats, help, and for listening to my complaints.
