import "dotenv/config"
import { drizzle } from "drizzle-orm/mysql2"
import { migrate } from "drizzle-orm/mysql2/migrator"
import mysql from "mysql2"


const migrationClient = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: 3306,
});

async function main () {
  try {
    await migrate(drizzle(migrationClient), {
      migrationsFolder: "./src/drizzle/migrations",
    });
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    // Ensure the connection is closed after migration
    migrationClient.end((err) => {
      if (err) {
        console.error("Failed to close the connection:", err);
      } else {
        console.log("Connection closed successfully.");
      }
    });
  }
}

main()
