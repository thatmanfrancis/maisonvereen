"use client";

interface FutureVisionProps {
  onOpenApply: () => void;
}

// Exact copy from document — Page 1 Home: Future Vision + Page 8: The Future of the House
const futureItems = [
  {
    tag: "Future Editions",
    title: "Edition II",
    body: "Edition II is already in development. Drawing from a different African region, with a different visual identity, a different bottle architecture, and a different chapter in the house's mythology. Each edition builds on the last. Owners of Edition I will always hold the founding chapter.",
  },
  {
    tag: "Collector Releases",
    title: "Collector Objects",
    body: "Between editions, Maison Vereen will release collector objects — not fragrances, but objects that belong to the world of the house. These will be available exclusively to Registry members and will never enter general retail.",
  },
  {
    tag: "Private Experiences",
    title: "Curated Experiences",
    body: "The house intends to offer curated private experiences to Registry members — in Lagos, and eventually internationally. These are not events. They are experiences designed to deepen the relationship between the individual and the house.",
  },
  {
    tag: "The Archive",
    title: "A Permanent Home",
    body: "A permanent physical home for the house is planned — a space in Lagos that functions as both a creative atelier and a collector's institution. The Archive will display the complete founding history of the house and will be open to collectors and invited guests.",
  },
];

export default function FutureVision({ onOpenApply }: FutureVisionProps) {
  return (
    <section
      id="future-vision"
      className="bg-[#0D0D0D] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-24 md:py-32 space-y-16">
        {/* Header — exact doc copy Page 1 */}
        <div className="space-y-6 max-w-[680px]">
          <span className="section-tag">The Future of the House</span>
          <h2
            className="font-serif font-light text-[#E8E2D9] leading-[1.08]"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            We are not building a brand.{" "}
            <em className="not-italic" style={{ color: "#C9A84C" }}>
              We are building an institution.
            </em>
          </h2>
          {/* Exact copy from document Page 1 Future Vision */}
          <p
            className="text-[#7A7068] font-light leading-[1.85]"
            style={{ fontSize: "17px" }}
          >
            Edition I is the beginning of a house that is designed to endure.
            Future editions. Future collections. Future collaborations. Future
            experiences. Future spaces. Each one building on the last. Each one
            deepening the mythology of what Maison Vereen is and what it stands
            for.
          </p>
          <p
            className="text-[#7A7068] font-light leading-[1.85]"
            style={{ fontSize: "17px" }}
          >
            The house being built today will still be standing in fifty years.
            The only question is whether you were there when it started.
          </p>
        </div>

        {/* Four future items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/4">
          {futureItems.map((item, i) => (
            <div
              key={i}
              className="group bg-[#0D0D0D] px-8 py-10 space-y-5 hover:bg-white/2 transition-colors duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span
                className="uppercase tracking-[0.25em] font-medium"
                style={{ fontSize: "9px", color: "rgba(201,168,76,0.6)" }}
              >
                {item.tag}
              </span>
              <h3
                className="font-serif font-light text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors duration-300"
                style={{ fontSize: "17px" }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#5A5449] font-light leading-[1.75]"
                style={{ fontSize: "16px" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing — exact copy from document Page 8 */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p
            className="font-serif font-light italic text-[#4A4540] tracking-[0.04em] max-w-[580px]"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.3rem)" }}
          >
            &ldquo;The people who are part of Maison Vereen in its founding
            decade are not buying into what it is. They are buying into what it
            will be.&rdquo;
          </p>
          <button
            onClick={onOpenApply}
            className="shrink-0 border border-gold/50 hover:border-gold hover:bg-gold/10 px-8 py-3.5 text-[#E8E2D9] transition-all duration-500"
            style={{ fontSize: "9px", letterSpacing: "0.3em" }}
          >
            <span className="uppercase font-medium">Join the Registry</span>
          </button>
        </div>
      </div>
    </section>
  );
}
