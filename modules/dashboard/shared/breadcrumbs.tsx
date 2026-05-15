import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function DashboardBreadcrumbs({
  pathname,
  role,
}: {
  pathname: string
  role: string | undefined
}) {
  const pathArray = pathname.split("/").filter(Boolean).slice(1);
  return (
    <Breadcrumb className="hidden lg:block">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${role}/dashboard`}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathArray.map((segment, index) => {
          const isLast = index === pathArray.length - 1
          // build the href up to this segment
          const href = `/${role}/${pathArray.slice(0, index + 1).join("/")}`
          const label = segment.charAt(0).toUpperCase() + segment.slice(1)
          

          return (
            <span key={href} className="flex items-center gap-1.5">
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
