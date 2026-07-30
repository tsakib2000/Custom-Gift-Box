import Banner from "@/Components/banner";
import { GiftCardProps } from "@/Components/GiftCard";
import GiftCarousel from "@/Components/GiftCarousel";
import Hero from "@/Components/Hero";
import HeroText from "@/Components/HeroText";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data: gifts } = await supabase.from("gifts").select();

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
