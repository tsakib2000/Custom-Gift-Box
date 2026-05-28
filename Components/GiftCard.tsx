"use client";

import Image from "next/image";

export interface GiftCardProps {
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export default function GiftCard({
  category,
  title,
  imageSrc,
  imageAlt,
  href = "#",
}: GiftCardProps) {
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
      </div>
    </a>
  );
}