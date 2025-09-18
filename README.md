# Hello Prisma

This repository demonstrates **Prisma ORM CRUD operations** with PostgreSQL using TypeScript.  
Here is a structured reference of all the main Prisma queries.

---

## **1. Create**

```ts
const user = await prisma.user.create({
  data: {
    email: "purnendu@prisma.io",
    name: "Purnendu Sarkar",
    profilePhoto: "https://example.com/Purnendu.jpg",
  },
});
```

Inserts a single user into the database and returns the created object.

---
