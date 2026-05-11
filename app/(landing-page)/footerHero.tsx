import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FooterHero() {
  return (
    <main className="mx-auto mt-2 flex w-full flex-col items-center justify-center gap-2 mb-8 bg-primary rounded-xl py-32 animate-sun-down-to-sun-set">
      
      <h2 className="text-center text-5xl font-bold text-white">
        Ready to scale your agency?
      </h2>
      <p className="mt-4 text-center font-sans text-md text-muted-foreground">
        Join the hundreds of agencies using ConnectDesk to manage their talent gap <br/> with precision.
      </p>
      <section className="flex items-center justify-center gap-8 mt-8">
        <Link href="/">
          <Button className="p-5 dark:bg-accent bg-accent-foreground">
            Get Started For Free
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="p-5">
            Contact Sales
          </Button>
        </Link>
      </section>
    </main>
  )
}
