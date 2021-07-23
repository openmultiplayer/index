package pkgstorage

import (
	"os"
	"reflect"
	"testing"
	"time"

	"github.com/Southclaws/sampctl/pawnpackage"
	"github.com/Southclaws/sampctl/versioning"

	"github.com/openmultiplayer/web/server/src/pkgdef"
)

var (
	database *DB
	now      = time.Date(2020, 1, 1, 1, 1, 1, 1, time.UTC)
)

func TestMain(m *testing.M) {
	os.Remove("packages.db")
	db, err := New()
	if err != nil {
		panic(err)
	}
	database = db

	os.Exit(m.Run())
}

func TestDB_Set(t *testing.T) {
	type args struct {
		p pkgdef.Package
	}
	tests := []struct {
		name    string
		db      *DB
		args    args
		wantErr bool
	}{
		{"insert 1", database, args{pkgdef.Package{
			Package: pawnpackage.Package{
				DependencyMeta: versioning.DependencyMeta{
					User: "Southclaws",
					Repo: "TestPackage1",
				},
			},
			Classification: pkgdef.ClassificationPawnPackage,
			Stars:          100,
			Updated:        now,
		}}, false},
		{"insert 2", database, args{pkgdef.Package{
			Package: pawnpackage.Package{
				DependencyMeta: versioning.DependencyMeta{
					User: "Southclaws",
					Repo: "TestPackage2",
				},
			},
			Classification: pkgdef.ClassificationPawnPackage,
			Stars:          100,
			Updated:        now,
		}}, false},
		{"insert 3", database, args{pkgdef.Package{
			Package: pawnpackage.Package{
				DependencyMeta: versioning.DependencyMeta{
					User: "Southclaws",
					Repo: "TestPackage3",
				},
			},
			Classification: pkgdef.ClassificationPawnPackage,
			Stars:          100,
			Updated:        now,
		}}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := tt.db.Set(tt.args.p); (err != nil) != tt.wantErr {
				t.Errorf("DB.Set() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestDB_Get(t *testing.T) {
	type args struct {
		name string
	}
	tests := []struct {
		name       string
		db         *DB
		args       args
		wantPkg    pkgdef.Package
		wantExists bool
		wantErr    bool
	}{
		{"get 1", database, args{"Southclaws/TestPackage1"}, pkgdef.Package{
			Package: pawnpackage.Package{
				DependencyMeta: versioning.DependencyMeta{
					User: "Southclaws",
					Repo: "TestPackage1",
				},
			},
			Classification: pkgdef.ClassificationPawnPackage,
			Stars:          100,
			Updated:        now,
		}, true, false},
		{"get 2", database, args{"Southclaws/TestPackage2"}, pkgdef.Package{
			Package: pawnpackage.Package{
				DependencyMeta: versioning.DependencyMeta{
					User: "Southclaws",
					Repo: "TestPackage2",
				},
			},
			Classification: pkgdef.ClassificationPawnPackage,
			Stars:          100,
			Updated:        now,
		}, true, false},
		{"get 3", database, args{"Southclaws/TestPackage3"}, pkgdef.Package{
			Package: pawnpackage.Package{
				DependencyMeta: versioning.DependencyMeta{
					User: "Southclaws",
					Repo: "TestPackage3",
				},
			},
			Classification: pkgdef.ClassificationPawnPackage,
			Stars:          100,
			Updated:        now,
		}, true, false},
		{"get none", database, args{"none"}, pkgdef.Package{}, false, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotPkg, gotExists, err := tt.db.Get(tt.args.name)
			if (err != nil) != tt.wantErr {
				t.Errorf("DB.Get() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(gotPkg, tt.wantPkg) {
				t.Errorf("DB.Get() gotPkg = %v, want %v", gotPkg, tt.wantPkg)
			}
			if gotExists != tt.wantExists {
				t.Errorf("DB.Get() gotExists = %v, want %v", gotExists, tt.wantExists)
			}
		})
	}
}

func TestDB_GetAll(t *testing.T) {
	tests := []struct {
		name    string
		db      *DB
		want    []pkgdef.Package
		wantErr bool
	}{
		{"all", database, []pkgdef.Package{
			{
				Package: pawnpackage.Package{
					DependencyMeta: versioning.DependencyMeta{
						User: "Southclaws",
						Repo: "TestPackage1",
					},
				},
				Classification: pkgdef.ClassificationPawnPackage,
				Stars:          100,
				Updated:        now,
			},
			{
				Package: pawnpackage.Package{
					DependencyMeta: versioning.DependencyMeta{
						User: "Southclaws",
						Repo: "TestPackage2",
					},
				},
				Classification: pkgdef.ClassificationPawnPackage,
				Stars:          100,
				Updated:        now,
			},
			{
				Package: pawnpackage.Package{
					DependencyMeta: versioning.DependencyMeta{
						User: "Southclaws",
						Repo: "TestPackage3",
					},
				},
				Classification: pkgdef.ClassificationPawnPackage,
				Stars:          100,
				Updated:        now,
			},
		}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := tt.db.GetAll()
			if (err != nil) != tt.wantErr {
				t.Errorf("DB.GetAll() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("DB.GetAll() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestDB_MarkForScrape(t *testing.T) {
	type args struct {
		name string
	}
	tests := []struct {
		name    string
		db      *DB
		args    args
		wantErr bool
	}{
		{"mark 2", database, args{"Southclaws/TestPackage2"}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := tt.db.MarkForScrape(tt.args.name); (err != nil) != tt.wantErr {
				t.Errorf("DB.MarkForScrape() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestDB_GetMarked(t *testing.T) {
	tests := []struct {
		name    string
		db      *DB
		want    []string
		wantErr bool
	}{
		{"marked", database, []string{
			"Southclaws/TestPackage2",
		}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := tt.db.GetMarked()
			if (err != nil) != tt.wantErr {
				t.Errorf("DB.GetMarked() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("DB.GetMarked() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestDB_MarkForScrape2(t *testing.T) {
	type args struct {
		name string
	}
	tests := []struct {
		name    string
		db      *DB
		args    args
		wantErr bool
	}{
		{"mark 3", database, args{"Southclaws/TestPackage3"}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := tt.db.MarkForScrape(tt.args.name); (err != nil) != tt.wantErr {
				t.Errorf("DB.MarkForScrape() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestDB_GetMarked2(t *testing.T) {
	tests := []struct {
		name    string
		db      *DB
		want    []string
		wantErr bool
	}{
		{"marked", database, []string{
			"Southclaws/TestPackage2",
			"Southclaws/TestPackage3",
		}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got, err := tt.db.GetMarked()
			if (err != nil) != tt.wantErr {
				t.Errorf("DB.GetMarked() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(got, tt.want) {
				t.Errorf("DB.GetMarked() = %v, want %v", got, tt.want)
			}
		})
	}
}

func TestDB_MarkForScrapeUnscraped(t *testing.T) {
	type args struct {
		name string
	}
	tests := []struct {
		name    string
		db      *DB
		args    args
		wantErr bool
	}{
		{"mark nonexistent", database, args{"Southclaws/TestPackage4"}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := tt.db.MarkForScrape(tt.args.name); (err != nil) != tt.wantErr {
				t.Errorf("DB.MarkForScrape() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func TestDB_GetUnscraped(t *testing.T) {
	type args struct {
		name string
	}
	tests := []struct {
		name       string
		db         *DB
		args       args
		wantPkg    pkgdef.Package
		wantExists bool
		wantErr    bool
	}{
		{"get none", database, args{"Southclaws/TestPackage4"}, pkgdef.Package{}, false, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			gotPkg, gotExists, err := tt.db.Get(tt.args.name)
			if (err != nil) != tt.wantErr {
				t.Errorf("DB.Get() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !reflect.DeepEqual(gotPkg, tt.wantPkg) {
				t.Errorf("DB.Get() gotPkg = %v, want %v", gotPkg, tt.wantPkg)
			}
			if gotExists != tt.wantExists {
				t.Errorf("DB.Get() gotExists = %v, want %v", gotExists, tt.wantExists)
			}
		})
	}
}
