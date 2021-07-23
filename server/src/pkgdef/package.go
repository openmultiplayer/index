package pkgdef

import (
	"fmt"
	"time"

	"github.com/Southclaws/sampctl/pawnpackage"
)

// Classification represents how compatible or easy to use a package is. If a package contains a
// package definition file, it's of a higher classification than one that does not contain one.
type Classification string

var (
	ClassificationInvalid     Classification = "invalid"
	ClassificationPawnPackage Classification = "full"
	ClassificationBarebones   Classification = "basic"
	ClassificationBuried      Classification = "buried"
)

// Package wraps types.Package and adds extra fields
type Package struct {
	pawnpackage.Package
	Classification Classification `json:"classification"` // classification represents how conformative the package is
	Stars          int            `json:"stars"`          // GitHub stars
	Updated        time.Time      `json:"updated"`        // last updated
	Topics         []string       `json:"topics"`         // GitHub topics
	Tags           []string       `json:"tags"`           // Git tags
}

func (p *Package) String() string {
	return fmt.Sprintf("%s/%s", p.User, p.Repo)
}
