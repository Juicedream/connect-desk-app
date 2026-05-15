import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Use "postgresql" for dialect, but ensure you aren't using "driver" 
  // unless you are using a specific cloud provider.
  dialect: "postgresql", 
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations", // Add this to tell Drizzle where migrations live
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // Ensure verbose and strict are on to help debug these issues
  verbose: true,
  strict: true,
});
