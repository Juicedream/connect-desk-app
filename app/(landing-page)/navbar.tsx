import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"

export function LandingPageNavabr() {
  return (
    <>
      <div className="text-sm">
        <ul className="lg:flex gap-16 sm:hidden">
          <li className="font-semibold text-muted-foreground">Find Projects</li>
          <li className="font-semibold text-muted-foreground">
            Post a Project
          </li>
          <li className="font-semibold text-muted-foreground">How it Works</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <ModeToggle />
        <Button variant="ghost">Log In</Button>
        <Button className="px-4 py-1">Sign Up</Button>
      </div>
    </>
  )
}
