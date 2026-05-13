"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function AuthCodeErrorPage() {
  const router = useRouter();
  return (
    <section className="w-full min-h-svh flex flex-col items-center justify-center mt-4 gap-4">
        <p className="text-destructive font-semibold text-3xl">Sorry an error occurred</p>
        <Image 
          alt="Dashboard Image"
          width={150}
          height={150}
          src="/img/dashboard2.png"
        />
        <Button variant={"destructive"} onClick={() => router.back()}>Go Back</Button>
    </section>
  )
}