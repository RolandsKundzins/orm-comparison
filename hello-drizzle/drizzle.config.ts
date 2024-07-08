import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "mysql",
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dbCredentials: {
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    database: process.env.DB_NAME!,
    port: 3306,
  },

  verbose: true,
  strict: true,
})