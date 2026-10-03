import { CorporateGift } from "@/Components/CorporateGiftCard";
import CorporateGiftSearch from "@/Components/CorporateGiftSearch";
import getData from "@/lib/getData";

const bulkTiers = [
  { pcs: "50–199", price: 12, perk: "Standard branding" },
  { pcs: "200–499", price: 9, perk: "Free packaging design" },
  { pcs: "500+", price: 7, perk: "Dedicated account manager" },
];

export default async function  CorporateGiftsPage () {
  const mockGifts = await getData<CorporateGift>("Products");

  return (
    <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page Header */}
      <div className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] uppercase text-[#a89880]">
          For Businesses &amp; Teams
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-[#2c2420]">
          Corporate Gifts
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#8a7560] max-w-xl mx-auto leading-relaxed">
          Thoughtful, brandable gifts that leave a lasting impression — for
          clients, employees and partners. Every box can be personalised with
          your logo and message.
        </p>
      </div>

      {/* Search + Product Grid */}
      <CorporateGiftSearch gifts={mockGifts} />

      {/* Bulk Pricing */}
      <section className="mt-20 rounded-2xl bg-[#f5f0ea] border border-[#e8e0d6] p-8 sm:p-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide text-[#2c2420]">
            Volume Pricing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#8a7560] max-w-xl mx-auto">
            The more you order, the more you save — with access to dedicated
            support for large campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bulkTiers.map((tier) => (
            <div
              key={tier.pcs}
              className="rounded-xl bg-white border border-[#e8e0d6] p-6 text-center"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a89880]">
                {tier.pcs} units
              </span>
              <div className="mt-3 text-[#2c2420]">
                <span className="text-4xl font-light">${tier.price}</span>
                <span className="text-sm text-[#8a7560]"> /unit </span>
                <span className="block mt-1 text-xs text-[#8a7560]">
                  suggested
                </span>
              </div>
              <p className="mt-4 text-sm text-[#8a7560]">{tier.perk}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-full border border-[#8a7560] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-[#8a7560] transition hover:bg-[#8a7560] hover:text-white"
          >
            Talk to Our Team
          </a>
        </div>
      </section>
    </div>
  );
}