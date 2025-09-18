import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()


async function main() {
  console.log("Hello, Prisma!");

  // 1. Create a new user
  const newUser = await prisma.user.create({
    data: {
      email: "purnendu@prisma.io",
      name: "Purnendu Sarkar",
      profilePhoto: "https://example.com/Purnendu.jpg"
    }
  });
  console.log("Created new user:", newUser);


}

main()