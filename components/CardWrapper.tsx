import { ReactNode } from "react"
import { Home } from "lucide-react"
import { Separator } from "./ui/separator"

export function CardWrapper({
  background = "bg-black text-white",
  icon = <Home />,
  title = "Default Title",
  description = "sample description",
  children,
  className,
  textColor="text-white",
  seperator = false,
  iconBackground,
  titleSize = "text-2xl",
}: {
  background?: string
  icon: ReactNode
  title: string
  description: string
  children?: ReactNode
  className?: string
  textColor?: string
  seperator?: boolean
  iconBackground?: string
  titleSize?: string
}) {
  return (
    <section
      className={`${background} mt-12 flex flex-col gap-2 rounded-md border px-6 py-8 ${className} animate-appear`}
    >
      <div
        className={`${iconBackground} ${textColor ? `${textColor}` : "text-black"}`}
      >
        {icon}
      </div>
      <p
        className={`${titleSize} mt-2 font-bold ${textColor ? `${textColor} dark:text-white` : "text-black dark:text-white"}`}
      >
        {title}
      </p>
      <span className="mb-6 max-w-102 text-sm text-muted-foreground">
        {description}
      </span>
      {seperator ? <Separator className="mb-6 bg-muted-foreground" /> : null}
      {children}
    </section>
  )
}
