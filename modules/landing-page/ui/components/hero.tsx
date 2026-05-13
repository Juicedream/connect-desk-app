import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <main className="mx-auto mt-32 flex w-full max-w-5xl flex-col items-center justify-center gap-2 mb-8">
      {/* Badge */}
      <section className="rounded-xl animate-sun-down-to-sun-set px-4 py-1 text-white">
        <p className="text-xs">The Lean Marketplace</p>
      </section>
      <h2 className="text-center text-5xl font-bold">
        Bridge the Gap Between Talent and <br />
        Execution
      </h2>
      <p className="mt-4 text-center font-sans text-lg text-muted-foreground">
        The lean platform for digital agencies to post projects, hire
        freelancers, and track progress-all in one
        <br />
        place.
      </p>
      <section className="flex items-center justify-center gap-8 mt-8 lg:flex-row flex-col">
        <Link href="/register">
          <Button className="lg:p-5 px-18 py-5 transition-all duration-200">
            Get Started
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="lg:p-5 px-16 py-5 transition-all duration-200">
            How it Works
          </Button>
        </Link>
      </section>
    </main>
  )
}
