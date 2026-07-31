import BoxCard from "@/Components/BoxCard";
import getData from "@/lib/getData";
type BoxCategory = "Large Box" | "Medium Box" | "Small Box";
interface BoxItem {
  id?: number;
  created_at: string;
  title: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  category: BoxCategory;
}






const categoryOrder: BoxCategory[] = ["Large Box", "Medium Box", "Small Box"];

const categoryDescriptions: Record<BoxCategory, string> = {
  "Large Box": "For those who believe in going all out. Our largest boxes come with ample space to pack in multiple surprises, layered beautifully for maximum impact.",
  "Medium Box": "The perfect balance. Compact enough to feel curated, spacious enough to hold a meaningful collection of gifts.",
  "Small Box": "Big things come in small packages. Ideal for a focused, elegant gesture that speaks volumes.",
};

export default async function  CustomBoxPage () {
  
  const customBoxes: BoxItem[] = await getData('custom-box');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page Header */}
      <div className="mb-14 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#2c2420]">
          Choose Box
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#8a7560] max-w-xl mx-auto leading-relaxed">
          Choose a size, pick your favourites, and we&apos;ll craft a box that&apos;s
          uniquely yours.
        </p>
      </div>

      {/* Category Sections */}
      {categoryOrder.map((category) => {
        const items = customBoxes.filter((b) => b.category === category);

        return (
          <section key={category} className="mb-16 last:mb-0">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-[#2c2420]">
                {category}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#8a7560] max-w-2xl leading-relaxed">
                {categoryDescriptions[category]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {items.map((box) => (
                <BoxCard
                  key={box.id}
                  title={box.title}
                  price={box.price}
                  imageSrc={box.imageSrc}
                  imageAlt={box.imageAlt}
                  href={`/custom-box/${box.id}`}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
