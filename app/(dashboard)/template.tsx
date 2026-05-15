"use client"
import LoadingState from "@/components/LoadingState";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { ReactNode } from "react";

export default function Template({children}:{children: ReactNode}) {
  const {loading} = useCurrentUser()

  if (loading) {
    return <LoadingState title="Loading" description="Preparing your dashboard data" />
  }

  return(
    <div className="animate-appear">
      {children}
    </div>
  )
}