import { PrismaClient } from "../generated/prisma/index.js";


const prisma = new PrismaClient();

async function others() {
    try {
        // 1. Insert multiple users
        const createdUsers = await prisma.user.createMany({
            data: [
                { name: "Mir", email: "mir@ph.com" },
                { name: "Tanmoy", email: "tanmoy@ph.com" },
                { name: "Mizan", email: "mizan@ph.com" },
                { name: "Imun", email: "imun@ph.com" },
            ],
        });
        console.log("✅ Users inserted:", createdUsers);

        // 2. Retrieve all users (filtered + sorted)
        const allUsers = await prisma.user.findMany({
            where: {
                email: {
                    contains: "ph.com",
                    mode: "insensitive", // Case-insensitive filter
                },
            },
            orderBy: {
                id: "asc", // Sort by id in ascending order
            },
        });

        console.log("📌 All Users:", allUsers);

        // 3. Delete a Multiple users by ID
        //     const deletedMany = await prisma.user.deleteMany({
        //       where: { id: { gt: 3 } }
        //   });
        //   console.log("🗑️ Deleted Multiple Users:", deletedMany);

        // 4. Retrieve all users to confirm deletion
        //   console.log("All Users:", await prisma.user.findMany());

    } catch (error) {
        console.error("❌ Error:", error);
    } finally {
        await prisma.$disconnect();
    }
}

others();
