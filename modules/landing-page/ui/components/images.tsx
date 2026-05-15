import Image from "next/image"

export function Images() {
  return (
    <div className="mt-12 flex justify-evenly rounded-2xl border-none px-1 py-4">
      <Image
        src="/svg/dashboard3.svg"
        width={200}
        height={200}
        alt="Dashboard Image"
        className="max-w-fit bg-cover hidden lg:block"
      />
   
      <Image
        src="/img/dashboard2.png"
        width={200}
        height={200}
        alt="Dashboard Image"
        className="max-w-fit bg-cover"
      />
     
    </div>
  )
}
