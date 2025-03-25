import { Hono } from "hono";
import { main } from "./routes/main";
const app = new Hono();
const api = new Hono();

//Hello!

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api/v1", main);

export default app;
