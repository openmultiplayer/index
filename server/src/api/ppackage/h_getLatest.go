package ppackage

import (
	"fmt"
	"net/http"

	"github.com/Masterminds/semver"
	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *PackagesService) getLatest(w http.ResponseWriter, r *http.Request) {
	user := chi.URLParam(r, "user")
	repo := chi.URLParam(r, "repo")

	p, exists, err := s.store.Get(fmt.Sprintf("%s/%s", user, repo))
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	if !exists {
		web.StatusNotFound(w, nil)
		return
	}

	if len(p.Tags) == 0 {
		w.WriteHeader(http.StatusNoContent)
		return
	}
	latest, err := semver.NewVersion(p.Tags[0])
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	w.Header().Set("Content-Type", "application/octet-stream")
	_, err = w.Write([]byte{
		byte(latest.Major()),
		byte(latest.Minor()),
		byte(latest.Patch()),
	})
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
}
