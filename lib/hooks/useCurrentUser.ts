"use client"
import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

interface ICurrentUser {
  id: number
  email: string
  name: string
  role: "client" | "freelancer" | "admin"
}

export function useCurrentUser() {
  const [user, setUser] = useState<ICurrentUser | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function getUser() {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser()

      if (!authUser) {
        setUser(null)
        setLoading(false)
        return
      }

      const { data: dbUser } = await supabase
        .from("users")
        .select("*")
        .eq("email", authUser.email)
        .single()

      setUser(dbUser)
      setLoading(false)
    }
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { user, loading }
}
