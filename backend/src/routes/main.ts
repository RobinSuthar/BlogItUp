import { Hono } from "hono";

export const main = new Hono();

main.get("/user", (c) => {
  return c.text("Hello");
});
