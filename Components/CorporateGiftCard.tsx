import Image from "next/image";

export interface CorporateGift {
  id: number;
  created_at: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image_url: string;
}

interface CorporateGiftCardProps {
  gift: CorporateGift;
}

export default function CorporateGiftCard({ gift }: CorporateGiftCardProps) {
  const { name, category, description, price, image_url } = gift;

  return (
    <a
      href="#"
      className="group flex flex-col gap-4 rounded-2xl bg-white border border-[#e8e0d6] p-4 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(138,117,96,0.12)]"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#f5f3f0]">
        <Image
          src={image_url}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Bulk badge */}
        <span className="absolute top-3 left-3 rounded-full bg-white/85 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a7560]">
          Bulk pricing
        </span>

        {/* Watermark */}
        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 flex flex-col items-center leading-none select-none pointer-events-none">
          <span className="text-[8px] font-semibold tracking-widest text-[#8a7560] uppercase">
            BOX
          </span>
          <span className="text-[6px] tracking-wider text-[#8a7560]">
            &amp; tale
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-1 flex-1">
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#a89880]">
          {category}
        </span>
        <h3 className="text-[17px] font-light leading-snug text-[#2c2420] tracking-wide group-hover:text-[#8a7560] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-[#8a7560] leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#eee6dc] pt-3 px-1">
        <span className="text-lg font-light text-[#2c2420]">
          ${price}
          <span className="text-xs text-[#a89880]"> / unit</span>
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#8a7560] border border-[#d8cfc5] rounded-full px-4 py-1.5 transition-colors duration-300 group-hover:bg-[#8a7560] group-hover:text-white group-hover:border-[#8a7560]">
          Request Quote
        </span>
      </div>
    </a>
  );
}