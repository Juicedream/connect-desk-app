import { Images } from "@/app/(landing-page)/images"
import { Hero } from "./hero"
import { Company } from "./company"
import { Cards } from "./cards"
import { CardWrapper } from "@/components/CardWrapper"
import { CloudLightningIcon, MessageSquareIcon, Wallet2 } from "lucide-react"
import { FooterHero } from "./footerHero"

export default function Page() {
  return (
    <div className="flex min-h-dvh w-full flex-col p-6">
      <Hero />
      <Images />
      <Company />
      <Cards />
      <section className="mt-24 w-full gap-6 bg-white px-2 py-18 dark:bg-black">
        <div className="mx-auto w-full max-w-2xl text-center">
          <p className="mb-2 text-2xl font-bold"> Engineered for Reliablity</p>
          <span className="text-sm text-muted-foreground">
            Built to handle the complexity of modern digital project lifecyles.
          </span>
        </div>

        <div className="flex w-full items-center justify-between gap-6 sm:flex-col lg:flex-row">
          <CardWrapper
            icon={<CloudLightningIcon size={18} />}
            iconBackground="bg-white rounded-xl border-1 p-2 w-fit text-sm"
            titleSize="text-xl"
            title="Lean Workflow"
            background="bg-transparent"
            description="A stripped-back interface that prioritized speed. Create projects in minutes and onboard talent instantly."
            className="hover:bg-primary-foreground dark:hover:bg-slate-700 hover:text-white transition-colors duration-500 ease-in-out"
            textColor="text-black"
          />
          <CardWrapper
            icon={<MessageSquareIcon size={18} />}
            iconBackground="bg-white rounded-xl border-1 p-2 w-fit text-sm"
            titleSize="text-xl"
            title="Centralized Messaging"
            background="bg-transparent"
            description="Keep project communications tied directly to milestones. No more searching through email threads."
            className="hover:bg-primary-foreground dark:hover:bg-slate-700 hover:text-white transition-colors duration-500 ease-in-out"
            textColor="text-black"
          />
          <CardWrapper
            icon={<Wallet2 size={18} />}
            iconBackground="bg-white rounded-xl border-1 p-2 w-fit text-sm"
            titleSize="text-xl"
            title="Secure Payments"
            background="bg-transparent"
            description="Automated invoicing and escrow systems ensure that talent gets paid and agencies stay within budget."
            className="hover:bg-primary-foreground dark:hover:bg-slate-700 hover:text-white transition-colors duration-500 ease-in-out"
            textColor="text-black"
          />
        </div>
      </section>
      <FooterHero />
    </div>
  )
}
