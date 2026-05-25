import Link from "next/link";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div
      className="
        h-screen
        bg-[url('/hero.webp')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-between
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        w-11/12 mx-auto"
      >
        <div></div>
        <div className="mt-10">
          <p className="text-white text-2xl mt-8 font-light">Same-Day Personalized Gift</p>
          <h1 className="text-5xl text-white mt-2">
            Choose The Box, <br /> Gift Items, & <br /> Greeting Card
          </h1>
          <p className="text-white text-base mt-2.5 font-light">Shipping to All Cities in Indonesia</p>
          <div className="flex flex-col gap-4 mt-2">
            <Button
              className="border-white rounded-4xl text-white text-2xl p-6"
            >
            <Link href={'/customGift'}> Custom a Gift</Link>
            </Button>
            <Button className="border-white rounded-4xl text-white text-2xl p-6">
                <Link href={'/ReadyMade'}> Shop Ready-Made</Link>
          
            </Button>
            <Button className="border-white rounded-4xl text-white text-2xl p-6">
                <Link href={'/corporateGifts'}>Corporate Gifts</Link>
              
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
