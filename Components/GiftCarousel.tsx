"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { GiftCardProps } from "@/Components/GiftCard";
import GiftCard from "@/Components/GiftCard";  
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GiftCarouselProps {
  items: GiftCardProps[];
  /** How many cards are visible at once (desktop). Defaults to 4 */
  visibleCount?: number;
}

export default function GiftCarousel({
  items,
  visibleCount = 4,
}: GiftCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const GAP = 24; // px — must match the gap-6 class on the track

  /* ─── helper: scroll to a given card index ─── */
  const scrollTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const card = track.children[index] as HTMLElement | undefined;
      if (!card) return;
      track.scrollTo({ left: card.offsetLeft - GAP, behavior: "smooth" });
    },
    []
  );

  /* ─── update active dot & arrow states on scroll ─── */
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const maxScroll = track.scrollWidth - track.clientWidth;

    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft < maxScroll - 4);

    // Find which card is closest to the left edge
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - GAP - scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => track.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* ─── number of dot pages ─── */
  const pageCount = Math.ceil(items.length / visibleCount);
  const activePage = Math.floor(activeIndex / visibleCount);

  /* ─── arrow click handlers ─── */
  const prev = () => {
    const newPage = Math.max(activePage - 1, 0);
    scrollTo(newPage * visibleCount);
  };
  const next = () => {
    const newPage = Math.min(activePage + 1, pageCount - 1);
    scrollTo(newPage * visibleCount);
  };

  return (
    <section className="w-11/12 mx-auto my-10">
      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* hide webkit scrollbar via inline style (Tailwind can't do pseudo-elements) */}
        <style>{`.gift-track::-webkit-scrollbar { display: none; }`}</style>
        {items.map((item, i) => (
          <GiftCard key={i} {...item} />
        ))}
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Prev arrow */}
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous"
          className="w-9 h-9 rounded-full border border-[#d8cfc5] flex items-center justify-center text-[#8a7560] hover:bg-[#f5f0ea] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={16} strokeWidth={1.8} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i * visibleCount)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-[7px] rounded-full transition-all duration-300 ${
                i === activePage
                  ? "w-6 bg-[#8a7560]"
                  : "w-[7px] bg-[#d8cfc5] hover:bg-[#b5a898]"
              }`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next"
          className="w-9 h-9 rounded-full border border-[#d8cfc5] flex items-center justify-center text-[#8a7560] hover:bg-[#f5f0ea] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={16} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}