package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Res struct {
	Code int         `json:"code"`
	Msg  string      `json:"msg"`
	Data interface{} `json:"data"`
}

func Success(c *gin.Context, data interface{}) {
	json := &Res{
		Code: 200,
		Msg:  "Success",
		Data: data,
	}
	c.JSON(http.StatusOK, json)
}

func Error(c *gin.Context, code int, msg string) {
	json := &Res{
		Code: code,
		Msg:  msg,
	}
	c.JSON(http.StatusInternalServerError, json)
}
