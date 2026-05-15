"use client"

import { useCurrentUser } from "@/lib/hooks/useCurrentUser"
import Link from "next/link"
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  CreditCard,
  Users,
  Settings,
  Loader2Icon,
  HelpCircleIcon,
  BotIcon,
} from "lucide-react"

import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PowerIcon } from "@phosphor-icons/react"
import { signOut } from "@/lib/supabase/actions/auth"
import { useRouter } from "next/navigation"
import { toasty } from "@/components/Toasty"
import { ModeToggle } from "@/components/ModeToggle"

const navItems = {
  client: [
    { label: "Dashboard", href: "/client/dashboard", icon: LayoutDashboard },
    { label: "My Projects", href: "/client/projects", icon: Briefcase },
    { label: "Invoices", href: "/client/invoices", icon: FileText },
    { label: "Payments", href: "/client/payments", icon: CreditCard },
    { label: "Settings", href: "/client/settings", icon: Settings },
  ],
  freelancer: [
    {
      label: "Dashboard",
      href: "/freelancer/dashboard",
      icon: LayoutDashboard,
    },
    { label: "Find Work", href: "/freelancer/projects", icon: Briefcase },
    { label: "Proposals", href: "/freelancer/proposals", icon: FileText },
    { label: "Earnings", href: "/freelancer/earnings", icon: CreditCard },
    { label: "Settings", href: "/freelancer/settings", icon: Settings },
  ],
  admin: [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Projects", href: "/admin/projects", icon: Briefcase },
    { label: "Disputes", href: "/admin/disputes", icon: FileText },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ],
}

const DashboardSidebar = () => {
  const { user, loading } = useCurrentUser()
  const router = useRouter()
  const pathname = usePathname()

  if (loading) {
    return (
      <div className="flex h-screen w-64 shrink-0 animate-pulse items-center justify-center border-r">
        <Loader2Icon className="size-5 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) return null
  const role = user.role
  const items = navItems[role]

  return (
    <Sidebar className="bg-sidebar-primary">
      <SidebarHeader>
        <div className="my-4 mb-6 flex flex-col items-center justify-center space-y-4 px-2">
          <Image
            src="/svg/logo.svg"
            width={40}
            height={40}
            alt="App Logo with text"
          />

          <p className="text-sm">
            <span className="text-muted-foreground">Subscription:</span>{" "}
            <span className="font-bold">FREE</span>
          </p>
          <div className="block lg:hidden">
            <ModeToggle />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {items.map(({ label, href, icon: Icon }) => (
          <SidebarGroup key={href}>
            <Link
              href={href}
              className={` ${href === pathname ? "border-l-2 border-primary bg-primary/20" : "bg-none"} flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <div className="rounded-lg bg-black/10">
          <div className="flex items-center justify-between gap-2 px-2 py-2 lg:flex-row lg:justify-start lg:gap-0">
            {/* avatar profile */}
            <Avatar className="mr-3 hidden lg:flex">
              <AvatarFallback>
                {user.name[0].toUpperCase() + user.name[1].toUpperCase()}
              </AvatarFallback>
              <AvatarBadge className="bg-green-600 dark:bg-green-800" />
            </Avatar>
            <div className="mt-2 flex items-center justify-start gap-2 px-2 lg:hidden lg:gap-0">
              {loading ? (
                <div className="flex h-12 animate-pulse items-center justify-start bg-sidebar px-8">
                  <Loader2Icon className="size-5 animate-spin text-primary" />
                </div>
              ) : (
                <Link
                  href={`/${role}/dashboard/profile`}
                  className="hover:cursor-pointer"
                >
                  <Avatar className="mr-3">
                    <AvatarFallback>
                      {user.name[0].toUpperCase() + user.name[1].toUpperCase()}
                    </AvatarFallback>
                    <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                  </Avatar>
                </Link>
              )}
            </div>
            <div className="hidden flex-1 flex-col lg:flex">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs tracking-wider text-muted-foreground uppercase">
                {user.role}
              </p>
            </div>
            <Button
              variant={"destructive"}
              onClick={async () => {
                await signOut()
                toasty.info("Logged out successfully")
                router.push("/login")
              }}
            >
              <PowerIcon />
            </Button>
          </div>
        </div>

       
        <p className="flex items-center justify-start gap-3 px-2 py-3 text-sm">
          <BotIcon /> AI Tokens: <span className="text-yellow-500">4</span>
        </p>
        <p className="flex items-center justify-start gap-3 px-2 py-3 text-sm">
          <HelpCircleIcon /> Help Center
        </p>
      </SidebarFooter>
    </Sidebar>
  )
}

export default DashboardSidebar
