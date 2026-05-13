"use client"
import { InputWithLabel } from "@/components/InputWithLabel"
import { toasty } from "@/components/Toasty"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
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
  role: z.string().min(1, "Kindly provide a valid role").transform(val => val.toLowerCase()),
})

export function RegistrationForm({ role }: { role: string }) {
  const form = useForm< z.infer<typeof formSchema> >({
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

  const { isSubmitting } = form.formState;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log({data})
    if (!data.email && !data.password) {
      return;
    }
    
    toasty.success("Account created! Check your email to verify.", JSON.stringify(data));
    form.reset();
  }

  // form.setValue("role", role);

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
      <Button type="submit" className="w-full py-6 text-md mt-4">
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Create my account"}
      </Button>
    </form>
  )
}
