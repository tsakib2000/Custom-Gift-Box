"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import CorporateGiftCard, {
  CorporateGift,
} from "@/Components/CorporateGiftCard";

interface CorporateGiftSearchProps {
  gifts: CorporateGift[];
}

export default function CorporateGiftSearch({ gifts }: CorporateGiftSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = gifts.filter((gift) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      gift.name.toLowerCase().includes(q) ||
      gift.category.toLowerCase().includes(q) ||
      gift.description.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* Search Bar */}
      <div className="relative max-w-xl mx-auto mt-8">
        <Search
          size={18}
          strokeWidth={1.8}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#a89880]"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search corporate gifts..."
          className="w-full rounded-full border border-[#d8cfc5] bg-white pl-12 pr-5 py-3 text-sm text-[#2c2420] placeholder:text-[#a89880] outline-none transition focus:border-[#8a7560] focus:ring-2 focus:ring-[#8a7560]/20"
        />
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10">
          {filtered.map((gift) => (
            <CorporateGiftCard key={gift.id} gift={gift} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-[#8a7560]">
          No gifts match &ldquo;{query}&rdquo; — try a different search.
        </p>
      )}
    </>
  );
}