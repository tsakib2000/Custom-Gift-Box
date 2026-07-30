import Image from "next/image";
import { notFound } from "next/navigation";
import getData from "@/lib/getData";

interface BoxItem {
  id?: number;
  created_at: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  category: "Large Box" | "Medium Box" | "Small Box";
}

export default async function CustomBoxDetailPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  const boxes: BoxItem[] = await getData("custom-box");
 
  const box = boxes.find((b) => b.id == id);

 console.log(box)
  if (!box) {
    notFound();
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#f5f3f0]">
          <Image
            src={box.imageSrc}
            alt={box.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-sm tracking-widest uppercase text-[#8a7560]">
            {box.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#2c2420]">
            {box.title}
          </h1>
          <p className="text-base text-[#8a7560] leading-relaxed">
            {box.imageAlt}
          </p>
        </div>
      </div>
    </div>
  );
}
