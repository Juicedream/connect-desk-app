import { CardWrapper } from "@/components/CardWrapper"
import { CloudLightningIcon, MessageSquareIcon, Wallet2 } from "lucide-react"

export function DetailsCard() {
  return (
    <section className="mt-12 w-full gap-6 bg-white px-2 py-18 dark:bg-black">

      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="mb-2 text-2xl font-bold"> Engineered for Reliablity</p>
        <span className="text-sm text-muted-foreground">
          Built to handle the complexity of modern digital project lifecyles.
        </span>
      </div>

      <div className="flex w-full items-center justify-between flex-col lg:flex-row gap-2">
        <CardWrapper
          icon={<CloudLightningIcon size={18} />}
          iconBackground="bg-white rounded-xl border-1 p-2 w-fit text-sm"
          titleSize="text-xl"
          title="Lean Workflow"
          background="bg-transparent"
          description="A stripped-back interface that prioritized speed. Create projects in minutes and onboard talent instantly."
          className="transition-colors duration-500 ease-in-out hover:bg-primary-foreground hover:text-white dark:hover:bg-slate-700"
          textColor="text-black"
        />
        <CardWrapper
          icon={<MessageSquareIcon size={18} />}
          iconBackground="bg-white rounded-xl border-1 p-2 w-fit text-sm"
          titleSize="text-xl"
          title="Centralized Messaging"
          background="bg-transparent"
          description="Keep project communications tied directly to milestones. No more searching through email threads."
          className="transition-colors duration-500 ease-in-out hover:bg-primary-foreground hover:text-white dark:hover:bg-slate-700"
          textColor="text-black"
        />
        <CardWrapper
          icon={<Wallet2 size={18} />}
          iconBackground="bg-white rounded-xl border-1 p-2 w-fit text-sm"
          titleSize="text-xl"
          title="Secure Payments"
          background="bg-transparent"
          description="Automated invoicing and escrow systems ensure that talent gets paid and agencies stay within budget."
          className="transition-colors duration-500 ease-in-out hover:bg-primary-foreground hover:text-white dark:hover:bg-slate-700"
          textColor="text-black"
        />
      </div>
    </section>
  )
}
