import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LandingPageNavabr() {
  return (
    <>
      <div className="text-sm">
        <ul className="hidden gap-22 lg:flex">
          <li className="font-semibold text-muted-foreground">Find Projects</li>
          <li className="font-semibold text-muted-foreground">
            Post a Project
          </li>
          <li className="font-semibold text-muted-foreground">How it Works</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <ModeToggle />
        <Link href="/login" className="hover:cursor-pointer">
          <Button variant="ghost">Log In</Button>
        </Link>
        <Link href="/register" className="hover:cursor-pointer">
          <Button className="px-4 py-1">Sign Up</Button>
        </Link>
      </div>
    </>
  )
}
