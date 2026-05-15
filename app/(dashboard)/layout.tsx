import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardNavbar } from "@/modules/dashboard/shared/navbar"
import DashboardSidebar from "@/modules/dashboard/shared/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider className="flex">
      <DashboardSidebar />
      <main className="flex-1">
        <DashboardNavbar />
        <div className="lg:px-12 px-2 py-12">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
