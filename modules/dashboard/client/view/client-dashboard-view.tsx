"use client"

import { useCurrentUser } from "@/lib/hooks/useCurrentUser"
import { BannerWithMessageSkeleton } from "../../shared/bannerWithMessageSkeleton"
import { BannerWithMessage } from "../../shared/bannerWithMessage"
import { DashboardCard } from "../ui/card"
import {
  CheckCircleIcon,
  NotepadText,
  Plus,
  ShieldCheck,
  WalletMinimal,
} from "lucide-react"
import { Field, FieldLabel } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ClientDashboardView() {
  const { user, loading } = useCurrentUser()
  if (loading) {
    return (
      <>
        <BannerWithMessageSkeleton />
        <div className="mt-8">
          <BannerWithMessageSkeleton />
        </div>
      </>
    )
  }
  if (!user) return null
  return (
    <>
      <BannerWithMessage
        name={user.name}
        isActive={user.isActive}
        paragraph1="You have 0 project updates today"
        paragraph2="Create a project to start now"
      />

      {/* cards */}
      <div className="mt-6 flex flex-col items-center justify-between gap-6 py-2 lg:flex-row">
        <DashboardCard
          label="Active Projects"
          total={12}
          icon={CheckCircleIcon}
        />
        <DashboardCard label="Pending Projects" total={8} icon={NotepadText} />
        <DashboardCard
          label="Total Spend (MTD)"
          amount={24450}
          icon={WalletMinimal}
          bgColor="bg-gray-600"
          description="+12% vs last month"
          width="flex-1"
        />
      </div>

      {/* grid cards for recent projects and activities */}
      <div className="mt-8 flex w-full gap-108">
        <div className="flex w-1/4 flex-col gap-12">
          <div className="flex-1 rounded-2xl shadow-xs shadow-black/40">
            <h1 className="rounded-t-2xl border-2 border-b-0 bg-slate-400 px-4 py-4 text-sm">
              PRIORITY PROJECTS
            </h1>
            <div className="flex flex-col gap-4 border py-4">
              <Field className="w-full max-w-full px-4">
                <FieldLabel htmlFor="progress-upload">
                  <span>Cloud Migration Phase 2</span>
                  <span className="ml-auto">82%</span>
                </FieldLabel>
                <Progress value={82} id="progress-upload" />
              </Field>

              <Field className="w-full max-w-full px-4">
                <FieldLabel htmlFor="progress-upload">
                  <span>Branch Identity Refresh</span>
                  <span className="ml-auto">45%</span>
                </FieldLabel>
                <Progress value={45} id="progress-upload" />
              </Field>

              <Field className="w-full max-w-full px-4">
                <FieldLabel htmlFor="progress-upload">
                  <span>E-commerce API Integration</span>
                  <span className="ml-auto">15%</span>
                </FieldLabel>
                <Progress value={15} id="progress-upload" />
              </Field>
            </div>
            <div className="rounded-b-2xl border border-t-0 px-4 py-4 text-center font-light">
              <p>See All Projects</p>
            </div>
          </div>

          <Card size="sm" className="mx-auto w-full max-w-sm">
            <CardHeader>
              {/* <CardTitle>Small Card</CardTitle> */}
              <CardDescription className="flex items-center gap-2">
                <ShieldCheck />
                Workspace Health
              </CardDescription>
            </CardHeader>
            <CardContent className="w-82 wrap-break-word">
              <p>
                Your agency profile completeness is at 95%. Add a video
                introduction to reach 100%
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Complete Profile
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col flex-1 gap-12 w-2/4 ">
          <div className="flex h-full flex-col rounded-2xl shadow-xs shadow-black/40">
            <div className="flex rounded-t-2xl border-2 border-b-0 bg-slate-400 px-4 py-4 text-sm">
              <h1>RECENT ACTIVITY</h1>
              <p className="ml-auto">View All</p>
            </div>

            <div className="flex w-full flex-col">
              <Item variant="outline">
                <ItemMedia>
                  <Avatar className="size-10">
                    <AvatarImage src="https://github.com/evilrabbit.png" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Abiodun Grant</ItemTitle>
                  <ItemDescription>
                    Applied for the project 2 minutes ago
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button
                    variant="outline"
                    className="rounded-md"
                    aria-label="Invite"
                  >
                    <Plus />
                    Hire
                  </Button>
                </ItemActions>
              </Item>
              <Item variant="outline">
                <ItemMedia>
                  <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
                    <Avatar className="hidden sm:flex">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="hidden sm:flex">
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>No Team Members</ItemTitle>
                  <ItemDescription>
                    Invite your team to collaborate on this project.
                  </ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Button size="sm" variant="outline">
                    Invite
                  </Button>
                </ItemActions>
              </Item>
            </div>
          </div>
          {/* graph */}
          <div>

          </div>
        </div>

      
      </div>
    </>
  )
}
