package main

import (
	"fmt"

	"github.com/tkrajina/typescriptify-golang-structs/typescriptify"

	"github.com/openmultiplayer/web/server/src/api/auth/discord"
	"github.com/openmultiplayer/web/server/src/api/auth/github"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
)

// -
//
// What is this!?
//
// This generates TypeScript types from Go structures. This is useful for
// keeping the frontend's type signatures in line with the backend's structures.
//
// Run this task after modifying any the Prisma schema or any of the response
// payloads used by the API.
//
// If you use the Taskfile task `generate` this will be done automatically.
//
// -

func convert(prefix, out string, objs ...interface{}) {
	t := typescriptify.New()
	t.BackupDir = ""
	t.Prefix = prefix

	for _, i := range objs {
		t.Add(i)
	}

	if err := t.ConvertToFile("frontend/src/types/generated_" + out + ".ts"); err != nil {
		panic(err.Error())
	}
}

func main() {
	convert("API", "error", web.Error{})
	convert("", "server", db.ServerModel{})
	convert("", "user", db.UserModel{})

	convert("GitHub", "githubAuth", github.Link{}, github.Callback{})
	convert("Discord", "discordAuth", discord.Link{}, discord.Callback{})

	fmt.Println("DONE")
}
