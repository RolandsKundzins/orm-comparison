import dotenv from 'dotenv';
dotenv.config();
import {drizzle} from "drizzle-orm/mysql2"
// import * as schema from "./schema"
import mysql from "mysql2"


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: 3306,
});


export const db = drizzle(pool)