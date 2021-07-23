package ppackage

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/pkgstorage"
)

type PackagesService struct {
	R     chi.Router
	store pkgstorage.Storer
}

func New(store pkgstorage.Storer) *PackagesService {
	svc := &PackagesService{chi.NewMux(), store}

	svc.R.Get("/", svc.list)
	svc.R.Get("/package/{user}/{repo}", svc.get)
	svc.R.Get("/package/{user}/{repo}/latest", svc.getLatest)

	return svc
}
