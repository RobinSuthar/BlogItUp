import { Hono } from "hono";
import { main } from "./routes/main";
const app = new Hono();
const api = new Hono();

//Hello!

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

api.route("/api/vi", main);

export default app;
