CREATE TABLE `post` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`created_at` datetime,
	`user_id` int,
	CONSTRAINT `post_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `post` ADD CONSTRAINT `post_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;