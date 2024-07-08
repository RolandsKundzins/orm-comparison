import { eq } from "drizzle-orm";
import { db } from "./drizzle/db";
import { PostTable, UserTable } from "./drizzle/schema";


async function main() {
  // const id = 5;

  // const postIns = await db.insert(PostTable).values({title: "trip to Italy", created_at: new Date()});
  // console.log(postIns)

  const records = await db.select().from(PostTable).innerJoin(UserTable, eq(PostTable.user_id, UserTable.id));
  console.dir(records, { depth: null })
}



main()





  // const userIns = await db.insert(UserTable).values({name: `user${id}`, id: id});

  // console.time('mainFunctionExecutionTime');
  // const user = db.select({name: UserTable.name});
  // const userSel = await user.from(UserTable)
  
  // console.log(userSel);
  // console.timeEnd('mainFunctionExecutionTime');

  // const test = await db.select().from(UserTable).innerJoin(UserTable, eq(UserTable.id, UserTable.id))

  // userSel[0].name;