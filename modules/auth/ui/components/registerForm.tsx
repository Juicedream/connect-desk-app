"use client"
import { InputWithLabel } from "@/components/InputWithLabel"
import { toasty } from "@/components/Toasty"
import { Button } from "@/components/ui/button"
import { dbCreateUser } from "@/drizzle"
import { manualSignUp } from "@/lib/supabase/actions/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(1, "Please provide a valid name"),
  email: z.email("Provide a valid email address"),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
      "Password should contain at least one letter, one digit, and is between eight and sixteen characters in length"
    ),
  role: z.string().transform((val) => val.toLowerCase()),
})

export function RegistrationForm({ role }: { role: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: role,
    },
  })

  useEffect(() => {
    form.setValue("role", role)
  }, [role, form])

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    if (!data.email || !data.password) {
      return
    }

    try {
      const result = await manualSignUp({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role as "client" | "freelancer",
      })

      if (result?.message) {
        toasty.error(result?.message)
        return
      }
      console.log("supabase user:", JSON.stringify(result.user, null, 2))

      if (result?.user) {
        const dbResult = await dbCreateUser(result.user)
        if (dbResult?.message) {
          toasty.error(dbResult.message)
        }
        toasty.success("Account created successfully")
        form.reset()
        router.push("/dashboard")
      }
    } catch {
      toasty.error("Error occurred")
      return
    } finally {
      setIsLoading(false)
    }
  }

 

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 px-1">
      <InputWithLabel
        name="name"
        label="Full Name"
        placeholder="Connect Desk"
        type="text"
        control={form.control}
      />
      <InputWithLabel
        name="email"
        label="Email Address"
        placeholder="connect@example.com"
        type="email"
        control={form.control}
      />
      <InputWithLabel
        name="password"
        label="Password"
        placeholder="**********"
        type="password"
        control={form.control}
      />
      <Button
        disabled={isLoading}
        type="submit"
        className="text-md mt-4 w-full py-6"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : "Create my account"}
      </Button>
    </form>
  )
}
