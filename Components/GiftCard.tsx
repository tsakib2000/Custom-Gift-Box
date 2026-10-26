"use client";

import Image from "next/image";
import { useCart } from "@/app/store";

export interface GiftCardProps {
  id?: number | string;
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  price?: number;
  href?: string;
}

export default function GiftCard({
  id,
  category,
  title,
  imageSrc,
  imageAlt,
  price,
  href = "#",
}: GiftCardProps) {
  const addItem = useCart((state) => state.addItem);

  const canAddToCart = id != null && typeof price === "number";

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    if (!canAddToCart) return;
    addItem({
      id: `gift-${id}`,
      title,
      price: price as number,
      imageSrc,
    });
  }
  return (
    <a
      href={href}
      className="group flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] flex flex-col gap-3 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#f5f3f0]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 320px"
        />

        {/* Watermark overlay — subtle bottom-right logo badge */}
        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 flex flex-col items-center leading-none select-none pointer-events-none">
          <span className="text-[8px] font-semibold tracking-widest text-[#8a7560] uppercase">
            BOX
          </span>
          <span className="text-[6px] tracking-wider text-[#8a7560]">
            &amp; tale
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 px-1">
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#a89880]">
          {category}
        </span>
        <h3 className="text-[17px] font-light leading-snug text-[#2c2420] tracking-wide group-hover:text-[#8a7560] transition-colors duration-300">
          {title}
        </h3>
        {canAddToCart && (
          <div className="mt-1 flex items-center justify-between">
            <span className="text-lg font-light text-[#2c2420]">
              ${price}
            </span>
            <button
              type="button"
              onClick={handleAddToCart}
              className="rounded-full border border-[#8a7560] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[#8a7560] transition-colors duration-300 hover:bg-[#8a7560] hover:text-white cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </a>
  );
}