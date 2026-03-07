import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const posts = pgTable("Post", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
});
