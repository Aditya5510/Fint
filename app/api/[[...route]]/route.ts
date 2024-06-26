import { Hono } from "hono";
import { handle } from "hono/vercel";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import accounts from "./accounts";
import { HTTPException } from "hono/http-exception";
import categories from "./categories";
import transaction from "./transaction";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.onError((e, c) => {
  if (e instanceof HTTPException) {
    return e.getResponse();
  }
  return c.json({ error: "internal error" }, 500);
});

const routes = app
  .route("/accounts", accounts)
  .route("/categories", categories)
  .route("/transactions", transaction);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
