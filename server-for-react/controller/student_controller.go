package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"net/http"
	"server-for-react/model"
	"server-for-react/service"
	"strconv"
)

type StudentController struct {
	StudentService service.StudentService
}

func NewStudentController(db *gorm.DB) *StudentController {
	return &StudentController{
		StudentService: &service.StudentServiceImpl{DB: db},
	}
}

// localhost:8080/stu/list
func (ctrl *StudentController) GetAllStudentsHandler(c *gin.Context) {
	students := ctrl.StudentService.GetAllStudents()
	c.JSON(http.StatusOK, students)
}

func (ctrl *StudentController) GetStudentByIDHandler(c *gin.Context) {
	id := c.Param("id")
	studentID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid student ID"})
		return
	}

	var student model.Student
	student = ctrl.StudentService.GetStudentById(studentID)
	c.JSON(http.StatusOK, student)
}

func (ctrl *StudentController) CreateStudentHandler(c *gin.Context) {
	var student model.Student
	if err := c.ShouldBindJSON(&student); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctrl.StudentService.CreateStudent(&student)

	c.JSON(http.StatusCreated, student)
}

// UpdateStudentHandler 更新学生信息的处理函数
func (ctrl *StudentController) UpdateStudentHandler(c *gin.Context) {

	var updatedStudent model.Student
	if err := c.ShouldBindJSON(&updatedStudent); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	ctrl.StudentService.UpdateStudent(&updatedStudent)

	c.JSON(http.StatusOK, gin.H{"message": "Student updated successfully"})
}

// DeleteStudentHandler 删除学生信息的处理函数
func (ctrl *StudentController) DeleteStudentHandler(c *gin.Context) {
	id := c.Param("id")
	studentID, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid student ID"})
		return
	}

	ctrl.StudentService.DeleteStudentById(studentID)
	c.JSON(http.StatusOK, gin.H{"message": "Student deleted successfully"})
}
