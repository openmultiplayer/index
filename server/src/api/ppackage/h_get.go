package ppackage

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *PackagesService) get(w http.ResponseWriter, r *http.Request) {
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

	json.NewEncoder(w).Encode(p) //nolint:errcheck
}
