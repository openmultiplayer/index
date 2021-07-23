package pkgsearcher_test

import (
	"context"
	"fmt"
	"os"
	"testing"

	"github.com/google/go-github/github"
	"github.com/joho/godotenv" // loads environment variables from .env
	"golang.org/x/oauth2"

	"github.com/openmultiplayer/web/server/src/pkgsearcher"
)

func TestGitHubSearcher_Search(t *testing.T) {
	godotenv.Load("../.env") //nolint:errcheck
	token := os.Getenv("GITHUB_TOKEN")
	if token == "" {
		panic("tests need a token to run.")
	}

	s := pkgsearcher.GitHubSearcher{
		GitHub: github.NewClient(
			oauth2.NewClient(
				context.Background(),
				oauth2.StaticTokenSource(&oauth2.Token{
					AccessToken: token,
				}),
			)),
	}

	results, err := s.Search("topic:pawn-package")
	fmt.Println(err)
	fmt.Println(results)
}
