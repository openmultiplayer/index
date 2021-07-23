package pkgstorage

import "github.com/openmultiplayer/web/server/src/pkgdef"

type Storer interface {
	GetAll() ([]pkgdef.Package, error)
	Get(string) (pkgdef.Package, bool, error)
	Set(pkgdef.Package) error

	MarkForScrape(string) error
	GetMarked() ([]string, error)
}
