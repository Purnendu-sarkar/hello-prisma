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

## **2. Find Many**

```ts
const users = await prisma.user.findMany();
```

Retrieves multiple users as an array. Supports filtering, ordering, and case-insensitive search.

---

## **3. Find Unique**

```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
});
```

Retrieves a single user by a unique field (e.g., `id` or `email`). Returns `null` if not found.

---

## **4. Find Unique Or Throw**

```ts
const user = await prisma.user.findUniqueOrThrow({
  where: { id: 6 },
});
```

Retrieves a single user by a unique field. Throws an error if the user does not exist.

---
