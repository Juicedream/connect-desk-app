

import Link from "next/link"

import { LoginForm } from "../components/loginForm"

export default function LoginView() {
  return (
    <section className="mx-auto flex min-h-svh w-full flex-col items-center justify-center bg-[url(/svg/whiteBackground.svg)] bg-cover bg-center dark:bg-[url(/svg/darkBackground.svg)]">
      <div className="mt-2 flex w-full max-w-md flex-col gap-2 rounded-lg rounded-b-none border border-b-0 border-gray-400 bg-slate-100 px-10 py-8 shadow-sm shadow-black/50 dark:bg-black">
        <>
          <h1 className="text-center text-2xl font-bold">
            <span className="text-primary">ConnectDesk</span>
          </h1>
          <p className="md:text-md text-center text-sm text-balance text-muted-foreground">
            Kindly login to continue.
          </p>
          {/* Registration form */}
          <LoginForm />
        </>
      </div>
      <div className="mx-auto mb-2 flex w-full max-w-md items-center justify-center gap-1 rounded-b-lg border border-gray-400 bg-primary/80 py-6 shadow-md shadow-black/50">
        <p className="text-md text-white">Don&apos;t have an account?</p>
        <Link
          className="text-md font-bold text-slate-900 hover:underline"
          href="/register"
        >
          Sign Up
        </Link>
      </div>
    </section>
  )
}
