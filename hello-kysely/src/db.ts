import dotenv from 'dotenv';
dotenv.config();
import { Kysely, MysqlDialect } from 'kysely';
import { DB } from 'kysely-codegen';
import { createPool } from 'mysql2';


const dialect = new MysqlDialect({
  pool: createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: 3306,
  }),
});

// * You can generate types using kysely codegen (see package.json).
// * It looks in the database and generates table types accordingly.
// * Because of this, you can use any type of migration tool if preferred.
//   For example, you could you use Prisma/Drizzle to define database schema and Kysely to write qurries.
const db = new Kysely<DB>({ dialect });

export default db;


//    ^ { company_id: number | null; created_at: Date; email: string; id: number; ... }[]