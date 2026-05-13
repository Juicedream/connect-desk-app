"use client"

import clsx from "clsx"
import { BriefcaseBusiness, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { RegistrationForm } from "../components/registerForm"


const roles = [
  { name: "Client", selected: true, icon: <BriefcaseBusiness /> },
  { name: "Freelancer", selected: false, icon: <User /> },
]

export default function RegisterView() {
  const [allRoles, setAllRoles] = useState(roles)
  const [currentRole, setCurrentRole] = useState(roles[0].name);

  function makeRoleActive(name: string) {
    const roles = [...allRoles]
    roles.forEach((role) => {
      role.selected = false
      if (role.name === name) {
        role.selected = true
        setCurrentRole(role.name)
      }
    })
    setAllRoles(roles)
  }

  return (
    <section className="mx-auto flex min-h-svh w-full flex-col items-center justify-center bg-[url(/svg/whiteBackground.svg)] bg-cover bg-center dark:bg-[url(/svg/darkBackground.svg)]">
      <div className="mt-2 flex w-full max-w-md flex-col gap-2 rounded-lg rounded-b-none border border-b-0 border-gray-400 bg-slate-100 px-10 py-8 shadow-sm shadow-black/50 dark:bg-black">
        <>
          <h1 className="text-center text-2xl font-bold">
            Welcome to <span className="text-primary">ConnectDesk</span>
          </h1>
          <p className="text-center md:text-md text-sm text-balance text-muted-foreground">
            Join the global marketplace for professionals.
          </p>
          {/* Freelancer or Client */}
          <p className="text-sm mt-4 text-center font-light text-purple-600">
            Select an option:
          </p>
          <div className="mt-4 flex w-full flex-col justify-center gap-4 lg:flex-row">
            {allRoles.map((role) => (
              <div
                onClick={() => makeRoleActive(role.name)}
                key={role.name}
                className={clsx(
                  `flex flex-1 flex-col items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-4 hover:cursor-pointer`,
                  {
                    "border-2 border-slate-700 dark:border-purple-500":
                      role.selected,
                  },
                  {
                    "border border-slate-300 dark:border-slate-700":
                      !role.selected,
                  }
                )}
              >
                <p
                  className={clsx({
                    "text-slate-400 dark:text-slate-700": !role.selected,
                  })}
                >
                  {role.icon}
                </p>
                <span
                  className={clsx({
                    "font-bold": role.selected,
                    "text-slate-500 dark:text-slate-700": !role.selected,
                  })}
                >
                  I&apos;m a {role.name}
                </span>
              </div>
            ))}
          </div>
          {/* Registration form */}
          <RegistrationForm role={currentRole}/>
        </>
      </div>
      <div className="mx-auto mb-2 flex w-full max-w-md items-center justify-center gap-1 rounded-b-lg border border-gray-400 bg-primary/80 py-6 shadow-md shadow-black/50">
        <p className="text-md text-white">Already have an account?</p>
        <Link
          className="text-md font-bold text-slate-900 hover:underline"
          href="/login"
        >
          Log In
        </Link>
      </div>
    </section>
  )
}
