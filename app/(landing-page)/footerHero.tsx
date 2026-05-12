import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FooterHero() {
  return (
    <main className="mx-auto mt-2 flex w-full flex-col items-center justify-center gap-2 mb-8 bg-[url(/img/dashboard1.png)] bg-cover rounded-xl py-52 relative">
      <div className="absolute w-full h-full bg-black/92 dark:bg-slate-900/96 rounded-xl py-22 lg:py-32 px-4">
      <h2 className="text-center text-3xl lg:text-5xl font-bold text-white">
        Ready to scale your agency?
      </h2>
      <p className="mt-4 text-center font-sans text-sm lg:text-md text-muted-foreground">
        Join the hundreds of agencies using ConnectDesk to manage their talent gap <br/> with precision.
      </p>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
        <Link href="/">
          <Button className="p-5 bg-primary">
            Get Started For Free
          </Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="p-5">
            Contact Sales
          </Button>
        </Link>
      </section>
      </div>
    </main>
  )
}
