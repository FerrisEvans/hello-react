package main

import "server-for-react/router"

func main() {
	r := router.Router()
	_ = r.Run(":8080")
}
