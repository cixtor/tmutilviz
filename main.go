package main

import (
	"html/template"
	"net/http"

	"github.com/cixtor/middleware"
)

func main() {
	router := middleware.New()

	router.GET("/", index)

	router.STATIC("build/static", "/static")

	router.ListenAndServe(":3000")
}

func index(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("build/index.html")

	if err != nil {
		panic(err)
	}

	t.Execute(w, struct{}{})
}
