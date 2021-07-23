package pkgstorage

import (
	"encoding/json"

	bolt "go.etcd.io/bbolt"

	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/pkgdef"
)

var packagesBucket = []byte("packages")

type DB struct {
	db *bolt.DB
}

type Entry struct {
	Pkg    pkgdef.Package
	Marked bool
}

func New(cfg config.Config) (Storer, error) {
	db, err := bolt.Open(cfg.PackagesDB, 0o666, nil)
	if err != nil {
		return nil, err
	}

	if err := db.Update(func(t *bolt.Tx) error {
		_, err := t.CreateBucketIfNotExists(packagesBucket)
		if err != nil {
			return err
		}
		return nil
	}); err != nil {
		return nil, err
	}

	return &DB{
		db: db,
	}, nil
}

func (db *DB) Close() error {
	return db.db.Close()
}

func (db *DB) GetAll() ([]pkgdef.Package, error) {
	packages := []pkgdef.Package{}

	if err := db.db.View(func(t *bolt.Tx) error {
		bkt := t.Bucket(packagesBucket)
		cur := bkt.Cursor()

		for k, _ := cur.First(); k != nil; k, _ = cur.Next() {
			raw := bkt.Get(k)
			var e Entry
			if err := json.Unmarshal(raw, &e); err != nil {
				return err
			}
			if e.Pkg.Repo == "" {
				continue
			}

			packages = append(packages, e.Pkg)
		}

		return nil
	}); err != nil {
		return nil, err
	}
	return packages, nil
}

func (db *DB) Get(name string) (pkg pkgdef.Package, exists bool, err error) {
	if err := db.db.View(func(t *bolt.Tx) error {
		bkt := t.Bucket(packagesBucket)
		raw := bkt.Get([]byte(name))

		if raw == nil {
			return nil
		}

		var p Entry
		if err := json.Unmarshal(raw, &p); err != nil {
			return err
		}
		if p.Pkg.User == "" {
			return nil
		}

		pkg = p.Pkg
		exists = true

		return nil
	}); err != nil {
		return pkg, false, err
	}
	return
}

func (db *DB) Set(p pkgdef.Package) error {
	return db.db.Update(func(t *bolt.Tx) error {
		bkt, err := t.CreateBucketIfNotExists(packagesBucket)
		if err != nil {
			return err
		}

		raw, err := json.Marshal(Entry{p, false})
		if err != nil {
			return err
		}

		if err := bkt.Put([]byte(p.String()), raw); err != nil {
			return err
		}

		return nil
	})
}

func (db *DB) MarkForScrape(name string) error {
	return db.db.Update(func(t *bolt.Tx) error {
		bkt, err := t.CreateBucketIfNotExists(packagesBucket)
		if err != nil {
			return err
		}

		var e Entry

		// First check if the entry already exists
		if entry := bkt.Get([]byte(name)); entry != nil {
			if err := json.Unmarshal(entry, &e); err != nil {
				return err
			}
		}

		e.Marked = true

		raw, err := json.Marshal(e)
		if err != nil {
			return err
		}

		if err := bkt.Put([]byte(name), raw); err != nil {
			return err
		}

		return nil
	})
}

func (db *DB) GetMarked() ([]string, error) {
	packages := []string{}

	if err := db.db.View(func(t *bolt.Tx) error {
		bkt := t.Bucket(packagesBucket)
		cur := bkt.Cursor()

		for k, _ := cur.First(); k != nil; k, _ = cur.Next() {
			raw := bkt.Get(k)
			var e Entry
			if err := json.Unmarshal(raw, &e); err != nil {
				return err
			}

			if e.Marked {
				packages = append(packages, string(k))
			}
		}

		return nil
	}); err != nil {
		return nil, err
	}
	return packages, nil
}
