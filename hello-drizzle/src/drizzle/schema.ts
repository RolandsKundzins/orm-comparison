import { mysqlTable, int, varchar, datetime } from "drizzle-orm/mysql-core";


export const UserTable = mysqlTable("user", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 255 }).notNull(),
})


export const PostTable = mysqlTable("post", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", {length: 255}).notNull(),
  created_at: datetime('created_at'),

  user_id: int("user_id").references(() => UserTable.id).notNull().default(1),
})