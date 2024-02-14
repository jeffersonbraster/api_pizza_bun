import type { Config } from 'drizzle-kit'

export default {
  schema: "./src/db/schema/index.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: 'postgres://docker:docker@127.0.0.1:5432/pizza_shop'
  }
} satisfies Config