import { NavbarWrapper } from "@/components/NavbarWrapper"
import { LandingPageNavabr } from "./navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavbarWrapper>
          <LandingPageNavabr />
      </NavbarWrapper>
      <div className="animate-appear">{children}</div>
    </div>
  )
}
