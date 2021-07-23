package servers

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/serververify"
)

type ServersService struct {
	R        chi.Router
	storer   serverdb.Storer
	queryer  queryer.Queryer
	verifier *serververify.Verifyer
}

func New(
	storer serverdb.Storer,
	queryer queryer.Queryer,
	verifier *serververify.Verifyer,
) *ServersService {
	router := chi.NewRouter()

	router.Use(
		cors.Handler(cors.Options{
			AllowedOrigins: []string{
				"*", // Any browser instance
			},
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: false,
			MaxAge:           300,
		}),
	)

	svc := &ServersService{router, storer, queryer, verifier}

	router.Get("/{address}", svc.get)
	router.Get("/", svc.list)
	router.Post("/", svc.add)
	router.
		With(authentication.MustBeAuthenticated).
		Get("/{address}/vertify", svc.vertify)

	return svc
}
