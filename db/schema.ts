import { pgTable, text } from "drizzle-orm/pg-core";


export const accounts = pgTable('accounts', {
    id:text("id").primaryKey(),
    name:text("name").unique().notNull(),
    userId:text("user_id").notNull(),
});

