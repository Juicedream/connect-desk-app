"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";



export function NavbarWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    function changeTheme(theme:string | undefined) {
      setCurrentTheme(theme);
    }
    changeTheme(theme)
  }, [theme]);
  return (
    <nav className="animate-slide sticky top-0 z-20 flex w-full flex-col items-center gap-1 border-b bg-white px-8 py-2 sm:justify-center lg:flex-row lg:justify-between lg:py-4 dark:bg-black">
      <Link href="/">
        {/* <h1 className="font-bold text-md lg:text-xl">ConnectDesk</h1> */}
        {currentTheme === "dark" ? (
          <Image
            src="/svg/whitelogotxt.svg"
            height={120}
            width={120}
            alt="App Logo with text"
          />
        ) : (
          <Image
            src="/svg/darklogotxt.svg"
            width={120}
            height={120}
            alt="App Logo with text"
          />
        )}
      </Link>
      {children}
    </nav>
  )
}
