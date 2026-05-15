"use server"
import "dotenv/config"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"
import { User } from "@supabase/supabase-js"

const connectionString = process.env.DATABASE_URL!

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(connectionString, { prepare: false })
const db = drizzle({ client, schema })

// create user
export async function dbCreateUser(user: User) {
  console.log("attempting to create user:", user.email)
  
  const userExists = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, user.email!),
  })

  console.log("userExists:", userExists)

  if (userExists) {
    return { message: "User already exists" }
  }

  try {
    const newUser = await db
      .insert(schema.users)
      .values({
        name: user.user_metadata?.name ?? "",
        email: user.email!,
        role: (user.user_metadata?.role as "client" | "freelancer") ?? "client",
      })
      .returning()

    console.log("newUser inserted:", newUser)
    return { user: newUser[0] }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log("DB INSERT ERROR:", err?.message, err?.cause?.message)
    return { message: "Database could not insert new user" }
  }
}

// get user by email
export async function dbGetUserByEmail(email: string) {
  const user = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email), // don't fetch all users just to find one
  });

  return {user}
}