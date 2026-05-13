"use client"
import { InputWithLabel } from "@/components/InputWithLabel"
import { toasty } from "@/components/Toasty"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(6),
})

export function LoginForm() {
  const form = useForm< z.infer<typeof formSchema> >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof formSchema>) { 
    toasty.success("Login successfully.", JSON.stringify(data));
    form.reset();
  }

  // form.setValue("role", role);

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
      <Link
        href="/"
        className="flex w-fit float-end cursor-pointer"
      >
        <Button variant={"link"}>Forgot Password?</Button>
      </Link>

      <Button type="submit" className="w-full py-6 text-md mt-4">
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Log In"}
      </Button>
    </form>
  )
}
