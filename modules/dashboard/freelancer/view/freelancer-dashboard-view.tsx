"use client"

import { useCurrentUser } from "@/lib/hooks/useCurrentUser"
import { BannerWithMessageSkeleton } from "../../shared/bannerWithMessageSkeleton"
import { BannerWithMessage } from "../../shared/bannerWithMessage"

export function FreelancerDashboardView() {
  const { user, loading } = useCurrentUser()
  if (loading) {
    return <BannerWithMessageSkeleton />
  }
  if (!user) return null
  return (
    <BannerWithMessage
      name={user.name}
      isActive={user.isActive}
      paragraph1={` Find Jobs, Manage your projects, Discuss with client and manage clients
        effectively and`}
      paragraph2="Get paid fast today."
    />
  )
}
