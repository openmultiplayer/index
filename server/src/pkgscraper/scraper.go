package pkgscraper

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"github.com/Southclaws/sampctl/pawnpackage"
	"github.com/Southclaws/sampctl/versioning"
	"github.com/google/go-github/github"
	"github.com/pkg/errors"
	"go.uber.org/zap"
	"gopkg.in/yaml.v2"

	"github.com/openmultiplayer/web/server/src/pkgdef"
)

// Scraper is responsible for taking a repo and checking its contents for the qualifying
// properties of a Pawn Package. This includes the presence of one or more .inc files and optionally
// a pawn.json or pawn.yaml file. If one of these files exists, additional information is extracted.
type Scraper interface {
	Scrape(context.Context, string) (*pkgdef.Package, error)
}

type GitHubScraper struct {
	GitHub *github.Client
}

func NewGitHubScraper(gh *github.Client) Scraper {
	return &GitHubScraper{gh}
}

func (g *GitHubScraper) Scrape(ctx context.Context, name string) (*pkgdef.Package, error) {
	splitname := strings.Split(name, "/")

	repo, resp, err := g.GitHub.Repositories.Get(ctx, splitname[0], splitname[1])
	if err != nil {
		return nil, errors.Wrap(err, "failed to get repo metadata from github")
	}
	if resp.Rate.Remaining < 100 {
		time.Sleep(time.Hour)
	}

	meta := versioning.DependencyMeta{
		User: repo.Owner.GetLogin(),
		Repo: repo.GetName(),
	}

	if meta.User == "" || meta.Repo == "" {
		return nil, errors.New("repository details empty")
	}

	var processedPackage pkgdef.Package // the result - a package with some additional metadata
	pkg, err := packageFromRepo(repo, meta)
	if err != nil {
		processedPackage, err = g.findPawnSource(ctx, repo, meta)
		if err != nil {
			return nil, err
		}
	} else {
		processedPackage = pkgdef.Package{
			Package:        pkg,
			Classification: pkgdef.ClassificationPawnPackage,
		}
	}

	if processedPackage.User == "" {
		processedPackage.User = meta.User
	}
	if processedPackage.Repo == "" {
		processedPackage.Repo = meta.Repo
	}

	if processedPackage.Classification == pkgdef.ClassificationInvalid {
		return nil, nil
	}

	// add some generic info
	processedPackage.Stars = repo.GetStargazersCount()
	processedPackage.Updated = repo.GetUpdatedAt().Time
	processedPackage.Topics = repo.Topics

	tags, _, err := g.GitHub.Repositories.ListTags(ctx, meta.User, meta.Repo, nil)
	if err != nil {
		return nil, errors.Wrap(err, "failed to list repo tags")
	}
	for _, tag := range tags {
		processedPackage.Tags = append(processedPackage.Tags, tag.GetName())
	}

	return &processedPackage, nil
}

// packageFromRepo attempts to get a package from the given package definition's public repo
func packageFromRepo(
	repo *github.Repository,
	meta versioning.DependencyMeta,
) (pkg pawnpackage.Package, err error) {
	client := http.Client{Timeout: time.Second * 10}
	body := bytes.NewBuffer(nil)

	request, err := http.NewRequest(http.MethodGet, fmt.Sprintf(
		"https://raw.githubusercontent.com/%s/%s/%s/pawn.json",
		meta.User, meta.Repo, *repo.DefaultBranch,
	), body)
	if err != nil {
		return
	}

	resp, err := client.Do(request)
	if err != nil {
		return
	}
	if resp.StatusCode == 200 {
		var contents []byte
		contents, err = ioutil.ReadAll(resp.Body)
		if err != nil {
			return
		}
		err = json.Unmarshal(contents, &pkg)
		return
	}

	zap.L().Debug("repo does not contain a pawn.json",
		zap.String("meta", meta.String()))

	resp, err = http.Get(fmt.Sprintf(
		"https://raw.githubusercontent.com/%s/%s/%s/pawn.yaml",
		meta.User, meta.Repo, *repo.DefaultBranch,
	))
	if err != nil {
		return
	}
	if resp.StatusCode == 200 {
		var contents []byte
		contents, err = ioutil.ReadAll(resp.Body)
		if err != nil {
			return
		}
		err = yaml.Unmarshal(contents, &pkg)
		return
	}

	zap.L().Debug("repo does not contain a pawn.yaml",
		zap.String("meta", meta.String()))

	return pkg, errors.New("package does not point to a valid remote package")
}

func (g *GitHubScraper) findPawnSource(ctx context.Context, repo *github.Repository, meta versioning.DependencyMeta) (pkg pkgdef.Package, err error) {
	ref, _, err := g.GitHub.Git.GetRef(ctx, meta.User, meta.Repo,
		fmt.Sprintf("heads/%s", repo.GetDefaultBranch()))
	if err != nil {
		err = errors.Wrap(err, "failed to get HEAD ref from default branch")
		return
	}

	sha := ref.GetObject().GetSHA()
	tree, _, err := g.GitHub.Git.GetTree(ctx, meta.User, meta.Repo, sha, true)
	if err != nil {
		err = errors.Wrap(err, "failed to get git tree")
		return
	}

	pkg = pkgdef.Package{Package: pawnpackage.Package{DependencyMeta: meta}}

	for _, file := range tree.Entries {
		ext := filepath.Ext(file.GetPath())
		if ext == ".inc" || ext == ".pwn" {
			if filepath.Dir(file.GetPath()) == "." {
				pkg.Classification = pkgdef.ClassificationBarebones
				break
			} else {
				pkg.Classification = pkgdef.ClassificationBuried
				// no break, keep searching
			}
		}
	}

	return
}
