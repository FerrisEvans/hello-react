package main

import (
	"fmt"
	"server-for-react/model"
)

func main() {
	//router := gin.Default()
	//_ = router.Run(":8080")

	student, err := model.GetStudentById(1)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Found student:", student)
	}

	model.CreateStudent(&model.Student{Name: "stu-3", Gender: 1, Age: 22, Address: "addr 3"})
	fmt.Println("New student added:", student)

	err = model.UpdateStudent(2, &model.Student{Id: 2, Name: "updated stu-2", Gender: 2, Age: 30, Address: "updated addr 2"})
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Student updated successfully")
	}

	err = model.DeleteStudentById(1)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Student deleted successfully")
	}
}
