import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // const userIns = await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'test4',

  //     posts: {
  //       create: [
  //         {
  //           title: "Hello world1",
  //           content: "test",
  //           newField: "testField"
  //         },
  //         {
  //           title: "Hello world2",
  //           content: "test",
  //           newField: "testField"
  //         },
  //       ]
  //     }
  //   }
  // })
  

  console.time('mainFunctionExecutionTime');

  const userSel = await prisma.post.findMany({
    include: {
      author: {
        select: {
          email: true,
          name: true,
        }
      }
    },
  });

  console.timeEnd('mainFunctionExecutionTime');
  console.dir(userSel, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })