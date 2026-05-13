import { NavbarWrapper } from "@/components/NavbarWrapper"
import { AuthNavbar } from "@/modules/auth/ui/components/navbar"


export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarWrapper>
        <AuthNavbar />
      </NavbarWrapper>
      <div className="animate-appear">{children}</div>
    </div>
  )
}
