import Image from "next/image"
interface BannerProps {
  reverse?: boolean
}

function Banner({ reverse = false }: BannerProps) {
  return (
<section className="grid min-h-screen lg:grid-cols-2 w-11/12 mx-auto ">
  <div className={`bg-[#d9cbbf] flex items-center px-8 md:px-16 lg:px-24 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
    <div className="max-w-xl text-white">
      <p className="mb-4 text-sm font-medium tracking-widest uppercase">
        Step 1
      </p>

      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight">
        Choose The Gift Box
      </h1>

      <p className="mt-6 text-lg text-white/80 leading-relaxed">
        Start with the box — your blank canvas to tell a story.
        Pick the size, choose the color, make it yours.
        Then add their name, because the little details make it unforgettable.
      </p>

      <button className="my-8 rounded-full border border-white px-8 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white hover:text-[#d9cbbf]">
        Build A Box
      </button>
    </div>
  </div>

  <div className={`relative min-h-[500px] ${reverse ? "lg:order-1" : "lg:order-2"}`}>
    <Image
      src="/banner.webp"
      alt="Gift boxes"
      fill
      className="object-cover"
      priority
    />
  </div>
</section>
  )
}

export default Banner