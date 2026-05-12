import { Images } from "@/app/(landing-page)/images"
import { Hero } from "./hero"
import { Company } from "./company"
import { Cards } from "./cards"

import { FooterHero } from "./footerHero"
import { DetailsCard } from "./details-card"

export default function Page() {
  return (
    <div className="flex min-h-dvh w-full flex-col p-6">
      <Hero />
      <Images />
      <Company />
      <Cards />
      <DetailsCard />
      <FooterHero />
    </div>
  )
}
