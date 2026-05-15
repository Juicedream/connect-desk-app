"use server"
import { supabaseActions } from "@/lib/supabase/actions"

export async function manualSignUp({
  name,
  email,
  password,
  role,
}: {
  name: string
  email: string
  password: string
  role: string
}) {
  const supabase = await supabaseActions()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name, role },
    },
  })

  if (error) {
    return {
      message: error.message || "An error occurred during registration.",
    }
  }

  if (!data?.user) {
    return { message: "User information is missing after signup." }
  }

  return { user: data.user }
}

export async function manualSignIn({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const supabase = await supabaseActions()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { message: error.message || "An error occurred during sign in." }
  }

  return { user: data.user }
}

export async function signOut() {
  const supabase = await supabaseActions()
  await supabase.auth.signOut({ scope: "local" })
}
