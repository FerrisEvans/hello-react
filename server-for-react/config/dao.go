package config

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	//定义全局的db对象，我们执行数据库操作主要通过他实现。
	_db *gorm.DB
)

func init() {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local&timeout=%ss", Username, Pwd, Host, Port, Db, Timeout)
	fmt.Println(dsn)
	_db, _ = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	sqlDb, _ := _db.DB()
	//设置数据库连接池参数
	sqlDb.SetMaxOpenConns(100) //设置数据库连接池最大连接数
	sqlDb.SetMaxIdleConns(20)  //连接池最大允许的空闲连接数，如果没有sql任务需要执行的连接数大于20，超过的连接会被连接池关闭。

}

// GetDB 获取gorm db对象，其他包需要执行数据库查询的时候，只要通过tools.getDB()获取db对象即可。
// 不用担心协程并发使用同样的db对象会共用同一个连接，db对象在调用他的方法的时候会从数据库连接池中获取新的连接
func GetDB() *gorm.DB {
	return _db
}
