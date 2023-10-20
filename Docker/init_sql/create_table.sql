CREATE TABLE IF NOT EXISTS `donate_category` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `create_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `user` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `privilege` int NOT NULL DEFAULT '1',
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `create_dt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `account_UNIQUE` (`account`),
  UNIQUE KEY `UC_Person` (`name`,`birthday`,`address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `user_donate` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `active` varchar(5) NOT NULL DEFAULT 'Y',
  `user_id` BIGINT NOT NULL,
  `category_id` BIGINT NOT NULL,
  `year` varchar(10) NOT NULL,
  `payment_type` varchar(10) NOT NULL,
  `total_amount` int NOT NULL,
  `unpaid` int NOT NULL,
  `due_dt` date NOT NULL,
  `sponsor` BIGINT NOT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `create_dt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_dt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `UC_donateinfo` (`user_id`,`category_id`,`year`),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
  FOREIGN KEY (`category_id`) REFERENCES `donate_category`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `paid_record` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_donate_id` BIGINT NOT NULL,
  `paid` int NOT NULL,
  `sponsor` BIGINT NOT NULL,
  `create_dt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  FOREIGN KEY (`user_donate_id`) REFERENCES `user_donate`(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
