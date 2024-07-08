UPDATE post SET user_id = 1;
--> statement-breakpoint
ALTER TABLE `post` MODIFY COLUMN `user_id` int NOT NULL DEFAULT 1;