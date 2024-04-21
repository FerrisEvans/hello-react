CREATE TABLE `student`
(
    `id`         int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT '自增ID',
    `created_at` datetime default now(),
    `updated_at` datetime default now(),
    `deleted_at` datetime default null,
    `name` varchar(64),
    `gender` int default 1,
    `age` int,
    `address` varchar(100) default null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;