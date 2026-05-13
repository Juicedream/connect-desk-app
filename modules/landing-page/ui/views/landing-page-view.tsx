import { Cards } from "../components/cards";
import { Company } from "../components/company";
import { DetailsCard } from "../components/details-card";
import { FooterHero } from "../components/footerHero";
import { Hero } from "../components/hero";
import { Images } from "../components/images";

export default function LandingPageView() {
  return (
    <div className="flex min-h-dvh w-full flex-col p-6">
      <div className="bg-[url(/svg/whiteBackground.svg)] bg-cover bg-center dark:bg-[url(/svg/darkBackground.svg)]">
        <Hero />
        <Images />
        <Company />
      </div>
      <Cards />
      <DetailsCard />
      <FooterHero />
    </div>
  )
}
