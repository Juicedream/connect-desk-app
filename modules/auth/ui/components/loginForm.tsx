"use client"
import { InputWithLabel } from "@/components/InputWithLabel"
import { toasty } from "@/components/Toasty"
import { Button } from "@/components/ui/button"
import { manualSignIn } from "@/lib/supabase/actions/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    if (!data.email && !data.password) {
      return
    }
    try {
      const result = await manualSignIn({
        email: data.email,
        password: data.password,
      })
      if (result.message) {
        toasty.error(result.message)
        return
      }
      form.reset()
      // toasty.success("Login successfully")
      toasty.success("Redirecting to your dashboard...")
      router.push("/dashboard")
    } catch {
      toasty.error("Error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 px-1">
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
      <Link href="/" className="float-end flex w-fit cursor-pointer">
        <Button variant={"link"}>Forgot Password?</Button>
      </Link>

      <Button type="submit" className="text-md mt-4 w-full py-6">
        {isLoading ? <Loader2 className="animate-spin" /> : "Log In"}
      </Button>
    </form>
  )
}
