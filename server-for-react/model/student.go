package model

type Student struct {
	Model
	Name    string
	Gender  int
	Age     int
	Address string
}

func (Student) TableName() string {
	return "student"
}
