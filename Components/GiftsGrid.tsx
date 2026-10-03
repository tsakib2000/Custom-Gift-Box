"use client";

import { useProducts } from "@/lib/useProducts";
import Image from "next/image";
import { Loading } from "./Loading";

export default function GiftsGrid() {
  const { data: products, isPending, isError, error, refetch } = useProducts();

  if (isPending) return <Loading className="w-30 h-30 " />;
  if (isError) return <p>Failed to load gifts: {error.message}</p>;

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <li key={p.id} className="rounded-2xl bg-white border border-[#e8e0d6] p-4">
            {p.imageSrc && (
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#f5f3f0]">
                <Image src={p.imageSrc} alt={p.imageAlt || p.title} fill className="object-cover" />
              </div>
            )}
            <p className="mt-3 text-sm text-[#2c2420]">{p.title}</p>
            <p className="text-xs text-[#8a7560]">{p.category}</p>
            <p className="text-lg font-light text-[#2c2420]">${p.price}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()} className="mt-6 text-sm underline">
        Refresh
      </button>
    </div>
  );
}