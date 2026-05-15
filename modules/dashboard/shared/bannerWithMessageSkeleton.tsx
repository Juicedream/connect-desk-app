export function BannerWithMessageSkeleton() {
  return (
    <>
      {/* banner with welcome messsage that is resuable */}
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-0 animate-pulse bg-gray-300 dark:bg-gray-500 h-24 w-full rounded-2xl">
        <div className="flex flex-1 flex-col items-start gap-4 size-12">
          <div className="flex gap-2">
            <h1 className="font-mono text-4xl size-8"></h1>
           
          </div>
          <p className="text-muted-foreground w-12">
           
          </p>
        </div>

        <div className="flex flex-col gap-8 justify-between w-12">
          <div className="flex-1 size-6">
           
          </div>
          <div className="flex justify-between gap-2 size-6">
           
          </div>
        </div>
      </div>
    </>
  )
}