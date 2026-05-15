"use client"

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NotFound() {
  const pathname = usePathname();
  return (
    <div className="container mx-auto h-screen overflow-hidden flex items-center justify-center">
      <div className="shadow-sidebar-primary shadow-xs px-8 py-12 rounded-lg space-y-4 text-center transition-colors">
        <div className="flex items-center justify-center">
        <AlertTriangle size={32} className="text-destructive" />
        </div>
      <h1 className="text-xl leading-tight font-normal">Oops, This route is not found: <br/> {pathname}</h1>
        <p className="text-md text-muted-foreground">
          Kindly{" "} 
          <Link href="/">
          <Button variant={"link"} className="text-lg">go home</Button> {" "} <br/>
          </Link>
          you will be safe there
        </p>
      </div>
    </div>
  )
}