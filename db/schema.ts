import { pgTable, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { pid } from "process";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  pid: text("pid").notNull(),
  name: text("name").unique().notNull(),
  userId: text("user_id").notNull(),
});

export const insertAccountSchema = createInsertSchema(accounts);

export const categories = pgTable("categories", {
  id: text("id").primaryKey(),
  pid: text("pid"),
  name: text("name").unique().notNull(),
  userId: text("user_id").notNull(),
});

export const insertCategorySchema = createInsertSchema(categories);
