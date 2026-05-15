interface ICardProps {
  icon: React.ElementType
  label: string
  description?: string
  bgColor?:string
  width?: string // w-50
  total?: number
  amount?: number
}

export function DashboardCard({ label, total, icon: Icon, description, bgColor, width="w-100", amount }: ICardProps) {
  return (
    <div className={`${bgColor} rounded-xl border px-6 py-3 ${width} shadow-sm shadow-primary/50 hover:scale-105 transition duration-300`}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold">{label}</p>
          <div className="size-8 rounded-lg bg-blue-400 flex items-center justify-center">
            <Icon size={18}/>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {total && <p className="font-mono text-3xl font-bold">{String(total).padStart(2, "0")}</p>}
          {amount && <p className="font-mono text-3xl font-bold"><span className="text-2xl">₦</span>{amount.toLocaleString()}</p>}
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}
