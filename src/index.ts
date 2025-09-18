import { PrismaClient } from '../generated/prisma/index.js'

const prisma = new PrismaClient()


async function main() {
  console.log("Hello, Prisma!");

  // 1. Create a new user
  // const newUser = await prisma.user.create({
  //   data: {
  //     email: "purnendu@prisma.io",
  //     name: "Purnendu Sarkar",
  //     profilePhoto: "https://example.com/Purnendu.jpg"
  //   }
  // });
  // console.log("Created new user:", newUser);

  // 2. Retrieve all users
  const allUsers = await prisma.user.findMany();
  console.log("All users:", allUsers);

  // 3. Find a unique user by ID
  try {
    const userById = await prisma.user.findUniqueOrThrow({
      where: { id: 2 }
    });
    console.log("User with ID 1:", userById);
  } catch (error) {
    console.error("Error finding user by ID:", error);
  }

  // 4. Find the first user with a specific email
  try {
    const userByEmail = await prisma.user.findFirstOrThrow({
      where: { email: "purnendu@prisma.io" }
    });
    console.log("User with email purnendu@prisma.io:", userByEmail);
  } catch (error) {
    console.error("Error finding user by email:", error);
  }

}

main()