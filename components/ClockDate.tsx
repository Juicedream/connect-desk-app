import Clock from "react-live-clock"
import { format } from "date-fns"

export function ClockDate({ timeZone }: { timeZone: string }) {
  return (
    <div className="inset-2 rounded-2xl px-1 py-1 shadow-sm shadow-black/20 transition-all duration-500 hover:scale-110">
      <div className="flex flex-col items-center justify-center gap-1 rounded-2xl border-2 border-primary px-11 py-1 text-blue-500">
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={timeZone}
          className="font-mono text-xl"
        />
        <p className="text-sm text-muted-foreground">
          {format(new Date(), "MMM d, yyyy")}
        </p>
      </div>
    </div>
  )
}
