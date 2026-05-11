import { Geist, Geist_Mono, Public_Sans } from "next/font/google"

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
})

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    template: '%s | Connect Desk App',
    default: 'Connect Desk App',
  },
  description: 'Connecting Clients and Freelancers while managing projects'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        publicSans.variable,
        geistMonoHeading.variable
      )}
    >
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
