"use client";

import Image from "next/image";
import { BackdropVariants } from "./ChooseBoxModal";
import { useCart } from "@/app/store";

export interface BoxCardProps {
  id?: number | string;
  title: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  customizable_image?: string;
}

export default function BoxCard({
  id,
  title,
  price,
  imageSrc,
  imageAlt,
  customizable_image,

}: BoxCardProps) {
  const addItem = useCart((state) => state.addItem);

  const customGift = {id,
    title,
    price,
    imageSrc,
    imageAlt,
    customizable_image,
    }

  function handleAddToCart() {
    addItem({
      id: id != null ? `box-${id}` : `box-${title}`,
      title,
      price,
      imageSrc,
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#f5f3f0]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />

        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 flex flex-col items-center leading-none select-none pointer-events-none">
          <span className="text-[8px] font-semibold tracking-widest text-[#8a7560] uppercase">
            BOX
          </span>
          <span className="text-[6px] tracking-wider text-[#8a7560]">
            &amp; tale
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-[17px] font-light leading-snug text-[#2c2420] tracking-wide group-hover:text-[#8a7560] transition-colors duration-300">
          {title}
        </h3>
      </div>

      <div className="flex items-center justify-between gap-2 px-1">
        <span className="text-lg font-light text-[#2c2420]">${price}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-full border border-[#8a7560] px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8a7560] transition-colors duration-300 hover:bg-[#8a7560] hover:text-white cursor-pointer"
          >
            Add to Cart
          </button>
          <BackdropVariants customGift={customGift}/>
        </div>
      </div>
    </div>
  );
}
