package ppackage

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

func (s *PackagesService) list(w http.ResponseWriter, r *http.Request) {
	all, err := s.store.GetAll()
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(all) //nolint:errcheck
}
