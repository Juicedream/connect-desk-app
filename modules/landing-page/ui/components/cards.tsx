import { CardWrapper } from "@/components/CardWrapper"
import { BriefcaseBusiness, UserSearch } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Cards() {
  return (
    <div className="flex w-full gap-4 flex-col lg:flex-row">
      <CardWrapper
        icon={<BriefcaseBusiness />}
        title="Chaos-free project management"
        description="Manage freelancers, milestones, payments in one dashboard. Stop juggling spreadsheets and direct messages."
        seperator
        className="flex-1"
      >
        <section className="flex items-center gap-4">
          <Image
            width={80}
            height={80}
            alt="Card image"
            src="/img/dashboard4.jpg"
            className="rounded-md bg-slate-900 py-1"
          />
          <p className="text-xs text-white">
            For Agencies <br /> Centralize your entire workforce.
          </p>
        </section>
      </CardWrapper>
      <CardWrapper
        icon={<UserSearch />}
        title="Work that pays, without the chase"
        description="Browse briefs, submit deliverables and get paid on time. ConnectDesk handles the contract logic so you can focus on the work."
        textColor={"text-white"}
        background="bg-slate-900"
      >
        <section className="mt-8 flex items-center gap-4">
          <Button variant={"secondary"}>Browse Projects</Button>
        </section>
      </CardWrapper>
    </div>
  )
}
