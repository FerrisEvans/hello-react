package service

import (
	"gorm.io/gorm"
	"server-for-react/model"
)

type StudentService interface {
	GetAllStudents() []model.Student
	GetStudentById(id int) model.Student
	CreateStudent(stud *model.Student) *model.Student
	UpdateStudent(stud *model.Student)
	DeleteStudentById(id int)
}

type StudentServiceImpl struct {
	DB *gorm.DB
}

func (s *StudentServiceImpl) GetAllStudents() []model.Student {
	db := s.DB
	var students []model.Student
	db.Find(&students)
	return students
}

func (s *StudentServiceImpl) GetStudentById(id int) model.Student {
	db := s.DB
	var student model.Student
	db.First(&student, id)
	return student
}

func (s *StudentServiceImpl) CreateStudent(stud *model.Student) *model.Student {
	db := s.DB
	db.Create(&stud)
	return stud
}

func (s *StudentServiceImpl) UpdateStudent(stud *model.Student) {
	db := s.DB
	db.Save(&stud)
}

func (s *StudentServiceImpl) DeleteStudentById(id int) {
	db := s.DB
	var student model.Student
	db.First(&student, id)
	db.Delete(&student)
}
