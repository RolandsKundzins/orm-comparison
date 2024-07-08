import db from "./db"


async function main(){
  // const userIns = await db.insertInto("user").values({
  //   name: "johns",
  // }).execute();
  // console.log(userIns);

  // const postIns = await db.insertInto("post").values({
  //   title: "Ko darīt vasarā?",
  //   user_id: 1
  // }).execute();

  // const postSubQuery = db
  //   .selectFrom('post')
  //   .innerJoin('user', 'user.id', 'post.user_id')  // Assuming the join condition should be 'post.user_id'
  //   .where("user.id", "=", 1)
  //   .select(["user.id as user_id", "user.name", "post.id as post_id", "post.title", "post.created_at"]);


  const userSel = await db
  .selectFrom((qb) =>
    qb
      .selectFrom('post')
      .innerJoin('user', 'user.id', 'post.user_id')  // Assuming the join condition should be 'post.user_id'
      .select(["user.id as user_id", "user.name", "post.id as post_id", "post.title", "post.created_at"])
      .as('postSub')  // Naming the subquery as 'postSub'
  )
  .selectAll()
  .execute();
  console.dir(userSel, { depth: null })
}

main()