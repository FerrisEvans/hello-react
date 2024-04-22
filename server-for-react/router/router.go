package router

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"server-for-react/config"
	"server-for-react/controller"
)

func Router() *gin.Engine {
	router := gin.Default()
	router.Use(cors())

	studentController := controller.NewStudentController(config.GetDB())

	stu := router.Group("/stu")
	{
		stu.GET("/info/:id", studentController.GetStudentByIDHandler)
		stu.GET("/list", studentController.GetAllStudentsHandler)
		stu.POST("", studentController.CreateStudentHandler)
		stu.DELETE("/:id", studentController.DeleteStudentHandler)
		stu.PUT("", studentController.UpdateStudentHandler)
	}

	return router
}

func cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Add("Access-Control-Max-Age", "86400")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}
		c.Next()
	}
}
