package discord

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type service struct {
	auth *authentication.State
	oa2  authentication.OAuthProvider
}

func New(a *authentication.State, oa2 authentication.OAuthProvider) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{
		auth: a,
		oa2:  oa2,
	}

	rtr.Get("/link", http.HandlerFunc(svc.link))
	rtr.Post("/callback", http.HandlerFunc(svc.callback))

	return rtr
}

type Link struct {
	URL string `json:"url"`
}

func (s *service) link(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(Link{URL: s.oa2.Link()}) //nolint:errcheck
}

type Callback struct {
	State string `json:"state"`
	Code  string `json:"code"`
}

func (s *service) callback(w http.ResponseWriter, r *http.Request) {
	var payload Callback
	if err := web.DecodeBody(r, &payload); err != nil {
		web.StatusBadRequest(w, errors.Wrap(err, "failed to decode callback payload"))
		return
	}

	user, err := s.oa2.Login(r.Context(), payload.State, payload.Code)
	if err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	s.auth.EncodeAuthCookie(w, *user)
	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
