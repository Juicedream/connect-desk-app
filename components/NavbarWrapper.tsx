import Link from "next/link"
export function NavbarWrapper({ children }: { children: React.ReactNode }) {
  return (
    <nav className="flex sm:flex-col lg:flex-row w-full items-center lg:justify-between sm:justify-center border-b px-8 py-4 animate-slide top-0 sticky z-20 bg-white dark:bg-black">
      <Link href="/">
        <h1 className="font-bold text-xl">ConnectDesk</h1>
      </Link>
      {children}
    </nav>
  )
}
