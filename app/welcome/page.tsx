import Image from "next/image"
export default function WelcomePage() {
  return (
    <section className="animate-appear flex min-h-dvh w-full flex-col items-center justify-center gap-8">
      <div className="mx-auto w-full flex flex-col items-center justify-center max-w-xl p-8 dark:bg-primary gap-8 rounded-xl">
        <h1 className="text-5xl">Welcome</h1>
        <Image
          alt="Checkmark image"
          aria-label="Checkmark image"
          src="/svg/checkmark.svg"
          width={150}
          height={150}
          className="animate-pulse"
        />
        <p className="text-muted-foreground">
          Kindly check your email inbox to continue the verification process
        </p>
      </div>
    </section>
  )
}
