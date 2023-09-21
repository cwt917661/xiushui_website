CREATE TABLE `donate_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `create_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `privilege` int NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `create_dt` datetime(6) NOT NULL,
  `update_dt` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `account_UNIQUE` (`account`),
  UNIQUE KEY `UC_Person` (`name`,`birthday`,`address`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4;


CREATE TABLE `user_donate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` varchar(5) NOT NULL DEFAULT 'Y',
  `user_id` int NOT NULL,
  `category_id` int NOT NULL,
  `year` varchar(10) NOT NULL,
  `payment_type` varchar(10) NOT NULL,
  `total_amount` int NOT NULL,
  `current_paid` int NOT NULL,
  `due_dt` date NOT NULL,
  `sponsor` int NOT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `create_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `UC_donateinfo` (`user_id`,`category_id`,`year`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;


CREATE TABLE `paid_record` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_donate_id` int NOT NULL,
  `paid` int NOT NULL,
  `sponsor` int NOT NULL,
  `create_dt` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
