import { ModeToggle } from "@/components/ModeToggle"

export function AuthNavbar() {
  return (
    <>
      <div className="text-sm">
        <ul className="lg:flex gap-16 hidden">
          <li className="font-semibold text-muted-foreground">How it Works</li>
        </ul>
      </div>
      <div className="flex gap-8 items-center">
        <ModeToggle />
        <p className="font-semibold text-muted-foreground">Help</p>
      </div>
    </>
  )
}
