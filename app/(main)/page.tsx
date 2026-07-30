import Banner from "@/Components/banner";
import { GiftCardProps } from "@/Components/GiftCard";
import GiftCarousel from "@/Components/GiftCarousel";
import Hero from "@/Components/Hero";
import HeroText from "@/Components/HeroText";
import getData from "@/lib/getData";


export default async function Home() {
 

 const gifts: GiftCardProps[] = await getData('gifts')
  return (
    <div className="">
      <Hero />

      <HeroText />
      <GiftCarousel items={gifts ?? []} />
      <Banner/>
      <Banner reverse/>
    </div>
  );
}
