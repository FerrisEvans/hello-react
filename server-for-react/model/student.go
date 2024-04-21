package model

import "errors"

var arr = []*Student{
	{1, "stu-1", 0, 18, "addr 1"},
	{2, "stu-2", 2, 28, "addr 2"},
}

type Student struct {
	Id      int
	Name    string
	Gender  int
	Age     int
	Address string
}

func GetStudentById(id int) (*Student, error) {
	for _, s := range arr {
		if s.Id == id {
			return s, nil
		}
	}
	return nil, errors.New("student not found")
}

func CreateStudent(student *Student) *Student {
	// Find the maximum ID
	maxID := 0
	for _, s := range arr {
		if s.Id > maxID {
			maxID = s.Id
		}
	}
	// Assign a new ID
	student.Id = maxID + 1
	arr = append(arr, student)
	return student
}

func UpdateStudent(id int, updatedStudent *Student) error {
	for i, s := range arr {
		if s.Id == id {
			arr[i] = updatedStudent
			return nil
		}
	}
	return errors.New("student not found")
}

func DeleteStudentById(id int) error {
	for i, s := range arr {
		if s.Id == id {
			arr = append(arr[:i], arr[i+1:]...)
			return nil
		}
	}
	return errors.New("student not found")
}
