package pkgsearcher

import (
	"context"
	"fmt"
	"time"

	"github.com/google/go-github/github"
	"github.com/pkg/errors"
	"go.uber.org/zap"
)

type Searcher interface {
	Search(...string) ([]string, error)
}

type GitHubSearcher struct {
	GitHub *github.Client
}

func NewGitHubSearcher(gh *github.Client) Searcher {
	return &GitHubSearcher{gh}
}

func (g *GitHubSearcher) Search(queries ...string) ([]string, error) {
	var repos []string
	for _, q := range queries {
		r, err := g.doPagedSearch(q)
		if err != nil {
			zap.L().Warn("paged search failed", zap.Error(err), zap.Int("results", len(r)))
		}
		repos = append(repos, r...)
	}
	return repos, nil
}

func (g *GitHubSearcher) doPagedSearch(query string) (repos []string, err error) {
	page := 0
	for {
		var result []github.Repository
		result, err = g.runQueryForPage(query, page)
		if err != nil {
			break
		}
		if len(result) == 0 {
			break
		}

		for _, r := range result {
			repos = append(repos, fmt.Sprintf("%s/%s", r.Owner.GetLogin(), r.GetName()))
		}
		page += 1
	}
	return
}

func (g *GitHubSearcher) runQueryForPage(query string, page int) (repos []github.Repository, err error) {
	results, resp, err := g.GitHub.Search.Repositories(
		context.Background(),
		query,
		&github.SearchOptions{ListOptions: github.ListOptions{
			Page:    page,
			PerPage: 100,
		}})
	if err != nil {
		return nil, errors.Wrap(err, "failed to search repositories")
	}
	if resp.Rate.Remaining < 100 {
		time.Sleep(time.Hour)
	}

	zap.L().Debug("found repositories",
		zap.Int("count", len(results.Repositories)),
		zap.Int("page", page),
		zap.Int("remaining", resp.Rate.Remaining))

	return results.Repositories, nil
}
