import { ClockDate } from "@/components/ClockDate"
import { Button } from "@/components/ui/button"
import { Filter, SortAsc } from "lucide-react"

export function BannerWithMessage({
  name,
  isActive,
  paragraph1,
  paragraph2,
}: {
  name: string
  isActive: boolean
  paragraph1: string
  paragraph2?: string
}) {
  return (
    <>
      {/* banner with welcome messsage that is resuable */}
      <div className="animate-appear flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-0">
        <div className="flex flex-1 flex-col items-start gap-4">
          <div className="flex gap-2">
            <h1 className="font-mono text-3xl">Welcome, {name} </h1>
            <div
              className={`flex h-6 animate-pulse items-center justify-center rounded-3xl border-2 font-bold ${isActive ? "w-15 border-green-500 text-green-500" : "w-20 text-red-500"} `}
            >
              {/* <Check size={24} color="white"/> */}
              <span className="text-xs">
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {paragraph1} <br /> {paragraph2}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-8">
          <div className="flex-1">
            <ClockDate timeZone="Africa/Lagos" />
          </div>
          <div className="flex justify-between gap-2">
            <Button variant={"secondary"} className="px-6 py-4">
              <Filter />
              Filter
            </Button>
            <Button variant={"secondary"} className="px-6 py-4">
              <SortAsc />
              Sort
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
