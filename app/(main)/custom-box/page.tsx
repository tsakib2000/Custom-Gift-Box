import BoxCard from "@/Components/BoxCard";

interface BoxItem {
  id?: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  category: BoxCategory;
}

type BoxCategory = "Large Box" | "Medium Box" | "Small Box";

const dummyBoxes: BoxItem[] = [
  {
    id: "lg-1",
    title: "Premium Luxury Collection",
    imageSrc:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=600&fit=crop",
    imageAlt: "Large gift box with ribbon",
    category: "Large Box",
  },
  {
    id: "lg-2",
    title: "Grand Celebration Hamper",
    imageSrc:
      "https://images.unsplash.com/photo-1764764138587-189f22804ec4?w=600&h=600&fit=crop",
    imageAlt: "Large luxury gift hamper",
    category: "Large Box",
  },
  {
    id: "lg-3",
    title: "Ultimate Surprise Bundle",
    imageSrc:
      "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=600&h=600&fit=crop",
    imageAlt: "Large gift bundle",
    category: "Large Box",
  },
  {
    id: "md-1",
    title: "Artisan Treat Box",
    imageSrc:
      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&h=600&fit=crop",
    imageAlt: "Medium gift box with artisan treats",
    category: "Medium Box",
  },
  {
    id: "md-2",
    title: "Elegant Essentials",
    imageSrc:
      "https://images.unsplash.com/photo-1668463876833-339717e58c4c?w=600&h=600&fit=crop",
    imageAlt: "Medium elegant gift box",
    category: "Medium Box",
  },
  {
    id: "md-3",
    title: "Thoughtful Gesture Set",
    imageSrc:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop",
    imageAlt: "Medium gift set",
    category: "Medium Box",
  },
  {
    id: "sm-1",
    title: "Mini Delight",
    imageSrc:
      "https://images.unsplash.com/photo-1712476300464-7a03f02973d2?w=600&h=600&fit=crop",
    imageAlt: "Small gift box",
    category: "Small Box",
  },
  {
    id: "sm-2",
    title: "Tiny Treasure",
    imageSrc:
      "https://images.unsplash.com/photo-1764764138818-0b22ab4d4023?w=600&h=600&fit=crop",
    imageAlt: "Small treasure gift box",
    category: "Small Box",
  },
  {
    id: "sm-3",
    title: "Sweet Surprise",
    imageSrc:
      "https://images.unsplash.com/photo-1702066054585-94f770dfd698?w=600&h=600&fit=crop",
    imageAlt: "Small sweet surprise box",
    category: "Small Box",
  },
];

const categoryOrder: BoxCategory[] = ["Large Box", "Medium Box", "Small Box"];

const categoryDescriptions: Record<BoxCategory, string> = {
  "Large Box": "For those who believe in going all out. Our largest boxes come with ample space to pack in multiple surprises, layered beautifully for maximum impact.",
  "Medium Box": "The perfect balance. Compact enough to feel curated, spacious enough to hold a meaningful collection of gifts.",
  "Small Box": "Big things come in small packages. Ideal for a focused, elegant gesture that speaks volumes.",
};

export default function CustomBoxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page Header */}
      <div className="mb-14 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#2c2420]">
          Custom Box Collection
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#8a7560] max-w-xl mx-auto leading-relaxed">
          Choose a size, pick your favourites, and we&apos;ll craft a box that&apos;s
          uniquely yours.
        </p>
      </div>

      {/* Category Sections */}
      {categoryOrder.map((category) => {
        const items = dummyBoxes.filter((b) => b.category === category);

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
