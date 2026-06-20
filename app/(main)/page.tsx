import { GiftCardProps } from "@/Components/GiftCard";
import GiftCarousel from "@/Components/GiftCarousel";
import Hero from "@/Components/Hero";
import HeroText from "@/Components/HeroText";

export default function Home() {

  const GIFT_ITEMS: GiftCardProps[] = [
  {
    category: "Premade Box",
    title: "Let's Make More Memories",
    imageSrc: "https://i.ibb.co.com/S74vPxF/Rectangle-14.png",
    imageAlt: "Instax camera, teddy bear and chocolate gift box",
  },
  {
    category: "Premade Box",
    title: "Friends For Life",
    imageSrc: "/images/friends.jpg",
    imageAlt: "Certificate of Appreciation with polaroid photos",
  },
  {
    category: "Premade Box",
    title: "Kain Sarimbit Jentik Manis Tanjung Merah Bata",
    imageSrc: "/images/batik.jpg",
    imageAlt: "Folded batik fabric in rich terracotta tones",
  },
  {
    category: "Box & Tale x Sababay",
    title: "Story (Mistelle)",
    imageSrc: "/images/story.jpg",
    imageAlt: "Wine bottle with fresh flowers in a wooden box",
  },
  {
    category: "Premade Box",
    title: "Sweet Celebration",
    imageSrc: "/images/celebration.jpg",
    imageAlt: "Celebration gift box with sweets",
  },
  {
    category: "Custom Box",
    title: "Heartfelt Gratitude",
    imageSrc: "/images/gratitude.jpg",
    imageAlt: "Gratitude gift box",
  },
];
  return (
    <div className="">
     <Hero/>

        <HeroText/>
      <GiftCarousel
      items={GIFT_ITEMS} />
     
    </div>
  );
}
