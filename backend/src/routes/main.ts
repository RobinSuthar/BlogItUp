import { Hono } from "hono";
import { Prisma } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/extension";
import { env } from "hono/adapter";

export const main = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

main.post("/signin", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.text("Hello");
});

// main.post("/signin", (c) => {
//   return c.text("Hello");
// });

main.get("/blog/:id", (c) => {
  return c.text("Hello");
});

main.post("/blog", (c) => {
  return c.text("Hello");
});

main.put("/blog", (c) => {
  return c.text("Hello");
});
