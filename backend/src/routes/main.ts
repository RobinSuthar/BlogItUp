import { Hono } from "hono";

export const main = new Hono();

main.post("/signin", (c) => {
  return c.text("Hello");
});

main.post("/signin", (c) => {
  return c.text("Hello");
});

main.get("/blog/:id", (c) => {
  return c.text("Hello");
});

main.post("/blog", (c) => {
  return c.text("Hello");
});

main.put("/blog", (c) => {
  return c.text("Hello");
});
