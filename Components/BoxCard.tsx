import Image from "next/image";
import Link from "next/link";

export interface BoxCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export default function BoxCard({
  title,
  imageSrc,
  imageAlt,
  href = "#",
}: BoxCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 cursor-pointer"
    >
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
    </Link>
  );
}
