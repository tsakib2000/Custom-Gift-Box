import GiftsGrid from "@/Components/GiftsGrid";

export default function GiftsPage() {
  return (
    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#2c2420]">
        Gifts
      </h1>
      <GiftsGrid />
    </div>
  );
}