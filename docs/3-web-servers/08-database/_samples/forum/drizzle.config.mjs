import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.mjs",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
