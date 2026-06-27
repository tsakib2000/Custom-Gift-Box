import { GiftCardProps } from "@/components/GiftCard";
import GiftCarousel from "@/components/GiftCarousel";
import Hero from "@/components/Hero";
import HeroText from "@/components/HeroText";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
export default async  function Home() {

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
 const { data: gifts } = await supabase.from('gifts').select()




  return (
    <div className="">
     <Hero/>

        <HeroText/>
      <GiftCarousel
      items={gifts ?? []} />

   <div>
 
   </div>
     
    </div>
  );
}
