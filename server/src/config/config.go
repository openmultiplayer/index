package config

import (
	"github.com/kelseyhightower/envconfig"
)

// Config represents environment variable configuration parameters
type Config struct {
	ListenAddr          string `default:"0.0.0.0:8080" split_words:"true"`
	AmqpAddress         string `default:"amqp://rabbit:5672" split_words:"true"`
	HashKey             []byte `required:"true" split_words:"true"`
	BlockKey            []byte `required:"true" split_words:"true"`
	GithubClientID      string `required:"true" split_words:"true"`
	GithubClientSecret  string `required:"true" split_words:"true"`
	DiscordClientID     string `required:"true" split_words:"true"`
	DiscordClientSecret string `required:"true" split_words:"true"`
	SendgridAPIKey      string `required:"true" split_words:"true"`
	GithubToken         string `required:"true" split_words:"true"`
	DocsSourcesPath     string `required:"false" split_words:"false" default:"docs/"`
	DocsIndexPath       string `required:"false" split_words:"false" default:"docs.bleve"`
	PackagesDB          string `required:"false" split_words:"true"  default:"/data/packages.db"`
}

func New() (c Config, err error) {
	if err = envconfig.Process("", &c); err != nil {
		return c, err
	}

	return
}
