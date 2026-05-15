"use client"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import { DashboardNotifications } from "./notifications"
import { usePathname } from "next/navigation"
import { DashboardBreadcrumbs } from "./breadcrumbs"
import { useCurrentUser } from "@/lib/hooks/useCurrentUser"
import { Loader2Icon } from "lucide-react"

export function DashboardNavbar() {
  const pathname = usePathname()
  const { user, loading } = useCurrentUser()

  const role = user?.role ?? undefined
  return (
    <nav className="sticky top-0 z-20 bg-sidebar px-2 shadow-xs shadow-primary/30 lg:px-8">
      <div className="relative flex h-12 items-center justify-between">
        <div className="mr-6 flex items-center lg:hidden">
          <SidebarTrigger />
          <p>Menu</p>
        </div>
        <>
          <div className="flex items-center gap-2 text-sm lg:flex-1">
            {/* Breadcrumbs */}
            <DashboardBreadcrumbs pathname={pathname} role={role} />
            <div className="block lg:hidden">
              <DashboardNotifications />
            </div>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <DashboardNotifications />
            <ModeToggle />
            {loading ? (
              <div className="flex h-12 animate-pulse items-center justify-start bg-sidebar px-8">
                <Loader2Icon className="size-5 animate-spin text-primary" />
              </div>
            ) : (
              <Link
                href={`/${role}/dashboard/profile`}
                className="hover:cursor-pointer"
              >
                <Button className="px-4 py-1">Profile</Button>
              </Link>
            )}
          </div>
        </>
      </div>
    </nav>
  )
}
