package router

import (
	"github.com/gin-gonic/gin"
	"server-for-react/config"
	"server-for-react/controller"
)

func Router() *gin.Engine {
	router := gin.Default()

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
