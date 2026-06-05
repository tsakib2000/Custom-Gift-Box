export default function HeroText() {
  return (
    <section className="w-full min-h-[320px] bg-white flex items-center justify-center px-6 py-10">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl leading-tight tracking-tight mb-8 text-[#a3907a]">
          Recreating{" "}
          <em className="italic font-light">Wonderful Stories,</em>
          <br />
          One Custom Gift at a Time
        </h1>

        <div className="w-12 h-px mx-auto mb-7 bg-[#a3907a] opacity-40" />

        <p className="text-sm md:text-base font-light tracking-widest uppercase leading-relaxed text-[#a3907a]">
          Thoughtfully Made to Celebrate
          <br />
          Meaningful Relationships and Unforgettable Moments
        </p>
      </div>
    </section>
  );
}