import { AlertOctagonIcon } from "lucide-react"

interface Props {
  title?: string
  description?: string
}

const ErrorState = ({title, description}: Props) => {
  return (
    <div className='flex flex-1 justify-center items-center py-4 px-8 min-h-svh'>
      <div className='bg-background shadow-sm justify-center items-center gap-y-6 rounded-lg p-10 flex flex-col'>
        <AlertOctagonIcon className="size-6 text-red-600" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="font-medium text-lg text-red-500">{title}</h6>
          <p className="text-sm text-red-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorState