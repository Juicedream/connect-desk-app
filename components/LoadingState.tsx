import { Loader2Icon } from "lucide-react"

interface Props {
  title?: string
  description?: string
}

const LoadingState = ({title, description}: Props) => {
  return (
    <div className='flex flex-1 justify-center items-center py-4 px-8 min-h-svh'>
      <div className='bg-background shadow-sm flex flex-col justify-center items-center gap-y-6 rounded-lg p-10'>
        <Loader2Icon className="size-6 text-primary animate-spin" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="font-medium text-lg">{title}</h6>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingState